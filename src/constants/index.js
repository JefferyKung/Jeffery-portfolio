import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  java,
  materialUI,

  threejs,
  CICCC,
  beingDigital,
  Homey,
  PoPo,
  gymProject,
  eventMatching,
  BJDojo,
  reduxApp,
  wb,
  tshirtAI,
  Ringus,
  ikea,
  senryo
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
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Digital marketer",
    icon: mobile,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
  {
    name: "java",
    icon: java,
  },
  {
    name: "material UI",
    icon: materialUI,
  },
];

const experiences = [
  {
    title: "Shopping Experience Manager",
    company_name: "Ikea",
    icon: ikea,
    iconBg: "#FFFFFF",
    date: "Mar 2024 - Present",
    location:"Taoyuan,Taiwan",
    points: [
      "To contribute to an inspiring and joyful shopping experience for all visitors and customers.",
"I oversaw a department with 17 team members, including coworkers, for the greeters counter at the entrance, the kid-playing solution called Smaland, and all shopping tools. I developed and motivated each individual based on their situation.",

"My core task is understanding and translating customers' emotional needs into implemented commercial solutions and using customer insights to improve customer satisfaction; we passed Ikea's internal biannual review, getting 85% out of 100%, a huge success.",

"We are dedicated to securing the foundation for an inspiring, joyful, welcoming, and family-friendly atmosphere. Our commitment to this atmosphere ensures that every visitor feels valued and included. ",

"Secured all physical and digital shopping tools and planned the strategic use of which shopping tool for what kind of target customer group and where to change the smaller ones to bigger ones for the enormous shopping amount. Implemented new yellow basket trolleys in May and improved the tool usage rate on the 5th floor from 35% to 60%.",

"Be a duty manager of the whole Customer Relation Department and Store manager duty.", 
      
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Ringus Solution Enterprise Limited",
    icon: Ringus,
    iconBg: "#FFFFFF",
    date: "Aug 2023 - Jan 2024",
    location:"(work remotely with Hong Kong headquarter)",
    points: [
      
      
      "Working with senior front-end developers, back-end team and UI/UX designer.",
      "We use Nextjs 13.5 with TypeScript.",
      "We are working on building a huge corporate official website with checkout and membership system.",
      "Our client is Hong Kong top tier business brand.",
      
      
    ],
  },
  {
    title: "Javascript Student Developer",
    company_name: "CornerStone International Community College",
    icon: CICCC,
    iconBg: "#293a8a",
    date: "April 2022 - May 2023",
    location:"Vancouver,Canada",
    points: [
      "1+ year Intense bootcamp with 9 terms. Making 11 different scale of projects. ",
      "Developing and maintaining web applications using React.js, Express.js, MYSQL, MongoDB. Using Java in one term.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create decent products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      
    ],
  },
  {
    title: "Associate Project Manager",
    company_name: "Being Digital - funP Innovation Group",
    icon: beingDigital,
    iconBg: "#FFFFFF",
    date: "Oct 2020 - May 2021",
    location:"Taipei,Taiwan",
    points: [
      "Being a project leader for top clients in the whisky industry.",
      "Responsible for running social platforms (Facebook/Instagram/Line), strategy planning, campaign planning, target audience analyzing, contributing to client proposals and quotes, streamlining communication between internal designer team, and tone & manner keeping.",
      "Holding key accounts like Macallan (1M followers on FB), the top whisky brand in the world. Other accounts include The famous grouse (780K followers on FB), The naked grouse, and The Glenrothes.",
      "The average engagement rate of The famous grouse's Facebook posts is 37% in Q4 of 2020.",
      "Experienced in planning and launching chatbots, executing commercial photography projects, and collaborations with 1M-follower influencers like YouTuber Joeman.",      
    ],
  },
  {
    title: "Brand supervisor",
    company_name: "Homey hostel (Taipei,Taiwan)",
    icon: Homey,
    iconBg: "#FFFFFF",
    date: "Aug 2018 - Apr 2020",
    points: [
      "The highest marketing position in my period, directly responsible to GM.",
      "The total revenue of 2019 increased by 16.47% as compared with that of 2018. ",
      "Responsible for branding, digital marketing, collaboration, business development, and maintain OTA & Analyze performance.. ",
      "Leading a 5 people group at the marketing department and 7 people team at the front desk department.",
    ],
  },
  // {
  //   title: "Police officer",
  //   company_name: "Government of Taiwan",
  //   icon: PoPo,
  //   iconBg: "#FFFFFF",
  //   date: "Jan 2017 - Apr 2018 ",
  //   points: [
  //     "Passed 2016 National Grade 4 Special examination for police officers.",
  //     "I've been: Special Police First Headquarters, The Sixth Precinct of Tainan City Police Department, and SongShan Precinct of Taipei City Police Department.",
  //     "Built a decent skill of how to communicate with people effectively.",
  //   ],
  // },
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
    name: "Senryo Sushi",
    description:
      "I worked on this project when I worked for Ringus. I'm responsible for making ui based on designer's Figma prototype, making functions, and integrating APIs from backend team. (store location, faqs, menu, contact forms,about us, ingredients, and news pages.) ",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "TS&Redux",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: senryo,
   
    deployment_link:"https://order.sen-ryo.com.hk/en",
  },
  {
    name: "Your personal gym instructor",
    description:
      "This body-training guide built by the React.js web app fetches data from Rapid API. You can look up which part of your body you want to train. There are Gifs animations showing you how to do those exercises.",
    tags: [
      {
        name: "Frontend : react",
        color: "blue-text-gradient",
      },
      {
        name: "data: RapidAPI",
        color: "green-text-gradient",
      },
      {
        name: "styling: material-UI",
        color: "pink-text-gradient",
      },
    ],
    image: gymProject,
    source_code_link: "https://github.com/JefferyKung/Your-personal-gym-instructor",
    deployment_link:"https://www.jefferykung.online/",
  },
  {
    name: "Event matching app",
    description:
      "This is a MERN web application with Google OAuth login access. Aim to make people gather friends more easily.",
    tags: [
      {
        name: "Frontend : react",
        color: "blue-text-gradient",
      },
      {
        name: "backend: MongoDB SDK",
        color: "green-text-gradient",
      },
      {
        name: "styling: Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: eventMatching,
    source_code_link: "https://github.com/JefferyKung/Event-matching-app",
    deployment_link:"https://node-js-final-project.vercel.app/",
  },
  {
    name: "Whistleblowing Software (Cold-start 15 mins)",
    description:
      "Web-based case management system that allows users to Anonymous reporting. This is a group project and I'm in charge of back-end development.",
    tags: [
      {
        name: "Frontend: React",
        color: "blue-text-gradient",
      },
      {
        name: "backend: Express+ Mongoose",
        color: "green-text-gradient",
      },
      {
        name: "styling: Tailwind CSS",
        color: "pink-text-gradient",
      },
      
    ],
    image: wb,
    source_code_link: "https://github.com/ryoosukesaito/Backend-whistleblowing",
    deployment_link:"https://frontend-whistleblowing.vercel.app/",
  },
  {
    name: "Blackjack-DOJO",
    description:
      "This is an html-css-javascript web app for users to practice blackjack with a cheatsheet alongside. Aim to make use of DOM manipulation. It's easy but handy!",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
    ],
    image: BJDojo,
    source_code_link: "https://github.com/JefferyKung/Blackjack-DOJO",
    deployment_link:"https://web2final.vercel.app/",
  },
  {
    name: "React-redux-structure shopping cart",
    description:
      "This react-based shopping cart implements the Redux structure and is connected to Google Firebase. It's the best way to learn how to use Redux from a simple shopping cart page.",
    tags: [
      {
        name: "Frontend : react",
        color: "blue-text-gradient",
      },
      {
        name: "Redux toolkit",
        color: "green-text-gradient",
      },
      {
        name: "data: Google Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: reduxApp,
    source_code_link: "https://github.com/JefferyKung/React-redux-structure-shopping-cart",
    deployment_link:"https://react-final-gamma.vercel.app/",
  }, {
    name: "tshirt-design-AI",
    description:
      "This is a fullstack application that you can try to design your own t-shirt by changing color, upload your own image, and even asking A.I. to do so! (The server is cold-start needed. The AI Api is not free to request, so it's probably not gonna work if it's out of charging amount.)",
    tags: [
      {
        name: "Frontend : react.js (tailwind)",
        color: "blue-text-gradient",
      },
      {
        name: "backend: Express.js",
        color: "green-text-gradient",
      },
      {
        name: "openAI",
        color: "pink-text-gradient",
      },
    ],
    image: tshirtAI,
    source_code_link: "https://github.com/JefferyKung/tshirt-design-AI-frontend",
    deployment_link:"https://tshirt-design-ai-frontend.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
