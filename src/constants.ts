import { Project, Skill, Experience, Category, Education, Language } from './types.ts';

const getDriveThumbnail = (id: string) => `https://drive.google.com/thumbnail?id=${id}&sz=w1200`;

export const NAV_ITEMS: Category[] = [
  'ABOUT ME',
  'DESIGN',
  'VIDEO',
  'PHOTOGRAPHY',
  'SEO',
  'PAID MEDIA',
  'AUTOMATION',
  'CONTACT'
];

export const PROJECTS: Project[] = [
  // DESIGN PROJECTS (16 projects in strict order)
  { 
    id: '1', 
    title: 'Real Estate', 
    category: 'DESIGN', 
    subCategory: 'BRANDING',
    imageUrl: getDriveThumbnail('1HHnOLanKM8Sr4CtX98wQZSXc8HMF9I0N'),
    subtitle: 'Branding & Visual Identity',
    description: 'Minimalist visual system for the luxury real estate sector.'
  },
  { 
    id: '2', 
    title: 'Discounts', 
    category: 'DESIGN', 
    subCategory: 'MARKETING',
    imageUrl: getDriveThumbnail('114s_v9tyesKv2XXdxYE2orGzjp8hEESy'),
    subtitle: 'Digital Marketing Design',
    description: 'Visual strategy for high-impact retail campaigns.'
  },
  { 
    id: '3', 
    title: 'Travel', 
    category: 'DESIGN', 
    subCategory: 'CONCEPTS',
    imageUrl: getDriveThumbnail('1OTAjpEg5-dPgLCraI9dyAzYmKeSQJb9v'),
    subtitle: 'Editorial & Layout',
    description: 'Visual narrative for travel guides and boutique experiences.'
  },
  { 
    id: '4', 
    title: 'Food & Beverage', 
    category: 'DESIGN', 
    subCategory: 'MARKETING',
    imageUrl: getDriveThumbnail('1cW7l2fmO40UyzRYSaG_23urezAcBF0GF'),
    subtitle: 'Packaging Art Direction',
    description: 'Visual concepts for healthy food brands.'
  },
  { 
    id: '5', 
    title: 'Apparel', 
    category: 'DESIGN', 
    subCategory: 'MARKETING',
    imageUrl: getDriveThumbnail('1PtvqwUW1GvSwlA0aTqWJiPMgb5lnypp2'),
    subtitle: 'Fashion Direction',
    description: 'Visual curation and design for minimalist fashion brands.'
  },
  { 
    id: '6', 
    title: 'Fitness', 
    category: 'DESIGN', 
    subCategory: 'BRANDING',
    imageUrl: getDriveThumbnail('1vLeoeb7NVyKpEmQFu9RmjtNXrN2vCtzP'),
    subtitle: 'Fitness Branding',
    description: 'Dynamic identity centered on performance and well-being.'
  },
  { 
    id: '7', 
    title: 'Fashion', 
    category: 'DESIGN', 
    subCategory: 'MARKETING',
    imageUrl: getDriveThumbnail('1izKJ74nOIaTfpeIxFYYrrZds3A1z2NAw'),
    subtitle: 'Visual Content',
    description: 'Photography and editorial design for fashion spreads.'
  },
  { 
    id: '8', 
    title: 'Hiking', 
    category: 'DESIGN', 
    subCategory: 'CONCEPTS',
    imageUrl: getDriveThumbnail('16wNL9WuXyZggOq6rZVvvVTgZ8MGFb6eb'),
    subtitle: 'Outdoor Experience',
    description: 'Graphic material for adventure and nature communities.'
  },
  { 
    id: '9', 
    title: 'Traditional Sweets', 
    category: 'DESIGN', 
    subCategory: 'BRANDING',
    imageUrl: getDriveThumbnail('1YZwuHdclhDmb9fUM-fFP15-zcQT_fdj5'),
    subtitle: 'Artisanal Look & Feel',
    description: 'Identity redesign for traditional brands with a modern touch.'
  },
  { 
    id: '10', 
    title: 'Architecture', 
    category: 'DESIGN', 
    subCategory: 'CONCEPTS',
    imageUrl: getDriveThumbnail('1KS6fm3VKP-KhE2_uIBRsM75HdnPVRQg9'),
    subtitle: 'Spatial Graphics',
    description: 'Space visualization and layout for architectural firms.'
  },
  { 
    id: '11', 
    title: 'Pure Design', 
    category: 'DESIGN', 
    subCategory: 'CONCEPTS',
    imageUrl: getDriveThumbnail('1O8LXOOed1WP-YqDCApC-mFjKkgbkI47G'),
    subtitle: 'Abstract Concepts',
    description: 'Exploration of forms and typography in pure graphic design.'
  },
  { 
    id: '12', 
    title: 'Renovations', 
    category: 'DESIGN', 
    subCategory: 'BRANDING',
    imageUrl: getDriveThumbnail('1EhHqFos2mGvfHqGoKElJ92tfsDAOUQA3'),
    subtitle: 'Renewal Branding',
    description: 'Identity for interior design and remodeling studios.'
  },
  { 
    id: '13', 
    title: 'Commercial', 
    category: 'DESIGN', 
    subCategory: 'MARKETING',
    imageUrl: getDriveThumbnail('1ISztNpCpN2p9dKezoRGWgoNFUKbwwT95'),
    subtitle: 'Business Strategy',
    description: 'Design of commercial proposals and brand kits for companies.'
  },
  { 
    id: '14', 
    title: 'Donation Campaigns', 
    category: 'DESIGN', 
    subCategory: 'MARKETING',
    imageUrl: getDriveThumbnail('1h578pzBuy3FNBbVagN9azr19RyEMLCOH'),
    subtitle: 'Social Impact',
    description: 'Visual strategy for social cause campaigns and NGOs.'
  },
  { 
    id: '15', 
    title: 'School Fair', 
    category: 'DESIGN', 
    subCategory: 'MARKETING',
    imageUrl: getDriveThumbnail('15N5HQMC1UU5kY-b0o_31HEaWAb5zU2tN'),
    subtitle: 'Educational Event',
    description: 'Complete graphic system for institutional events and fairs.'
  },
  { 
    id: '16', 
    title: 'Governmental', 
    category: 'DESIGN', 
    subCategory: 'BRANDING',
    imageUrl: getDriveThumbnail('1CE7CE-2AJOrw9pjLpnhdgF_tWBm9kPkY'),
    subtitle: 'Public Sector Identity',
    description: 'Sober and clear visual communication for governmental entities.'
  },
  
  // VIDEO
  { 
    id: 'v1', 
    title: 'Gym', 
    category: 'VIDEO', 
    imageUrl: getDriveThumbnail('1eB0o_4ZrsZMkE5U2l-oL8qfbY9UbPdNc'),
    videoUrl: 'https://drive.google.com/file/d/1eB0o_4ZrsZMkE5U2l-oL8qfbY9UbPdNc/preview',
    subtitle: 'Sports & Wellness',
    description: 'Fitness video content focused on gym training, showcasing routines, healthy lifestyle, and visual production for sports and wellness brands.'
  },
  { 
    id: 'v2', 
    title: 'Kite', 
    category: 'VIDEO', 
    imageUrl: getDriveThumbnail('1JdGd-uYfI9p9dcLFX1hkVG5w9dT2vmsE'),
    videoUrl: 'https://drive.google.com/file/d/1JdGd-uYfI9p9dcLFX1hkVG5w9dT2vmsE/preview',
    subtitle: 'Adventure & Travel',
    description: 'Dynamic kitesurf video highlighting adventure and freedom, designed for outdoor, travel, and sports brand content.'
  },
  { 
    id: 'v3', 
    title: 'Circe', 
    category: 'VIDEO', 
    imageUrl: getDriveThumbnail('1tkoazE9w0Gdi-9M6igbd44yIp6EC5qQs'),
    videoUrl: 'https://drive.google.com/file/d/1tkoazE9w0Gdi-9M6igbd44yIp6EC5qQs/preview',
    subtitle: 'Conceptual Branding',
    description: 'Conceptual brand video focused on aesthetics and storytelling, emphasizing visual identity and brand positioning.'
  },
  { 
    id: 'v4', 
    title: 'Wine', 
    category: 'VIDEO', 
    imageUrl: getDriveThumbnail('1jjeiNEUyShMJkPbUnTwVE87txzAa6PHs'),
    videoUrl: 'https://drive.google.com/file/d/1jjeiNEUyShMJkPbUnTwVE87txzAa6PHs/preview',
    subtitle: 'Lifestyle & Hospitality',
    description: 'Lifestyle video for a wine brand, centered on elegance, experience, and consumption moments, ideal for branding and hospitality marketing.'
  },
  { 
    id: 'v5', 
    title: 'Travel', 
    category: 'VIDEO', 
    imageUrl: getDriveThumbnail('1QDjeL_Z_3jL5KcPt-RQdUpVHHhtirdWb'),
    videoUrl: 'https://drive.google.com/file/d/1QDjeL_Z_3jL5KcPt-RQdUpVHHhtirdWb/preview',
    subtitle: 'Tourism Promotion',
    description: 'Travel video content showcasing destinations and experiences, focused on tourism promotion and lifestyle marketing.'
  },
  { 
    id: 'v6', 
    title: 'Nutrition', 
    category: 'VIDEO', 
    imageUrl: getDriveThumbnail('1tTEMAAR9HAFlbqnUpsUtGHG_7_YT13Pq'),
    videoUrl: 'https://drive.google.com/file/d/1tTEMAAR9HAFlbqnUpsUtGHG_7_YT13Pq/preview',
    subtitle: 'Health & Wellness',
    description: 'Wellness and nutrition video designed to educate and position health-focused brands through engaging visual content.'
  },
  { 
    id: 'v7', 
    title: 'Hiring', 
    category: 'VIDEO', 
    imageUrl: getDriveThumbnail('1GN6BYmrp9zeNjkLWyY6lEa6xYZD5SMVG'),
    videoUrl: 'https://drive.google.com/file/d/1GN6BYmrp9zeNjkLWyY6lEa6xYZD5SMVG/preview',
    subtitle: 'Corporate Culture',
    description: 'Corporate recruitment video aimed at attracting talent, communicating company culture and employer value proposition.'
  },
  { 
    id: 'v8', 
    title: 'Padel', 
    category: 'VIDEO', 
    imageUrl: getDriveThumbnail('1SBC1u1PTZVfgPCE4GYbgWi6ZYv9ez70a'),
    videoUrl: 'https://drive.google.com/file/d/1SBC1u1PTZVfgPCE4GYbgWi6ZYv9ez70a/preview',
    subtitle: 'Active Lifestyle',
    description: 'Sports video focused on padel, highlighting energy, community, and content for active lifestyle and sports brands.'
  },
  { 
    id: 'v9', 
    title: 'Restaurant', 
    category: 'VIDEO', 
    imageUrl: getDriveThumbnail('1OMHD9l35Q9pN7oDCHlguEcibyXEY7iR4'),
    videoUrl: 'https://drive.google.com/file/d/1OMHD9l35Q9pN7oDCHlguEcibyXEY7iR4/preview',
    subtitle: 'Food & Dining',
    description: 'Food and restaurant video showcasing dishes, ambiance, and dining experience, focused on attracting customers through digital marketing content.'
  },
  
  // PHOTOGRAPHY
  // EVENTS
  { 
    id: 'p1', 
    title: 'Concert', 
    category: 'PHOTOGRAPHY', 
    subCategory: 'EVENTS',
    imageUrl: getDriveThumbnail('1xd8MOAmj1HN2T0PhnSt4klTtMhWGhXx0'),
    subtitle: 'Music & Performance',
    description: 'Concert photography capturing live performance energy, audience interaction, and immersive event atmosphere for entertainment marketing.'
  },
  { 
    id: 'p2', 
    title: 'Events', 
    category: 'PHOTOGRAPHY', 
    subCategory: 'EVENTS',
    imageUrl: getDriveThumbnail('1ujCnhC7bcIalvMMPQoX9EH-M_w4O4_Bm'),
    subtitle: 'Brand Activation',
    description: 'Event photography focused on brand presence, audience engagement, and documentation of corporate or social activations.'
  },
  { 
    id: 'p3', 
    title: 'Live Music', 
    category: 'PHOTOGRAPHY', 
    subCategory: 'EVENTS',
    imageUrl: getDriveThumbnail('1LIhTGVLhEcnyjA6yLRlT5wUGQGZtCkSw'),
    subtitle: 'Stage Performance',
    description: 'Live music photography highlighting artist performance, stage lighting, and emotional connection with the audience.'
  },
  { 
    id: 'p4', 
    title: 'Corporate', 
    category: 'PHOTOGRAPHY', 
    subCategory: 'EVENTS',
    imageUrl: getDriveThumbnail('1AYkk9JU6OFAutDqJ4g3JAPB-mTKITJtn'),
    subtitle: 'Business Environments',
    description: 'Corporate event photography showcasing professional environments, brand identity, and team interaction.'
  },
  { 
    id: 'p5', 
    title: 'Governmental', 
    category: 'PHOTOGRAPHY', 
    subCategory: 'EVENTS',
    imageUrl: getDriveThumbnail('1oyTDYYYX-OjqVZlQ-lqqoQjpfrffpfzJ'),
    subtitle: 'Official Activities',
    description: 'Government event photography documenting institutional activities, official settings, and public engagement.'
  },
  { 
    id: 'p6', 
    title: 'Concerts', 
    category: 'PHOTOGRAPHY', 
    subCategory: 'EVENTS',
    imageUrl: getDriveThumbnail('1qeBb4UHIdB9oPTiPvXryVJX0ucEwbXA8'),
    subtitle: 'Spectacle & Lighting',
    description: 'Concert photography capturing stage performance, lighting design, and large-scale audience experience.'
  },
  { 
    id: 'p7', 
    title: 'Sports Events', 
    category: 'PHOTOGRAPHY', 
    subCategory: 'EVENTS',
    imageUrl: getDriveThumbnail('1m-92-MfoEBlZTgGPZLIzFzF8wQ31J4Di'),
    subtitle: 'Action & Motion',
    description: 'Sports event photography focused on action, movement, and competitive atmosphere for dynamic content creation.'
  },

  // PRODUCT PHOTOGRAPHY
  { 
    id: 'p8', 
    title: 'Children’s Products', 
    category: 'PHOTOGRAPHY', 
    subCategory: 'PRODUCT',
    imageUrl: getDriveThumbnail('18JoJtc5yvyp4KDT9Mf40Qh9kVcm22Jua'),
    subtitle: 'Kids Brands',
    description: "Product photography for children's items highlighting color, usability, and playful brand positioning."
  },
  { 
    id: 'p9', 
    title: 'Studio Photography', 
    category: 'PHOTOGRAPHY', 
    subCategory: 'PRODUCT',
    imageUrl: getDriveThumbnail('1BD4Z2REzEp6nPEFX9vJHwrn2z805arur'),
    subtitle: 'Professional Setup',
    description: 'Studio photography with controlled lighting and clean composition, focused on professional product presentation.'
  },
  { 
    id: 'p10', 
    title: 'Catalog Photography', 
    category: 'PHOTOGRAPHY', 
    subCategory: 'PRODUCT',
    imageUrl: getDriveThumbnail('1bFMARCfuG79fXgMaMKiZijYExO8IXu1C'),
    subtitle: 'E-commerce Ready',
    description: 'Catalog photography designed for e-commerce and product display, emphasizing clarity, detail, and visual consistency.'
  },
  { 
    id: 'p11', 
    title: 'Food Photography', 
    category: 'PHOTOGRAPHY', 
    subCategory: 'PRODUCT',
    imageUrl: getDriveThumbnail('1UOd1kHxOXIhINSvNITiuI4P5uOs8cf3j'),
    subtitle: 'Gastronomy Marketing',
    description: 'Food photography showcasing texture, color, and presentation to enhance visual appeal for gastronomy marketing.'
  },
  { 
    id: 'p12', 
    title: 'Product Photography', 
    category: 'PHOTOGRAPHY', 
    subCategory: 'PRODUCT',
    imageUrl: getDriveThumbnail('11hUqJNHQmSIPXF7UfMxD7dyf84jNmAoP'),
    subtitle: 'Digital Marketing',
    description: 'Product photography focused on highlighting features, quality, and branding for digital marketing and e-commerce.'
  },
  { 
    id: 'p13', 
    title: 'Children’s Products (Lifestyle)', 
    category: 'PHOTOGRAPHY', 
    subCategory: 'PRODUCT',
    imageUrl: getDriveThumbnail('1ljUC-f1q80KMRQWL6RuZQS-ZRhUcyZXy'),
    subtitle: 'Emotional Branding',
    description: "Lifestyle product photography for children's items, emphasizing real-use scenarios and emotional brand connection."
  },
  
  // SEO
  { 
    id: 's1', 
    title: 'Craftsmanship Excellence', 
    category: 'SEO', 
    imageUrl: 'https://lh3.googleusercontent.com/d/1LOI4l4COKtywTeAstnT3sN2LGu9OZsyn',
    webUrl: 'https://www.tapiceriamadrid.com/?gad_source=1&gad_campaignid=22851466271&gbraid=0AAAABA2qhebousQVakV_45p5-oXFuT1Jr&gclid=CjwKCAjwtIfPBhAzEiwAv9RTJkjtNd19Q0WTGmC2Zly4zShSeZXkJlw07d0H5JwnucEQ_1RW5wFGHBoCG-0QAvD_BwE',
    externalUrl: 'https://www.tapiceriamadrid.com/tapiceros-madrid-comprometidos-con-la-excelencia-artesanal/',
    subtitle: 'SEO & Copywriting',
    description: 'Content and SEO strategy focused on artisanal excellence for the upholstery sector in Madrid.'
  },
  { 
    id: 's2', 
    title: 'Strategic Hiring', 
    category: 'SEO', 
    imageUrl: 'https://lh3.googleusercontent.com/d/13r9E5f4-ax8OJV4PmXR6M465UUwxYQ8n',
    webUrl: 'https://myelitepath.com/',
    externalUrl: 'https://myelitepath.com/news/strategic-hiring-with-video-intelligence',
    subtitle: 'Video Intelligence',
    description: 'Article on the impact of video intelligence in strategic recruitment and HR processes.'
  },
  { 
    id: 's3', 
    title: 'Kids Party Decoration', 
    category: 'SEO', 
    imageUrl: 'https://lh3.googleusercontent.com/d/1Ko8g8rM_86noMh9LunX34e0phVX8ljSa',
    webUrl: 'https://alquilandoeventos.com/',
    externalUrl: 'https://alquilandoeventos.com/ideas-para-decorar-una-fiesta-infantil-sin-gastar-de-mas/',
    subtitle: 'Event Planning',
    description: "SEO content optimization for event planning, focusing on low-budget children's decoration ideas."
  },
  { 
    id: 's4', 
    title: 'Emotional Health', 
    category: 'SEO', 
    imageUrl: 'https://lh3.googleusercontent.com/d/12OMFGIFCZkCirdNFkVFXzwxTeDAhdc99',
    webUrl: 'https://www.lauramarreropsicologia.com/contacto/',
    externalUrl: 'https://www.lauramarreropsicologia.com/?contenidos-blog=salud-emocional-y-autocuidado-por-que-invertir-en-terapia-psicologica',
    subtitle: 'Mental Health Blog',
    description: 'Blog strategy and organic positioning on self-care and the importance of psychological therapy.'
  },
  
  // PAID MEDIA
  { 
    id: 'pm1', 
    title: 'Testing', 
    category: 'PAID MEDIA', 
    imageUrl: 'https://lh3.googleusercontent.com/d/1OUVovYXoO1r2TQX9Ld0urRL2QVHVH2oY',
    subtitle: 'Ad Testing Workflow',
    description: 'Focus on evaluating different placements, formats, and variations to identify what performs better across each stage of the campaign.'
  },
  { 
    id: 'pm2', 
    title: 'Audience', 
    category: 'PAID MEDIA', 
    imageUrl: 'https://lh3.googleusercontent.com/d/13-3Njn2eveI6R-p5rIdyGmqKUlHWB3iB',
    subtitle: 'Audience Targeting',
    description: 'Defining audience segments based on demographics, interests, and behaviors to ensure more relevant and efficient ad delivery.'
  },
  { 
    id: 'pm3', 
    title: 'Growth Analysis', 
    category: 'PAID MEDIA', 
    imageUrl: 'https://lh3.googleusercontent.com/d/1Efh-_6TxxjE5OLWRY11Wx5LJ7ZlzWVOL',
    subtitle: 'Scaling Performance',
    description: 'Analyzing trends such as reach and visibility to evaluate how campaigns grow and how adjustments impact performance.'
  },
  { 
    id: 'pm4', 
    title: 'Creative', 
    category: 'PAID MEDIA', 
    imageUrl: 'https://lh3.googleusercontent.com/d/11M9vDYXZRmtEKiwQnKEHOvCQmjaNbOGW',
    subtitle: 'Strategic Content',
    description: 'Strategic approach to messaging and structure, ensuring the creative supports the campaign objective and drives user action.'
  },
  { 
    id: 'pm5', 
    title: 'Performance Analysis', 
    category: 'PAID MEDIA', 
    imageUrl: 'https://lh3.googleusercontent.com/d/1H8c9b-S1Xn-DgwLUfpHcBhPWzB9sgNMk',
    subtitle: 'Optimization & Metrics',
    description: 'Analysis of key indicators such as reach, impressions, and cost-related metrics to guide optimization decisions.'
  },
  
  // AUTOMATION
];

