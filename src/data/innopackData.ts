export interface Product {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  catalogUrl: string;
  catalogFilename: string;
  model: string;
  weighingRange: string;
  speed: string;
  accuracy: string;
  resolution?: string;
  display?: string;
  conveyorSize?: string;
  power: string;
  airSupply: string;
  operatingTemp: string;
  rejectionSystem: string;
  dimensions?: string;
  features: string[];
  optionalFeatures: string[];
  applications: string[];
  videoUrl?: string;
}

export interface Customer {
  name: string;
  location: string;
  country: string;
  sector: string;
}

export interface IndustryApplication {
  name: string;
  category: string;
  description: string;
  challenge: string;
  solution: string;
  recommendedProducts: string[];
}

export const COMPANY_INFO = {
  name: "Innopack Automation",
  tagline: "Engineering the Future of Automation",
  subTagline: "Precision machinery. Intelligent automation. Reliable industrial solutions.",
  missionShort: "Innopack Automation delivers packaging machinery, weighing systems and industrial automation solutions engineered to improve production efficiency and reliability.",
  heritage: "With over two decades of mechanical engineering heritage and specialized automation expertise in Ambattur Industrial Estate, Chennai.",
  foundedNote: "Engineering SPM & Automation for over 2 decades. Production facility established in Ambattur Industrial Estate.",
  address: {
    line1: "No. 96 - E, SIDCO Industrial Estate",
    area: "Ambattur Industrial Estate",
    city: "Chennai",
    postalCode: "600 098",
    state: "Tamil Nadu",
    country: "India",
    full: "No. 96-E, SIDCO Industrial Estate, Ambattur Industrial Estate, Chennai – 600098, Tamil Nadu, India"
  },
  phones: ["+91 95515 71217"],
  fax: "009144 42184176",
  emails: {
    general: "info@innopackautomation.com",
    executive: "elan@innopackautomation.com"
  },
  spmPartnerUrl: "http://www.acmaa.net",
  spmDivisionNote: "Special Purpose Machine manufacturing division: ACMAA (Air & Control Machinery Automation Accessories)",
  upcomingEvent: {
    name: "India Bakery Expo'26",
    dates: "18th–20th September 2026",
    venue: "Chennai Trade Centre, Chennai",
    stalls: "Stalls 148–151"
  }
};

export const CORE_VALUES = [
  {
    title: "Reliability",
    short: "Uncompromised uptime",
    description: "Robust mechanical engineering and high-grade SS construction ensuring non-stop plant operation and repeatable weighing precision."
  },
  {
    title: "Punctuality",
    short: "Commitment to timelines",
    description: "Strict adherence to delivery, commissioning, and project execution schedules across domestic and international installations."
  },
  {
    title: "Quality",
    short: "Benchmarked precision",
    description: "Exceeding customer expectations at every dimension and setting new quality benchmarks for every machine fabricated."
  },
  {
    title: "Relationship",
    short: "Long-standing partnerships",
    description: "Cultivating enduring trust with clients, suppliers, and engineering partners spanning GCC countries and pan-India."
  },
  {
    title: "Support",
    short: "24/7 technical lifecycle",
    description: "Comprehensive assistance from requirements analysis, installation, and operator training to remote PLC telemetry diagnostics."
  }
];

