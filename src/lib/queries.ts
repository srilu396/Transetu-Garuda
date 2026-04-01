// ============================================
// GROQ QUERIES FOR GARUDA OM WEBSITE
// ============================================

// ── 1. GPS SOLUTION CARDS (Home page grid) ──
// Slug is fetched FROM the referenced solutionPage document.
// No slug stored on the card itself — single source of truth.
export const GPS_CARDS_QUERY = `
  *[_type == "gpsSolutionCard" && !(_id in path("drafts.**"))] | order(order asc) {
    _id,
    title,
    description,
    image,
    bulletPoints,
    "slug": detailedPage->slug.current,
    "detailedMedia": detailedPage->media {
      mediaType,
      "image": image.asset->url,
      youtubeUrl,
      videoUrl
    },
    "detailedData": detailedPage-> {
      title,
      tagline,
      overview,
      benefits,
      keyFeatures,
      useCases,
      whyChoose
    }
  }
`;

// ── 2. ALL SOLUTION PAGES (with order) ──

export const ALL_SOLUTIONS_QUERY = `
  *[_type == "solutionPage" && !(_id in path("drafts.**"))] | order(order asc) {
    _id,
    iconName,
    title,
    "slug": slug.current,
    badge,
    tagline,
    "media": media {
      mediaType,
      "image": image.asset->url,
      youtubeUrl,
      videoUrl
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
`;

export const SOLUTION_BY_SLUG_QUERY = `
  *[_type == "solutionPage" && slug.current == $slug && !(_id in path("drafts.**"))][0] {
    _id,
    iconName,
    title,
    "slug": slug.current,
    badge,
    tagline,
    "media": media {
      mediaType,
      "image": image.asset->url,
      youtubeUrl,
      videoUrl
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
`;

// ── 4. ALL INDUSTRY PAGES ──
export const ALL_INDUSTRIES_QUERY = `
  *[_type == "industryPage" && !(_id in path("drafts.**"))] | order(title asc) {
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
`;

// ── 5. SINGLE INDUSTRY PAGE (by slug) ──
export const INDUSTRY_BY_SLUG_QUERY = `
  *[_type == "industryPage" && slug.current == $slug && !(_id in path("drafts.**"))][0] {
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
`;

// ── 6. WHY US FEATURE CARDS ──
export const FEATURE_CARDS_QUERY = `
  *[_type == "featureCard" && !(_id in path("drafts.**"))] | order(order asc) {
    _id,
    title,
    description,
    iconName,
    order
  }
`;

// ── 7 FASTAG NEW SCHEMA QUERIES ──
export const fastagIndividualQuery = `
  *[_type == "fastagPage" && (_id == "fastag-individual" || _id == "drafts.fastag-individual")] | order(_updatedAt desc) [0] {
    pageTitle,
    media {
      mediaType,
      image {
        asset-> {
          _id,
          url,
          metadata {
            dimensions {
              width,
              height
            }
          }
        },
        alt,
        hotspot,
        crop
      },
      videoUrl,
      youtubeUrl
    },
    overviewText,
    documents[] {
      documentName,
      description,
      file {
        asset-> {
          url,
          originalFilename,
          extension,
          size
        }
      }
    }
  }
`;

export const fastagBusinessQuery = `
  *[_type == "fastagPage" && (_id == "fastag-business" || _id == "drafts.fastag-business")] | order(_updatedAt desc) [0] {
    pageTitle,
    media {
      mediaType,
      image {
        asset-> {
          _id,
          url,
          metadata {
            dimensions {
              width,
              height
            }
          }
        },
        alt,
        hotspot,
        crop
      },
      videoUrl,
      youtubeUrl
    },
    overviewText,
    documents[] {
      documentName,
      description,
      file {
        asset-> {
          url,
          originalFilename,
          extension,
          size
        }
      }
    }
  }
`;

// ── 8. SITE SETTINGS (phone, email, address, social) ──
export const SITE_SETTINGS_QUERY = `
  *[_type == "siteSettings" && (_id == "siteSettings" || _id == "drafts.siteSettings")] | order(_updatedAt desc) [0] {
    _id,
    phone,
    email,
    addresses,
    whatsapp,
    facebook,
    instagram,
    linkedin,
    "companyDocs": companyDocs[]{
      documentName,
      "fileUrl": file.asset->url
    }
  }
`;

// ── 9. ABOUT US SECTION (Singleton) ──
export const ABOUT_SECTION_QUERY = `
  *[_type == "aboutSection" && (_id == "aboutSection" || _id == "drafts.aboutSection")] | order(_updatedAt desc) [0] {
    stats[] {
      statValue,
      label
    },
    founder {
      "founderImage": founderImage.asset->url,
      founderName,
      founderBadge,
      founderEducation,
      founderPreviousRoles,
      founderBio
    },
    companyOverview {
      overviewDescription
    },
    visionMission {
      visionDescription,
      missionDescription
    },
    keyAchievements,
    clients[] {
      clientName,
      "clientLogo": clientLogo.asset->url,
      clientWebsiteUrl
    }
  }
`;

// ── 10. WATCH PLATFORM DEMO SECTION (Singleton) ──
export const WATCH_PLATFORM_DEMO_QUERY = `
  *[_type == "watchPlatformDemoSection" && (_id == "watchPlatformDemoSection" || _id == "drafts.watchPlatformDemoSection")] | order(_updatedAt desc) [0] {
    badgeLabel,
    heading,
    subheading,
    cards[] {
      icon,
      iconColor,
      "thumbnail": thumbnail.asset->url,
      youtubeUrl,
      title,
      description,
      watchVideoLabel
    }
  }
`;