export const SKILLS: Skill[] = [
  { name: 'Content Strategy', level: 95 },
  { name: 'SEO & Copywriting', level: 90 },
  { name: 'Paid Media (Meta, Google, TikTok)', level: 92 },
  { name: 'Lead Gen & Conversion', level: 88 },
  { name: 'Social Media Management', level: 94 },
  { name: 'Performance Marketing', level: 90 },
  { name: 'KPIs & Analytics', level: 85 },
  { name: 'Audience Analysis', level: 85 },
  { name: 'Marketing Automation', level: 80 },
  { name: 'Adobe Creative Suite', level: 85 }
];

export const EDUCATION: Education[] = [
  { degree: 'Bachelor’s Degree in Social Communication and Journalism', institution: 'Autonomous University of the West', period: '2016 – 2022' },
  { degree: 'Google Ads Certification', institution: 'Coderhouse', period: '2024' },
  { degree: 'Content Marketing', institution: 'HubSpot', period: '2022' },
  { degree: 'Digital Marketing', institution: 'Udemy', period: '2022' },
  { degree: 'Podcast Creation', institution: 'Crehana', period: '2022' },
  { degree: 'Diploma in Creative Writing', institution: 'Comfandi', period: '2020 - 2021' }
];

export const LANGUAGES: Language[] = [
  { name: 'Spanish', level: 'Native' },
  { name: 'English', level: 'B2' },
  { name: 'Portuguese', level: 'B1' }
];