export const PRODUCTS: Product[] = [
  {
    id: "online-dynamic-check-weigher",
    name: "Check Weigher – Online Dynamic Weighing",
    category: "High-Capacity Automation",
    tagline: "Industrial-grade inline continuous check weighing with advanced telemetry",
    description: "Engineered for high-volume FMCG, grain, cement, and chemical packaging lines. Features a large 10.1\" color touch interface, automated production emailing, un-limited product recipe storage, and continuous dynamic weighing with remote diagnostic connectivity.",
    image: "/assets/01s.png",
    catalogUrl: "/assets/Innopack_Checkweigher_Catalog.pdf",
    catalogFilename: "Innopack_Checkweigher_Catalog.pdf",
    model: "Innopack Dynamic Checkweigher",
    weighingRange: "10 kg to 30 kg",
    speed: "8 to 30 pieces per minute (Max 30 cartons/min)",
    accuracy: "+/- 20 grams (Dynamic), +/- 5 grams (Static)",
    display: "10.1\" Color Industrial Touch Screen",
    power: "230 Volt, 50 Hz AC",
    airSupply: "5 bar Min.",
    operatingTemp: "0°C to 40°C",
    rejectionSystem: "Automatic Pushing Mechanism / Reject Conveyor (Configurable)",
    features: [
      "10.1\" High-definition color touch screen HMI",
      "Menu-driven, multilingual user-friendly interface",
      "Dynamic Accuracy: +/- 20 grams; Static Accuracy: +/- 5 grams",
      "Speed: up to 30 cartons per minute max",
      "Unlimited product recipe & weight data storage",
      "Automated emailing of shift production & audit reports",
      "RS232 / RS485 Serial Communications & USB export",
      "LAN / Wi-Fi / Modem remote diagnostics & parameter inspection"
    ],
    optionalFeatures: [
      "Infeed metering conveyor & Gravity outfeed conveyor",
      "Pneumatic heavy-duty pushing mechanism",
      "Direct thermal batch/barcode printer integration",
      "Cloud & Central Server production sync",
      "8 Digital Inputs / 8 Digital Outputs (NPN)"
    ],
    applications: [
      "Flour & Grain Mills",
      "Edible & Lubricating Oils",
      "Detergents & Industrial Powders",
      "Fertilizers & Chemicals",
      "Cement & Construction Mortars",
      "Pharmaceutical Bulk Cartons",
      "Sugar & Cereals",
      "FMCG Corrugated Boxes"
    ],
    videoUrl: "/assets/Innopack_Checkweigher_Video_01.mp4"
  },
  {
    id: "compact-check-weigher",
    name: "Compact Check Weigher (CW-03)",
    category: "Precision High-Speed Sorting",
    tagline: "Ultra-fast precision weighing for food, pharma, and consumer packaging",
    description: "Stainless steel compact inline dynamic checkweigher designed for high-speed pouch and carton packaging. Delivers 30 to 45 packs per minute with high-speed load cell resolution of 1 gram and drop-down rejection mechanism.",
    image: "/assets/02s.png",
    catalogUrl: "/assets/compact-check-weigher-catalog_02.pdf",
    catalogFilename: "compact-check-weigher-catalog_02.pdf",
    model: "INNOPACK CW-03",
    weighingRange: "100 Grams to 3,000 Grams (3 kg)",
    speed: "30 to 45 Packs per Minute",
    accuracy: "+/- 3 Grams",
    resolution: "1 Gram",
    conveyorSize: "250 mm x 300 mm",
    power: "230 Volt, 50 Hz (180 W)",
    airSupply: "5 bar Min.",
    operatingTemp: "0°C to 40°C",
    rejectionSystem: "Drop Down System (Optional: Air Jet, Flipper Type)",
    dimensions: "1240 mm (L) x 483 mm (W) x 948 mm (H)",
    features: [
      "Full Stainless Steel (SS) sanitary construction",
      "High-speed precision loadcell with Auto Zero Tracking",
      "Throughput: 30 to 45 packs/minute",
      "Resolution: 1 gram | Accuracy: +/- 3 grams",
      "Integrated audio-visual alarm (Buzzer & Multi-color Tower Lamp)",
      "RS232 serial interface for PC / Ticket printer logging",
      "Ergonomic compact footprint (1240 x 483 x 948 mm)",
      "Quick-release hygienic food-grade conveyor belt"
    ],
    optionalFeatures: [
      "Air Jet high-speed rejection for lightweight pouches",
      "Flipper arm rejection for fragile containers",
      "Extended infeed guide rails",
      "Stainless steel protective draft shield"
    ],
    applications: [
      "Food & Confectionery",
      "Bakery & Biscuits",
      "Vermicelli & Macaroni Pouches",
      "Pharmaceutical Blister & Bottle Cartons",
      "Cosmetics & Personal Care",
      "Fish & Aqua Frozen Packs",
      "Spices & Seasoning Packets"
    ],
    videoUrl: "/assets/Innopack_Checkweigher_Video_01.mp4"
  },
  {
    id: "static-check-weigher",
    name: "Static Check Weigher",
    category: "Batch Quality Inspection",
    tagline: "Heavy-duty precision static verification with touch screen telemetry",
    description: "Engineered for end-of-line verification and sampling inspection stations. Combines a 10.1\" industrial color touch screen with un-limited recipe memory, static accuracy of +/- 5 grams, and automated shift report emailing.",
    image: "/assets/03s.png",
    catalogUrl: "/assets/INNOPACK STATIC CHECK WEIGHER CATALOG.pdf",
    catalogFilename: "INNOPACK STATIC CHECK WEIGHER CATALOG.pdf",
    model: "Innopack Static Checkweigher",
    weighingRange: "10 kg to 30 kg",
    speed: "8 to 10 cartons/pieces per minute",
    accuracy: "+/- 5 grams (Static)",
    display: "10.1\" Color Industrial Touch Screen",
    power: "230 Volt, 50 Hz AC",
    airSupply: "5 bar Min.",
    operatingTemp: "0°C to 40°C",
    rejectionSystem: "Manual / Optional Pneumatic Pushing Mechanism",
    features: [
      "10.1\" Touch Screen HMI with user-friendly menu navigation",
      "Heavy-duty industrial base and reinforced load platform",
      "Static Accuracy: +/- 5 grams across 10–30 kg range",
      "Un-limited product recipe & weight tolerance data storage",
      "Automated email dispatch of daily production reports",
      "RS232 / RS485 communication ports & USB flash drive report export",
      "Remote monitoring capabilities via LAN / Wi-Fi"
    ],
    optionalFeatures: [
      "Feed & gravity run-out roller conveyor tables",
      "Pneumatic reject push mechanism",
      "Industrial label/ticket printer",
      "Server / Cloud centralized database synchronizer",
      "Digital I/O module (8 In / 8 Out NPN)"
    ],
    applications: [
      "Cereal & Flour Sack Verification",
      "Lubricants & Engine Oil Pails",
      "Petrochemicals & Carbon Black",
      "Bulk Detergent Totes & Boxes",
      "Fertilizer Bags",
      "Cement & Plaster Bags",
      "Finished Goods Audit Stations"
    ]
  }
];

