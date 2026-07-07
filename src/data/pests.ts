export interface Pest {
  id: string;
  name: string;
  scientificName: string;
  category: 'rodents' | 'insects_crawling' | 'insects_flying' | 'birds_mammals' | 'biting_stinging';
  categoryLabel: string;
  threatLevel: 'Low' | 'Medium' | 'High' | 'Severe';
  threatColor: string;
  activeSeasons: string[];
  description: string;
  treatment: string[];
  preventativeTips: string[];
  startingPrice: number;
  imageUrl: string;
}

const rawPestsData: Omit<Pest, 'startingPrice' | 'imageUrl'>[] = [
  {
    id: "american-cockroaches",
    name: "American Cockroaches",
    scientificName: "Periplaneta americana",
    category: "insects_crawling",
    categoryLabel: "Crawling Insects",
    threatLevel: "High",
    threatColor: "text-red-500 bg-red-500/10 border-red-500/20",
    activeSeasons: ["Summer", "Autumn", "Year-round indoors"],
    description: "One of the largest pest cockroaches, known for their reddish-brown color, rapid movement, and tendency to seek warm, damp areas such as sewers, basements, and commercial kitchens.",
    treatment: [
      "Targeted insecticidal gel bait application in crevices",
      "Residual barrier spray treatment around entry points",
      "Non-toxic pheromone monitoring traps"
    ],
    preventativeTips: [
      "Seal cracks in floors and walls",
      "Keep food storage areas strictly clean and dry",
      "Repair leaking plumbing fixtures immediately"
    ]
  },
  {
    id: "bed-bugs",
    name: "Bed Bugs",
    scientificName: "Cimex lectularius",
    category: "biting_stinging",
    categoryLabel: "Biting & Stinging",
    threatLevel: "Severe",
    threatColor: "text-rose-600 bg-rose-600/10 border-rose-600/20",
    activeSeasons: ["Year-round"],
    description: "Extremely resilient, small, flat parasitic insects that feed exclusively on blood, typically during the night. They harbor in mattresses, headboards, and furniture crevices.",
    treatment: [
      "Ultra-high heat chamber treatment for infested items",
      "Meticulous insecticidal spray targeting harboring zones",
      "Steam cleaning and mattress encasements"
    ],
    preventativeTips: [
      "Inspect luggage thoroughly after traveling",
      "Avoid bringing second-hand mattresses or bedframes inside without verification",
      "Wash and dry bedding at high temperatures regularly"
    ]
  },
  {
    id: "biscuit-beetles",
    name: "Biscuit Beetles",
    scientificName: "Stegobium paniceum",
    category: "insects_crawling",
    categoryLabel: "Crawling Insects",
    threatLevel: "Low",
    threatColor: "text-yellow-600 bg-yellow-600/10 border-yellow-600/20",
    activeSeasons: ["Spring", "Summer"],
    description: "Also known as drugstore beetles, these tiny brown beetles are notorious pantry pests that infest dried food packages, flour, spices, and even pharmaceutical products.",
    treatment: [
      "Identification and disposal of infected food stocks",
      "Thorough deep-clean vacuuming of kitchen shelves",
      "Localized botanical residual insecticide treatment"
    ],
    preventativeTips: [
      "Store dried foods in airtight glass or thick plastic containers",
      "Clean up flour and crumb spills promptly",
      "Inspect newly bought cereal packets for signs of entry"
    ]
  },
  {
    id: "book-lice",
    name: "Book Lice",
    scientificName: "Liposcelis spp.",
    category: "insects_crawling",
    categoryLabel: "Crawling Insects",
    threatLevel: "Low",
    threatColor: "text-yellow-600 bg-yellow-600/10 border-yellow-600/20",
    activeSeasons: ["Summer", "Autumn"],
    description: "Minute, wingless, translucent insects that feed on microscopic molds, starch, and fungi. They thrive in damp, humid environments, especially on damp books, plaster, or wallpaper.",
    treatment: [
      "Dehumidification of affected spaces to below 50% humidity",
      "Targeted micro-fine aerosol sprays for heavy infestations",
      "Mold eradication treatment"
    ],
    preventativeTips: [
      "Keep home relative humidity low with ventilation",
      "Ensure books and papers are stored in dry, well-ventilated cupboards",
      "Address localized dampness or leaking pipes immediately"
    ]
  },
  {
    id: "brown-house-moths",
    name: "Brown House Moths",
    scientificName: "Hofmannophila pseudospretella",
    category: "insects_flying",
    categoryLabel: "Flying Insects",
    threatLevel: "Medium",
    threatColor: "text-orange-500 bg-orange-500/10 border-orange-500/20",
    activeSeasons: ["Spring", "Summer", "Autumn"],
    description: "Common domestic pest whose larvae feed on a wide range of organic materials including carpets, clothing, upholstery, feathers, and stored grains.",
    treatment: [
      "Pheromone glue traps to monitor and disrupt mating",
      "Extensive vacuuming followed by fiber-safe insecticide spray",
      "Heat treatment of delicate infested clothing"
    ],
    preventativeTips: [
      "Regularly vacuum under heavy furniture and along baseboards",
      "Clean woolen clothes before storing them for the winter",
      "Keep food cupboards clear of organic debris"
    ]
  },
  {
    id: "carpet-beetle",
    name: "Carpet Beetle",
    scientificName: "Anthrenus verbasci",
    category: "insects_crawling",
    categoryLabel: "Crawling Insects",
    threatLevel: "Medium",
    threatColor: "text-orange-500 bg-orange-500/10 border-orange-500/20",
    activeSeasons: ["Spring", "Summer"],
    description: "Small, oval beetles. While adults feed on pollen, their bristly larvae (known as 'woolly bears') ravenously devour carpets, clothing, fur, feathers, and biological specimens.",
    treatment: [
      "Intense deep extraction vacuuming of carpets and crevices",
      "Application of persistent, fiber-safe residual insecticide",
      "Dust formulation treatment in void spaces under floors"
    ],
    preventativeTips: [
      "Inspect second-hand textiles and rugs before introduction",
      "Remove bird nests from gutters or lofts, as they harbor beetles",
      "Regularly vacuum carpets, focusing on edges and corners"
    ]
  },
  {
    id: "cat-and-dog-fleas",
    name: "Cat and Dog Fleas",
    scientificName: "Ctenocephalides felis / canis",
    category: "biting_stinging",
    categoryLabel: "Biting & Stinging",
    threatLevel: "High",
    threatColor: "text-red-500 bg-red-500/10 border-red-500/20",
    activeSeasons: ["Summer", "Autumn", "Year-round indoors"],
    description: "Tiny, wingless, jumping parasites that bite hosts to feed on blood. Their saliva causes severe itching, dermatitis, and potential allergic reactions in pets and humans.",
    treatment: [
      "Environmental spray treatment with insect growth regulators (IGR)",
      "High-suction vacuuming to trigger pupae emergence before treatment",
      "Targeted treatment of pet sleeping quarters"
    ],
    preventativeTips: [
      "Apply veterinarian-approved flea treatment to pets regularly",
      "Wash pet bedding frequently at temperatures above 60°C",
      "Vacuum carpets and upholstery daily during outbreaks"
    ]
  },
  {
    id: "clothes-moths",
    name: "Clothes Moths",
    scientificName: "Tineola bisselliella",
    category: "insects_flying",
    categoryLabel: "Flying Insects",
    threatLevel: "High",
    threatColor: "text-red-500 bg-red-500/10 border-red-500/20",
    activeSeasons: ["Spring", "Summer", "Year-round indoors"],
    description: "The bane of high-end wardrobes; these small golden moths lay eggs on wool, silk, cashmere, and feathers. The larvae feed on keratin, leaving unsightly holes in garments.",
    treatment: [
      "Full closet inspection and textile sanitation",
      "ULV (Ultra Low Volume) fogging for severe active room infestations",
      "Scentless, wool-safe residual insecticide treatments"
    ],
    preventativeTips: [
      "Store vulnerable clothing in airtight garment bags or cedar boxes",
      "Brush out wool garments after wear to disrupt delicate moth eggs",
      "Keep wardrobes ventilated and exposed to natural light occasionally"
    ]
  },
  {
    id: "common-rat",
    name: "Common Rat",
    scientificName: "Rattus norvegicus",
    category: "rodents",
    categoryLabel: "Rodents",
    threatLevel: "Severe",
    threatColor: "text-rose-600 bg-rose-600/10 border-rose-600/20",
    activeSeasons: ["Year-round", "Autumn peaks"],
    description: "Also known as the brown rat, this aggressive burrower carries dangerous pathogens (Weil's disease, Salmonella) and causes severe structural damage by gnawing cables and pipes.",
    treatment: [
      "Secure tamper-resistant rodenticide bait stations",
      "Comprehensive structural proofing using wire mesh and steel wool",
      "Drainage inspection via CCTV to isolate sewer ingress points"
    ],
    preventativeTips: [
      "Ensure compost heaps and rubbish bins are fully secured",
      "Block external holes larger than 15mm with heavy mesh",
      "Do not leave pet food or bird seed on the ground overnight"
    ]
  },
  {
    id: "french-wasps",
    name: "French Wasps",
    scientificName: "Vespula germanica",
    category: "biting_stinging",
    categoryLabel: "Biting & Stinging",
    threatLevel: "High",
    threatColor: "text-red-500 bg-red-500/10 border-red-500/20",
    activeSeasons: ["Summer", "Autumn"],
    description: "Also known as European wasps, these are highly aggressive social insects that build grey paper nests in wall cavities, lofts, or underground. They deliver painful, repeatable stings.",
    treatment: [
      "Pressurized insecticidal powder injection into nest entry holes",
      "Full physical nest removal when accessible and safe",
      "Pheromone-trapping arrays for outdoor commercial dining areas"
    ],
    preventativeTips: [
      "Keep food and sugary drinks covered when dining outdoors",
      "Seal holes in external brickwork and soffit boards",
      "Hang fake decoy wasp nests to deter queens in spring"
    ]
  },
  {
    id: "fruit-and-filter-flies",
    name: "Fruit and Filter Flies",
    scientificName: "Drosophila spp. / Psychodidae",
    category: "insects_flying",
    categoryLabel: "Flying Insects",
    threatLevel: "Medium",
    threatColor: "text-orange-500 bg-orange-500/10 border-orange-500/20",
    activeSeasons: ["Summer", "Autumn"],
    description: "Small flies that breed rapidly in decaying organic matter, drains, compost bins, or wet trash. Common in kitchens, bars, and food preparation facilities.",
    treatment: [
      "Drain treatment using microbial gel to digest organic slime",
      "Pheromone fluid traps and electric UV light traps",
      "Meticulous cleaning recommendations of harborage zones"
    ],
    preventativeTips: [
      "Keep fruit refrigerated and discard rotting produce immediately",
      "Flush drains regularly with boiling water or specialized enzyme cleaners",
      "Ensure kitchen trash bins have tightly sealing lids"
    ]
  },
  {
    id: "fungus-gnat",
    name: "Fungus Gnat",
    scientificName: "Sciaridae",
    category: "insects_flying",
    categoryLabel: "Flying Insects",
    threatLevel: "Low",
    threatColor: "text-yellow-600 bg-yellow-600/10 border-yellow-600/20",
    activeSeasons: ["Year-round indoors", "Spring peaks"],
    description: "Tiny black flies frequently seen flying around house plants. While adults are harmless nuisance pests, their soil-dwelling larvae can feed on delicate plant root hairs.",
    treatment: [
      "Soil drench treatment with safe biological agents",
      "Yellow adhesive traps to catch flying adults",
      "Moisture monitoring and plant watering adjustments"
    ],
    preventativeTips: [
      "Avoid overwatering potted house plants; let top soil dry fully",
      "Apply a layer of fine sand or gravel over plant soil to deter egg laying",
      "Ensure all house plants have excellent drainage"
    ]
  },
  {
    id: "garden-ant",
    name: "Garden Ant",
    scientificName: "Lasius niger",
    category: "insects_crawling",
    categoryLabel: "Crawling Insects",
    threatLevel: "Low",
    threatColor: "text-yellow-600 bg-yellow-600/10 border-yellow-600/20",
    activeSeasons: ["Spring", "Summer"],
    description: "The ubiquitous black ant. They nest outdoors but enter houses in huge numbers foraging for sugary foods, causing contamination issues in kitchens and pantries.",
    treatment: [
      "Hormone-based bait stations which ants carry to the queen",
      "Residual perimeter spray around doors and patio edges",
      "Crevice treatment of nesting cracks"
    ],
    preventativeTips: [
      "Wipe down surfaces immediately to remove sticky residue",
      "Keep sweet food items in sealed plastic containers",
      "Seal gaps in mortar and window frames"
    ]
  },
  {
    id: "german-cockroaches",
    name: "German Cockroaches",
    scientificName: "Blattella germanica",
    category: "insects_crawling",
    categoryLabel: "Crawling Insects",
    threatLevel: "Severe",
    threatColor: "text-rose-600 bg-rose-600/10 border-rose-600/20",
    activeSeasons: ["Year-round indoors"],
    description: "Small, highly prolific cockroaches that thrive in warm, humid areas of commercial kitchens and apartments. Extremely difficult to eradicate due to fast reproduction and bait resistance.",
    treatment: [
      "Multi-session high-efficacy gel bait rotation",
      "Insect Growth Regulators (IGR) to arrest breeding cycles",
      "Deep crack and crevice void treatment"
    ],
    preventativeTips: [
      "Avoid leaving dirty dishes in sinks overnight",
      "Clean grease residues from behind cookers and under fryers",
      "Seal electrical outlets and pipe entries between apartments"
    ]
  },
  {
    id: "ghost-ants",
    name: "Ghost Ants",
    scientificName: "Tapinoma melanocephalum",
    category: "insects_crawling",
    categoryLabel: "Crawling Insects",
    threatLevel: "Medium",
    threatColor: "text-orange-500 bg-orange-500/10 border-orange-500/20",
    activeSeasons: ["Summer", "Year-round indoors"],
    description: "Extremely tiny, pale-colored ants that seem to appear and disappear like ghosts. They feed on sweets and grease, and nest inside wall voids, plant pots, and behind baseboards.",
    treatment: [
      "Ultra-fine micro-capsule slow-acting sweet bait",
      "Precision perimeter void treatment",
      "Moisture reduction around structural footings"
    ],
    preventativeTips: [
      "Keep internal humidity low",
      "Ensure food crumbs are cleaned from inside cabinets",
      "Trim trees and shrubs away from touching house walls"
    ]
  },
  {
    id: "grey-squirrel",
    name: "Grey Squirrel",
    scientificName: "Sciurus carolinensis",
    category: "birds_mammals",
    categoryLabel: "Birds & Mammals",
    threatLevel: "High",
    threatColor: "text-red-500 bg-red-500/10 border-red-500/20",
    activeSeasons: ["Spring", "Autumn"],
    description: "An invasive mammal in the UK. They frequently break into roof spaces, chewing through heavy roof timbers, thermal insulation, and hazardous high-voltage electrical cables.",
    treatment: [
      "Humanely designed spring-loaded trapping inside loft voids",
      "Comprehensive structural proofing with heavy-gauge welded mesh",
      "Removal of tree overhanging access branches"
    ],
    preventativeTips: [
      "Cut back tree branches that reach within 3 meters of the roof",
      "Install heavy mesh over soffit vents and chimney entry points",
      "Avoid feeding squirrels in gardens"
    ]
  },
  {
    id: "house-mice",
    name: "House Mice",
    scientificName: "Mus musculus",
    category: "rodents",
    categoryLabel: "Rodents",
    threatLevel: "Severe",
    threatColor: "text-rose-600 bg-rose-600/10 border-rose-600/20",
    activeSeasons: ["Year-round", "Winter indoor peaks"],
    description: "Highly destructive rodents that reproduce rapidly. They nest in wall cavities, chew furniture, contaminate food with urine/feces, and present a persistent fire risk from wire gnawing.",
    treatment: [
      "Strategic placement of highly palatable multi-catch or bait boxes",
      "Meticulous blocking of mice-sized gaps (anything over 6mm) using copper mesh",
      "Sensory tracking dust to identify main traffic pathways"
    ],
    preventativeTips: [
      "Use door sweeps to close gaps beneath external doors",
      "Keep food items stored off the floor in sealed cupboards",
      "Keep utility cupboards clean and uncluttered"
    ]
  },
  {
    id: "indian-meal-moth",
    name: "Indian Meal Moth",
    scientificName: "Plodia interpunctella",
    category: "insects_flying",
    categoryLabel: "Flying Insects",
    threatLevel: "Medium",
    threatColor: "text-orange-500 bg-orange-500/10 border-orange-500/20",
    activeSeasons: ["Spring", "Summer", "Autumn"],
    description: "The primary pantry pest moth. Larvae spin silken webs inside cereal, nuts, dried fruits, and pet foods, making them completely unfit for consumption.",
    treatment: [
      "Full pantry inspection and disposal of infested materials",
      "Targeted pheromone mating disruption traps",
      "Crack and crevice treatment of shelving joints"
    ],
    preventativeTips: [
      "Buy dried goods in smaller quantities that are consumed quickly",
      "Clean pantry shelving crevices regularly",
      "Store bird seed and pet food in tightly sealed plastic bins"
    ]
  },
  {
    id: "larder-beetle",
    name: "Larder Beetle",
    scientificName: "Dermestes lardarius",
    category: "insects_crawling",
    categoryLabel: "Crawling Insects",
    threatLevel: "Medium",
    threatColor: "text-orange-500 bg-orange-500/10 border-orange-500/20",
    activeSeasons: ["Spring", "Summer"],
    description: "Large, dark beetles with a pale yellow band. They feed on high-protein dry matter such as cured meats, pet kibble, dead insects, skins, and feathers.",
    treatment: [
      "Identification and cleanup of organic source items",
      "Residual insecticidal dust or spray in harborages",
      "Attic clearance of old wasp nests or dead birds"
    ],
    preventativeTips: [
      "Keep cured meats refrigerated",
      "Clean behind pantry units and refrigerator motors",
      "Ensure dead bird or rodent carcasses are quickly disposed of"
    ]
  },
  {
    id: "mealworm-beetle",
    name: "Mealworm Beetle",
    scientificName: "Tenebrio molitor",
    category: "insects_crawling",
    categoryLabel: "Crawling Insects",
    threatLevel: "Low",
    threatColor: "text-yellow-600 bg-yellow-600/10 border-yellow-600/20",
    activeSeasons: ["Summer"],
    description: "The adult stage of mealworms. They feed on damp, decaying grains, bran, and general farm/pantry debris, typically indicating poor ventilation or hidden damp food deposits.",
    treatment: [
      "Removal of damp grain, animal feed, or flour bags",
      "Dehumidification of dark food storage cellars",
      "Spot target spray on structural cracks"
    ],
    preventativeTips: [
      "Keep flour and grains stored strictly dry",
      "Clean up spilled animal/bird feed immediately",
      "Ensure basement storage areas have active air circulation"
    ]
  },
  {
    id: "oriental-cockroaches",
    name: "Oriental Cockroaches",
    scientificName: "Blatta orientalis",
    category: "insects_crawling",
    categoryLabel: "Crawling Insects",
    threatLevel: "High",
    threatColor: "text-red-500 bg-red-500/10 border-red-500/20",
    activeSeasons: ["Spring", "Summer", "Year-round indoors"],
    description: "Often called 'waterbugs', these dark-colored cockroaches prefer cool, damp subterranean areas like sewers, drains, damp cellars, and under floorboards.",
    treatment: [
      "Heavy gel baiting alongside moisture reduction",
      "Drain seal maintenance and residual barrier applications",
      "External perimeter insecticide shield"
    ],
    preventativeTips: [
      "Ventilate cellars and use a dehumidifier",
      "Ensure drain covers fit tightly and are free of debris",
      "Seal crawl space entrances and floor cracks"
    ]
  },
  {
    id: "pharaohs-ants",
    name: "Pharaohs Ants",
    scientificName: "Monomorium pharaonis",
    category: "insects_crawling",
    categoryLabel: "Crawling Insects",
    threatLevel: "High",
    threatColor: "text-red-500 bg-red-500/10 border-red-500/20",
    activeSeasons: ["Year-round indoors"],
    description: "Tiny, light-yellow ants infamous for infesting hospitals. When sprayed with general insecticides, they 'bud' (split into multiple new nests), dramatically worsening the problem.",
    treatment: [
      "Strict use of specialized protein-based hormone baits (NEVER use general spray)",
      "Systematic bait mapping and monitoring across the entire property",
      "Long-term structural monitoring program"
    ],
    preventativeTips: [
      "Never spray DIY insecticide on yellow ants",
      "Keep sterile medical or kitchen environments clear of sugar",
      "Report any early sightings immediately to stop nest multiplication"
    ]
  },
  {
    id: "pigeons",
    name: "Pigeons",
    scientificName: "Columba livia",
    category: "birds_mammals",
    categoryLabel: "Birds & Mammals",
    threatLevel: "High",
    threatColor: "text-red-500 bg-red-500/10 border-red-500/20",
    activeSeasons: ["Year-round", "Spring nesting"],
    description: "Ubiquitous urban birds whose acidic droppings (guano) corrode historic building stonework, block gutters, and transmit airborne respiratory diseases (Psittacosis).",
    treatment: [
      "Installation of heavy-duty UV-stabilized exclusion netting",
      "Installation of stainless-steel bird spikes on window ledges",
      "Humane bird gel deterrents or solar panel mesh skirting"
    ],
    preventativeTips: [
      "Never feed pigeons on or near commercial premises",
      "Ensure waste bins are tightly covered to prevent food access",
      "Address standing roof puddle water where birds drink"
    ]
  },
  {
    id: "gulls",
    name: "Gulls",
    scientificName: "Larus spp.",
    category: "birds_mammals",
    categoryLabel: "Birds & Mammals",
    threatLevel: "High",
    threatColor: "text-red-500 bg-red-500/10 border-red-500/20",
    activeSeasons: ["Spring", "Summer", "Nesting season"],
    description: "Highly aggressive birds that nest on flat roofs. During nesting season (May-July), they dive-bomb pedestrians and pets to protect chicks, causing injury and noise pollution.",
    treatment: [
      "Tensioned wire systems on ledges and parapet walls",
      "Durable roof-wide anti-gull netting installations",
      "Falconry and acoustic deterrent measures (fully licensed)"
    ],
    preventativeTips: [
      "Secure industrial waste skips with locks",
      "Install bird deterrents on flat roofs before the March breeding season begins",
      "Educate staff not to feed birds"
    ]
  },
  {
    id: "red-foxes",
    name: "Red Foxes",
    scientificName: "Vulpes vulpes",
    category: "birds_mammals",
    categoryLabel: "Birds & Mammals",
    threatLevel: "Medium",
    threatColor: "text-orange-500 bg-orange-500/10 border-orange-500/20",
    activeSeasons: ["Winter breeding", "Spring cubs"],
    description: "Urban foxes search gardens and trash bins. They can establish dens under garden sheds, foul lawns with smelly feces, dig up flowerbeds, and attack small pets.",
    treatment: [
      "Humane, non-harmful olfactory repellent treatment",
      "Den exclusion and structural block-offs beneath decking/sheds",
      "Animal-safe live capture and relocation (highly regulated)"
    ],
    preventativeTips: [
      "Secure garden sheds with concrete foundations or wire borders",
      "Keep household waste bins in solid, latched enclosures",
      "Do not feed foxes or leave food scraps outdoors"
    ]
  },
  {
    id: "silverfish",
    name: "Silverfish",
    scientificName: "Lepisma saccharina",
    category: "insects_crawling",
    categoryLabel: "Crawling Insects",
    threatLevel: "Low",
    threatColor: "text-yellow-600 bg-yellow-600/10 border-yellow-600/20",
    activeSeasons: ["Year-round", "Winter indoors"],
    description: "Shiny, silver, wingless insects that move like fish. They love damp conditions and feed on starches and dextrin in book bindings, wallpaper paste, and cotton.",
    treatment: [
      "Targeted micro-pore insecticide dust in wall gaps",
      "Application of specialist bait gels in high-humidity zones",
      "Property dehumidification programs"
    ],
    preventativeTips: [
      "Ensure bathrooms are properly ventilated with active extractor fans",
      "Wipe down wet floor surfaces and seal gaps around pipes",
      "De-clutter stored paper files and books in damp cupboards"
    ]
  },
  {
    id: "starlings-and-wasps",
    name: "Starlings",
    scientificName: "Sturnus vulgaris",
    category: "birds_mammals",
    categoryLabel: "Birds & Mammals",
    threatLevel: "High",
    threatColor: "text-red-500 bg-red-500/10 border-red-500/20",
    activeSeasons: ["Summer", "Autumn"],
    description: "Common pest birds that nest in roof spaces, cavities, and eaves. They cause noise, produce corrosive droppings (guano), and harbor parasitic bird mites that can infest indoor areas.",
    treatment: [
      "Integrated roof-eave proofing to block starling bird nests",
      "Sanitation of nesting sites to eradicate parasitic bird mites",
      "Humane bird deterrent installation at entry points"
    ],
    preventativeTips: [
      "Install cowl guards on chimney pots",
      "Check roof eaves for gaps in spring before birds nest",
      "Seal under-soffit openings with professional mesh"
    ]
  }
];

