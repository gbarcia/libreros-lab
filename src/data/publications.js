export const publications = [
  {
    id: 1,
    title: "Infectious neutrophil deployment is regulated by resolvin D4",
    authors: "Libreros S, Nshimiyimana R, Lee B, Serhan C",
    journal: "Blood",
    year: 2023,
    volume: "142",
    pages: "589-606",
    pmid: "37295018",
    doi: "10.1182/blood.2022019145",
    citations: 18,
    featured: true
  },
  {
    id: 2,
    title: "Hypoxic environment-activated resolution metabolomes",
    authors: "Norris P, Libreros S, Serhan C",
    journal: "Science Advances",
    year: 2019,
    volume: "5",
    pages: "eaax4895",
    pmid: "31681846",
    doi: "10.1126/sciadv.aax4895",
    citations: 77,
    featured: true
  },
  {
    id: 3,
    title: "Lipid mediators in neutrophil biology: inflammation, resolution and beyond",
    authors: "Ghodsi A, Hidalgo A, Libreros S",
    journal: "Current Opinion In Hematology",
    year: 2024,
    volume: "31",
    pages: "175-192",
    pmid: "38727155",
    doi: "10.1097/moh.0000000000000822",
    citations: 11,
    featured: true
  },
  {
    id: 4,
    title: "Human macrophages differentially produce specific resolvin or leukotriene signals that depend on bacterial pathogenicity",
    authors: "Werz O, Gerstmeier J, Libreros S, De la Rosa X, Werner M, Norris P, Chiang N, Serhan C",
    journal: "Nature Communications",
    year: 2018,
    volume: "9",
    pages: "59",
    pmid: "29302056",
    doi: "10.1038/s41467-017-02538-5",
    citations: 259,
    featured: true
  },
  {
    id: 5,
    title: "A cluster of immunoresolvents links coagulation to innate host defense in human blood",
    authors: "Norris P, Libreros S, Chiang N, Serhan C",
    journal: "Science Signaling",
    year: 2017,
    volume: "10",
    pmid: "28765512",
    doi: "10.1126/scisignal.aan1471",
    citations: 64,
    featured: true
  },
  {
    id: 6,
    title: "Is Lipid Metabolism of Value in Cancer Research and Treatment? Part II: Role of Specialized Pro-Resolving Mediators in Inflammation, Infections, and Cancer",
    authors: "Babar M, Nassar A, Nie X, Zhang T, He J, Yeung J, Norris P, Ogura H, Muldoon A, Chen L, Libreros S",
    journal: "Metabolites",
    year: 2024,
    volume: "14",
    pages: "314",
    pmid: "38921449",
    doi: "10.3390/metabo14060314",
    citations: 10,
    featured: false
  },
  {
    id: 7,
    title: "Postnatal liver B cell precursors contribute to the establishment of a mature B cell pool in secondary lymphoid organs in mice",
    authors: "Mafra K, de Oliveira M, Nakagaki B, Porto Pedrosa M, Lanser T, da Silva P, et al., Libreros S, Rezende R, Menezes G",
    journal: "The Journal Of Immunology",
    year: 2025,
    pmid: "41138221",
    doi: "10.1093/jimmun/vkaf264",
    citations: 0,
    featured: false
  },
  {
    id: 8,
    title: "SiO2 nanoparticles as disruptors of endogenous resolution mechanisms of inflammatory responses that exacerbate pneumonia",
    authors: "Tavares L, Libreros S, Bitounis D, Nshimiyimana R, Demokritou P, Serhan C, Levy B",
    journal: "Scientific Reports",
    year: 2025,
    volume: "15",
    pages: "6398",
    pmid: "39984537",
    doi: "10.1038/s41598-025-89700-y",
    citations: 0,
    featured: false
  },
  {
    id: 9,
    title: "Endothelial γ-protocadherins inhibit KLF2 and KLF4 to promote atherosclerosis",
    authors: "Joshi D, Coon B, Chakraborty R, Deng H, Yang Z, Babar M, et al., Libreros S, Schwartz M",
    journal: "Nature Cardiovascular Research",
    year: 2024,
    volume: "3",
    pages: "1035-1048",
    pmid: "39232138",
    doi: "10.1038/s44161-024-00522-z",
    citations: 12,
    featured: false
  }
];

export const getFeaturedPublications = () => publications.filter(p => p.featured);
export const getRecentPublications = () => publications.slice(0, 5);
