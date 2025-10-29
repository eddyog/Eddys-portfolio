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
  threejs,
  dhi,
  byu,
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
    title: "QA Engineer",
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
    name: "React JS",
    icon: reactjs,
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
    name: "Python",
    icon: python,
  },
  {
    name: "C++",
    icon: cplus,
  },

  {
    name: "MySQL",
    icon: sql,
  },

];

const experiences = [
  {
    title: "Master of Information Systems Management (MISM)",
    company_name: "Brigham Young University – Marriott School of Business",
    icon: byu,
    iconBg: "#383E56",
    date: "Sept 2025 - Present",
    points: [
      "Pursuing a Master’s degree in Information Systems Management with a focus on digital product management, data analytics, and system architecture.",
      "Developing leadership and technical skills through courses in Agile development, cybersecurity, cloud infrastructure, and enterprise strategy.",
      "Collaborating with peers and professors on real-world projects involving product innovation, business process improvement, and emerging technologies.",
      "Committed to continuous learning and bridging the gap between technology and business strategy.",
    ],
  },
  
  {
    title: "Software Engineer",
    company_name: "DHI Computer Services inc",
    icon: dhi,
    iconBg: "#383E56",
    date: "Nov 2024 - Mar 2025",
    points: [
      "Engineered and maintained web applications using Angular and C#, implementing new features and optimizing existing codebases.",
      "Developed responsive, cross-browser interfaces with HTML and CSS (Scss/Sass) to enhance UI/UX in collaboration with designers.",
      "Diagnosed and resolved technical issues, reducing bug-related delays and improving product stability.",
      "Contributed to Agile workflows by reporting progress in daily scrums, assisting with debugging, and supporting deployments with the Ops team."
    ],
  },

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
    title: "Bachelor of Science in Software Engineering",
    company_name: "Brigham Young University – Idaho",
    icon: byui,
    iconBg: "#383E56",
    date: "Apr 2019 - Dec 2023",
    points: [
      "Earned a Bachelor of Science in Software Engineering with a focus on full-stack development and software design principles.",
      "Completed certificates in Frontend and Backend Web Development, gaining hands-on experience with modern web technologies.",
      "Participated in collaborative code reviews and contributed constructive feedback to enhance code quality and team performance.",
      "Graduated with a 3.5 GPA, demonstrating consistent academic excellence and commitment to continuous improvement.",
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
      "Provided outstanding customer service by showing concern, resolving in a timely manner and offering solutions and self-help options",
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
    name: "E-Commerce React Native App (Shoes Store)",
    description:
    "A cross-platform e-commerce mobile app built with React Native, showcasing my ability to design and develop full-featured mobile experiences. The app integrates a Node.js backend with MongoDB for data management and a separate Stripe Node server for secure payment processing, demonstrating my proficiency in mobile architecture, API integration, and end-to-end development.",
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
      "Submarine is a game created with Python Arcade. Is a 2 players game that consist of a submarine shooting obstacles and collecting coins to collect coins and win agains your opponent. ",
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