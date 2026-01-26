// Media gallery data for the Beeper component
// Contains videos and images from lab research

export const mediaItems = [
  // Videos
  {
    id: 1,
    type: 'video',
    title: 'Neutrophil Migration 3D',
    description: '3D visualization of neutrophil migration in response to LTB4, showing infectious deployment and cellular chemotaxis.',
    src: '/videos/3D_LTB4_MT_1215240320_NeutroLTB4vsVhcl_2ndTake_SELECTA.mp4',
    category: 'microscopy'
  },
  {
    id: 2,
    type: 'video',
    title: 'City of Macropolis',
    description: 'Artistic representation of the macrophage microenvironment - a floating city where immune cells work in harmony.',
    src: '/videos/Floating_City_of_Macropolis_Libreros_Yale.mp4',
    category: 'visualization'
  },
  {
    id: 3,
    type: 'video',
    title: 'RvD4 Efferocytosis',
    description: 'Resolvin D4-mediated efferocytosis process - how macrophages clear apoptotic cells to resolve inflammation.',
    src: '/videos/v2RvD4 Efferocytosis Figure 6C_.mov',
    category: 'microscopy'
  },
  {
    id: 4,
    type: 'video',
    title: 'Lab Footage',
    description: 'Footage from the Libreros Lab at Yale School of Medicine.',
    src: '/videos/IMG_6878_CA775D17-5E70-424A-B9D6-EE1518738513.mp4',
    category: 'lab'
  },
  // Images
  {
    id: 5,
    type: 'image',
    title: 'Resolvin D4 Structure',
    description: 'Molecular structure of Resolvin D4 (RvD4), a specialized pro-resolving mediator derived from DHA.',
    src: '/videos/RvD4.png',
    category: 'molecular'
  },
  {
    id: 6,
    type: 'image',
    title: 'Phagocytosis RvD1',
    description: 'Resolvin D1-mediated phagocytosis - microscopic capture of the pathogen clearance process.',
    src: '/videos/1st Phagocytosis RvD1 .jpg',
    category: 'microscopy'
  },
  {
    id: 7,
    type: 'image',
    title: 'Neutrophil Illustration',
    description: 'Illustration of a neutrophil - a key immune cell in acute inflammatory response and its resolution.',
    src: '/videos/Libreros Neutrophil .png',
    category: 'illustration'
  },
  {
    id: 8,
    type: 'image',
    title: 'Efferocytosis Illustration',
    description: 'Illustration of the efferocytosis process - programmed clearance of apoptotic cells by macrophages.',
    src: '/videos/Libreros Efferocytosis .png',
    category: 'illustration'
  }
];

export const galleryInfo = {
  title: 'Lab Media Gallery',
  description: 'Research visualizations and microscopy from the Libreros Lab'
};

export default mediaItems;
