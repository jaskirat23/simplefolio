import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: "Jaskirat |  Developer", // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my profile', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Jaskirat Singh',
  subtitle: "I am a focusd devloper.",
  cta: 'Want to know more about me?',
};

// ABOUT DATA
export const aboutData = {
  img: 'jaskirat.jpeg',
  paragraphOne: 'Hi, I am jaskirat! A technological enthusiast from Punjab, India.',
  paragraphTwo: `I am passionate about building scalable software, creating effective solutions, and learning every day to grow professionally in the IT field.`,
  paragraphThree: 'Feel free to contact me at any time',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Robofriends',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'apple.jpeg',
    title: 'Detection and classification of apple using deep learning',
    info: 'This a web application developed with the help of flask web framework.',
    info2: 'It uses deep learning to detect and count the number of apples present ina video or an image.',
    url: '',//If no repo I changed it
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'diabetes.png',
    title: 'Diabetes prediction',
    info: 'This is another web application developed using flask micro web framework.',
    info2: 'It uses logistic regression to detect whether the person is siabetic or not based on the input provided by the user.',
    url: 'https://diabetes-prediction23.herokuapp.com/',
    repo: 'https://github.com/jaskirat23/diabetes_prediction', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to work with me? Awesome!',
  btn: 'Contact me!',
  email: 'singh.jaskirat23@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/singhjaskirat_',
    },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/jaskirat-singh-711386133/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/jaskirat23',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
