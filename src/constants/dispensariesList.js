const dispensaries = [
  {
    id: "0",
    src: require("./../assets/dispesaryImgs/lodge.jpg"),
    heading: "The Lodge",
    subHeading: "Outdoor and Indoor grown quality selections",
    offer: "20%",
    ratings: "4.9",
    time: "45 mins",
    cost: "$170q",
    titleInfo: {
      heading: "Pizza Mania",
      subHeading: "Pizza, Italian, Pasta",
      address: "Soho, London",
      ratingInfo: [
        {
          value: "4.1/5",
          description: "100+ ratings",
          imgIcon: require("./../assets/icons/like.png"),
        },
        {
          value: "29 mins",
          description: "Delivery Time",
          imgIcon: require("./../assets/icons/clock.png"),
        },
        {
          value: "$420",
          description: "For Two",
          imgIcon: require("./../assets/icons/payment.png"),
        },
      ],
      offer: "30% OFF use code NEXT",
    },
    menuItems: [
      {
        id: 1,
        image: require("./../assets/menu/momos.jpg"),
        title: "Fried Momos",
        category: "Starters",
        price: "$120",
      },
      {
        id:2,
        image:require('./../assets/menu/chineseSamosa.jpg'),
        title:'Chinese Samosa',
        category:'Starters',
        price:'$100'
    },
    {
        id:3,
        image:require('./../assets/menu/GuaBao.jpg'),
        title:'Gua Bao',
        category:'Starters',
        price:'$160'
    },
    ],
  },
  {
    id: "1",
    src: require("./../assets/dispesaryImgs/first.png"),
    heading: "Light Shade",
    subHeading: "Colorado's prime",
    offer: "10%",
    ratings: "4.0",
    time: "55 mins",
    cost: "$250q",
  },
  {
    id: "2",
    src: require("./../assets/dispesaryImgs/dab.jpg"),
    heading: "The Dab",
    subHeading: "Hardest Hittings Dabs in CO",
    offer: "25%",
    ratings: "3.9",
    time: "30 mins",
    cost: "$200q",
  },
  {
    id: "3",
    src: require("./../assets/dispesaryImgs/silver.jpg"),
    heading: "Silver Stem",
    subHeading: "Silverthorn Maximum",
    offer: "10%",
    ratings: "3.2",
    time: "60 mins",
    cost: "$350q",
  },
  {
    id: "4",
    src: require("./../assets/dispesaryImgs/orange.png"),
    heading: "Orange Kush",
    subHeading: "Kush For your Tush",
    offer: "5%",
    ratings: "5.0",
    time: "45 mins",
    cost: "$95q",
  },
  {
    id: "5",
    src: require("./../assets/dispesaryImgs/psh.jpg"),
    heading: "Lightshade",
    subHeading: "Best shade you'll throw",
    offer: "25%",
    ratings: "3.8",
    time: "30 mins",
    cost: "$225q",
  },
  {
    id: "6",
    src: require("./../assets/dispesaryImgs/silver.jpg"),
    heading: "Silver Stem",
    subHeading: "Silverthorn Maximum",
    offer: "10%",
    ratings: "3.2",
    time: "60 mins",
    cost: "$350q",
  },
  {
    id: "7",
    src: require("./../assets/dispesaryImgs/lodge.jpg"),
    heading: "The Lodge",
    subHeading: "Outdoor and Indoor grown quality selections",
    offer: "20%",
    ratings: "4.9",
    time: "45 mins",
    cost: "$170q",
  },
  // }
  // {
  //     src:require('./../assets/restraunt/BrunosFriedChicken.jpg'),
  //     heading:'Brunos Fried Chicken',
  //     subHeading:'Fast food, Fried Chicken',
  //     offer:'25%',
  //     ratings:'4',
  //     time:'30 mins',
  //     cost:'$200',
  // },
  // {
  //     src:require('./../assets/restraunt/ShenaazsBakery.jpg'),
  //     heading:'Shehnaaz Bakery',
  //     subHeading:'Cakes, Desserts, Pastries',
  //     offer:'15%',
  //     ratings:'4.2',
  //     time:'50 mins',
  //     cost:'$125',
  // }
];

export default dispensaries;
