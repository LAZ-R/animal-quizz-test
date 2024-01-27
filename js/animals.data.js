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
      `https://www.aquaportail.com/pictures2309/jeune-male-lion-panthera-leo.jpg`,
      `https://d1jyxxz9imt9yb.cloudfront.net/medialib/4323/image/s768x1300/Lion_1.jpg`,
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
      `https://cdn.futura-sciences.com/sources/images/glossaire/rte/12784_Panthera_tigris_corbetti_01.jpg`,
      `https://static.nationalgeographic.fr/files/styles/image_3200/public/cr8akr.jpg?w=1600&h=900`,
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
      `https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Leopard_%28Panthera_pardus%29.jpg/800px-Leopard_%28Panthera_pardus%29.jpg?20090803065820`,
      `https://inaturalist-open-data.s3.amazonaws.com/photos/29532833/medium.jpg`,
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
      `https://www.researchgate.net/publication/317343654/figure/fig1/AS:504578904780800@1497312393642/An-adult-male-of-Jaguar-Panthera-onca-along-the-margin-of-the-Tr-es-Irm-aos-River-in.png`,
      `https://m.psecn.photoshelter.com/img-get/I0000Y6phlEOhLW4/s/900/900/Big-Male-Jaguar-in-Evening-Light.jpg`,
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
      `https://www.cms.int/sites/default/files/news_featured_image/snow_leopard_gerard_lacz_robert_harding.jpg`,
      `https://live.staticflickr.com/65535/48106975378_bcd96c09f7_b.jpg`,
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
      `https://natura-sciences.com/wp-content/uploads/2013/01/caracal.jpg`,
      `https://medias.pourlascience.fr/api/v1/images/view/5a82ac0f8fe56f4a44548461/wide_1300/image.jpg`,
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
      `https://previews.123rf.com/images/miksov/miksov1910/miksov191000009/133551068-un-gu%C3%A9pard-acinonyx-jubatus-dans-le-parc-national-kruger-en-afrique-du-sud.jpg`,
      `https://live.staticflickr.com/7830/44773443200_1a08013d77_h.jpg`,
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
      `https://www.aquaportail.com/aquabdd/photos/leopardus-pardalis.jpg`,
      `https://www.monde-animal.fr/wp-content/uploads/2020/06/ocelot-leopardus-pardalis.jpg`,
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
      `https://www.monde-animal.fr/wp-content/uploads/2020/05/fiche-animale-monde-animal-serval.jpg.webp`,
      `https://live.staticflickr.com/65535/49673259617_7cf5e24f2d_b.jpg`,
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
      `https://www.aquaportail.com/pictures2310/chat-americain-leopardus-wiedii.jpg`,
      `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvx-0F_EPa36Rrz-O4LD5EpxNrJLm5XX31dw&usqp=CAU`,
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
      `https://cdn.britannica.com/20/93520-050-3E663489/Puma.jpg`,
      `https://inaturalist-open-data.s3.amazonaws.com/photos/9834553/original.jpg`,
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
      `https://www.aquaportail.com/aquabdd/photos/lynx-lynx.jpg`,
      `https://www.parcsnationaux.fr/sites/parcsnationaux.fr/files/styles/slide_1500_1000/public/thumbnails/image/lynx.png?itok=PwOjtU2n`,
    ],
  },

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
      `https://live.staticflickr.com/8160/6983022872_fb8dd6a597_b.jpg`,
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
      `https://inaturalist-open-data.s3.amazonaws.com/photos/17174106/original.jpg`,
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
      `https://www.zoochat.com/community/media/african-manatee-trichechus-senegalensis.397989/full?d=1527120833`,
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
      `https://ultramarina.com/fichier/p_entete/18443/entete_img_egypte_marsa_alam_plongee_rsds_marsa_nakari_dugong_borut_furlan3835.jpg`,
    ],
  },

  /* ####################################################################### */
  /* =========================== Chondrichthyes ============================ */
  /* ####################################################################### */

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
      `https://oceananimals.org/wp-content/uploads/2021/06/Winghead-Final-Shark.jpg`,
    ],
  },

];
