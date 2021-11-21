const updates = [{
    header: "Alabama Orders",
    title: "",
    subtitle: "",
    text: "lorem ipsum"
  },
  {
    header: "CA Klarity PF",
    title: "Do not ship to CA",
    subtitle: "",
    text: "Due to Gov Regulations we are not able to ship Klarity PF to CA"
  }

];

const itemsBO = [{
    formulation: "Vitamin B Complex",
    available: {
      nonCA: false,
      ca: false
    },
    expectedReleaseDate: "No date available",
  },
  {
    formulation: "GSH",
    available: {
      nonCA: true,
      ca: false
    },
    expectedReleaseDate: "No date available",
  },

]