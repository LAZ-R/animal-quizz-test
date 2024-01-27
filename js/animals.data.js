export const UICN_STATUS = {
  LC: { id: `LC`, label: `Préoccupation mineure`,   bgColor: `#006666`, color: `#FFFFFF` },
  NT: { id: `NT`, label: `Quasi menacé`,            bgColor: `#006666`, color: `#9ACD9A` },
  VU: { id: `VU`, label: `Vulnérable`,              bgColor: `#CD9A00`, color: `#FFFFCD` },
  EN: { id: `EN`, label: `En danger`,               bgColor: `#CC6630`, color: `#FBCA98` },
  CR: { id: `CR`, label: `En danger critique`,      bgColor: `#CD3030`, color: `#FFCDCD` },
  EW: { id: `EW`, label: `Éteint à l'état sauvage`, bgColor: `#000000`, color: `#FFFFFF` },
  EX: { id: `EX`, label: `Éteint`,                  bgColor: `#000000`, color: `#CD3030` },
};

export const DIFFICULTY_LEVEL = {
  easy: 'Facile',
  medium: 'Moyen',
  hard: 'Difficile',
}

export const RAW_ANIMALS = [
  /* ####################################################################### */
  /* ============================== MAMMALIA =============================== */
  /* ####################################################################### */

  /* =============================== FELIDAE =============================== */
  /* ------------------------------ (Félins) ------------------------------- */

  /* =============================== SIRENIA =============================== */
  /* ------------------------ (Lamantins & dugong) ------------------------- */

  { // Lamantin d'Amazonie ----------------------------------------------------
    id: 0,
    // ------------------------------------------------------------------------
    vernacularName: `Lamantin d'Amazonie`,
    scientificName: `Trichechus inunguis`,
    // ------------------------------------------------------------------------
    difficulty: DIFFICULTY_LEVEL.medium,
    // ------------------------------------------------------------------------
    class: `Mammalia`,
    family: `Sirenia`,
    // ------------------------------------------------------------------------
    uicn: UICN_STATUS.VU,
    // ------------------------------------------------------------------------
    images: [
      `https://maville.com/photosmvi/2017/11/03/P1D3313225G.jpg`,
      `https://actus.zoobeauval.com/wp-content/uploads/2023/04/naissance_bb_lamantin_042023_02.jpg`,
    ],
  },
  { // Lamantin des Caraïbes --------------------------------------------------
    id: 0,
    // ------------------------------------------------------------------------
    vernacularName: `Lamantin des Caraïbes`,
    scientificName: `Trichechus manatus`,
    // ------------------------------------------------------------------------
    difficulty: DIFFICULTY_LEVEL.easy,
    // ------------------------------------------------------------------------
    class: `Mammalia`,
    family: `Sirenia`,
    // ------------------------------------------------------------------------
    uicn: UICN_STATUS.CR,
    // ------------------------------------------------------------------------
    images: [
      `https://maville.com/photosmvi/2017/11/03/P1D3313225G.jpg`,
      `https://actus.zoobeauval.com/wp-content/uploads/2023/04/naissance_bb_lamantin_042023_02.jpg`,
    ],
  },
  { // Lamantin d'Afrique -----------------------------------------------------
    id: 0,
    // ------------------------------------------------------------------------
    vernacularName: `Lamantin d'Afrique`,
    scientificName: `Trichechus senegalensis`,
    // ------------------------------------------------------------------------
    difficulty: DIFFICULTY_LEVEL.hard,
    // ------------------------------------------------------------------------
    class: `Mammalia`,
    family: `Sirenia`,
    // ------------------------------------------------------------------------
    uicn: UICN_STATUS.VU,
    // ------------------------------------------------------------------------
    images: [
      `https://maville.com/photosmvi/2017/11/03/P1D3313225G.jpg`,
      `https://actus.zoobeauval.com/wp-content/uploads/2023/04/naissance_bb_lamantin_042023_02.jpg`,
    ],
  },
  { // Dugong -----------------------------------------------------------------
    id: 0,
    // ------------------------------------------------------------------------
    vernacularName: `Dugong`,
    scientificName: `Dugong dugon`,
    // ------------------------------------------------------------------------
    difficulty: DIFFICULTY_LEVEL.medium,
    // ------------------------------------------------------------------------
    class: `Mammalia`,
    family: `Sirenia`,
    // ------------------------------------------------------------------------
    uicn: UICN_STATUS.VU,
    // ------------------------------------------------------------------------
    images: [
      `https://maville.com/photosmvi/2017/11/03/P1D3313225G.jpg`,
      `https://actus.zoobeauval.com/wp-content/uploads/2023/04/naissance_bb_lamantin_042023_02.jpg`,
    ],
  },

  /* ####################################################################### */
  /* =========================== Chondrichthyes ============================ */
  /* ####################################################################### */

  /* ============================= Sphyrnidae ============================== */
  /* -------------------------- (Requins-marteau) -------------------------- */

  { // Grand requin-marteau ---------------------------------------------------
    id: 0,
    // ------------------------------------------------------------------------
    vernacularName: `Grand requin-marteau`,
    scientificName: `Sphyrna mokarran`,
    // ------------------------------------------------------------------------
    difficulty: DIFFICULTY_LEVEL.easy,
    // ------------------------------------------------------------------------
    class: `Chondrichthyes`,
    family: `Sphyrnidae`,
    // ------------------------------------------------------------------------
    uicn: UICN_STATUS.CR,
    // ------------------------------------------------------------------------
    images: [
      `https://animauxmarins.fr/wp-content/uploads/2023/06/grand-requin-marteau.jpg`,
      `https://www.aquaportail.com/aquabdd/photos/sphyrna-mokarran.jpg`,
    ],
  },
  { // Requin-marteau tiburo --------------------------------------------------
    id: 0,
    // ------------------------------------------------------------------------
    vernacularName: `Requin-marteau tiburo`,
    scientificName: `Sphyrna tiburo`,
    // ------------------------------------------------------------------------
    difficulty: DIFFICULTY_LEVEL.medium,
    // ------------------------------------------------------------------------
    class: `Chondrichthyes`,
    family: `Sphyrnidae`,
    // ------------------------------------------------------------------------
    uicn: UICN_STATUS.EN,
    // ------------------------------------------------------------------------
    images: [
      `https://www.sharksandrays.com/wp-content/uploads/2020/09/Bonnethead-Shark-003.jpg`,
    ],
  },
  { // Requin-marteau à petits yeux -------------------------------------------
    id: 0,
    // ------------------------------------------------------------------------
    vernacularName: `Requin-marteau à petits yeux`,
    scientificName: `Sphyrna tudes`,
    // ------------------------------------------------------------------------
    difficulty: DIFFICULTY_LEVEL.hard,
    // ------------------------------------------------------------------------
    class: `Chondrichthyes`,
    family: `Sphyrnidae`,
    // ------------------------------------------------------------------------
    uicn: UICN_STATUS.CR,
    // ------------------------------------------------------------------------
    images: [
      `https://alchetron.com/cdn/smalleye-hammerhead-30bd15db-8cb1-4d03-a1ad-2824557d766-resize-750.jpeg`,
    ],
  },
  { // Requin-marteau planeur -------------------------------------------------
    id: 0,
    // ------------------------------------------------------------------------
    vernacularName: `Requin-marteau planeur`,
    scientificName: `Eusphyra blochii`,
    // ------------------------------------------------------------------------
    difficulty: DIFFICULTY_LEVEL.hard,
    // ------------------------------------------------------------------------
    class: `Chondrichthyes`,
    family: `Sphyrnidae`,
    // ------------------------------------------------------------------------
    uicn: UICN_STATUS.EN,
    // ------------------------------------------------------------------------
    images: [
      `https://www.aquaportail.com/aquabdd/photos/eusphyra-blochii.jpg`,
    ],
  },

  /* ============================== Lamnidae =============================== */
  /* ------------------------- (Requins-maqueraux) ------------------------- */

  { // Grand requin blanc -----------------------------------------------------
    id: 0,
    // ------------------------------------------------------------------------
    vernacularName: `Grand requin blanc`,
    scientificName: `Carcharodon carcharias`,
    // ------------------------------------------------------------------------
    difficulty: DIFFICULTY_LEVEL.easy,
    // ------------------------------------------------------------------------
    class: `Chondrichthyes`,
    family: `Lamnidae`,
    // ------------------------------------------------------------------------
    uicn: UICN_STATUS.VU,
    // ------------------------------------------------------------------------
    images: [
      `https://www.fishipedia.fr/wp-content/uploads/2019/06/REQUIN-BLANC_AP5A9973_FGUERIN.jpg`,
    ],
  },
  { // Requin mako ------------------------------------------------------------
    id: 0,
    // ------------------------------------------------------------------------
    vernacularName: `Requin mako`,
    scientificName: `Isurus oxyrinchus`,
    // ------------------------------------------------------------------------
    difficulty: DIFFICULTY_LEVEL.medium,
    // ------------------------------------------------------------------------
    class: `Chondrichthyes`,
    family: `Lamnidae`,
    // ------------------------------------------------------------------------
    uicn: UICN_STATUS.EN,
    // ------------------------------------------------------------------------
    images: [
      `https://www.auxbulles.com/img/requin-mako-ou-requin-taupe-bleu-isurus-oxyrinchus-03.jpg`,
    ],
  },
  { // Petit requin taupe -----------------------------------------------------
    id: 0,
    // ------------------------------------------------------------------------
    vernacularName: `Petit requin taupe`,
    scientificName: `Isurus paucus`,
    // ------------------------------------------------------------------------
    difficulty: DIFFICULTY_LEVEL.hard,
    // ------------------------------------------------------------------------
    class: `Chondrichthyes`,
    family: `Lamnidae`,
    // ------------------------------------------------------------------------
    uicn: UICN_STATUS.EN,
    // ------------------------------------------------------------------------
    images: [
      `https://www.americanoceans.org/wp-content/uploads/2023/05/Longfin-Mako-Shark-scaled-e1684344130699-1024x683.jpeg`,
    ],
  },
  { // Requin saumon ----------------------------------------------------------
    id: 0,
    // ------------------------------------------------------------------------
    vernacularName: `Requin saumon`,
    scientificName: `Lamna ditropis`,
    // ------------------------------------------------------------------------
    difficulty: DIFFICULTY_LEVEL.medium,
    // ------------------------------------------------------------------------
    class: `Chondrichthyes`,
    family: `Lamnidae`,
    // ------------------------------------------------------------------------
    uicn: UICN_STATUS.LC,
    // ------------------------------------------------------------------------
    images: [
      `https://external-preview.redd.it/bo9VjHuMNjM4KL1hsCh_JCfA65ZY89RgmYsTflOAeMQ.jpg?auto=webp&s=0c1f977c2505695fb24b9bc3623ea8519e6f1577`,
    ],
  },
  { // Maraîche ---------------------------------------------------------------
    id: 0,
    // ------------------------------------------------------------------------
    vernacularName: `Maraîche`,
    scientificName: `Lamna nasus`,
    // ------------------------------------------------------------------------
    difficulty: DIFFICULTY_LEVEL.medium,
    // ------------------------------------------------------------------------
    class: `Chondrichthyes`,
    family: `Lamnidae`,
    // ------------------------------------------------------------------------
    uicn: UICN_STATUS.VU,
    // ------------------------------------------------------------------------
    images: [
      `https://www.sharksandrays.com/wp-content/uploads/2023/10/Porbeagle-Shark-186.jpg`,
    ],
  },

];
