# Transetu-Garuda: Technical Documentation

## 1. PROJECT OVERVIEW
**Transetu-Garuda (Garuda OM)** is a high-performance web platform designed for GPS Tracking Solutions and FASTag services in India. The project leverages a headless architecture to separate content management from the presentation layer, ensuring high speed, scalability, and ease of maintenance.

### High-Level Architecture
- **Frontend**: Next.js 14 (App Router) for a robust, React-based server-side rendered (SSR) application.
- **CMS**: Sanity (Headless CMS) for dynamic content editing and schema-driven data structures.
- **Data Flow**: Content is authored in Sanity Studio, fetched via GROQ queries using the Sanity Client, and rendered as static or dynamic pages in Next.js.
- **Integration**: Next.js and Sanity are tightly integrated through the `next-sanity` library, utilizing **Draft Mode** for real-time live previews within the Sanity Presentation tool.

---

## 2. TECH STACK

| Technology | Role | Rationale |
| :--- | :--- | :--- |
| **Next.js 14 (App Router)** | Core Framework | Enables advanced features like Server Components, Streaming, and ISR for optimal SEO and performance. |
| **Sanity CMS** | Headless Content Management | Provides a flexible, JSON-based schema system and a powerful Studio interface for non-technical editors. |
| **TypeScript** | Programming Language | Ensures type safety, reduces runtime errors, and improves developer experience. |
| **Tailwind CSS** | Styling | Utility-first CSS framework for rapid UI development and consistent design tokens. |
| **Framer Motion** | Animations | High-quality, declarative animations for a premium user experience. |
| **Lucide React** | Icons | A consistent and lightweight library for all UI icons. |
| **next-sanity** | Integration Library | Official toolset for connecting Next.js with Sanity, handling image optimization and preview logic. |
| **GROQ** | Query Language | Sanity's native query language (Graph-Relational Object Queries) for precise data fetching. |

---

## 3. FOLDER STRUCTURE

The project follows a clean, modular structure built around the Next.js App Router patterns.

### `src/`
Internal source code directory.
- **`app/`**: Contains the routing logic, layouts, and API endpoints.
  - **`api/`**: Serverless functions handling backend logic.
    - `preview/`: Securely enables Draft Mode for live previews.
    - `exit-preview/`: Disables Draft Mode.
    - `contact/`: NodeMailer integration for handling contact form submissions.
    - `revalidate/`: On-demand revalidation trigger to purge cache when Sanity content changes.
  - **`fastag/`**: Dedicated routes for FASTag details and partner programs.
  - **`industries/`**: Dynamic routes for industry-specific GPS solutions.
  - **`solutions/`**: Dynamic routes for general GPS product modules.
  - **`studio/`**: The embedded Sanity Studio route (accessible via `/studio`).
- **`components/`**: Reusable UI primitives (Buttons, Inputs, Modals, Navbar, Footer).
- **`sections/`**: Composite components representing full page blocks (e.g., Hero, Features, About). Each section maps to a Sanity schema.
- **`lib/`**: Utility logic and shared configurations.
  - `sanity.ts`: Sanity client configuration (Client vs. Preview Client).
  - `queries.ts`: Centralized GROQ queries for data consistency.
  - `seo.ts`: Dynamic metadata generators for search engine optimization.
- **`sanity/`**: Sanity-specific definitions.
  - **`schemas/`**: Content models (Document and Object types).
- **`actions/`**: Server actions for data mutations or complex server-side operations.

---

## 4. SANITY SCHEMA ARCHITECTURE

The content model is designed for strict data integrity and flexibility.

### Schema Types
1. **Documents**: Primary content types that appear in the Studio sidebar (e.g., `solutionPage`, `industrialDetail`).
2. **Objects**: Reusable structures used within documents (e.g., `media`, `benefitItem`).
3. **Singletons**: One-of-a-kind documents for site-wide configuration (e.g., `siteSettings`, `aboutSection`).

### Architecture Decisions
- **Reference-Driven Modeling**: GPS Solution Cards (`gpsSolutionCard`) do not store their own slugs. Instead, they **reference** a `solutionPage`. This ensures that if a slug changes, the card automatically links to the correct URL (Single Source of Truth).
- **Custom Desk Structure**: The `sanity.config.ts` uses the `structureTool` to organize documents into logical groups (Cards vs. Pages), making the Studio intuitive for editors.
- **Validation**: Strict validation rules ensure that required fields (like Slugs, Titles, and Metadata) are never left empty.

---

## 5. DATA FLOW

Data moves in a unidirectional flow from the CMS to the Frontend:

