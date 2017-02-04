const elements = 
  [ 
    {
      mass: 1.0079,
      name: "Hydrogen",
      acronym: "H",
      multiplier: 1,
      atomicNumber: 1
    },
    {
      mass: 4.0026,
      name: "Helium",
      acronym: "He",
      multiplier: 1,
      atomicNumber: 2
    },
    {
      mass: 6.941,
      name: "Lithium",
      acronym: "Li",
      multiplier: 1,
      atomicNumber: 3
    },
    {
      mass: 9.0122,
      name: "Beryllium",
      acronym: "Be",
      multiplier: 1,
      atomicNumber: 4
    },
    {
      mass: 10.811,
      name: "Boron",
      acronym: "B",
      multiplier: 1,
      atomicNumber: 5
    },
    {
      mass: 12.0107,
      name: "Carbon",
      acronym: "C",
      multiplier: 1,
      atomicNumber: 6
    },
    {
      mass: 14.0067,
      name: "Nitrogen",
      acronym: "N",
      multiplier: 1,
      atomicNumber: 7
    },
    {
      mass: 15.9994,
      name: "Oxygen",
      acronym: "O",
      multiplier: 1,
      atomicNumber: 8
    },
    {
      mass: 18.9984,
      name: "Fluorine",
      acronym: "F",
      multiplier: 1,
      atomicNumber: 9
    },
    {
      mass: 20.1797,
      name: "Neon",
      acronym: "Ne",
      multiplier: 1,
      atomicNumber: 10
    },
    {
      mass: 22.9897,
      name: "Sodium",
      acronym: "Na",
      multiplier: 1,
      atomicNumber: 11
    },
    {
      mass: 24.305,
      name: "Magnesium",
      acronym: "Mg",
      multiplier: 1,
      atomicNumber: 12
    },
    {
      mass: 26.9815,
      name: "Aluminum",
      acronym: "Al",
      multiplier: 1,
      atomicNumber: 13
    },
    {
      mass: 28.0855,
      name: "Silicon",
      acronym: "Si",
      multiplier: 1,
      atomicNumber: 14
    },
    {
      mass: 30.9738,
      name: "Phosphorus",
      acronym: "P",
      multiplier: 1,
      atomicNumber: 15
    },
    {
      mass: 32.065,
      name: "Sulfur",
      acronym: "S",
      multiplier: 1,
      atomicNumber: 16
    },
    {
      mass: 35.453,
      name: "Chlorine",
      acronym: "Cl",
      multiplier: 1,
      atomicNumber: 17
    },
    {
      mass: 39.948,
      name: "Argon",
      acronym: "Ar",
      multiplier: 1,
      atomicNumber: 18
    },
    {
      mass: 39.0983,
      name: "Potassium",
      acronym: "K",
      multiplier: 1,
      atomicNumber: 19
    },
    {
      mass: 40.078,
      name: "Calcium",
      acronym: "Ca",
      multiplier: 1,
      atomicNumber: 20
    },
    {
      mass: 44.9559,
      name: "Scandium",
      acronym: "Sc",
      multiplier: 1,
      atomicNumber: 21
    },
    {
      mass: 47.867,
      name: "Titanium",
      acronym: "Ti",
      multiplier: 1,
      atomicNumber: 22
    },
    {
      mass: 50.9415,
      name: "Vanadium",
      acronym: "V",
      multiplier: 1,
      atomicNumber: 23
    },
    {
      mass: 51.9961,
      name: "Chromium",
      acronym: "Cr",
      multiplier: 1,
      atomicNumber: 24
    },
    {
      mass: 54.938,
      name: "Manganese",
      acronym: "Mn",
      multiplier: 1,
      atomicNumber: 25
    },
    {
      mass: 55.845,
      name: "Iron",
      acronym: "Fe",
      multiplier: 1,
      atomicNumber: 26
    },
    {
      mass: 58.9332,
      name: "Cobalt",
      acronym: "Co",
      multiplier: 1,
      atomicNumber: 27
    },  
    {
      mass: 58.6934,
      name: "Nickel",
      acronym: "Ni",
      multiplier: 1,
      atomicNumber: 28
    },
    {
      mass: 63.546,
      name: "Copper",
      acronym: "Cu",
      multiplier: 1,
      atomicNumber: 29
    },
    {
      mass: 65.39,
      name: "Zinc",
      acronym: "Zn",
      multiplier: 1,
      atomicNumber: 30
    },
    {
      mass: 69.723,
      name: "Gallium",
      acronym: "Ga",
      multiplier: 1,
      atomicNumber: 31
    },
    {
      mass: 72.64,
      name: "Germanium",
      acronym: "Ge",
      multiplier: 1,
      atomicNumber: 32
    },
    {
      mass: 74.9216,
      name: "Arsenic",
      acronym: "As",
      multiplier: 1,
      atomicNumber: 33
    },
    {
      mass: 78.96,
      name: "Selenium",
      acronym: "Se",
      multiplier: 1,
      atomicNumber: 34
    },
    {
      mass: 79.904,
      name: "Bromine",
      acronym: "Br",
      multiplier: 1,
      atomicNumber: 35
    },
    {
      mass: 83.8,
      name: "Krypton",
      acronym: "Kr",
      multiplier: 1,
      atomicNumber: 36
    },
    {
      mass: 85.4678,
      name: "Rubidium",
      acronym: "Rb",
      multiplier: 1,
      atomicNumber: 37
    },
    {
      mass: 87.62,
      name: "Strontium",
      acronym: "Sr",
      multiplier: 1,
      atomicNumber: 38
    },
    {
      mass: 88.9059,
      name: "Yttrium",
      acronym: "Y",
      multiplier: 1,
      atomicNumber: 39
    },
    {
      mass: 91.224,
      name: "Zirconium",
      acronym: "Zr",
      multiplier: 1,
      atomicNumber: 40
    },
    {
      mass: 92.9064,
      name: "Niobium",
      acronym: "Nb",
      multiplier: 1,
      atomicNumber: 41
    },
    {
      mass: 95.94,
      name: "Molybdenum",
      acronym: "Mo",
      multiplier: 1,
      atomicNumber: 42
    },
    {
      mass: 98,
      name: "Technetium",
      acronym: "Tc",
      multiplier: 1,
      atomicNumber: 43
    },
    {
      mass: 101.07,
      name: "Ruthenium",
      acronym: "Ru",
      multiplier: 1,
      atomicNumber: 44
    },
    {
      mass: 102.9055,
      name: "Rhodium",
      acronym: "Rh",
      multiplier: 1,
      atomicNumber: 45
    },
    {
      mass: 106.42,
      name: "Palladium",
      acronym: "Pd",
      multiplier: 1,
      atomicNumber: 46
    },
    {
      mass: 107.8682,
      name: "Silver",
      acronym: "Ag",
      multiplier: 1,
      atomicNumber: 47
    },
    {
      mass: 112.411,
      name: "Cadmium",
      acronym: "Cd",
      multiplier: 1,
      atomicNumber: 48
    },
    {
      mass: 114.818,
      name: "Indium",
      acronym: "In",
      multiplier: 1,
      atomicNumber: 49
    },
    {
      mass: 118.71,
      name: "Tin",
      acronym: "Sn",
      multiplier: 1,
      atomicNumber: 50
    },
    {
      mass: 121.76,
      name: "Antimony",
      acronym: "Sb",
      multiplier: 1,
      atomicNumber: 51
    },
    {
      mass: 127.6,
      name: "Tellurium",
      acronym: "Te",
      multiplier: 1,
      atomicNumber: 52
    },
    {
      mass: 126.9045,
      name: "Iodine",
      acronym: "I",
      multiplier: 1,
      atomicNumber: 53
    },
    {
      mass: 131.293,
      name: "Xenon",
      acronym: "Xe",
      multiplier: 1,
      atomicNumber: 54
    },
    {
      mass: 132.9055,
      name: "Cesium",
      acronym: "Cs",
      multiplier: 1,
      atomicNumber: 55
    },
    {
      mass: 137.327,
      name: "Barium",
      acronym: "Ba",
      multiplier: 1,
      atomicNumber: 56
    },
    {
      mass: 138.9055,
      name: "Lanthanum",
      acronym: "La",
      multiplier: 1,
      atomicNumber: 57
    },
    {
      mass: 140.116,
      name: "Cerium",
      acronym: "Ce",
      multiplier: 1,
      atomicNumber: 58
    },
    {
      mass: 140.9077,
      name: "Praseodymium",
      acronym: "Pr",
      multiplier: 1,
      atomicNumber: 59
    },
    {
      mass: 144.24,
      name: "Neodymium",
      acronym: "Nd",
      multiplier: 1,
      atomicNumber: 60
    },
    {
      mass: 145,
      name: "Promethium",
      acronym: "Pm",
      multiplier: 1,
      atomicNumber: 61
    },
    {
      mass: 150.36,
      name: "Samarium",
      acronym: "Sm",
      multiplier: 1,
      atomicNumber: 62
    },
    {
      mass: 151.964,
      name: "Europium",
      acronym: "Eu",
      multiplier: 1,
      atomicNumber: 63
    },
    {
      mass: 157.25,
      name: "Gadolinium",
      acronym: "Gd",
      multiplier: 1,
      atomicNumber: 64
    },
    {
      mass: 158.9253,
      name: "Terbium",
      acronym: "Tb",
      multiplier: 1,
      atomicNumber: 65
    },
    {
      mass: 162.5,
      name: "Dysprosium",
      acronym: "Dy",
      multiplier: 1,
      atomicNumber: 66
    },
    {
      mass: 164.9303,
      name: "Holmium",
      acronym: "Ho",
      multiplier: 1,
      atomicNumber: 67
    },
    {
      mass: 167.259,
      name: "Erbium",
      acronym: "Er",
      multiplier: 1,
      atomicNumber: 68
    },
    {
      mass: 168.9342,
      name: "Thulium",
      acronym: "Tm",
      multiplier: 1,
      atomicNumber: 69
    },
    {
      mass: 173.04,
      name: "Ytterbium",
      acronym: "Yb",
      multiplier: 1,
      atomicNumber: 70
    },
    {
      mass: 174.967,
      name: "Lutetium",
      acronym: "Lu",
      multiplier: 1,
      atomicNumber: 71
    },
    {
      mass: 178.49,
      name: "Hafnium",
      acronym: "Hf",
      multiplier: 1,
      atomicNumber: 72
    },
    {
      mass: 180.9479,
      name: "Tantalum",
      acronym: "Ta",
      multiplier: 1,
      atomicNumber: 73
    },
    {
      mass: 183.84,
      name: "Tungsten",
      acronym: "W",
      multiplier: 1,
      atomicNumber: 74
    },
    {
      mass: 186.207,
      name: "Rhenium",
      acronym: "Re",
      multiplier: 1,
      atomicNumber: 75
    },
    {
      mass: 190.23,
      name: "Osmium",
      acronym: "Os",
      multiplier: 1,
      atomicNumber: 76
    },
    {
      mass: 192.217,
      name: "Iridium",
      acronym: "Ir",
      multiplier: 1,
      atomicNumber: 77
    },
    {
      mass: 195.078,
      name: "Platinum",
      acronym: "Pt",
      multiplier: 1,
      atomicNumber: 78
    },
    {
      mass: 196.9665,
      name: "Gold",
      acronym: "Au",
      multiplier: 1,
      atomicNumber: 79
    },
    {
      mass: 200.59,
      name: "Mercury",
      acronym: "Hg",
      multiplier: 1,
      atomicNumber: 80
    },
    {
      mass: 204.3833,
      name: "Thallium",
      acronym: "Tl",
      multiplier: 1,
      atomicNumber: 81
    },
    {
      mass: 207.2,
      name: "Lead",
      acronym: "Pb",
      multiplier: 1,
      atomicNumber: 82
    },
    {
      mass: 208.9804,
      name: "Bismuth",
      acronym: "Bi",
      multiplier: 1,
      atomicNumber: 83
    },
    {
      mass: 209,
      name: "Polonium",
      acronym: "Po",
      multiplier: 1,
      atomicNumber: 84
    },
    {
      mass: 210,
      name: "Astatine",
      acronym: "At",
      multiplier: 1,
      atomicNumber: 85
    },
    {
      mass: 222,
      name: "Radon",
      acronym: "Rn",
      multiplier: 1,
      atomicNumber: 86
    },
    {
      mass: 223,
      name: "Francium",
      acronym: "Fr",
      multiplier: 1,
      atomicNumber: 87
    },
    {
      mass: 226,
      name: "Radium",
      acronym: "Ra",
      multiplier: 1,
      atomicNumber: 88
    },
    {
      mass: 227,
      name: "Actinium",
      acronym: "Ac",
      multiplier: 1,
      atomicNumber: 89
    },
    {
      mass: 232.0381,
      name: "Thorium",
      acronym: "Th",
      multiplier: 1,
      atomicNumber: 90
    },
    {
      mass: 231.0359,
      name: "Protactinium",
      acronym: "Pa",
      multiplier: 1,
      atomicNumber: 91
    },
    {
      mass: 238.0289,
      name: "Uranium",
      acronym: "U",
      multiplier: 1,
      atomicNumber: 92
    },
    {
      mass: 237,
      name: "Neptunium",
      acronym: "Np",
      multiplier: 1,
      atomicNumber: 93
    },
    {
      mass: 244,
      name: "Plutonium",
      acronym: "Pu",
      multiplier: 1,
      atomicNumber: 94
    },
    {
      mass: 243,
      name: "Americium",
      acronym: "Am",
      multiplier: 1,
      atomicNumber: 95
    },
    {
      mass: 247,
      name: "Curium",
      acronym: "Cm",
      multiplier: 1,
      atomicNumber: 96
    },
    {
      mass: 247,
      name: "Berkelium",
      acronym: "Bk",
      multiplier: 1,
      atomicNumber: 97
    },
    {
      mass: 251,
      name: "Californium",
      acronym: "Cf",
      multiplier: 1,
      atomicNumber: 98
    },
    {
      mass: 252,
      name: "Einsteinium",
      acronym: "Es",
      multiplier: 1,
      atomicNumber: 99
    },
    {
      mass: 257,
      name: "Fermium",
      acronym: "Fm",
      multiplier: 1,
      atomicNumber: 100
    }
  ];

module.exports = elements;
