export const materialsData = [
  {
    id: 1,
    name: "Ti-6Al-4V",
    category: "metal",
    description: "A titanium alloy with 6% aluminum and 4% vanadium, known for its excellent strength-to-weight ratio and corrosion resistance.",
    properties: {
      density: "4.43 g/cm³",
      meltingPoint: "1604-1660°C",
      thermalConductivity: "6.7 W/m·K",
      electricalResistivity: "170 μΩ·cm",
      mechanical: [
        { name: "Tensile Strength", value: "900-1200 MPa", percentage: 90 },
        { name: "Yield Strength", value: "800-1100 MPa", percentage: 85 },
        { name: "Elastic Modulus", value: "110-140 GPa", percentage: 60 },
        { name: "Hardness", value: "33-36 HRC", percentage: 70 }
      ],
      chemical: [
        { name: "Corrosion Resistance", description: "Excellent resistance to general corrosion in most environments" },
        { name: "Biocompatibility", description: "Excellent biocompatibility, suitable for medical implants" },
        { name: "Oxidation Resistance", description: "Good resistance up to 600°C" }
      ]
    },
    applications: {
      primary: [
        "Aerospace components (aircraft frames, engine parts)",
        "Medical implants (bone replacements, dental implants)",
        "Marine equipment (propeller shafts, underwater equipment)",
        "Chemical processing equipment"
      ],
      industries: [
        "Aerospace", "Medical", "Marine", "Chemical", "Sports", "Automotive"
      ],
      limitations: [
        "Difficult and expensive to machine",
        "Limited high-temperature performance above 600°C",
        "Susceptible to stress corrosion in some environments"
      ]
    },
    composition: {
      elements: [
        { name: "Titanium", symbol: "Ti", percentage: "88-90%" },
        { name: "Aluminum", symbol: "Al", percentage: "5.5-6.75%" },
        { name: "Vanadium", symbol: "V", percentage: "3.5-4.5%" },
        { name: "Iron", symbol: "Fe", percentage: "<0.25%" },
        { name: "Oxygen", symbol: "O", percentage: "<0.2%" }
      ],
      structure: "Alpha-beta titanium alloy with a mixture of hexagonal close-packed (alpha) and body-centered cubic (beta) microstructures"
    },
    manufacturing: [
      { 
        name: "Casting", 
        description: "Used for complex shapes but can result in variable properties and porosity" 
      },
      { 
        name: "Forging", 
        description: "Produces high-strength components with refined microstructure" 
      },
      { 
        name: "Powder Metallurgy", 
        description: "Creates near-net-shape parts with uniform properties" 
      }
    ]
  },
  {
    id: 2,
    name: "Carbon Fiber Reinforced Polymer (CFRP)",
    category: "composite",
    description: "A lightweight, high-strength composite material consisting of carbon fiber reinforcement in a polymer matrix.",
    properties: {
      density: "1.5-2.0 g/cm³",
      meltingPoint: "N/A (Decomposes)",
      thermalConductivity: "5-7 W/m·K",
      electricalResistivity: "10⁻³-10⁻² Ω·cm",
      mechanical: [
        { name: "Tensile Strength", value: "1500-3500 MPa", percentage: 95 },
        { name: "Elastic Modulus", value: "70-200 GPa", percentage: 75 },
        { name: "Flexural Strength", value: "1200-1800 MPa", percentage: 90 },
        { name: "Impact Resistance", value: "High", percentage: 85 }
      ],
      chemical: [
        { name: "Corrosion Resistance", description: "Excellent resistance to chemical corrosion" },
        { name: "UV Resistance", description: "Poor resistance to UV radiation without protective coatings" },
        { name: "Water Absorption", description: "Low absorption rate, but can affect matrix-fiber interface" }
      ]
    },
    applications: {
      primary: [
        "Aerospace structures (wings, fuselage, control surfaces)",
        "Sporting goods (bicycles, tennis rackets, golf clubs)",
        "Automotive components (body panels, chassis reinforcement)",
        "Wind turbine blades"
      ],
      industries: [
        "Aerospace", "Automotive", "Sports", "Marine", "Energy", "Construction"
      ],
      limitations: [
        "High manufacturing cost",
        "Difficulty in repair and recycling",
        "Susceptible to impact damage",
        "Limited high-temperature performance"
      ]
    },
    composition: {
      elements: [
        { name: "Carbon Fiber", symbol: "C", percentage: "50-70%" },
        { name: "Epoxy Resin", symbol: "", percentage: "30-50%" },
        { name: "Additives", symbol: "", percentage: "0-5%" }
      ],
      structure: "Layered composite with directional carbon fibers embedded in a polymer matrix, typically arranged in specific orientations"
    },
    manufacturing: [
      { 
        name: "Prepreg Layup & Autoclave", 
        description: "High-quality method using pre-impregnated fiber sheets cured under heat and pressure" 
      },
      { 
        name: "Resin Transfer Molding", 
        description: "Liquid resin is injected into a mold containing dry fiber reinforcement" 
      },
      { 
        name: "Filament Winding", 
        description: "Continuous fiber reinforcement is wound onto a rotating mandrel and impregnated with resin" 
      }
    ]
  },
  {
    id: 3,
    name: "Silicon Carbide (SiC)",
    category: "ceramic",
    description: "A semiconductor material composed of silicon and carbon with exceptional hardness, thermal conductivity, and chemical resistance.",
    properties: {
      density: "3.21 g/cm³",
      meltingPoint: "2730°C",
      thermalConductivity: "120-170 W/m·K",
      electricalResistivity: "10²-10⁶ Ω·cm",
      mechanical: [
        { name: "Hardness", value: "9-9.5 Mohs", percentage: 98 },
        { name: "Elastic Modulus", value: "380-430 GPa", percentage: 95 },
        { name: "Compressive Strength", value: "3900 MPa", percentage: 93 },
        { name: "Fracture Toughness", value: "3-5 MPa·m¹/²", percentage: 40 }
      ],
      chemical: [
        { name: "Oxidation Resistance", description: "Excellent resistance up to 1600°C due to passive SiO₂ formation" },
        { name: "Chemical Inertness", description: "Resistant to most acids, alkalis, and molten salts" },
        { name: "Thermal Shock Resistance", description: "Excellent resistance to rapid temperature changes" }
      ]
    },
    applications: {
      primary: [
        "Abrasives and cutting tools",
        "High-temperature semiconductor devices",
        "Automotive brake systems and clutches",
        "Nuclear fuel cladding",
        "Armor systems"
      ],
      industries: [
        "Electronics", "Automotive", "Aerospace", "Defense", "Energy", "Manufacturing"
      ],
      limitations: [
        "Brittle nature limits structural applications",
        "Difficult and expensive to machine",
        "Requires specialized manufacturing processes",
        "Joining difficulties with other materials"
      ]
    },
    composition: {
      elements: [
        { name: "Silicon", symbol: "Si", percentage: "70%" },
        { name: "Carbon", symbol: "C", percentage: "30%" }
      ],
      structure: "Covalently bonded crystalline structure with multiple polytypes (3C, 4H, 6H, etc.)"
    },
    manufacturing: [
      { 
        name: "Chemical Vapor Deposition", 
        description: "High-purity SiC produced by chemical reaction of gaseous precursors" 
      },
      { 
        name: "Sintering", 
        description: "SiC powder is consolidated through pressure and heat" 
      },
      { 
        name: "Reaction Bonding", 
        description: "Silicon infiltration into carbon preform creates SiC through reaction" 
      }
    ]
  },
  {
    id: 4,
    name: "High-Density Polyethylene (HDPE)",
    category: "polymer",
    description: "A thermoplastic polymer made from ethylene, known for its high strength-to-density ratio and chemical resistance.",
    properties: {
      density: "0.94-0.97 g/cm³",
      meltingPoint: "130-137°C",
      thermalConductivity: "0.45-0.52 W/m·K",
      electricalResistivity: "10¹⁶-10¹⁸ Ω·cm",
      mechanical: [
        { name: "Tensile Strength", value: "20-40 MPa", percentage: 25 },
        { name: "Elastic Modulus", value: "0.8-1.6 GPa", percentage: 10 },
        { name: "Impact Strength", value: "High", percentage: 80 },
        { name: "Elongation at Break", value: "100-1000%", percentage: 85 }
      ],
      chemical: [
        { name: "Chemical Resistance", description: "Excellent resistance to acids, bases, and many solvents" },
        { name: "Water Absorption", description: "Very low, less than 0.01%" },
        { name: "UV Resistance", description: "Poor without additives, degrades with prolonged exposure" }
      ]
    },
    applications: {
      primary: [
        "Packaging (bottles, containers, films)",
        "Pipes and fittings for water distribution",
        "Household items (toys, cutting boards)",
        "Chemical storage tanks",
        "Geomembranes for containment"
      ],
      industries: [
        "Packaging", "Construction", "Consumer", "Agriculture", "Automotive", "Medical"
      ],
      limitations: [
        "Limited temperature resistance",
        "Susceptible to stress cracking",
        "Difficult to bond with adhesives",
        "Environmental concerns regarding disposal"
      ]
    },
    composition: {
      elements: [
        { name: "Carbon", symbol: "C", percentage: "85.7%" },
        { name: "Hydrogen", symbol: "H", percentage: "14.3%" },
        { name: "Additives", symbol: "", percentage: "0-5%" }
      ],
      structure: "Semi-crystalline polymer with linear chains and minimal branching, resulting in high density and crystallinity"
    },
    manufacturing: [
      { 
        name: "Extrusion", 
        description: "Continuous process producing pipes, sheets, and films" 
      },
      { 
        name: "Injection Molding", 
        description: "Process for creating complex parts with high dimensional accuracy" 
      },
      { 
        name: "Blow Molding", 
        description: "Used for creating hollow objects like bottles and containers" 
      }
    ]
  },
  {
    id: 5,
    name: "304 Stainless Steel",
    category: "metal",
    description: "An austenitic stainless steel alloy containing chromium and nickel, known for excellent corrosion resistance and formability.",
    properties: {
      density: "8.0 g/cm³",
      meltingPoint: "1400-1450°C",
      thermalConductivity: "16.2 W/m·K",
      electricalResistivity: "72 μΩ·cm",
      mechanical: [
        { name: "Tensile Strength", value: "515-620 MPa", percentage: 65 },
        { name: "Yield Strength", value: "205-310 MPa", percentage: 40 },
        { name: "Elastic Modulus", value: "193-200 GPa", percentage: 75 },
        { name: "Elongation at Break", value: "40-60%", percentage: 70 }
      ],
      chemical: [
        { name: "Corrosion Resistance", description: "Excellent resistance to atmospheric corrosion and many chemicals" },
        { name: "Oxidation Resistance", description: "Good resistance up to 870°C" },
        { name: "Pitting Resistance", description: "Moderate resistance to chloride-induced pitting" }
      ]
    },
    applications: {
      primary: [
        "Food processing equipment",
        "Kitchen sinks and appliances",
        "Chemical containers and piping",
        "Architectural applications",
        "Medical and surgical equipment"
      ],
      industries: [
        "Food & Beverage", "Chemical", "Architectural", "Medical", "Automotive", "Consumer"
      ],
      limitations: [
        "Susceptible to chloride-induced stress corrosion cracking",
        "Lower strength compared to other steels",
        "Limited use in high-temperature reducing environments",
        "Magnetic properties can vary with cold working"
      ]
    },
    composition: {
      elements: [
        { name: "Iron", symbol: "Fe", percentage: "66-74%" },
        { name: "Chromium", symbol: "Cr", percentage: "18-20%" },
        { name: "Nickel", symbol: "Ni", percentage: "8-10.5%" },
        { name: "Manganese", symbol: "Mn", percentage: "<2%" },
        { name: "Silicon", symbol: "Si", percentage: "<1%" },
        { name: "Carbon", symbol: "C", percentage: "<0.08%" }
      ],
      structure: "Austenitic (face-centered cubic) crystal structure, non-magnetic in annealed condition"
    },
    manufacturing: [
      { 
        name: "Hot Rolling", 
        description: "Creates sheets and plates with good mechanical properties" 
      },
      { 
        name: "Cold Rolling", 
        description: "Produces thinner gauges with improved surface finish and strength" 
      },
      { 
        name: "Annealing", 
        description: "Heat treatment to restore ductility and corrosion resistance" 
      }
    ]
  },
  {
    id: 6,
    name: "Gallium Arsenide (GaAs)",
    category: "semiconductor",
    description: "A compound semiconductor with higher electron mobility than silicon, used in high-frequency and optoelectronic applications.",
    properties: {
      density: "5.32 g/cm³",
      meltingPoint: "1238°C",
      thermalConductivity: "55 W/m·K",
      electricalResistivity: "10⁸ Ω·cm (semi-insulating)",
      mechanical: [
        { name: "Elastic Modulus", value: "85.5 GPa", percentage: 45 },
        { name: "Hardness", value: "4-5 Mohs", percentage: 50 },
        { name: "Fracture Toughness", value: "0.4 MPa·m¹/²", percentage: 20 },
        { name: "Poisson's Ratio", value: "0.31", percentage: 60 }
      ],
      chemical: [
        { name: "Oxidation Stability", description: "Poor, forms volatile oxides when heated in air" },
        { name: "Chemical Reactivity", description: "Reacts with strong acids and bases" },
        { name: "Toxicity", description: "Contains arsenic, which is toxic if ingested or inhaled" }
      ]
    },
    applications: {
      primary: [
        "High-frequency integrated circuits",
        "Microwave devices and radars",
        "Solar cells (high efficiency)",
        "Infrared light-emitting diodes (LEDs)",
        "Laser diodes"
      ],
      industries: [
        "Electronics", "Telecommunications", "Aerospace", "Defense", "Solar", "Medical"
      ],
      limitations: [
        "Expensive compared to silicon",
        "Brittle and difficult to handle",
        "Toxic constituent materials",
        "Limited thermal dissipation in devices"
      ]
    },
    composition: {
      elements: [
        { name: "Gallium", symbol: "Ga", percentage: "48.2%" },
        { name: "Arsenic", symbol: "As", percentage: "51.8%" }
      ],
      structure: "Zinc blende (cubic) crystal structure with direct bandgap of 1.42 eV at room temperature"
    },
    manufacturing: [
      { 
        name: "Czochralski Process", 
        description: "Single crystal growth from melt using a seed crystal" 
      },
      { 
        name: "Molecular Beam Epitaxy (MBE)", 
        description: "Ultra-high vacuum deposition for precise layered structures" 
      },
      { 
        name: "Metal-Organic Chemical Vapor Deposition (MOCVD)", 
        description: "Growth of compound semiconductors from organometallic precursors" 
      }
    ]
  }
];