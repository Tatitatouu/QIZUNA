import { getIcon } from '@/lib/icons'

export const heroData = {
  title: '<em>Agence web & mobile à Mulhouse</em>Des logiciels sur mesure <span>qui durent</span>',
  subtitle: 'Basée à Mulhouse en Alsace, Qizuna accompagne les PME et organisations locales avec des solutions digitales sur mesure : sites web, applications mobiles et logiciels métier — livrés sans dette technique, sans lock-in.',
  stats: [
    { value: '30+', label: 'Projets réalisés' },
    { value: '24h', label: 'Délai de réponse' },
    { value: '20+', label: "Années d'expertise" },
  ],
  primaryButtonText: 'Découvrir nos services',
  primaryButtonLink: '#services',
  secondaryButtonText: 'Planifier un appel',
  secondaryButtonLink: '#contact',
}

export const philosophyData = {
  badge: 'Notre Approche',
  title: 'Notre approche du développement web sur mesure',
  intro: "Un logiciel sur-mesure n'est pas une dépense, c'est un investissement. Contrairement aux solutions toutes faites, il grandit avec votre entreprise et vous apporte de plus en plus de valeur au fil du temps.",
  promiseTitle: 'Notre promesse',
  promiseText: "Grâce à cette approche technique rigoureuse, nous garantissons la longévité et l'évolutivité de chaque solution que nous développons. Votre logiciel ne sera jamais un frein à votre croissance.",
  ctaText: 'Parlons de votre projet',
  ctaLink: '#contact',
}

export const certificationData = {
  label: 'Certifié officiellement',
  title: 'Activateur France Num',
  subtitle: 'Partenaire officiel du gouvernement français pour accompagner la transformation numérique des entreprises',
  benefits: [
    {
      title: 'Expertise Certifiée',
      description: 'Reconnaissance officielle par la Direction Générale des Entreprises attestant de notre expertise en transformation numérique',
      highlight: 'Certification gouvernementale',
      icon: 'Award',
    },
    {
      title: 'Accès aux Aides',
      description: 'Nous vous aidons à bénéficier des subventions publiques disponibles pour financer vos projets de digitalisation',
      highlight: "Jusqu'à 50% d'aides",
      icon: 'Coins',
    },
    {
      title: 'Garantie Qualité',
      description: 'Un accompagnement de qualité supérieure avec des méthodes et outils validés par les autorités compétentes',
      highlight: '100% sécurisé',
      icon: 'Shield',
    },
  ],
  ctaText: 'Bénéficiez des aides',
  ctaLink: '#contact',
}

