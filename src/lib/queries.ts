// ============================================
// GROQ QUERIES FOR GARUDA OM WEBSITE
// ============================================

// ── 1. GPS SOLUTION CARDS (Home page grid) ──
// Slug is fetched FROM the referenced solutionPage document.
// No slug stored on the card itself — single source of truth.
export const GPS_CARDS_QUERY = `
  *[_type == "gpsSolutionCard"] | order(order asc) {
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
  *[_type == "solutionPage"] | order(order asc) {
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
  *[_type == "solutionPage" && slug.current == $slug][0] {
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



// ── 6. WHY US FEATURE CARDS (Singleton) ──
export const FEATURE_CARDS_QUERY = `
  *[_type == "featureCardsSection" && ($preview || !(_id in path("drafts.**")))] [0] {
    _id,
    "cards": cards[] {
      _key,
      icon,
      iconColor,
      title,
      description
    }
  }
`;

// ── 7 FASTAG NEW SCHEMA QUERIES ──
export const fastagIndividualQuery = `
  *[_type == "fastagPage" && _id == "fastag-individual"] | order(_updatedAt desc) [0] {
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
  *[_type == "fastagPage" && _id == "fastag-business"] | order(_updatedAt desc) [0] {
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
  *[_type == "siteSettings" && _id == "siteSettings"] | order(_updatedAt desc) [0] {
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
  *[_type == "aboutSection" && _id == "aboutSection"] | order(_updatedAt desc) [0] {
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
  *[_type == "watchPlatformDemoSection" && _id == "watchPlatformDemoSection"] | order(_updatedAt desc) [0] {
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
// ── 11. INDUSTRIAL SECTION QUERIES ──
// Fetch industrial cards with explicit draft vs published filtering
export const INDUSTRIAL_CARDS_QUERY = `
  *[_type == "industrialCard" && ($preview || !(_id in path("drafts.**")))] | order(order asc) {
    _id,
    iconName,
    title,
    description,
    badge,
    order,
    "slug": detailedPage->slug.current
  }
`;

// Fetch specific industrial detail page with explicit draft vs published filtering
export const INDUSTRIAL_DETAIL_QUERY = `
  *[_type == "industrialDetail" && slug.current == $slug && ($preview || !(_id in path("drafts.**")))] [0] {
    _id,
    iconName,
    badge,
    title,
    "slug": slug.current,
    description,
    "imageUrl": image.asset->url,
    order,
    infoCards[] {
      iconName,
      label,
      value
    },
    industryOverview {
      smallParagraph,
      largeParagraph
    },
    coreFeatures[] {
      text
    },
    keyBenefits[] {
      text
    },
    keySolutions[] {
      solutionText
    }
  }
`;