export const BIO = "Digital Marketing and Content Specialist with 6+ years of experience in content strategy, SEO, and paid media. Proven ability to lead content initiatives, optimize performance through analytics, and scale multi-brand digital strategies aligned with business objectives.";

export const CATEGORY_SLUGS: Record<Category, string> = {
  'ABOUT ME': 'about',
  'DESIGN': 'design',
  'VIDEO': 'video',
  'PHOTOGRAPHY': 'photography',
  'SEO': 'seo',
  'PAID MEDIA': 'paid-media',
  'AUTOMATION': 'automation',
  'CONTACT': 'contact'
};

export const EXPERIENCES: Experience[] = [
  {
    company: 'Orbidi (Plinng)',
    role: 'Content Specialist',
    period: '2025-Present',
    description: 'Lead 360° content strategies across multiple brands (social media, SEO, visual content). Drive process innovation to improve visibility and conversions. Creation of multimedia assets aligned with corporate objectives.'
  },
  {
    company: 'Orbidi',
    role: 'Digital Marketing Specialist',
    period: '2024-2025',
    description: 'Development and execution of social media strategies for the Spanish market. Creation of content plans and copy optimized based on audience analysis. Tactical improvement of performance on digital platforms.'
  },
  {
    company: 'La Estación Shopping Mall',
    role: 'Marketing Specialist',
    period: '2022-2024',
    description: 'Planning and optimization of paid advertising campaigns (Meta, TikTok, Google Ads). Execution of digital communication strategies to increase brand visibility and manage editorial calendars.'
  },
  {
    company: 'Coldi Digital Agency',
    role: 'Community Manager',
    period: '2022',
    description: 'Strategic management of corporate social media accounts. Audiovisual content creation and SEO-focused copy writing.'
  },
  {
    company: 'El País (Newspaper)',
    role: 'Reporter',
    period: '2020-2021',
    description: 'Journalistic research and SEO-focused writing for web articles and print media. Production of multimedia reports.'
  }
];