const pestImageUrls: Record<string, string> = {
  "american-cockroaches": "https://pestcontrol24london.co.uk/wp-content/uploads/2025/11/Cockroaches.jpg.webp",
  "bed-bugs": "https://pestcontrol24london.co.uk/wp-content/uploads/2025/11/Bed-Bugs.jpg.webp",
  "biscuit-beetles": "https://upload.wikimedia.org/wikipedia/commons/6/65/Stegobium_paniceum_%28Linn%C3%A9%2C_1758%29_%2828561048482%29.png",
  "book-lice": "https://www.pestsolutions.co.uk/wp-content/uploads/2025/05/Pest-ZoomBooklice.jpg",
  "brown-house-moths": "https://images.squarespace-cdn.com/content/v1/5f85d31d86a30c227b913863/1607374943705-TW6F7PPE6ZAG5EG6ZGSY/what-does-a-brown-dotted-clothes-moth-look-like.png",
  "carpet-beetle": "https://thumbs.dreamstime.com/b/three-carpet-beetles-isolated-white-13634328.jpg",
  "cat-and-dog-fleas": "https://pestcontrol24london.co.uk/wp-content/uploads/2025/11/Fleas.jpg",
  "clothes-moths": "https://pestcontrol24london.co.uk/wp-content/uploads/2025/11/Moths.jpg",
  "common-rat": "https://pestcontrol24london.co.uk/wp-content/uploads/2025/11/Rats.jpg",
  "french-wasps": "https://pestcontrol24london.co.uk/wp-content/uploads/2025/11/Wasps.jpg",
  "fruit-and-filter-flies": "https://pestcontrol24london.co.uk/wp-content/uploads/2025/11/Flies.jpg.webp",
  "fungus-gnat": "https://t4.ftcdn.net/jpg/04/87/40/89/360_F_487408957_KlmihJ7ETuE2CSG1OFxkIPn2pm5PLbME.jpg",
  "garden-ant": "https://t3.ftcdn.net/jpg/19/96/94/04/360_F_1996940454_LrHxtyFBP88LVi82mzbF7gdXCDVrZ5z0.jpg",
  "german-cockroaches": "https://pestcontrol24london.co.uk/wp-content/uploads/2025/11/Cockroaches.jpg.webp",
  "ghost-ants": "https://pestcontrol24london.co.uk/wp-content/uploads/2025/11/Ants.jpg",
  "grey-squirrel": "https://pestcontrol24london.co.uk/wp-content/uploads/2025/11/Squirrels.jpg.webp",
  "house-mice": "https://pestcontrol24london.co.uk/wp-content/uploads/2025/11/Mice-1.jpg.webp",
  "indian-meal-moth": "https://www.vtpestcontrol.com/wp-content/uploads/2020/01/indian-meal-moth-2.jpg",
  "larder-beetle": "https://upload.wikimedia.org/wikipedia/commons/d/d2/Dermestes_lardarius_-_top_%28aka%29.jpg",
  "mealworm-beetle": "https://png.pngtree.com/background/20240425/original/pngtree-white-background-shot-of-tenebrio-molitor-linnaeus-1758-mealworm-beetle-photo-picture-image_8663352.jpg",
  "oriental-cockroaches": "https://t4.ftcdn.net/jpg/19/48/97/65/360_F_1948976587_QRKc5PMr96YHBEjSRs8ZOyW6VcnzzAG2.jpg",
  "pharaohs-ants": "https://www.a-1pc.com/wp-content/uploads/2023/11/pharoah-ant-north-carolina.webp",
  "pigeons": "https://pestcontrol24london.co.uk/wp-content/uploads/2025/11/Pigeons.jpg",
  "gulls": "https://pestcontrol24london.co.uk/wp-content/uploads/2025/11/Seagulls.jpg.webp",
  "red-foxes": "https://t3.ftcdn.net/jpg/03/22/05/08/360_F_322050810_7e78Imy0qRmvUSgdtLQ0pTzZtAVoJJeH.jpg",
  "silverfish": "https://pestcontrol24london.co.uk/wp-content/uploads/2025/11/Silverfish.jpg",
  "starlings-and-wasps": "https://thumbs.dreamstime.com/b/starling-bird-isolated-white-background-445095318.jpg"
};

export const pestsData: Pest[] = rawPestsData.map(pest => {
  let price = 95; // Default starting price

  // Let's customize starting prices dynamically
  if (pest.id === "bed-bugs") price = 145;
  else if (pest.id === "common-rat") price = 125;
  else if (pest.id === "house-mice") price = 115;
  else if (pest.id === "grey-squirrel") price = 135;
  else if (pest.id === "pigeons") price = 195;
  else if (pest.id === "gulls") price = 245;
  else if (pest.id === "red-foxes") price = 175;
  else if (pest.id === "german-cockroaches" || pest.id === "oriental-cockroaches" || pest.id === "pharaohs-ants") price = 115;
  else if (pest.id === "french-wasps" || pest.id === "starlings-and-wasps") price = 110;
  else if (pest.id === "cat-and-dog-fleas") price = 105;

  return {
    ...pest,
    startingPrice: price,
    imageUrl: pestImageUrls[pest.id] || "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80"
  };
});

