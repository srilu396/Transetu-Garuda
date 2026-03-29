// ============================================
// GROQ QUERIES FOR GARUDA OM WEBSITE
// ============================================


// ── 1. GPS SOLUTION CARDS (Home page grid) ──
export const GPS_CARDS_QUERY = `
  *[_type == "gpsSolutionCard"] | order(order asc) {
    _id,
    title,
    description,
    image,
    bulletPoints,
    "slug": slug.current
  }
`


// ── 2. ALL SOLUTION PAGES (with order) ──
export const ALL_SOLUTIONS_QUERY = `
  *[_type == "solutionPage"] | order(order asc) {
    _id,
    iconName,
    cardTitle,
    title,
    "slug": slug.current,
    badge,
    tagline,
    "media": media {
      mediaType,
      "image": image.asset->url,
      youtubeUrl
    },
    overview,
    order,
    "benefits": benefits[] {
      iconName,
      title,
      description
    },
    "keyFeatures": keyFeatures[] {
      iconName,
      title,
      description
    },
    "useCases": useCases[] {
      title,
      description
    },
    "whyChoose": whyChoose[] {
      iconName,
      description
    }
  }
`


// ── 3. SINGLE SOLUTION PAGE (by slug) ──
export const SOLUTION_BY_SLUG_QUERY = `
  *[_type == "solutionPage" && slug.current == $slug][0] {
    _id,
    iconName,
    cardTitle,
    title,
    "slug": slug.current,
    badge,
    tagline,
    "media": media {
      mediaType,
      "image": image.asset->url,
      youtubeUrl
    },
    overview,
    "benefits": benefits[] {
      iconName,
      title,
      description
    },
    "keyFeatures": keyFeatures[] {
      iconName,
      title,
      description
    },
    "useCases": useCases[] {
      title,
      description
    },
    "whyChoose": whyChoose[] {
      iconName,
      description
    }
  }
`


// ── 4. ALL INDUSTRY PAGES ──
export const ALL_INDUSTRIES_QUERY = `
  *[_type == "industryPage"] | order(title asc) {
    _id,
    title,
    "slug": slug.current,
    badge,
    tagline,
    image,
    overview,
    stats,
    keySolutions,
    coreFeatures,
    keyBenefits
  }
`


// ── 5. SINGLE INDUSTRY PAGE (by slug) ──
export const INDUSTRY_BY_SLUG_QUERY = `
  *[_type == "industryPage" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    badge,
    tagline,
    image,
    overview,
    stats,
    keySolutions,
    coreFeatures,
    keyBenefits
  }
`


// ── 6. WHY US FEATURE CARDS ──
export const FEATURE_CARDS_QUERY = `
  *[_type == "featureCard"] | order(order asc) {
    _id,
    title,
    description,
    iconName,
    order
  }
`


// ── 7. FASTAG CONTENT (customer page) ──
export const FASTAG_CUSTOMER_QUERY = `
  *[_type == "fastagContent" && pageType == "customer"][0] {
    _id,
    title,
    tagline,
    overview,
    benefits,
    features
  }
`


// ── 8. FASTAG CONTENT (partner page) ──
export const FASTAG_PARTNER_QUERY = `
  *[_type == "fastagContent" && pageType == "partner"][0] {
    _id,
    title,
    tagline,
    overview,
    benefits,
    features
  }
`


// ── 9. SITE SETTINGS (phone, email, address, social) ──
export const SITE_SETTINGS_QUERY = `
  *[_type == "siteSettings"][0] {
    _id,
    phone,
    email,
    addresses,
    whatsapp,
    facebook,
    instagram,
    linkedin,
    youtubeDemo,
    companyDocs
  }
`