export const CUSTOMERS: Customer[] = [
  {
    name: "Salalah Mills Co. (S.A.O.G.)",
    location: "Salalah",
    country: "Sultanate of Oman",
    sector: "Flour & Grain Milling"
  },
  {
    name: "Lahairoi Packaging Systems FZE",
    location: "SAIF Zone, Sharjah",
    country: "United Arab Emirates",
    sector: "Packaging Systems & Automation"
  },
  {
    name: "Oman Agro Industries LLC",
    location: "Muscat",
    country: "Sultanate of Oman",
    sector: "Agro Foods & Edible Oil Packaging"
  },
  {
    name: "Santhosh Instant Food",
    location: "Thanjavur",
    country: "India",
    sector: "Instant Foods & Vermicelli Processing"
  },
  {
    name: "Omani Gulf Food Co. SPC",
    location: "Salalah",
    country: "Sultanate of Oman",
    sector: "Commercial Food Processing & Packaging"
  }
];

export const INDUSTRY_SECTORS: IndustryApplication[] = [
  {
    name: "Flour & Grain Milling",
    category: "Dry Bulk & Powders",
    description: "High-accuracy automated check weighing for flour bags and bulk grain packages to eliminate product giveaway and guarantee regulatory compliance.",
    challenge: "High dust environments and bag settling variations during high-throughput packaging.",
    solution: "Hermetically sealed IP-rated load cells with digital auto-zero tracking and heavy-duty push rejection.",
    recommendedProducts: ["online-dynamic-check-weigher", "static-check-weigher"]
  },
  {
    name: "Dal & Pulses Processing",
    category: "Grain & Legumes",
    description: "Inline dynamic verification of 500g, 1kg, 5kg and bulk sacks with rapid pack sorting and statistical batch monitoring.",
    challenge: "Fast conveyor line speeds requiring immediate ejection of underfilled or overfilled packages.",
    solution: "Innopack CW-03 with drop-down or flipper rejection operating up to 45 packs/min.",
    recommendedProducts: ["compact-check-weigher", "online-dynamic-check-weigher"]
  },
  {
    name: "Rice Packaging",
    category: "Cereals & Staples",
    description: "Robust weighing solutions for consumer polybags up to 25kg woven sacks, integrated seamlessly with bag sealers.",
    challenge: "Heavy container handling without slowing down continuous bagging lines.",
    solution: "10-30kg Dynamic Check Weigher with customizable powered infeed and reject conveyors.",
    recommendedProducts: ["online-dynamic-check-weigher", "static-check-weigher"]
  },
  {
    name: "Lubricating Oil & Petrochemicals",
    category: "Liquid Containers & Pails",
    description: "Precision checking of 1L to 20L oil cans, jerrycans and pails to verify exact fill volumes and identify bottle leaks or nozzle underfills.",
    challenge: "Liquid sloshing effects inside moving containers affecting weight readings.",
    solution: "Advanced dynamic digital filtering algorithms that stabilize moving liquid mass readings in milliseconds.",
    recommendedProducts: ["online-dynamic-check-weigher", "static-check-weigher"]
  },
  {
    name: "Detergents & Household Chemicals",
    category: "Powders & Liquids",
    description: "Corrosion-resistant weighing systems designed for abrasive powder cartons and corrosive liquid detergent containers.",
    challenge: "Chemical residue exposure and vibration from upstream form-fill-seal machines.",
    solution: "Stainless steel framing and isolated loadcell mountings providing stable +/- 1g resolution.",
    recommendedProducts: ["compact-check-weigher", "online-dynamic-check-weigher"]
  },
  {
    name: "Bakery, Biscuits & Confectionery",
    category: "Fragile Foods",
    description: "Gentle inline inspection of baked goods, sliced bread loaves, biscuits and confectionery packs with zero product breakage.",
    challenge: "Fragile packaging that cannot withstand harsh mechanical pushing.",
    solution: "Gentle drop-down conveyor rejection and non-contact air jet systems on the Innopack CW-03.",
    recommendedProducts: ["compact-check-weigher"]
  },
  {
    name: "Vermicelli & Macaroni Pasta",
    category: "Extruded Foods",
    description: "High-speed pouch check weighing engineered specifically for brittle dried pasta and instant noodle packaging lines.",
    challenge: "Irregular pouch shapes and high operational speeds.",
    solution: "Custom guide rails and precision high-speed load cell with +/- 3g accuracy at 45 ppm.",
    recommendedProducts: ["compact-check-weigher"]
  },
  {
    name: "Sweets & Traditional Savouries",
    category: "FMCG Specialties",
    description: "Accurate verification of gift boxes, plastic trays, and sealed sweet packs for retail compliance.",
    challenge: "Dense, variable portion sizes and strict tare weight tolerances.",
    solution: "Multi-product recipe storage with instantaneous touch screen changeovers.",
    recommendedProducts: ["compact-check-weigher", "static-check-weigher"]
  }
];