export const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Valeurs', href: '#valeurs' },
  { label: 'Certification', href: '#certification' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export const services = [
  {
    icon: getIcon('Code2'),
    title: 'Développement web & logiciel sur mesure',
    description: 'Nous créons des sites web et applications métier performants pour les entreprises de Mulhouse et d\'Alsace. SaaS, plateformes et logiciels développés en React/Next.js, avec une architecture pensée pour évoluer sans dette technique.',
    features: ['React/Next.js', 'Mobile-first', 'Performance optimale'],
    linkText: 'En savoir plus sur notre développement logiciel',
    linkHref: '/developpement-logiciel-sur-mesure',
  },
  {
    icon: getIcon('Shield'),
    title: 'Audit technique & sécurité applicative',
    description: "Audit de code, revue d'architecture et détection de failles de sécurité pour les PME de la région Mulhouse-Alsace. Nous livrons un rapport clair avec un plan d'action priorisé.",
    features: ['Audit technique', 'Recommandations', "Plan d'action"],
    linkText: 'En savoir plus sur notre audit technique',
    linkHref: '/audit-technique',
  },
  {
    icon: getIcon('Server'),
    title: 'Hébergement Cloud',
    description: 'Infrastructure cloud moderne avec monitoring 24/7 et garanties de performance pour les entreprises alsaciennes.',
    features: ['99.9% uptime', 'Support 24/7', 'Sauvegardes auto'],
  },
  {
    icon: getIcon('Users'),
    title: 'Développement application mobile',
    description: 'Applications iOS et Android pour les entreprises de Mulhouse et du Haut-Rhin. Développement natif ou cross-platform (React Native), de la maquette au déploiement sur les stores.',
    features: ['iOS & Android', 'React Native', 'Déploiement stores'],
    linkText: 'Découvrir notre agence application mobile à Mulhouse',
    linkHref: '/developpement-application-mobile',
  },
]

export const values = [
  {
    title: 'Écoute & Bienveillance',
    icon: getIcon('Heart'),
    description: 'Chaque grand projet commence par une écoute attentive et bienveillante. Nous prenons le temps de comprendre votre vision avec une approche humaine qui fait de vous un partenaire.',
  },
  {
    title: 'Engagement Total',
    icon: getIcon('HandHeart'),
    description: "Notre engagement va au-delà de la simple prestation. Nous nous investissons personnellement dans votre réussite avec passion, détermination et une obsession du résultat.",
  },
  {
    title: 'Transparence totale',
    icon: getIcon('Target'),
    description: "Pas de jargon, pas de surprise. Vous savez à chaque étape où en est votre projet, combien ça coûte et pourquoi on fait les choix qu'on fait.",
  },
]

export const testimonials = [
  {
    name: 'Cédric Oges',
    company: 'Tech Eaux Énergies',
    role: 'Directeur Commercial',
    content: "Nous avons décidé de faire confiance à Qizuna et nous avons fait le bon choix. Mathieu a su être à notre écoute et s'adapter à la complexité de notre demande. Un service de qualité et une disponibilité rare.",
    rating: 5,
  },
  {
    name: 'Daniel Bottlaender',
    company: '',
    role: '',
    content: "Mathieu donne de supers conseils et est très précis dans ses explications. Une approche méthodique qui priorise notre travail avant la technique. On obtient exactement l'outil nécessaire, sans superflu !",
    rating: 5,
  },
  {
    name: 'Sonia',
    company: 'InMemorium',
    role: '',
    content: "Nous collaborons avec Mathieu depuis plus d'un an. Il a conçu pour nous l'application Inmemorium, un outil parfaitement pensé, intuitif et adapté à notre métier. Un partenaire de confiance que nous recommandons vivement.",
    rating: 5,
  },
  {
    name: 'NR',
    company: 'HygiPro',
    role: '',
    content: "Réactifs du début à la fin, toujours disponibles pour répondre à mes questions. Votre écoute bienveillante a su transformer mes envies en un site qui me ressemble. Je recommande les yeux fermés !",
    rating: 5,
  },
]

export const pillars = [
  {
    icon: getIcon('FlaskConical'),
    title: 'Méthodologie TDD',
    description: "Chaque fonctionnalité est testée avant même d'être codée. Le résultat : un logiciel fiable, sans bugs cachés, facile à faire évoluer.",
  },
  {
    icon: getIcon('Building2'),
    title: 'Architecture Solide',
    description: "Des fondations pensées pour durer. Notre expérience en architecture logicielle garantit un code structuré, modulaire et évolutif.",
  },
  {
    icon: getIcon('Sparkles'),
    title: 'Clean Code',
    description: "Un code propre, lisible et maintenable. Pas de dette technique cachée, pas de mauvaises surprises dans 5 ans.",
  },
  {
    icon: getIcon('Unlock'),
    title: 'Zéro Lock-in',
    description: "Technologies open source, standards ouverts. Votre logiciel vous appartient vraiment, sans dépendance à un éditeur.",
  },
]

export const references = [
  { name: 'Eneregie 68', logo: '/eneregie68.webp', alt: 'Eneregie 68', link: 'https://eneregie68.com' },
  { name: 'Systemo', logo: '/systemo.webp', alt: 'Systemo', link: 'https://systemo.fr/?utm_source=gmb' },
  { name: 'Willer-sur-Thur', logo: '/willer-sur-thur.webp', alt: 'Commune de Willer-sur-Thur', link: 'https://www.willersurthur.fr/' },
  { name: 'Tech Eaux', logo: '/tech-eaux.webp', alt: 'Tech Eaux Energies', link: 'https://www.tech-eaux-energies.fr/' },
  { name: 'Pat Patrol', logo: '/pat-patrol.webp', alt: 'Pat Patrol - Le gardien de votre patrimoine', link: 'https://www.patpatrol.com/' },
  { name: 'Frida', logo: '/les-delices-de-frida.webp', alt: 'Frida - Boulangerie Pâtisserie Les Délices de Frida', link: 'https://lesdelicesdefrida.fr/' },
  { name: 'Autopôle', logo: '/autopole.webp', alt: 'Autopôle', link: 'https://autopole-blondel.fr/' },
  { name: 'Eira Développement', logo: '/eira-developpement.webp', alt: 'Eira Développement', link: 'https://eira-developpement.fr/' },
  { name: 'HygiPro', logo: '/hygipro.webp', alt: 'HygiPro', link: 'https://www.hygipro.fr/' },
  { name: 'Imprimzen', logo: '/imprimzen.webp', alt: 'Imprimzen', link: 'https://imprimzen.fr/' },
  { name: 'In-memorium', logo: '/in-memorium.webp', alt: 'In-memorium', link: 'https://www.inmemorium.fr/' },
  { name: 'LBM', logo: '/LBM.webp', alt: 'Le Bulletin Municipal', link: 'https://lebulletinmunicipal.fr/' },
  { name: 'Maire de Mollau', logo: '/mairie-Mollau.webp', alt: 'Maire de Mollau' },
  { name: 'publi-h', logo: '/publi-h.webp', alt: 'imprimerie publi-h', link: 'https://publi-h.com/' },
  { name: 'Score story', logo: '/score-story.webp', alt: 'Score Story', link: 'https://score-story.com/' },
]

export const contactInfo = {
  address: "25 rue de l'écluse, 68120 Pfastatt",
  email: 'hello@qizuna.fr',
  phone: '03 67 26 69 16',
}

export const footerData = {
  email: 'hello@qizuna.fr',
  companyName: 'Qizuna SAS',
  director: 'Mathieu Capon',
  linkedinPersonal: 'https://www.linkedin.com/in/mathieu-capon-56a5561a0/',
  linkedinCompany: 'https://www.linkedin.com/company/qizuna/',
  legalNoticeDate: '14/05/2024',
  capital: '4000 euros',
  rcs: '902608728 (Mulhouse)',
  vatNumber: 'FR95902608728',
  phone: '03 67 26 69 16',
  headquartersAddress: {
    street: "15 rue de l'Oberfeld",
    city: 'Willer-sur-Thur',
    postalCode: '68760',
  },
  hostingProvider: {
    name: 'Carrd (DMCA Registered Agent)',
    address: 'Franklin, TN, United States',
  },
}
