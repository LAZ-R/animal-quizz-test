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
  /* ================================ Aves ================================= */
  /* ####################################################################### */

  /* ============================== Anatidae =============================== */
  /* --------------------- Oies, cygnes, canards, etc. --------------------- */

  { // Canard colvert -----------------------------------------------------
    id: 0,
    // ------------------------------------------------------------------------
    vernacularName: `Canard colvert`,
    scientificName: `Anas platyrhynchos`,
    // ------------------------------------------------------------------------
    difficulty: DIFFICULTY_LEVEL.easy,
    // ------------------------------------------------------------------------
    class: `Aves`,
    family: `Anatidae`,
    // ------------------------------------------------------------------------
    uicn: UICN_STATUS.LC,
    // ------------------------------------------------------------------------
    images: [
      { url: 'https://inaturalist-open-data.s3.amazonaws.com/photos/222092/medium.jpg', author: 'Greg Lasley' },
      { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Winter_duck.jpg/800px-Winter_duck.jpg?20231112213510', author: 'Bert de Tilly' },
    ],
  },
  { // Canard mandarin -----------------------------------------------------
    id: 0,
    // ------------------------------------------------------------------------
    vernacularName: `Canard mandarin`,
    scientificName: `Aix galericulata`,
    // ------------------------------------------------------------------------
    difficulty: DIFFICULTY_LEVEL.easy,
    // ------------------------------------------------------------------------
    class: `Aves`,
    family: `Anatidae`,
    // ------------------------------------------------------------------------
    uicn: UICN_STATUS.LC,
    // ------------------------------------------------------------------------
    images: [
      { url: 'https://img.theepochtimes.com/assets/uploads/2020/07/31/ET-7-Most-Uniquely-Beautiful-and-Special-Ducks-From-Around-the-World8.jpg', author: 'Johnsean' },
      { url: 'https://static.inaturalist.org/photos/349913234/medium.jpg', author: 'Paul Werner' },
    ],
  },
  { // Harle couronné -----------------------------------------------------
    id: 0,
    // ------------------------------------------------------------------------
    vernacularName: `Harle couronné`,
    scientificName: `Lophodytes cucullatus`,
    // ------------------------------------------------------------------------
    difficulty: DIFFICULTY_LEVEL.medium,
    // ------------------------------------------------------------------------
    class: `Aves`,
    family: `Anatidae`,
    // ------------------------------------------------------------------------
    uicn: UICN_STATUS.LC,
    // ------------------------------------------------------------------------
    images: [
      { url: 'https://www.epochtimes.fr/assets/uploads/2020/08/ET-7-Most-Uniquely-Beautiful-and-Special-Ducks-From-Around-the-World7-e1596172337906.jpg', author: 'Tom Reichner' },
      { url: 'https://inaturalist-open-data.s3.amazonaws.com/photos/350201113/medium.jpg', author: 'warrenlayberry' },
    ],
  },
  { // Harle piette -----------------------------------------------------
    id: 0,
    // ------------------------------------------------------------------------
    vernacularName: `Harle piette`,
    scientificName: `Mergellus albellus`,
    // ------------------------------------------------------------------------
    difficulty: DIFFICULTY_LEVEL.hard,
    // ------------------------------------------------------------------------
    class: `Aves`,
    family: `Anatidae`,
    // ------------------------------------------------------------------------
    uicn: UICN_STATUS.LC,
    // ------------------------------------------------------------------------
    images: [
      { url: 'https://www.epochtimes.fr/assets/uploads/2020/08/ET-7-Most-Uniquely-Beautiful-and-Special-Ducks-From-Around-the-World9.jpg', author: 'MTKhaled mahmud' },
      { url: 'https://inaturalist-open-data.s3.amazonaws.com/photos/348260089/medium.jpg', author: 'inasiebert' },
    ],
  },
  { // Canard à bosse -----------------------------------------------------
    id: 0,
    // ------------------------------------------------------------------------
    vernacularName: `Canard à bosse`,
    scientificName: `Sarkidiornis melanotos`,
    // ------------------------------------------------------------------------
    difficulty: DIFFICULTY_LEVEL.hard,
    // ------------------------------------------------------------------------
    class: `Aves`,
    family: `Anatidae`,
    // ------------------------------------------------------------------------
    uicn: UICN_STATUS.LC,
    // ------------------------------------------------------------------------
    images: [
      { url: 'https://www.epochtimes.fr/assets/uploads/2020/08/ET-7-Most-Uniquely-Beautiful-and-Special-Ducks-From-Around-the-World3.jpg', author: 'Tom Meaker' },
      { url: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Sarkidiornis_melanotos1.jpg', author: 'Adrian Pingstone' },
    ],
  },
  { // Eider de Steller -----------------------------------------------------
    id: 0,
    // ------------------------------------------------------------------------
    vernacularName: `Eider de Steller`,
    scientificName: `Polysticta stelleri`,
    // ------------------------------------------------------------------------
    difficulty: DIFFICULTY_LEVEL.hard,
    // ------------------------------------------------------------------------
    class: `Aves`,
    family: `Anatidae`,
    // ------------------------------------------------------------------------
    uicn: UICN_STATUS.VU,
    // ------------------------------------------------------------------------
    images: [
      { url: 'https://inaturalist-open-data.s3.amazonaws.com/photos/348294901/medium.jpg', author: 'lizamast' },
      { url: 'https://inaturalist-open-data.s3.amazonaws.com/photos/210961100/medium.jpg', author: 'stephen220' },
    ],
  },
  { // Oie cendrée -----------------------------------------------------
    id: 0,
    // ------------------------------------------------------------------------
    vernacularName: `Oie cendrée`,
    scientificName: `Anser anser`,
    // ------------------------------------------------------------------------
    difficulty: DIFFICULTY_LEVEL.easy,
    // ------------------------------------------------------------------------
    class: `Aves`,
    family: `Anatidae`,
    // ------------------------------------------------------------------------
    uicn: UICN_STATUS.LC,
    // ------------------------------------------------------------------------
    images: [
      { url: 'https://inaturalist-open-data.s3.amazonaws.com/photos/350195166/medium.jpeg', author: 'a_emmerson' },
      { url: 'https://inaturalist-open-data.s3.amazonaws.com/photos/350062275/medium.jpg', author: 'mani_raab' },
    ],
  },
  { // Oie à tête barrée -----------------------------------------------------
    id: 0,
    // ------------------------------------------------------------------------
    vernacularName: `Oie à tête barrée`,
    scientificName: `Anser indicus`,
    // ------------------------------------------------------------------------
    difficulty: DIFFICULTY_LEVEL.medium,
    // ------------------------------------------------------------------------
    class: `Aves`,
    family: `Anatidae`,
    // ------------------------------------------------------------------------
    uicn: UICN_STATUS.LC,
    // ------------------------------------------------------------------------
    images: [
      { url: 'https://static.inaturalist.org/photos/347134485/medium.jpg', author: 't_m_1981' },
      { url: 'https://inaturalist-open-data.s3.amazonaws.com/photos/350006996/medium.jpeg', author: 'spchoudhary40' },
    ],
  },
  { // Cygne tuberculé -----------------------------------------------------
    id: 0,
    // ------------------------------------------------------------------------
    vernacularName: `Cygne tuberculé`,
    scientificName: `Cygnus olor`,
    // ------------------------------------------------------------------------
    difficulty: DIFFICULTY_LEVEL.easy,
    // ------------------------------------------------------------------------
    class: `Aves`,
    family: `Anatidae`,
    // ------------------------------------------------------------------------
    uicn: UICN_STATUS.LC,
    // ------------------------------------------------------------------------
    images: [
      { url: 'https://inaturalist-open-data.s3.amazonaws.com/photos/350222609/medium.jpg', author: 'vogelbild' },
      { url: 'https://inaturalist-open-data.s3.amazonaws.com/photos/350203151/medium.jpeg', author: 'alxmbz' },
    ],
  },
  { // Cygne à cou noir -----------------------------------------------------
    id: 0,
    // ------------------------------------------------------------------------
    vernacularName: `Cygne à cou noir`,
    scientificName: `Cygnus melancoryphus`,
    // ------------------------------------------------------------------------
    difficulty: DIFFICULTY_LEVEL.medium,
    // ------------------------------------------------------------------------
    class: `Aves`,
    family: `Anatidae`,
    // ------------------------------------------------------------------------
    uicn: UICN_STATUS.LC,
    // ------------------------------------------------------------------------
    images: [
      { url: 'https://inaturalist-open-data.s3.amazonaws.com/photos/347829712/medium.jpeg', author: 'Elan Zucchetti' },
      { url: 'https://inaturalist-open-data.s3.amazonaws.com/photos/324115260/medium.jpeg', author: 'Ricardo D. Moyano' },
    ],
  },
  { // Bernache à cou roux -----------------------------------------------------
    id: 0,
    // ------------------------------------------------------------------------
    vernacularName: `Bernache à cou roux`,
    scientificName: `Branta ruficollis`,
    // ------------------------------------------------------------------------
    difficulty: DIFFICULTY_LEVEL.hard,
    // ------------------------------------------------------------------------
    class: `Aves`,
    family: `Anatidae`,
    // ------------------------------------------------------------------------
    uicn: UICN_STATUS.VU,
    // ------------------------------------------------------------------------
    images: [
      { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Branta_ruficollis_by_Fr%C3%A9d%C3%A9ric_Bisson.jpg/800px-Branta_ruficollis_by_Fr%C3%A9d%C3%A9ric_Bisson.jpg?20160103164930', author: 'Frédéric Bisson' },
      { url: 'https://static.inaturalist.org/photos/350168566/medium.jpg', author: 'Daniel Duret' },
    ],
  },

  /* ####################################################################### */
  /* =========================== Chondrichthyes ============================ */
  /* ####################################################################### */

  /* =========================== Carcharhinidae ============================ */
  /* ----------------------------------------------------------------------- */
  { // Requin-tigre -----------------------------------------------------
    id: 0,
    // ------------------------------------------------------------------------
    vernacularName: `Requin-tigre`,
    scientificName: `Galeocerdo cuvier`,
    // ------------------------------------------------------------------------
    difficulty: DIFFICULTY_LEVEL.easy,
    // ------------------------------------------------------------------------
    class: `Chondrichthyes`,
    family: `Carcharhinidae`,
    // ------------------------------------------------------------------------
    uicn: UICN_STATUS.NT,
    // ------------------------------------------------------------------------
    images: [
      { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Tiger_shark.jpg/800px-Tiger_shark.jpg?20100112191810', author: 'Albert Kok' },
      { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Tiger_shark%282%29.jpg/800px-Tiger_shark%282%29.jpg?20120210203131', author: 'Albert Kok' },
    ],
  },
  { // Requin à pointes noires -----------------------------------------------------
    id: 0,
    // ------------------------------------------------------------------------
    vernacularName: `Requin à pointes noires`,
    scientificName: `Carcharhinus melanopterus`,
    // ------------------------------------------------------------------------
    difficulty: DIFFICULTY_LEVEL.easy,
    // ------------------------------------------------------------------------
    class: `Chondrichthyes`,
    family: `Carcharhinidae`,
    // ------------------------------------------------------------------------
    uicn: UICN_STATUS.NT,
    // ------------------------------------------------------------------------
    images: [
      { url: 'https://inaturalist-open-data.s3.amazonaws.com/photos/344307853/medium.jpeg', author: 'lkustra' },
      { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Reef0925_-_Flickr_-_NOAA_Photo_Library.jpg/800px-Reef0925_-_Flickr_-_NOAA_Photo_Library.jpg?20151103101144', author: 'David Burdick' },
    ],
  },
  { // Requin gris de récif -----------------------------------------------------
    id: 0,
    // ------------------------------------------------------------------------
    vernacularName: `Requin gris de récif`,
    scientificName: `Carcharhinus amblyrhynchos`,
    // ------------------------------------------------------------------------
    difficulty: DIFFICULTY_LEVEL.easy,
    // ------------------------------------------------------------------------
    class: `Chondrichthyes`,
    family: `Carcharhinidae`,
    // ------------------------------------------------------------------------
    uicn: UICN_STATUS.EN,
    // ------------------------------------------------------------------------
    images: [
      { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Grey_reef_shark.jpg/800px-Grey_reef_shark.jpg?20070929155627', author: 'Albert Kok' },
      { url: 'https://inaturalist-open-data.s3.amazonaws.com/photos/348068616/medium.jpg', author: 'Michal Slaný' },
    ],
  },
  { // Requin longimane -----------------------------------------------------
    id: 0,
    // ------------------------------------------------------------------------
    vernacularName: `Requin longimane`,
    scientificName: `Carcharhinus longimanus`,
    // ------------------------------------------------------------------------
    difficulty: DIFFICULTY_LEVEL.medium,
    // ------------------------------------------------------------------------
    class: `Chondrichthyes`,
    family: `Carcharhinidae`,
    // ------------------------------------------------------------------------
    uicn: UICN_STATUS.CR,
    // ------------------------------------------------------------------------
    images: [
      { url: 'https://static.inaturalist.org/photos/326866529/medium.jpeg', author: 'Halvard Aas Midtun' },
      { url: 'https://inaturalist-open-data.s3.amazonaws.com/photos/216219695/medium.jpg', author: 'Jonathan Wild' },
    ],
  },
  { // Requin-citron -----------------------------------------------------
    id: 0,
    // ------------------------------------------------------------------------
    vernacularName: `Requin-citron`,
    scientificName: `Negaprion brevirostris`,
    // ------------------------------------------------------------------------
    difficulty: DIFFICULTY_LEVEL.medium,
    // ------------------------------------------------------------------------
    class: `Chondrichthyes`,
    family: `Carcharhinidae`,
    // ------------------------------------------------------------------------
    uicn: UICN_STATUS.VU,
    // ------------------------------------------------------------------------
    images: [
      { url: 'https://static.inaturalist.org/photos/288235405/medium.png', author: 'Rachel Crane' },
      { url: 'https://inaturalist-open-data.s3.amazonaws.com/photos/287806954/medium.jpg', author: 'Rafi Amar' },
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
      { url: 'https://www.fishipedia.fr/wp-content/uploads/2019/06/REQUIN-BLANC_AP5A9973_FGUERIN.jpg', author: 'Fabrice Guérin' },
      { url: 'https://images.squarespace-cdn.com/content/v1/5acccfb7f2e6b155434c7507/1534340350784-A55JLANVXNYA1X7VGPEZ/MYNATURE_AP5A9804_FGUERIN.jpg?format=2500w', author: 'Fabrice Guérin' },
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
      { url: 'https://www.auxbulles.com/img/requin-mako-ou-requin-taupe-bleu-isurus-oxyrinchus-03.jpg', author: 'Michael Valos' },
      { url: 'https://static.inaturalist.org/photos/74638241/medium.jpg', author: 'Fábio Olmos' },
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
      { url: 'https://pictures.blueplanetarchive.com/img-get/I0000AB0E0QL0z0k/s/1000/0166253-RFR.jpg', author: 'Rodrigo Friscione' },
      { url: 'https://pictures.blueplanetarchive.com/img-get/I0000bIgXtuDylo8/s/1000/0166248-RFR.jpg', author: 'Rodrigo Friscione' },
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
      { url: 'https://i0.wp.com/gagebeasleywildlife.com/wp-content/uploads/2023/08/image-9.png?resize=1024%2C683&ssl=1', author: 'Corey Sean Ricketts' },
      { url: 'https://i0.wp.com/gagebeasleywildlife.com/wp-content/uploads/2023/08/image-5.png?resize=1024%2C683&ssl=1', author: 'Corey Sean Ricketts' },
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
      { url: 'https://www.sharksandrays.com/wp-content/uploads/2023/10/Porbeagle-Shark-186.jpg', author: 'Andy Murch' },
      { url: 'https://www.sharksandrays.com/wp-content/uploads/2023/10/Porbeagle-Shark-218.jpg', author: 'Andy Murch' },
    ],
  },

  /* ========================== Orectolobiformes =========================== */
  /* ------------------------- Baleine, zebre, etc ------------------------- */

  /* TODO */

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
      { url: 'https://animauxmarins.fr/wp-content/uploads/2023/06/grand-requin-marteau.jpg', author: '???' },
      { url: 'https://www.aquaportail.com/aquabdd/photos/sphyrna-mokarran.jpg', author: '???' },
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
      { url: 'https://www.sharksandrays.com/wp-content/uploads/2020/09/Bonnethead-Shark-003.jpg', author: 'Andy Murch' },
      { url: 'https://www.sharksandrays.com/wp-content/uploads/2020/09/Bonnethead-Shark-006.jpg', author: 'Andy Murch' },
    ],
  },
  { // Requin-marteau écope -------------------------------------------
    id: 0,
    // ------------------------------------------------------------------------
    vernacularName: `Requin-marteau écope`,
    scientificName: `Sphyrna media`,
    // ------------------------------------------------------------------------
    difficulty: DIFFICULTY_LEVEL.hard,
    // ------------------------------------------------------------------------
    class: `Chondrichthyes`,
    family: `Sphyrnidae`,
    // ------------------------------------------------------------------------
    uicn: UICN_STATUS.CR,
    // ------------------------------------------------------------------------
    images: [
      { url: 'https://www.sharksandrays.com/wp-content/uploads/2020/09/Scoophead-Shark-048.jpg', author: 'Andy Murch' },
      { url: 'https://www.sharksandrays.com/wp-content/uploads/2020/09/Scoophead-Shark-024.jpg', author: 'Andy Murch' },
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
      { url: 'https://oceananimals.org/wp-content/uploads/2021/06/Winghead-Final-Shark.jpg', author: '???' },
      { url: 'https://static.inaturalist.org/photos/28622466/medium.jpg', author: 'nicolubitz' },
    ],
  },



  /* ####################################################################### */
  /* ============================== MAMMALIA =============================== */
  /* ####################################################################### */

  /* =============================== Canidae =============================== */
  /* ------------------------------ (Canidés) ------------------------------ */

  { // Renard roux -------------------------------------------------------------------
    id: 0,
    // ------------------------------------------------------------------------
    vernacularName: `Renard roux`,
    scientificName: `Vulpes vulpes`,
    // ------------------------------------------------------------------------
    difficulty: DIFFICULTY_LEVEL.easy,
    // ------------------------------------------------------------------------
    class: `Mammalia`,
    family: `Canidae`,
    // ------------------------------------------------------------------------
    uicn: UICN_STATUS.LC,
    // ------------------------------------------------------------------------
    images: [
      { url: 'https://inaturalist-open-data.s3.amazonaws.com/photos/60493442/medium.jpg', author: 'Aleksandr Popov / Александр Попов' },
      { url: 'https://inaturalist-open-data.s3.amazonaws.com/photos/6568074/medium.jpg', author: 'Joanne Muis Redwood' },
    ],
  },
  { // Renard polaire -------------------------------------------------------------------
    id: 0,
    // ------------------------------------------------------------------------
    vernacularName: `Renard polaire`,
    scientificName: `Vulpes lagopus`,
    // ------------------------------------------------------------------------
    difficulty: DIFFICULTY_LEVEL.medium,
    // ------------------------------------------------------------------------
    class: `Mammalia`,
    family: `Canidae`,
    // ------------------------------------------------------------------------
    uicn: UICN_STATUS.LC,
    // ------------------------------------------------------------------------
    images: [
      { url: 'https://inaturalist-open-data.s3.amazonaws.com/photos/28389146/medium.jpg', author: 'Alexander Yakovlev' },
      { url: 'https://inaturalist-open-data.s3.amazonaws.com/photos/220490300/medium.jpeg', author: 'pgkaestner' },
    ],
  },
  { // Fennec -------------------------------------------------------------------
    id: 0,
    // ------------------------------------------------------------------------
    vernacularName: `Fennec`,
    scientificName: `Vulpes zerda`,
    // ------------------------------------------------------------------------
    difficulty: DIFFICULTY_LEVEL.medium,
    // ------------------------------------------------------------------------
    class: `Mammalia`,
    family: `Canidae`,
    // ------------------------------------------------------------------------
    uicn: UICN_STATUS.LC,
    // ------------------------------------------------------------------------
    images: [
      { url: 'https://inaturalist-open-data.s3.amazonaws.com/photos/38258258/medium.jpeg', author: 'Marc Faucher' },
      { url: 'https://static.inaturalist.org/photos/61295887/medium.jpeg', author: 'Ann Victory' },
    ],
  },
  { // Loup gris -------------------------------------------------------------------
    id: 0,
    // ------------------------------------------------------------------------
    vernacularName: `Loup gris`,
    scientificName: `Canis lupus`,
    // ------------------------------------------------------------------------
    difficulty: DIFFICULTY_LEVEL.easy,
    // ------------------------------------------------------------------------
    class: `Mammalia`,
    family: `Canidae`,
    // ------------------------------------------------------------------------
    uicn: UICN_STATUS.LC,
    // ------------------------------------------------------------------------
    images: [
      { url: 'https://inaturalist-open-data.s3.amazonaws.com/photos/43410580/medium.jpg', author: 'Brian Starzomski' },
      { url: 'https://inaturalist-open-data.s3.amazonaws.com/photos/91802132/medium.jpg', author: 'Josh More' },
    ],
  },
  { // Coyote -------------------------------------------------------------------
    id: 0,
    // ------------------------------------------------------------------------
    vernacularName: `Coyote`,
    scientificName: `Canis latrans`,
    // ------------------------------------------------------------------------
    difficulty: DIFFICULTY_LEVEL.medium,
    // ------------------------------------------------------------------------
    class: `Mammalia`,
    family: `Canidae`,
    // ------------------------------------------------------------------------
    uicn: UICN_STATUS.LC,
    // ------------------------------------------------------------------------
    images: [
      { url: 'https://inaturalist-open-data.s3.amazonaws.com/photos/28639314/medium.jpg', author: 'Cameron Eckert' },
      { url: 'https://inaturalist-open-data.s3.amazonaws.com/photos/4790202/medium.jpg', author: 'Kent C. Jensen' },
    ],
  },
  { // Lycaon -------------------------------------------------------------------
    id: 0,
    // ------------------------------------------------------------------------
    vernacularName: `Lycaon`,
    scientificName: `Lycaon pictus`,
    // ------------------------------------------------------------------------
    difficulty: DIFFICULTY_LEVEL.medium,
    // ------------------------------------------------------------------------
    class: `Mammalia`,
    family: `Canidae`,
    // ------------------------------------------------------------------------
    uicn: UICN_STATUS.EN,
    // ------------------------------------------------------------------------
    images: [
      { url: 'https://inaturalist-open-data.s3.amazonaws.com/photos/168698834/medium.jpg', author: 'Blake Matheson' },
      { url: 'https://static.inaturalist.org/photos/56160861/medium.jpg', author: 'Michael Woodruff' },
    ],
  },
  { // Otocyon -------------------------------------------------------------------
    id: 0,
    // ------------------------------------------------------------------------
    vernacularName: `Otocyon`,
    scientificName: `Otocyon megalotis`,
    // ------------------------------------------------------------------------
    difficulty: DIFFICULTY_LEVEL.hard,
    // ------------------------------------------------------------------------
    class: `Mammalia`,
    family: `Canidae`,
    // ------------------------------------------------------------------------
    uicn: UICN_STATUS.LC,
    // ------------------------------------------------------------------------
    images: [
      { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Otocyon_megalotis_-_Etosha_2014.jpg/800px-Otocyon_megalotis_-_Etosha_2014.jpg?20140329101920', author: 'Yathin S Krishnappa' },
      { url: 'https://s3.animalia.bio/animals/photos/full/original/bat-eared-fox-otocyon-megalotis-at-kgalagadi-transfrontier-park-northern-cape-south-africa-5.webp', author: 'Derek Keats' },
    ],
  },
  { // Chien viverrin -------------------------------------------------------------------
    id: 0,
    // ------------------------------------------------------------------------
    vernacularName: `Chien viverrin`,
    scientificName: `Nyctereutes procyonoides`,
    // ------------------------------------------------------------------------
    difficulty: DIFFICULTY_LEVEL.hard,
    // ------------------------------------------------------------------------
    class: `Mammalia`,
    family: `Canidae`,
    // ------------------------------------------------------------------------
    uicn: UICN_STATUS.LC,
    // ------------------------------------------------------------------------
    images: [
      { url: 'https://static.inaturalist.org/photos/233596122/medium.jpeg', author: 'Tomek Niedźwiedź' },
      { url: 'https://inaturalist-open-data.s3.amazonaws.com/photos/244787561/medium.jpg', author: 'Jukka A. Lång' },
    ],
  },

  /* =============================== Felidae =============================== */
  /* ------------------------------ (Félins) ------------------------------- */

  { // Lion -------------------------------------------------------------------
    id: 0,
    // ------------------------------------------------------------------------
    vernacularName: `Lion`,
    scientificName: `Panthera leo`,
    // ------------------------------------------------------------------------
    difficulty: DIFFICULTY_LEVEL.easy,
    // ------------------------------------------------------------------------
    class: `Mammalia`,
    family: `Felidae`,
    // ------------------------------------------------------------------------
    uicn: UICN_STATUS.VU,
    // ------------------------------------------------------------------------
    images: [
      { url: 'https://www.biolib.cz/IMG/GAL/318547.jpg', author: 'Lubomír Prause' },
      { url: 'https://d1jyxxz9imt9yb.cloudfront.net/medialib/4323/image/s768x1300/Lion_1.jpg', author: 'Kohai_Ben' },
    ],
  },
  { // Tigre ------------------------------------------------------------------
    id: 0,
    // ------------------------------------------------------------------------
    vernacularName: `Tigre`,
    scientificName: `Panthera tigris`,
    // ------------------------------------------------------------------------
    difficulty: DIFFICULTY_LEVEL.easy,
    // ------------------------------------------------------------------------
    class: `Mammalia`,
    family: `Felidae`,
    // ------------------------------------------------------------------------
    uicn: UICN_STATUS.EN,
    // ------------------------------------------------------------------------
    images: [
      { url: 'https://cdn.futura-sciences.com/sources/images/glossaire/rte/12784_Panthera_tigris_corbetti_01.jpg', author: 'H. Zell' },
      { url: 'https://static.nationalgeographic.fr/files/styles/image_3200/public/cr8akr.jpg?w=1600&h=900', author: `imageBROKER.com GmbH & Co. KG / Alamy Banque D'Images` },
    ],
  },
  { // Léopard ----------------------------------------------------------------
    id: 0,
    // ------------------------------------------------------------------------
    vernacularName: `Léopard`,
    scientificName: `Panthera pardus`,
    // ------------------------------------------------------------------------
    difficulty: DIFFICULTY_LEVEL.easy,
    // ------------------------------------------------------------------------
    class: `Mammalia`,
    family: `Felidae`,
    // ------------------------------------------------------------------------
    uicn: UICN_STATUS.VU,
    // ------------------------------------------------------------------------
    images: [
      { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Leopard_%28Panthera_pardus%29.jpg/800px-Leopard_%28Panthera_pardus%29.jpg?20090803065820', author: 'Haplochromis' },
      { url: 'https://inaturalist-open-data.s3.amazonaws.com/photos/29532833/medium.jpg', author: 'mikeloomis' },
    ],
  },
  { // Jaguar -----------------------------------------------------------------
    id: 0,
    // ------------------------------------------------------------------------
    vernacularName: `Jaguar`,
    scientificName: `Panthera onca`,
    // ------------------------------------------------------------------------
    difficulty: DIFFICULTY_LEVEL.medium,
    // ------------------------------------------------------------------------
    class: `Mammalia`,
    family: `Felidae`,
    // ------------------------------------------------------------------------
    uicn: UICN_STATUS.NT,
    // ------------------------------------------------------------------------
    images: [
      { url: 'https://www.researchgate.net/publication/317343654/figure/fig1/AS:504578904780800@1497312393642/An-adult-male-of-Jaguar-Panthera-onca-along-the-margin-of-the-Tr-es-Irm-aos-River-in.png', author: 'Rafael Hoogesteijn' },
      { url: 'https://m.psecn.photoshelter.com/img-get/I0000Y6phlEOhLW4/s/900/900/Big-Male-Jaguar-in-Evening-Light.jpg', author: 'David P. Glatz' },
    ],
  },
  { // Panthère des neiges ----------------------------------------------------
    id: 0,
    // ------------------------------------------------------------------------
    vernacularName: `Panthère des neiges`,
    scientificName: `Panthera uncia`,
    // ------------------------------------------------------------------------
    difficulty: DIFFICULTY_LEVEL.hard,
    // ------------------------------------------------------------------------
    class: `Mammalia`,
    family: `Felidae`,
    // ------------------------------------------------------------------------
    uicn: UICN_STATUS.VU,
    // ------------------------------------------------------------------------
    images: [
      { url: 'https://www.cms.int/sites/default/files/news_featured_image/snow_leopard_gerard_lacz_robert_harding.jpg', author: 'Gerard Lacz / Robert Harding' },
      { url: 'https://live.staticflickr.com/65535/48106975378_bcd96c09f7_b.jpg', author: 'Olivier Amiaud' },
    ],
  },
  { // Caracal ----------------------------------------------------------------
    id: 0,
    // ------------------------------------------------------------------------
    vernacularName: `Caracal`,
    scientificName: `Caracal caracal`,
    // ------------------------------------------------------------------------
    difficulty: DIFFICULTY_LEVEL.medium,
    // ------------------------------------------------------------------------
    class: `Mammalia`,
    family: `Felidae`,
    // ------------------------------------------------------------------------
    uicn: UICN_STATUS.LC,
    // ------------------------------------------------------------------------
    images: [
      { url: 'https://natura-sciences.com/wp-content/uploads/2013/01/caracal.jpg', author: 'Nick and Melissa Baker' },
      { url: 'https://medias.pourlascience.fr/api/v1/images/view/5a82ac0f8fe56f4a44548461/wide_1300/image.jpg', author: 'Stuart G Porter' },
    ],
  },
  { // Guépard ----------------------------------------------------------------
    id: 0,
    // ------------------------------------------------------------------------
    vernacularName: `Guépard`,
    scientificName: `Acinonyx jubatus`,
    // ------------------------------------------------------------------------
    difficulty: DIFFICULTY_LEVEL.easy,
    // ------------------------------------------------------------------------
    class: `Mammalia`,
    family: `Felidae`,
    // ------------------------------------------------------------------------
    uicn: UICN_STATUS.VU,
    // ------------------------------------------------------------------------
    images: [
      { url: 'https://previews.123rf.com/images/miksov/miksov1910/miksov191000009/133551068-un-gu%C3%A9pard-acinonyx-jubatus-dans-le-parc-national-kruger-en-afrique-du-sud.jpg', author: 'Ondrej Miksovsky ' },
      { url: 'https://live.staticflickr.com/7830/44773443200_1a08013d77_h.jpg', author: 'Christoph Strässler' },
    ],
  },
  { // Ocelot -----------------------------------------------------------------
    id: 0,
    // ------------------------------------------------------------------------
    vernacularName: `Ocelot`,
    scientificName: `Leopardus pardalis`,
    // ------------------------------------------------------------------------
    difficulty: DIFFICULTY_LEVEL.medium,
    // ------------------------------------------------------------------------
    class: `Mammalia`,
    family: `Felidae`,
    // ------------------------------------------------------------------------
    uicn: UICN_STATUS.LC,
    // ------------------------------------------------------------------------
    images: [
      { url: 'https://www.aquaportail.com/aquabdd/photos/leopardus-pardalis.jpg', author: '???' },
      { url: 'https://www.monde-animal.fr/wp-content/uploads/2020/06/ocelot-leopardus-pardalis.jpg', author: 'elitravo' },
    ],
  },
  { // Serval -----------------------------------------------------------------
    id: 0,
    // ------------------------------------------------------------------------
    vernacularName: `Serval`,
    scientificName: `Leptailurus serval`,
    // ------------------------------------------------------------------------
    difficulty: DIFFICULTY_LEVEL.hard,
    // ------------------------------------------------------------------------
    class: `Mammalia`,
    family: `Felidae`,
    // ------------------------------------------------------------------------
    uicn: UICN_STATUS.LC,
    // ------------------------------------------------------------------------
    images: [
      { url: 'https://www.monde-animal.fr/wp-content/uploads/2020/05/fiche-animale-monde-animal-serval.jpg.webp', author: 'Kyslynskyy' },
      { url: 'https://live.staticflickr.com/65535/49673259617_7cf5e24f2d_b.jpg', author: 'Roger Wasley' },
    ],
  },
  { // Margay -----------------------------------------------------------------
    id: 0,
    // ------------------------------------------------------------------------
    vernacularName: `Margay`,
    scientificName: `Leopardus wiedii`,
    // ------------------------------------------------------------------------
    difficulty: DIFFICULTY_LEVEL.hard,
    // ------------------------------------------------------------------------
    class: `Mammalia`,
    family: `Felidae`,
    // ------------------------------------------------------------------------
    uicn: UICN_STATUS.NT,
    // ------------------------------------------------------------------------
    images: [
      { url: 'https://inaturalist-open-data.s3.amazonaws.com/photos/46123268/medium.jpeg', author: 'leithallb' },
      { url: 'https://pbs.twimg.com/media/BDkZziDCUAAN2xv?format=jpg&name=large', author: '???' },
    ],
  },
  { // Puma -------------------------------------------------------------------
    id: 0,
    // ------------------------------------------------------------------------
    vernacularName: `Puma`,
    scientificName: `Puma concolor`,
    // ------------------------------------------------------------------------
    difficulty: DIFFICULTY_LEVEL.medium,
    // ------------------------------------------------------------------------
    class: `Mammalia`,
    family: `Felidae`,
    // ------------------------------------------------------------------------
    uicn: UICN_STATUS.LC,
    // ------------------------------------------------------------------------
    images: [
      { url: 'https://cdn.britannica.com/20/93520-050-3E663489/Puma.jpg', author: 'Michael Durham' },
      { url: 'https://inaturalist-open-data.s3.amazonaws.com/photos/9834553/original.jpg', author: 'Marc Faucher' },
    ],
  },
  { // Lynx boréal ------------------------------------------------------------
    id: 0,
    // ------------------------------------------------------------------------
    vernacularName: `Lynx boréal`,
    scientificName: `Lynx lynx`,
    // ------------------------------------------------------------------------
    difficulty: DIFFICULTY_LEVEL.medium,
    // ------------------------------------------------------------------------
    class: `Mammalia`,
    family: `Felidae`,
    // ------------------------------------------------------------------------
    uicn: UICN_STATUS.LC,
    // ------------------------------------------------------------------------
    images: [
      { url: 'https://www.aquaportail.com/aquabdd/photos/lynx-lynx.jpg', author: '???' },
      { url: 'https://www.parcsnationaux.fr/sites/parcsnationaux.fr/files/styles/slide_1500_1000/public/thumbnails/image/lynx.png?itok=PwOjtU2n', author: 'Robert Chevalier' },
    ],
  },

  /* =============================== Sirenia =============================== */
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
      { url: 'https://live.staticflickr.com/8160/6983022872_fb8dd6a597_b.jpg', author: 'Fábio N. Manfredini' },
      { url: 'https://inaturalist-open-data.s3.amazonaws.com/photos/34308035/medium.jpeg', author: 'Chris Wuerz' },
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
      { url: 'https://inaturalist-open-data.s3.amazonaws.com/photos/17174106/medium.jpg', author: 'Keith Ramos' },
      { url: 'https://inaturalist-open-data.s3.amazonaws.com/photos/118210498/medium.jpeg', author: 'linimini' },
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
      { url: 'https://www.zoochat.com/community/media/african-manatee-trichechus-senegalensis.397989/full?d=1527120833', author: 'Giant Eland' },
      { url: 'https://www.mondedesmammiferes.fr/wp-content/uploads/2019/01/Trichechus-senegalensis.jpg', author: 'Jiri Prochazka' },
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
      { url: 'https://ultramarina.com/fichier/p_entete/18443/entete_img_egypte_marsa_alam_plongee_rsds_marsa_nakari_dugong_borut_furlan3835.jpg', author: 'Borut Furlan' },
      { url: 'https://ultramarina.com/thumb/ar__x/f__jpg/h__512/q__60/w__1280/zc__1/src/fichier/p_entete/18442/entete_img_egypte_marsa_alam_plongee_rsds_marsa_nakari_dugong_hannes_plach_6.jpg', author: 'Hannes Plach' },
    ],
  },

];
