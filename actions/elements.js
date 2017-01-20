const elements = 
  [ 
    {
      mass: 1.0079,
      name: "Hydrogen",
      acronym: "H",
      atomicNumber: 1
    },
    {
      mass: 4.0026,
      name: "Helium",
      acronym: "He",
      atomicNumber: 2
    },
    {
      mass: 6.941,
      name: "Lithium",
      acronym: "Li",
      atomicNumber: 3
    },
    {
      mass: 9.0122,
      name: "Beryllium",
      acronym: "Be",
      atomicNumber: 4
    },
    {
      mass: 10.811,
      name: "Boron",
      acronym: "B",
      atomicNumber: 5
    },
    {
      mass: 12.0107,
      name: "Carbon",
      acronym: "C",
      atomicNumber: 6
    },
    {
      mass: 14.0067,
      name: "Nitrogen",
      acronym: "N",
      atomicNumber: 7
    },
    {
      mass: 15.9994,
      name: "Oxygen",
      acronym: "O",
      atomicNumber: 8
    },
    {
      mass: 18.9984,
      name: "Fluorine",
      acronym: "F",
      atomicNumber: 9
    },
    {
      mass: 20.1797,
      name: "Neon",
      acronym: "Ne",
      atomicNumber: 10
    },
    {
      mass: 22.9897,
      name: "Sodium",
      acronym: "Na",
      atomicNumber: 11
    },
    {
      mass: 24.305,
      name: "Magnesium",
      acronym: "Mg",
      atomicNumber: 12
    },
    {
      mass: 26.9815,
      name: "Aluminum",
      acronym: "Al",
      atomicNumber: 13
    },
    {
      mass: 28.0855,
      name: "Silicon",
      acronym: "Si",
      atomicNumber: 14
    },
    {
      mass: 30.9738,
      name: "Phosphorus",
      acronym: "P",
      atomicNumber: 15
    },
    {
      mass: 32.065,
      name: "Sulfur",
      acronym: "S",
      atomicNumber: 16
    },
    {
      mass: 35.453,
      name: "Chlorine",
      acronym: "Cl",
      atomicNumber: 17
    },
    {
      mass: 39.948,
      name: "Argon",
      acronym: "Ar",
      atomicNumber: 18
    },
    {
      mass: 39.0983,
      name: "Potassium",
      acronym: "K",
      atomicNumber: 19
    },
    {
      mass: 40.078,
      name: "Calcium",
      acronym: "Ca",
      atomicNumber: 20
    },
    {
      mass: 44.9559,
      name: "Scandium",
      acronym: "Sc",
      atomicNumber: 21
    },
    {
      mass: 47.867,
      name: "Titanium",
      acronym: "Ti",
      atomicNumber: 22
    },
    {
      mass: 50.9415,
      name: "Vanadium",
      acronym: "V",
      atomicNumber: 23
    },
    {
      mass: 51.9961,
      name: "Chromium",
      acronym: "Cr",
      atomicNumber: 24
    },
    {
      mass: 54.938,
      name: "Manganese",
      acronym: "Mn",
      atomicNumber: 25
    },
    {
      mass: 55.845,
      name: "Iron",
      acronym: "Fe",
      atomicNumber: 26
    },
    {
      mass: 58.9332,
      name: "Cobalt",
      acronym: "Co",
      atomicNumber: 27
    },  
    {
      mass: 58.6934,
      name: "Nickel",
      acronym: "Ni",
      atomicNumber: 28
    },
    {
      mass: 63.546,
      name: "Copper",
      acronym: "Cu",
      atomicNumber: 29
    },
    {
      mass: 65.39,
      name: "Zinc",
      acronym: "Zn",
      atomicNumber: 30
    },
    {
      mass: 69.723,
      name: "Gallium",
      acronym: "Ga",
      atomicNumber: 31
    },
    {
      mass: 72.64,
      name: "Germanium",
      acronym: "Ge",
      atomicNumber: 32
    },
    {
      mass: 74.9216,
      name: "Arsenic",
      acronym: "As",
      atomicNumber: 33
    },
    {
      mass: 78.96,
      name: "Selenium",
      acronym: "Se",
      atomicNumber: 34
    },
    {
      mass: 79.904,
      name: "Bromine",
      acronym: "Br",
      atomicNumber: 35
    },
    {
      mass: 83.8,
      name: "Krypton",
      acronym: "Kr",
      atomicNumber: 36
    },
    {
      mass: 85.4678,
      name: "Rubidium",
      acronym: "Rb",
      atomicNumber: 37
    },
    {
      mass: 87.62,
      name: "Strontium",
      acronym: "Sr",
      atomicNumber: 38
    },
    {
      mass: 88.9059,
      name: "Yttrium",
      acronym: "Y",
      atomicNumber: 39
    },
    {
      mass: 91.224,
      name: "Zirconium",
      acronym: "Zr",
      atomicNumber: 40
    },
    {
      mass: 92.9064,
      name: "Niobium",
      acronym: "Nb",
      atomicNumber: 41
    },
    {
      mass: 95.94,
      name: "Molybdenum",
      acronym: "Mo",
      atomicNumber: 42
    },
    {
      mass: 98,
      name: "Technetium",
      acronym: "Tc",
      atomicNumber: 43
    },
    {
      mass: 101.07,
      name: "Ruthenium",
      acronym: "Ru",
      atomicNumber: 44
    },
    {
      mass: 102.9055,
      name: "Rhodium",
      acronym: "Rh",
      atomicNumber: 45
    },
    {
      mass: 106.42,
      name: "Palladium",
      acronym: "Pd",
      atomicNumber: 46
    },
    {
      mass: 107.8682,
      name: "Silver",
      acronym: "Ag",
      atomicNumber: 47
    },
    {
      mass: 112.411,
      name: "Cadmium",
      acronym: "Cd",
      atomicNumber: 48
    },
    {
      mass: 114.818,
      name: "Indium",
      acronym: "In",
      atomicNumber: 49
    },
    {
      mass: 118.71,
      name: "Tin",
      acronym: "Sn",
      atomicNumber: 50
    },
    {
      mass: 121.76,
      name: "Antimony",
      acronym: "Sb",
      atomicNumber: 51
    },
    {
      mass: 127.6,
      name: "Tellurium",
      acronym: "Te",
      atomicNumber: 52
    },
    {
      mass: 126.9045,
      name: "Iodine",
      acronym: "I",
      atomicNumber: 53
    },
    {
      mass: 131.293,
      name: "Xenon",
      acronym: "Xe",
      atomicNumber: 54
    },
    {
      mass: 132.9055,
      name: "Cesium",
      acronym: "Cs",
      atomicNumber: 55
    },
    {
      mass: 137.327,
      name: "Barium",
      acronym: "Ba",
      atomicNumber: 56
    },
    {
      mass: 138.9055,
      name: "Lanthanum",
      acronym: "La",
      atomicNumber: 57
    },
    {
      mass: 140.116,
      name: "Cerium",
      acronym: "Ce",
      atomicNumber: 58
    },
    {
      mass: 140.9077,
      name: "Praseodymium",
      acronym: "Pr",
      atomicNumber: 59
    },
    {
      mass: 144.24,
      name: "Neodymium",
      acronym: "Nd",
      atomicNumber: 60
    },
    {
      mass: 145,
      name: "Promethium",
      acronym: "Pm",
      atomicNumber: 61
    },
    {
      mass: 150.36,
      name: "Samarium",
      acronym: "Sm",
      atomicNumber: 62
    },
    {
      mass: 151.964,
      name: "Europium",
      acronym: "Eu",
      atomicNumber: 63
    },
    {
      mass: 157.25,
      name: "Gadolinium",
      acronym: "Gd",
      atomicNumber: 64
    },
    {
      mass: 158.9253,
      name: "Terbium",
      acronym: "Tb",
      atomicNumber: 65
    },
    {
      mass: 162.5,
      name: "Dysprosium",
      acronym: "Dy",
      atomicNumber: 66
    },
    {
      mass: 164.9303,
      name: "Holmium",
      acronym: "Ho",
      atomicNumber: 67
    },
    {
      mass: 167.259,
      name: "Erbium",
      acronym: "Er",
      atomicNumber: 68
    },
    {
      mass: 168.9342,
      name: "Thulium",
      acronym: "Tm",
      atomicNumber: 69
    },
    {
      mass: 173.04,
      name: "Ytterbium",
      acronym: "Yb",
      atomicNumber: 70
    },
    {
      mass: 174.967,
      name: "Lutetium",
      acronym: "Lu",
      atomicNumber: 71
    },
    {
      mass: 178.49,
      name: "Hafnium",
      acronym: "Hf",
      atomicNumber: 72
    },
    {
      mass: 180.9479,
      name: "Tantalum",
      acronym: "Ta",
      atomicNumber: 73
    },
    {
      mass: 183.84,
      name: "Tungsten",
      acronym: "W",
      atomicNumber: 74
    },
    {
      mass: 186.207,
      name: "Rhenium",
      acronym: "Re",
      atomicNumber: 75
    },
    {
      mass: 190.23,
      name: "Osmium",
      acronym: "Os",
      atomicNumber: 76
    },
    {
      mass: 192.217,
      name: "Iridium",
      acronym: "Ir",
      atomicNumber: 77
    },
    {
      mass: 195.078,
      name: "Platinum",
      acronym: "Pt",
      atomicNumber: 78
    },
    {
      mass: 196.9665,
      name: "Gold",
      acronym: "Au",
      atomicNumber: 79
    },
    {
      mass: 200.59,
      name: "Mercury",
      acronym: "Hg",
      atomicNumber: 80
    },
    {
      mass: 204.3833,
      name: "Thallium",
      acronym: "Tl",
      atomicNumber: 81
    },
    {
      mass: 207.2,
      name: "Lead",
      acronym: "Pb",
      atomicNumber: 82
    },
    {
      mass: 208.9804,
      name: "Bismuth",
      acronym: "Bi",
      atomicNumber: 83
    },
    {
      mass: 209,
      name: "Polonium",
      acronym: "Po",
      atomicNumber: 84
    },
    {
      mass: 210,
      name: "Astatine",
      acronym: "At",
      atomicNumber: 85
    },
    {
      mass: 222,
      name: "Radon",
      acronym: "Rn",
      atomicNumber: 86
    },
    {
      mass: 223,
      name: "Francium",
      acronym: "Fr",
      atomicNumber: 87
    },
    {
      mass: 226,
      name: "Radium",
      acronym: "Ra",
      atomicNumber: 88
    },
    {
      mass: 227,
      name: "Actinium",
      acronym: "Ac",
      atomicNumber: 89
    },
    {
      mass: 232.0381,
      name: "Thorium",
      acronym: "Th",
      atomicNumber: 90
    },
    {
      mass: 231.0359,
      name: "Protactinium",
      acronym: "Pa",
      atomicNumber: 91
    },
    {
      mass: 238.0289,
      name: "Uranium",
      acronym: "U",
      atomicNumber: 92
    },
    {
      mass: 237,
      name: "Neptunium",
      acronym: "Np",
      atomicNumber: 93
    },
    {
      mass: 244,
      name: "Plutonium",
      acronym: "Pu",
      atomicNumber: 94
    },
    {
      mass: 243,
      name: "Americium",
      acronym: "Am",
      atomicNumber: 95
    },
    {
      mass: 247,
      name: "Curium",
      acronym: "Cm",
      atomicNumber: 96
    },
    {
      mass: 247,
      name: "Berkelium",
      acronym: "Bk",
      atomicNumber: 97
    },
    {
      mass: 251,
      name: "Californium",
      acronym: "Cf",
      atomicNumber: 98
    },
    {
      mass: 252,
      name: "Einsteinium",
      acronym: "Es",
      atomicNumber: 99
    },
    {
      mass: 257,
      name: "Fermium",
      acronym: "Fm",
      atomicNumber: 100
    }
  ];

module.exports = elements;
