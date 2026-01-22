// Configuration for desk items and their navigation targets
export const deskItems = [
  {
    id: 'folder',
    component: 'Folder',
    section: 'pi',
    label: 'Principal Investigator',
    position: {
      desktop: { top: '10%', left: '5%' },
      mobile: { top: '8%', left: '5%' }
    },
    rotation: -8,
    interactive: true
  },
  {
    id: 'terminal',
    component: 'Terminal',
    section: 'research',
    label: 'Research',
    position: {
      desktop: { top: '5%', right: '5%' },
      mobile: { top: '5%', right: '5%' }
    },
    rotation: 2,
    interactive: true
  },
  {
    id: 'notebook',
    component: 'Notebook',
    section: 'publications',
    label: 'Publications',
    position: {
      desktop: { bottom: '25%', left: '30%' },
      mobile: null // Hidden on mobile
    },
    rotation: 5,
    interactive: true
  },
  {
    id: 'flask',
    component: 'Flask',
    section: 'team',
    label: 'Team',
    position: {
      desktop: { bottom: '30%', left: '18%' },
      mobile: { bottom: '35%', left: '10%' }
    },
    rotation: -3,
    interactive: true
  },
  {
    id: 'microscope',
    component: 'Microscope',
    section: 'news',
    label: 'News & Awards',
    position: {
      desktop: { bottom: '20%', right: '15%' },
      mobile: null // Hidden on mobile
    },
    rotation: 0,
    interactive: true
  },
  {
    id: 'envelope',
    component: 'Envelope',
    section: 'contact',
    label: 'Contact',
    position: {
      desktop: { bottom: '35%', right: '8%' },
      mobile: { bottom: '30%', right: '10%' }
    },
    rotation: 8,
    interactive: true
  },
  {
    id: 'coffee',
    component: 'CoffeeCup',
    section: null,
    label: null,
    position: {
      desktop: { bottom: '15%', right: '30%' },
      mobile: { bottom: '35%', right: '15%' }
    },
    rotation: 0,
    interactive: false // Decorative only
  },
  {
    id: 'pen',
    component: 'Pen',
    section: null,
    label: null,
    position: {
      desktop: { bottom: '20%', left: '55%' },
      mobile: null // Hidden on mobile
    },
    rotation: -35,
    interactive: false // Decorative only
  },
  {
    id: 'testTubes',
    component: 'TestTubes',
    section: null,
    label: null,
    position: {
      desktop: { bottom: '40%', left: '45%' },
      mobile: null // Hidden on mobile
    },
    rotation: 5,
    interactive: false // Decorative only
  },
  {
    id: 'pipette',
    component: 'Pipette',
    section: null,
    label: null,
    position: {
      desktop: { bottom: '45%', right: '25%' },
      mobile: null // Hidden on mobile
    },
    rotation: -20,
    interactive: false // Decorative only
  }
];

export const getInteractiveItems = () => deskItems.filter(item => item.interactive);
export const getDecorativeItems = () => deskItems.filter(item => !item.interactive);
export const getItemBySection = (section) => deskItems.find(item => item.section === section);