export const TECHNICAL_SERVICES = [
  {
    title: "Application Engineering & Selection",
    description: "Our senior automation engineers review your line speeds, product dimensions, conveyor transitions, and ambient factors to specify the optimal weighing technology.",
    icon: "Cpu"
  },
  {
    title: "On-Site Installation & Commissioning",
    description: "Complete turnkey mechanical installation, conveyor leveling, line integration, and calibration using certified class weights.",
    icon: "Wrench"
  },
  {
    title: "Remote Telemetry & Diagnostics",
    description: "Direct machine PLC connection via secure LAN, Wi-Fi, or modem. Enables engineers to inspect parameters, optimize filtering, and troubleshoot remotely from Chennai to any facility worldwide.",
    icon: "Activity"
  },
  {
    title: "Live Video Assistance",
    description: "On-demand visual engineering support directly to your plant floor operators, assisting in setup adjustments, calibration tests, and maintenance procedures.",
    icon: "Video"
  },
  {
    title: "Spare Parts & Accessories Stock",
    description: "Our well-stocked Ambattur facility maintains genuine load cells, timing belts, pneumatic cylinders, touch screens, and controller boards for immediate dispatch.",
    icon: "PackageCheck"
  },
  {
    title: "Operator & Technician Training",
    description: "Hands-on training covering routine calibration, recipe setup, tolerance threshold configuration, and hygienic conveyor belt sanitation.",
    icon: "Users"
  }
];

export const CAREER_ROLES = [
  {
    title: "Mechatronics & Automation Engineer",
    department: "R&D & Engineering",
    type: "Full-Time",
    location: "Ambattur Industrial Estate, Chennai",
    experience: "2–5 Years",
    responsibilities: [
      "Design and programming of PLC, HMI, and embedded control systems for checkweighing machinery.",
      "Integration of high-speed load cells, ADC converters, and pneumatic rejection systems.",
      "Conducting factory acceptance testing (FAT) and machine commissioning."
    ]
  },
  {
    title: "Mechanical Design & Assembly Engineer",
    department: "Manufacturing",
    type: "Full-Time",
    location: "Ambattur Industrial Estate, Chennai",
    experience: "1–4 Years",
    responsibilities: [
      "SolidWorks / CAD detailing for stainless steel conveyor chassis and packaging machinery.",
      "Precision mechanical assembly, bearing fits, and conveyor alignment.",
      "Ensuring hygienic design principles for food and pharmaceutical client machines."
    ]
  },
  {
    title: "Field Service & Commissioning Specialist",
    department: "Customer Engineering Support",
    type: "Full-Time",
    location: "Chennai / Pan-India & Middle East Travel",
    experience: "2–6 Years",
    responsibilities: [
      "On-site installation, calibration, and commissioning of check weighers and packaging systems.",
      "Conducting operator training and providing remote troubleshooting via LAN/Wi-Fi telemetry.",
      "Maintaining long-term client satisfaction and proactive preventive maintenance."
    ]
  }
];
