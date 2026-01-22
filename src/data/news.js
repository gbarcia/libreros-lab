export const news = [
  {
    id: 1,
    date: '2024-10-02',
    title: 'Katz Lab Awarded NIH Grant to Study Role of BOK Protein in Cell Death Pathway',
    excerpt: 'Collaborative research continues at Yale pathology department.',
    link: null,
    type: 'department'
  },
  {
    id: 2,
    date: '2024-01-09',
    title: 'Recap & Reflections: Vascular Biology & Therapeutics Program & Cardiovascular Research Center 2023 Retreat',
    excerpt: 'Annual retreat highlights collaborative research efforts.',
    link: null,
    type: 'program'
  },
  {
    id: 3,
    date: '2023-10-12',
    title: 'Charting New Horizons in Medicine: An Inspiring Conversation with Dr. Stephania Libreros',
    excerpt: 'Dr. Libreros discusses her research vision and path to Yale.',
    link: null,
    type: 'feature',
    featured: true
  },
  {
    id: 4,
    date: '2023-08-22',
    title: 'Stephania Libreros, PhD, Receives NIH Pathway to Independence Award',
    excerpt: 'Dr. Libreros receives prestigious K99/R00 award from NIH supporting her transition to independent research.',
    link: null,
    type: 'award',
    featured: true
  },
  {
    id: 5,
    date: '2023-09-26',
    title: 'Early Investigator Career Award',
    excerpt: 'Dr. Libreros receives international recognition from the Society for Leukocyte Biology.',
    link: null,
    type: 'award'
  },
  {
    id: 6,
    date: '2022-11-01',
    title: 'Santosh Nigam "Outstanding Young Scientist" Award',
    excerpt: 'Eicosanoid Research Foundation recognizes Dr. Libreros\' contributions to the field.',
    link: null,
    type: 'award'
  }
];

export const getFeaturedNews = () => news.filter(n => n.featured);
export const getRecentNews = (count = 5) => news.slice(0, count);
export const getAwards = () => news.filter(n => n.type === 'award');
