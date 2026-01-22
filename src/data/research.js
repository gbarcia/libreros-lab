export const researchAreas = [
  {
    id: 'resolution',
    title: 'Resolution of Inflammation',
    description: 'Elucidating the biochemical, immunological, and molecular mechanisms that restore systemic and organ-specific homeostasis after pathological challenges.',
    icon: 'molecule',
    keywords: ['homeostasis', 'inflammation', 'resolution', 'tissue repair']
  },
  {
    id: 'spms',
    title: 'Specialized Pro-Resolving Mediators',
    description: 'Discovering new pro-resolving mediators and circuits that enhance host protection, promote microbial clearance, and facilitate tissue regeneration.',
    icon: 'lipid',
    keywords: ['resolvins', 'protectins', 'maresins', 'lipid mediators']
  },
  {
    id: 'neutrophils',
    title: 'Neutrophil Biology',
    description: 'Understanding how neutrophil deployment is regulated during infection and how resolution pathways control their activity.',
    icon: 'cell',
    keywords: ['neutrophils', 'leukocytes', 'innate immunity', 'infection']
  },
  {
    id: 'chronic',
    title: 'Chronic Inflammation',
    description: 'Investigating why resolution mechanisms sometimes fail, leading to chronic inflammation and tissue damage.',
    icon: 'warning',
    keywords: ['chronic disease', 'autoimmunity', 'tissue damage', 'failed resolution']
  }
];

export const researchOverview = {
  title: 'Research Focus',
  summary: `Our research centers on a key scientific challenge in human pathophysiology: how to harness endogenous resolution-of-inflammation mechanisms when initial resolution fails.

From birth, our bodies are continuously exposed to a myriad of environmental factors, pathogens, and injuries that trigger acute inflammatory responses. These responses are crucial for fighting infections, healing wounds, and safeguarding overall health.

Ideally, these inflammatory reactions are self-limited, leading to complete resolution of leukocyte infiltration and clearance of cellular debris by macrophages, thus restoring and maintaining tissue homeostasis.

The mechanisms involved in the resolution of inflammation are essential for preventing excessive tissue damage, autoimmunity, and progression to chronic inflammation.`,
  healthInterests: [
    'Immunology',
    'Infectious Diseases',
    'Metabolism',
    'Aging'
  ]
};

export const keyFindings = [
  {
    title: 'Resolvin D4 Regulation',
    description: 'Discovered that resolvin D4 regulates infectious neutrophil deployment',
    publication: 'Blood 2023'
  },
  {
    title: 'Hypoxic Metabolomes',
    description: 'Identified resolution metabolomes activated by hypoxic environments',
    publication: 'Science Advances 2019'
  },
  {
    title: 'Macrophage Specificity',
    description: 'Showed that human macrophages differentially produce resolvins vs leukotrienes based on bacterial pathogenicity',
    publication: 'Nature Communications 2018'
  }
];
