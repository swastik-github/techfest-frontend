const eventData = [
  {
    _id: 1,
    title: "CODEFEST",
    descriptions:
      "We bring to you a series of exciting hackathons and coding challenges to put your coding and development skills to test and solve interesting real life problems.",
    event_date: new Date(),
    event_type: "technical",
    price: Math.floor(Math.random() * 999) + 100,
    image: "/images/",
    alt_image: "https://picsum.photos/200/300",
    timeline: {
      openingRegistrationDate: new Date(),
      lastRegistrationDate: new Date(),
    },
    event_rules: [
      "Every team has to register online on the official Techfest website for the competition.",
      "A Team ID will be allocated to the team on registration which shall be used for future references.",
      "The decision of the organizers or judges shall be treated as final and binding on all.No responsibility will be held by Techfest, IIT Bombay for any late, lost or misdirected entries.",
    ],
    contact:{
      name:'swastik jain',
      email:'swastikjain02@gmail.com',
      phone_no:4879231213
    }
  },
  {
    _id: 2,
    title: "FINGERS ON FIRE",
    descriptions:
      "Rapid fire quiz competition based on advancement in technology, to be held in 3 different rounds. This is a team-based event. One team will be selected as winner after winning the final round.",
    event_date: new Date(),
    event_type: "technical",
    price: Math.floor(Math.random() * 999) + 100,
    image: "/images/",
    alt_image: "https://picsum.photos/200/300",
  },
  {
    _id: 3,
    title: "ROBODINO",
    descriptions:
      "Are you someone who likes to build things, From building blinking LED lights to setting up the mighty Megazord? Presenting an Arduino competition, with compiled set of challenges (Robo race, maze solving etc.)",
    event_date: new Date(),
    event_type: "technical",
    price: Math.floor(Math.random() * 999) + 100,
    image: "/images/",
    alt_image: "https://picsum.photos/200/300",
  },
  {
    _id: 4,
    title: "CAD-Astrophic",
    descriptions:
      "The art of designing things is a gift, a gift known to a very few people of the society. Are you one of those? Why wait then, we’ve got you covered. We are organizing a CAD competition for all of you design nerds waiting for the correct opportunity.",
    event_date: new Date(),
    event_type: "technical",
    price: Math.floor(Math.random() * 999) + 100,
    image: "/images/",
    alt_image: "https://picsum.photos/200/300",
  },
  {
    _id: 5,
    title: "VIRTUAL DESIGNING PLATFORM",
    descriptions:
      "Game, App, Website, Graphic development and designing competition for students with interest in building personalized virtual creativity platform from scratc ",
    event_date: new Date(),
    event_type: "technical",
    price: Math.floor(Math.random() * 999) + 100,
    image: "/images/",
    alt_image: "https://picsum.photos/200/300",
  },
  {
    _id: 6,
    title: "ONLINE CHESS TOURNAMENT",
    descriptions:
      "Online chess tournament for individuals to battle it out in the arena of minds. With your own play style and tactics, outsmart your opponent and take the King. Tournament Style: Swiss League Conducted: Online on Lichess.org ",
    event_date: new Date(),
    event_type: "sports",
    price: Math.floor(Math.random() * 999) + 100,
    image: "/images/",
    alt_image: "https://picsum.photos/200/300",
  },
  {
    _id: 7,
    title: "WEIGHTLIFTING COMPETITION",
    descriptions:
      "Weightlifting competition to be organized for fitness freaks for different weight categories (in presence of experts & professionals). ",
    event_date: new Date(),
    event_type: "sports",
    price: Math.floor(Math.random() * 999) + 100,
    image: "/images/",
    alt_image: "https://picsum.photos/200/300",
  },
  {
    _id: 8,
    title: "LET’S NACHO",
    descriptions:
      "Group and Solo dance competition to be held on stage in Auditorium.",
    event_date: new Date(),
    event_type: "cultural",
    price: Math.floor(Math.random() * 999) + 100,
    image: "/images/",
    alt_image: "https://picsum.photos/200/300",
  },
  {
    _id: 9,
    title: "FASHION SHOW",
    descriptions:
      "Theme-based ramp walk and fashion show to be held on stage in OCT ground/Auditorium. Judges will mark all models on basis of attire, style, creativity, confidence etc. Dress codes will be decided prior to the event",
    event_date: new Date(),
    event_type: "cultural",
    price: Math.floor(Math.random() * 999) + 100,
    image: "/images/",
    alt_image: "https://picsum.photos/200/300",
  },
];
export default eventData;
