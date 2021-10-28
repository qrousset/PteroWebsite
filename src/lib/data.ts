/**src/Data/data.js**/
const HEADER = {
  name: "PTERO",
  img: "images/logoFull50px.png"
};

const NAVBAR_DATA = [
  // { id: 1, url: "/", label: "Home" },
  { id: 2, url: "#functionalities", label: "Functionalities" },
  { id: 3, url: "#about-us", label: "Why Ptero" },
  { id: 4, url: "#demo", label: "How does it work" },
  { id: 5, url: "#about-ptero", label: "Download" },
  { id: 6, url: "#the-team", label: "The Team" },
  { id: 7, url: "#footer", label: "Contacts" },
];
const BANNER_DATA = {
  HEADING: "Watch your Deno take off!",
  DECRIPTION:
    "Ptero allows you to quickly implement a fast caching and logging solution for your deno built RESTful API.",
};
const FUNCTIONALITIES_DATA = {
  HEADING: "Functionalities",
  ALL_FUNCTIONALITIES: "All Functionalities",
  SERVICE_LIST: [
    {
      LABEL: "API call logging",
      DESCRIPTION:
        "Ptero provides API logging middleware to keep track of the calls made to your RESTful API",
      URL: "images/examples/logs.png",
    },
    {
      LABEL: "Redis Caching",
      DESCRIPTION:
        "Buiilt in Redis caching support speeds up accessing your API by up to 1000%",
      URL: "images/redislogo.png",
    },
    {
      LABEL: "Flexible monitoring",
      DESCRIPTION:
        "The compainion PteroView app provides flexable viewing options for your logged data",
      URL: "images/examples/webapp.png",
    },
  ],
};

const ABOUT_DATA = {
  HEADING: "Why choose Ptero?",
  TITLE: "Why Ptero is different",
  IMAGE_URL: "images/gifs/webapp.gif",
  WHY_CHOOSE_US_LIST: [
    "Ptero utilize Redis caching to prevent identical RESTful API requested to server, allowing users to provide same data from a cache with faster response time.",
    "Ptero provides needed support that was missing for Deno based APIs",
    "Ptero's companion app, PteroView, allows API Hosts to visualize and manage metrics of all the API requests in their Deno built server.",
    "Ptero helps developers be able to more easily anticipate their products popularity to provide targeted information.",
  ],
};
const DEMO_DATA = {
  HEADING: "How does it work?",
  DEMO_LIST: [
    {
      DESCRIPTION: "Within the Deno built server, import Ptero Deno module to allow Redis caching and logging of the requests. Then connect the server with MongoDB to store the information on users and request logs.",
      IMAGE_URL: "images/examples/settings1.png",
      DESIGNATION: "Redis Caching and Logging",
    },
    {
      DESCRIPTION:
        "PteroView acts as a monitoring tool for your Ptero logs. This app allows for the interpertation and extrapolation of the data. It is open source so you can edit the app for your own use to show metric you desire",
      IMAGE_URL: "images/examples/settings2.png",
      DESIGNATION: "PteroView",
    },
  ],
};

const PTERO_SOCIAL_DATA = {
  HEADING: "Getting Started:",
  PTERO_SOCIAL: [{
    name: "Deno Module", 
    text: "",
    link: "https://deno.land/x/ptero",
    image: "images/deno.png",
  }, 
  {
    name: "PteroView", 
    text: "Version Alpha",
    link: "https://github.com/oslabs-beta/Ptero/tree/Main/Client",
    image: "favicon.png"
  }, 
  {
    name: "Repository", 
    text: "",
    link: "https://github.com/oslabs-beta/Ptero",
    image: "/images/github.png"
  }
],
};

const TEAM_SOCIAL_DATA = {
  HEADING: "Meet the Team:",
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
    `Product development accelerated by OSLabs. Issues or concerns? Report them to our GitHub`,
  CONTACT_DETAILS: {
    HEADING: "Contact us",
    ADDRESS: "github.com/oslabs-beta/Ptero",
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
