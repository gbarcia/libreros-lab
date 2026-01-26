// Media gallery data for the Beeper component
// Contains videos and images from lab research

export const mediaItems = [
  // Videos
  {
    id: 1,
    type: 'video',
    title: 'Neutrophil Migration 3D',
    description: 'Visualización 3D de la migración de neutrófilos en respuesta a LTB4, mostrando el despliegue infeccioso y la quimiotaxis celular.',
    src: '/videos/3D_LTB4_MT_1215240320_NeutroLTB4vsVhcl_2ndTake_SELECTA.mp4',
    category: 'microscopy'
  },
  {
    id: 2,
    type: 'video',
    title: 'City of Macropolis',
    description: 'Representación artística del microambiente de macrófagos - una ciudad flotante donde las células inmunes trabajan en armonía.',
    src: '/videos/Floating_City_of_Macropolis_Libreros_Yale.mp4',
    category: 'visualization'
  },
  {
    id: 3,
    type: 'video',
    title: 'RvD4 Efferocytosis',
    description: 'Proceso de efferocitosis mediado por Resolvina D4 - cómo los macrófagos eliminan células apoptóticas para resolver la inflamación.',
    src: '/videos/v2RvD4 Efferocytosis Figure 6C_.mov',
    category: 'microscopy'
  },
  {
    id: 4,
    type: 'video',
    title: 'Lab Footage',
    description: 'Imágenes del laboratorio Libreros en Yale School of Medicine.',
    src: '/videos/IMG_6878_CA775D17-5E70-424A-B9D6-EE1518738513.mp4',
    category: 'lab'
  },
  // Images
  {
    id: 5,
    type: 'image',
    title: 'Resolvin D4 Structure',
    description: 'Estructura molecular de la Resolvina D4 (RvD4), un mediador prorresolutivo especializado derivado del DHA.',
    src: '/videos/RvD4.png',
    category: 'molecular'
  },
  {
    id: 6,
    type: 'image',
    title: 'Phagocytosis RvD1',
    description: 'Fagocitosis mediada por Resolvina D1 - captura microscópica del proceso de eliminación de patógenos.',
    src: '/videos/1st Phagocytosis RvD1 .jpg',
    category: 'microscopy'
  },
  {
    id: 7,
    type: 'image',
    title: 'Neutrophil Illustration',
    description: 'Ilustración de un neutrófilo - célula inmune clave en la respuesta inflamatoria aguda y su resolución.',
    src: '/videos/Libreros Neutrophil .png',
    category: 'illustration'
  },
  {
    id: 8,
    type: 'image',
    title: 'Efferocytosis Illustration',
    description: 'Ilustración del proceso de efferocitosis - eliminación programada de células apoptóticas por macrófagos.',
    src: '/videos/Libreros Efferocytosis .png',
    category: 'illustration'
  }
];

export const galleryInfo = {
  title: 'Lab Media Gallery',
  description: 'Visualizaciones de investigación y microscopías del Libreros Lab'
};

export default mediaItems;
