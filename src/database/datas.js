export const properties = [
  {
    id: 1,
    title: "Appartement moderne au centre-ville",
    description:
      "Un appartement de 3 pièces avec vue sur la ville, situé proche des commodités.",
    price: 750,
    location: {
      city: "Paris",
      neighborhood: "Montmartre",
      latitude: 48.8867,
      longitude: 2.3431,
    },
    features: {
      rooms: 3,
      bathrooms: 1,
      area: 65,
      furnished: true,
    },
    photos: [
      require("../assets/images/1.jpg"),
      require("../assets/images/12.jpg"),
    ],
    type: "Appartement",
    available: true,
    postedDate: "2024-10-31",
  },
  {
    id: 2,
    title: "Studio avec terrasse",
    description: "Studio lumineux avec terrasse, idéal pour étudiants.",
    price: 500,
    location: {
      city: "Lyon",
      neighborhood: "Part-Dieu",
      latitude: 45.76,
      longitude: 4.8422,
    },
    features: {
      rooms: 1,
      bathrooms: 1,
      area: 30,
      furnished: false,
    },
    photos: [
      require("../assets/images/21.jpg"),
      require("../assets/images/22.jpg"),
    ],
    type: "Studio",
    available: true,
    postedDate: "2024-10-25",
  },
  {
    id: 3,
    title: "Maison avec jardin",
    description: "Maison familiale avec grand jardin et garage.",
    price: 1200,
    location: {
      city: "Bordeaux",
      neighborhood: "Caudéran",
      latitude: 44.8333,
      longitude: -0.6057,
    },
    features: {
      rooms: 5,
      bathrooms: 2,
      area: 120,
      furnished: true,
    },
    photos: [
      require("../assets/images/31.jpg"),
      require("../assets/images/32.jpg"),
    ],
    type: "Maison",
    available: false,
    postedDate: "2024-10-20",
  },
  {
    id: 4,
    title: "Appartement en bord de mer",
    description: "Appartement avec vue sur la mer, accès direct à la plage.",
    price: 900,
    location: {
      city: "Nice",
      neighborhood: "Promenade des Anglais",
      latitude: 43.6951,
      longitude: 7.2654,
    },
    features: {
      rooms: 2,
      bathrooms: 1,
      area: 50,
      furnished: true,
    },
    photos: [
      require("../assets/images/41.jpg"),
      require("../assets/images/42.jpg"),
    ],
    type: "Appartement",
    available: true,
    postedDate: "2024-10-18",
  },
];

export const favorites = []