1. **Query Definition**: GROQ queries are defined in `src/lib/queries.ts`.
2. **Client Selection**: The `getClient(isPreview)` helper in `src/lib/sanity.ts` determines whether to use the public client (fast, CDN-cached) or the preview client (private, token-authenticated, fresh data).
3. **Data Fetching**: Next.js Server Components call `client.fetch(query)`.
4. **Rendering**: The fetched JSON is passed to React components (in `src/sections`) for styling and display.
5. **Caching**: Production data uses the Sanity CDN (`useCdn: true`) and Next.js `revalidate` settings for maximum speed.

---

## 6. PREVIEW MODE VS PUBLISH MODE

This is the architectural core of the content workflow, ensuring a safe staging-to-production pipeline.

### A. Preview Mode (Draft Mode)
- **Concept**: A secure "window" into the CMS that allows editors to see unpublished changes in the context of the real website.
- **Fetching**: Uses `perspective: 'previewDrafts'`, which instructs Sanity to return the draft version of a document if it exists, otherwise the published version.
- **Authentication**: Requires a `SANITY_API_TOKEN`. It is only active when a secure cookie is set via the `/api/preview` route.
- **Security**: Draft content is **never** leaked to the public because the public `client` lacks the necessary token and uses `perspective: 'published'`.

### B. Publish Mode
- **Action**: When an editor clicks "Publish", Sanity deletes the "draft" document and updates the "published" document.
- **Propagation**: The Next.js platform detects the change (via Webhooks or Revalidation) and updates the public site.
- **Production Fetching**: The live site fetches *only* documents with a published ID, ensuring stability.

### C. Logic: Draft vs Published
In GROQ queries, we often use specific filters to enforce this separation:
```groq
*[_type == "solutionPage" && ($preview || !(_id in path("drafts.**")))]
```
- If `$preview` is true: Show drafts.
- If `$preview` is false: Exclude any document whose ID starts with `drafts.`.

### D. Workflow Roadmap
1.  **Stage 1 (Edit)**: Editor modifies text in Sanity. A "Draft" version is saved automatically.
2.  **Stage 2 (Preview)**: Editor opens the **Presentation Tool**. The website loads within Sanity using Draft Mode. The changes are visible **only here**.
3.  **Stage 3 (Review)**: Stakeholders review the "live" staging preview.
4.  **Stage 4 (Publish)**: Editor clicks "Publish".
5.  **Stage 5 (Live)**: The content is now live on the public URL for all users.

---

## 7. PRESENTATION TOOL WORKFLOW

The **Presentation Tool** (part of Sanity Studio) provides a "Visual Editing" experience. 
- **Side-by-Side View**: The left pane shows the live Next.js website; the right pane shows the document editor.
- **Content Source Maps (Stega)**: We use Sanity Stega to encode "invisible" metadata into the data strings. When the Presentation tool sees this, it allows the editor to click a title on the website and jump directly to that field in the editor.
- **Hot Reloading**: Changes in the editor trigger an instant refresh of the preview pane without a full page reload.

---

## 8. API ROUTES

| Route | Purpose | Criticality |
| :--- | :--- | :--- |
| `/api/preview` | Revalidates and enables Next.js Draft Mode via cookies. | **Mandatory** for the Presentation Tool. |
| `/api/exit-preview` | Clears draft cookies to return to the public view. | **Mandatory** for testing public state. |
| `/api/revalidate` | Listens for Sanity Webhooks to purge Next.js cache. | **Recommended** for high-performance ISR setups. |
| `/api/contact` | Handles form data and sends emails via SMTP. | **Required** for lead generation. |

---

## 9. BEST PRACTICES FOLLOWED

1. **Environment Separation**: Absolute distinction between Draft and Production perspectives.
2. **Atomic Components**: UI is broken down into small, reusable pieces (components) and larger layouts (sections).
3. **SEO Excellence**: Automated metadata generation for every page using a centralized SEO utility.
4. **Performance**: Heavy use of Next.js Server Components and dynamic imports to minimize browser JavaScript.
5. **Scalable Schema**: Uses Object types to prevent schema "bloat" and ensure consistent data structures across different documents.

---

## 10. COMMON ISSUES + SOLUTIONS

- **Draft content visible to public**: Check if `useCdn` is `false` or if the `client` is using the wrong `perspective`. 
  - *Fix*: Ensure the default client uses `perspective: 'published'`.
- **Preview not updating**: This usually happens if `revalidate` is set too high or if the Draft Mode cookie isn't being set.
  - *Fix*: Set `export const revalidate = 0` on preview-enabled pages and check `/api/preview` logs.
- **Image transformation errors**: Occur if the Sanity Image URL builder is passed a null object.
  - *Fix*: Always use optional chaining (e.g., `urlFor(image?.asset)`) and add fallback images.
- **Slug Collisions**: Editors might create two pages with the same slug.
  - *Fix*: Implement unique validation in the Sanity schema definition.
