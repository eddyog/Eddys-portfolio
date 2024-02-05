import {
  temples,
  submarine,
  shoes,
  python,
  cplus, 
  php,
  webdriver,
  sql,
  swift,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  byui,
  starbucks,
  nearsol,
  church,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Swift Developer",
    icon: creator,
  },
  {
    title: "QA Engineering",
    icon: backend,
  },

];

const technologies = [
  {
    name: "swift",
    icon: swift,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "C++",
    icon: cplus,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "webdriver.io",
    icon: webdriver,
  },
  {
    name: "Mysql",
    icon: sql,
  },

];

const experiences = [
  {
    title: "QA Engineering",
    company_name: "The Church of Jesus Christ of Latter-day Saints.",
    icon: church,
    iconBg: "#383E56",
    date: "April 2023 - Sep 2023",
    points: [
      "Developing and maintaining web applications using React.js, JavaScript other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Solving automation test frameworks problems.",
      "Webdriver.io for automated testing with SauceLabs as the platform for testing and error monitoring.",
    ],
  },

  {
    title: "Software Engineering - Education",
    company_name: "Brigham Young University Idaho",
    icon: byui,
    iconBg: "#383E56",
    date: "April 2019 - Dec 2023",
    points: [
      "Bachelors of Science in Software Engineering",
      "Certificate in Web Development Frontend and Backend",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "GPA 3.5",
    ],
  },



  {
    title: "Bilingual Customer Service Representative (English - Spanish)",
    company_name: "Nearsol - Guatemala",
    icon: nearsol,
    iconBg: "#383E56",
    date: "April 2016 - April 2017",
    points: [
      "Handle complaints, provide appropriate solutions and alternatives within the time limits, and follow up to ensure resolution",
      "Take payment information and other pertinent information such as addresses and phone numbers",
      "Maintain financial accounts by processing customer adjustments",
      "Provided outstanding customer service by showing concer, resolving in a timely manner and offering solutiongs and self-help options",
    ],
  },

  {
    title: "Volunter Representative - Missionary",
    company_name: "The Church of Jesus Christ of Latter-day Saints",
    icon: church,
    iconBg: "#383E56",
    date: "Feb 2014 - Mar 2016",
    points: [

      "Set and accomplished weekly and long-term teaching and personal-improvement goals.",
      "Taught, trained, and supervised groups of 20-30 missionaries.",
      "Met, conversed with, and taught over 100 people on a weekly basis.",
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Shoes Mobile Application",
    description:
      "This Mobile Application Shoes Ecommerce was created using Reat Native app building that consist of NodeJS Backend using Mongodb, separate Stripe Node Server with (strype payments) and React Native Frontend ",
    tags: [
      {
        name: "React-Native",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Strype Payments",
        color: "pink-text-gradient",
      },
    ],
    image: shoes,
    source_code_link: "https://github.com/eddyog/SHOES-APP",
  },
  {
    name: "Submarine Game",
    description:
      "Submarine is a game crated with Python Arcade. Is a 2 players game that consist of a submarine shooting obstacles and collecting coins to acumulate coins and win agains your opponent. ",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Python Arcade",
        color: "green-text-gradient",
      },
      {
        name: "Object-oriented programming ",
        color: "pink-text-gradient",
      },
    ],
    image: submarine,
    source_code_link: "https://github.com/eddyog/submarine-game",
  },
  {
    name: "Temples Inn and Suits",
    description:
      "Temples Inn and Suits is a website that allows you to make reservations in a beatiful hotel.  Was created with HTML, CSS and JavaScript. Using a database with json files. ",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: temples,
    source_code_link: "https://eddyog.github.io/temple_suites.github.io/index.html",
  },
];

export { services, technologies, experiences, testimonials, projects };