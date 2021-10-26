/**src/Data/data.js**/
const HEADER = "PTERO";

const NAVBAR_DATA = [
  { id: 1, url: "/", label: "Home" },
  { id: 2, url: "#functionalities", label: "Functionalities" },
  { id: 3, url: "#about-us", label: "About us" },
  { id: 4, url: "#demo", label: "Demo" },
  { id: 5, url: "#about-ptero", label: "Ptero" },
  { id: 6, url: "#the-team", label: "The Team" },
  { id: 7, url: "#footer", label: "Contacts" },
];
const BANNER_DATA = {
  HEADING: "Watch your Deno take off!",
  DECRIPTION:
    "Ptero allows you to quickly implement a fast caching solution for your deno built RESTful API thanks to redis capabilities.",
};
const FUNCTIONALITIES_DATA = {
  HEADING: "Functionalities",
  ALL_FUNCTIONALITIES: "All Functionalities",
  SERVICE_LIST: [
    {
      LABEL: "API calls logging",
      DESCRIPTION:
        "API calls logging API calls logging API calls logging API calls logging API calls logging API calls logging ",
      URL: "images/service1.png",
    },
    {
      LABEL: "Redis Caching",
      DESCRIPTION:
        "API calls logging API calls logging API calls logging API calls logging API calls logging API calls logging ",
      URL: "images/service2.png",
    },
    {
      LABEL: "Flexible monitoring",
      DESCRIPTION:
        "API calls logging API calls logging API calls logging API calls logging API calls logging API calls logging ",
      URL: "images/service3.png",
    },
  ],
};

const ABOUT_DATA = {
  HEADING: "Why choose Ptero",
  TITLE: "Why Ptero is different",
  IMAGE_URL: "images/network.png",
  WHY_CHOOSE_US_LIST: [
    "We qeqwe Coeqwesqweqw eEqwffeqwe qweqwe ctive qweeqwe adasd than Othwers.",
    "We qeqwe Coeqwesqweqw eEqwffeqwe qweqwe ctive qweeqwe adasd than Othwers.",
    "We qeqwe Coeqwesqweqw eEqwffeqwe qweqwe ctive qweeqwe adasd than Othwers.",
    "We qeqwe Coeqwesqweqw eEqwffeqwe qweqwe ctive qweeqwe adasd than Othwers.",
    "We qeqwe Coeqwesqweqw eEqwffeqwe qweqwe ctive qweeqwe adasd than Othwers.",
    "We qeqwe Coeqwesqweqw eEqwffeqwe qweqwe ctive qweeqwe adasd than Othwers.",
    "We qeqwe Coeqwesqweqw eEqwffeqwe qweqwe ctive qweeqwe adasd than Othwers.",
  ],
};
const DEMO_DATA = {
  HEADING: "How does it work?",
  DEMO_LIST: [
    {
      DESCRIPTION:
        "Deno has made a huge difference to our business with his good work and knowledge of SEO and business to business marketing techniques. Our search engine rankings are better than ever and we are getting more people contacting us thanks to Jomer’s knowledge and hard work.",
      IMAGE_URL: "images/user1.jpg",
      DESIGNATION: "Setup of the logging",
    },
    {
      DESCRIPTION:
        " and his team have provided us with a comprehensive, fast and well planned digital marketing strategy that has yielded great results in terms of content, SEO, Social Media. His team are a pleasure to work with, as well as being fast to respond and adapt to the needs of your brand.",
      IMAGE_URL: "images/user2.jpg",
      DESIGNATION: "Setup of the caching",
    },
  ],
};

const PTERO_SOCIAL_DATA = {
  HEADING: "PTERO:",
  PTERO_SOCIAL: [],
};

const TEAM_SOCIAL_DATA = {
  HEADING: "THE TEAM:",
  MEMBER_LIST: [
    {
      name: "Quentin Rousset",
      image: "images/quentin.png",
      github: "https://github.com/qrousset",
      linkedin: "https://www.linkedin.com/in/qrousset/",
    },
    {
      name: "Rachel Weller",
      image:
        "https://media-exp1.licdn.com/dms/image/C5103AQHxnEw10n_8Sw/profile-displayphoto-shrink_200_200/0/1516452764751?e=1640822400&v=beta&t=S4fbQEePQqefNhwsHFxaQXC8GtnXo0oDMHw1weX74sk",
      github: "https://github.com/wellerr3",
      linkedin: "https://www.linkedin.com/in/wellerrachel/",
    },
    {
      name: "David Rhee",
      image: "images/david.png",
      github: "https://github.com/rheed14",
      linkedin: "https://www.linkedin.com/in/davidrhee1/",
    },
    {
      name: "Brian Vazquez",
      image:
        "https://media-exp1.licdn.com/dms/image/C4E03AQEi44avxZsRKw/profile-displayphoto-shrink_200_200/0/1556872798854?e=1640822400&v=beta&t=EzRHXYeQbe3cfoMzR8iaJU81-weBVhS7scml7MiV19E",
      github: "https://github.com/brianvazquez9",
      linkedin: "https://www.linkedin.com/in/brianvazquez9/",
    },
  ],
};

const FOOTER_DATA = {
  DESCRIPTION:
    "We Work on different open source projects providing tools for developer to work faster.",
  CONTACT_DETAILS: {
    HEADING: "Contact us",
    ADDRESS: "NYC",
    MOBILE: "no phone",
    EMAIL: "ptero.ts@gmail.com",
  },
  SUBSCRIBE_NEWSLETTER: "Subscribe newsletter",
  SUBSCRIBE: "Subscribe",
};

const MOCK_DATA = {
  HEADER,
  NAVBAR_DATA,
  BANNER_DATA,
  FUNCTIONALITIES_DATA,
  ABOUT_DATA,
  DEMO_DATA,
  PTERO_SOCIAL_DATA,
  TEAM_SOCIAL_DATA,
  FOOTER_DATA,
};
export default MOCK_DATA;
