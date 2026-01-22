// Chat responses for Lab Assistant
// Keyword-based matching system

export const chatResponses = [
  {
    id: 'welcome',
    keywords: [],
    isWelcome: true,
    response: `Welcome to the Libreros Lab terminal.

I can answer questions about our research, team, and how to contact us.

Type your question below.`
  },
  {
    id: 'pi',
    keywords: ['stephania', 'libreros', 'pi', 'principal', 'investigator', 'director', 'quien', 'who', 'lead', 'jefe', 'jefa'],
    response: `Dr. Stephania Libreros, PhD
Assistant Professor
Department of Pathology
Yale School of Medicine

Her research focuses on elucidating biochemical, immunological, and molecular mechanisms that restore systemic and organ-specific homeostasis after pathological challenges.

ORCID: 0000-0002-2973-5014`
  },
  {
    id: 'research',
    keywords: ['research', 'investigacion', 'study', 'trabajo', 'focus', 'enfoque', 'what do you study', 'que estudian'],
    response: `Our research centers on understanding why inflammation resolution mechanisms sometimes fail, leading to chronic disease.

Key areas:
- Resolution of Inflammation
- Specialized Pro-Resolving Mediators (SPMs)
- Neutrophil Biology
- Lipid Mediator Metabolism

We aim to develop new therapeutic strategies for inflammatory diseases.`
  },
  {
    id: 'spms',
    keywords: ['spm', 'spms', 'resolvin', 'protectin', 'maresin', 'mediator', 'lipid', 'pro-resolving', 'proresolutivo'],
    response: `Specialized Pro-Resolving Mediators (SPMs) are our core research focus.

These include:
- Resolvins (from omega-3 fatty acids)
- Protectins (neuroprotective)
- Maresins (macrophage mediators)

SPMs actively promote the resolution of inflammation and tissue regeneration without immunosuppression.`
  },
  {
    id: 'inflammation',
    keywords: ['inflammation', 'inflamacion', 'chronic', 'cronica', 'acute', 'aguda', 'resolve', 'resolution'],
    response: `Inflammation Resolution Research

We study why the body's natural resolution mechanisms sometimes fail, leading to:
- Chronic inflammatory diseases
- Autoimmune conditions
- Tissue damage

Our goal: understand these failures to develop new treatments that enhance natural resolution pathways.`
  },
  {
    id: 'neutrophils',
    keywords: ['neutrophil', 'neutrofilo', 'leukocyte', 'leucocito', 'white blood', 'immune cell', 'innate'],
    response: `Neutrophil Biology

Neutrophils are key players in inflammation and its resolution.

We investigate:
- How neutrophil deployment is regulated
- Their role in infection clearance
- How they contribute to tissue repair
- Why dysregulated neutrophils cause chronic inflammation`
  },
  {
    id: 'contact',
    keywords: ['contact', 'contacto', 'email', 'phone', 'telefono', 'reach', 'comunicar', 'write', 'escribir'],
    response: `Contact Information

Email: stephania.libreros@yale.edu
Phone: 203.737.1036

We welcome inquiries about:
- Research collaborations
- Graduate opportunities
- Postdoctoral positions`
  },
  {
    id: 'location',
    keywords: ['location', 'ubicacion', 'address', 'direccion', 'where', 'donde', 'office', 'oficina', 'lab', 'laboratorio', 'building'],
    response: `Lab Location

Laboratory: 10 Amistad Street
New Haven, CT 06519

Office: 10 Amistad Street
Floor 4, Room 401A
New Haven, CT 06519

Part of the Vascular Biology and Therapeutics Program at Yale School of Medicine.`
  },
  {
    id: 'team',
    keywords: ['team', 'equipo', 'member', 'miembro', 'student', 'estudiante', 'postdoc', 'people', 'gente', 'quien trabaja', 'who works'],
    response: `Our Team

The Libreros Lab welcomes talented researchers at all levels:
- Graduate Students
- Postdoctoral Fellows
- Research Associates

Interested in joining? Contact us at stephania.libreros@yale.edu`
  },
  {
    id: 'publications',
    keywords: ['publication', 'publicacion', 'paper', 'articulo', 'journal', 'revista', 'published', 'publicado', 'read', 'leer'],
    response: `Publications

Dr. Libreros has published extensively on inflammation resolution and SPMs.

Key journals include:
- Nature Reviews Immunology
- Journal of Clinical Investigation
- PNAS
- Journal of Immunology

Visit our Publications section for the full list.`
  },
  {
    id: 'yale',
    keywords: ['yale', 'university', 'universidad', 'school', 'escuela', 'medicine', 'medicina', 'pathology', 'patologia'],
    response: `Yale Affiliation

Department of Pathology
Yale School of Medicine

Programs:
- Vascular Biology and Therapeutics Program
- Immunobiology Graduate Program

Yale provides world-class resources for our inflammation resolution research.`
  },
  {
    id: 'join',
    keywords: ['join', 'unir', 'apply', 'aplicar', 'position', 'posicion', 'opportunity', 'oportunidad', 'work', 'trabajar', 'hiring', 'contratando'],
    response: `Join Our Lab

We are always looking for motivated researchers.

Open to:
- PhD Students (Immunobiology program)
- Postdoctoral Fellows
- Research Technicians

Requirements:
- Strong interest in immunology
- Background in biochemistry or cell biology
- Commitment to rigorous research

Contact: stephania.libreros@yale.edu`
  },
  {
    id: 'help',
    keywords: ['help', 'ayuda', 'how', 'como', 'what can', 'que puedes', 'commands', 'comandos'],
    response: `Available Topics

You can ask me about:
- Dr. Libreros (PI)
- Research focus
- SPMs and inflammation
- Lab location
- Contact information
- Team members
- Publications
- Joining the lab

Just type your question naturally.`
  }
];

// Fallback response when no keywords match
export const fallbackResponse = `I'm not sure I understand that question.

Try asking about:
- Our research focus
- Dr. Libreros
- How to contact us
- Lab location
- Joining the team

Or type "help" for all available topics.`;

// Function to find best matching response
export const findResponse = (input) => {
  const normalizedInput = input.toLowerCase().trim();

  // Check each response's keywords
  let bestMatch = null;
  let maxMatches = 0;

  for (const item of chatResponses) {
    if (item.isWelcome) continue;

    const matches = item.keywords.filter(keyword =>
      normalizedInput.includes(keyword.toLowerCase())
    ).length;

    if (matches > maxMatches) {
      maxMatches = matches;
      bestMatch = item;
    }
  }

  return bestMatch ? bestMatch.response : fallbackResponse;
};

// Get welcome message
export const getWelcomeMessage = () => {
  const welcome = chatResponses.find(r => r.isWelcome);
  return welcome ? welcome.response : 'Welcome to Libreros Lab.';
};
