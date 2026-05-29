export const useSeoSchema = () => {
  const baseUrl = 'https://jude.jkantech.net/jude'

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${baseUrl}/#person`,
    name: 'Jude Mpoyo',
    url: baseUrl,
    mainEntityOfPage: {
      '@type': 'ProfilePage',
      '@id': `${baseUrl}/`,
      url: baseUrl,
      name: 'Jude Mpoyo | Full-stack Developer – Portfolio',
      description:
        'Official portfolio of Jude Mpoyo, Full-stack Developer specializing in Laravel, Nuxt, Go and Docker. Based in Kolwezi, DRC.',
      about: { '@id': `${baseUrl}/#person` },
      dateModified: new Date().toISOString().split('T')[0],
    },
    image: {
      '@type': 'ImageObject',
      url: `${baseUrl}/judepic.jpeg`,
      width: 400,
      height: 400,
    },
    jobTitle: 'Full-stack Developer',
    description:
      'Full-stack developer specializing in Laravel, Nuxt, Go and Docker. Based in Kolwezi, DRC. Building robust backend systems and production-ready web applications.',
    knowsAbout: [
      'Laravel',
      'Vue.js',
      'Nuxt.js',
      'TypeScript',
      'Go',
      'Docker',
      'PHP',
      'REST API',
      'Clean Architecture',
      'MySQL',
    ],
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'ISC Lubumbashi',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Lubumbashi',
        addressCountry: 'CD',
      },
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kolwezi',
      addressCountry: 'CD',
    },
    worksFor: {
      '@type': 'Organization',
      name: 'Jkantech',
      url: 'https://jkantech.net',
    },
    sameAs: [
      baseUrl,
      'https://github.com/judempoyo',
      'https://linkedin.com/in/jude-mpoyo',
    ],
    email: 'mpoyojude0@gmail.com',
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    url: baseUrl,
    name: 'Jude Mpoyo | Full-stack Developer',
    description:
      'Portfolio of Jude Mpoyo, Full-stack Developer specializing in Laravel, Vue.js, Go and Docker.',
    author: { '@id': `${baseUrl}/#person` },
    publisher: { '@id': `${baseUrl}/#person` },
    inLanguage: ['en', 'fr'],
    potentialAction: {
      '@type': 'ReadAction',
      target: baseUrl,
    },
  }

  const profilePageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${baseUrl}/`,
    url: baseUrl,
    name: 'Jude Mpoyo | Full-stack Developer – Portfolio',
    description:
      'Official portfolio of Jude Mpoyo, Full-stack Developer specializing in Laravel, Nuxt, Go and Docker. Based in Kolwezi, DRC.',
    isPartOf: { '@id': `${baseUrl}/#website` },
    about: { '@id': `${baseUrl}/#person` },
    mainEntity: { '@id': `${baseUrl}/#person` },
    dateModified: new Date().toISOString().split('T')[0],
    inLanguage: ['en', 'fr'],
  }

  const projectsSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Jude Mpoyo – Featured Projects',
    description: 'Selected production projects built by Jude Mpoyo',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'SoftwareApplication',
          name: 'Uzaraka',
          description:
            'Modern classifieds platform for DRC. Post, browse, and manage listings easily. Features include smart search, secure messaging, and performance tracking.',
          applicationCategory: 'WebApplication',
          programmingLanguage: ['TypeScript', 'Vue.js', 'Nuxt.js', 'TailwindCSS'],
          url: 'https://uzaraka.com',
          author: { '@id': `${baseUrl}/#person` },
        },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'SoftwareApplication',
          name: 'Jump Datatable',
          description:
            'Composer package for dynamic tables in PHP. Responsive, sortable, searchable, and paginated tables. Optimized for TailwindCSS and Bootstrap.',
          applicationCategory: 'DeveloperApplication',
          programmingLanguage: ['PHP'],
          url: 'https://github.com/judempoyo/jumpDatatable',
          author: { '@id': `${baseUrl}/#person` },
        },
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: {
          '@type': 'SoftwareApplication',
          name: 'LaraApiStarter',
          description:
            'Production-ready Laravel 12 REST API starter with clean Action & DTO architecture. Focused on security, performance, and developer experience.',
          applicationCategory: 'DeveloperApplication',
          programmingLanguage: ['PHP', 'Laravel'],
          url: 'https://github.com/judempoyo/laraApiStarter',
          author: { '@id': `${baseUrl}/#person` },
        },
      },
    ],
  }

  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(personSchema),
        key: 'schema-person',
      },
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(websiteSchema),
        key: 'schema-website',
      },
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(profilePageSchema),
        key: 'schema-profilepage',
      },
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(projectsSchema),
        key: 'schema-projects',
      },
    ],
  })
}
