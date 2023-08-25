import stock from "../../images/stock.jpg";
import proje2 from "../../images/project2.jpg";
import pizzaProject from "../../images/Pizza.jpg";
import gpt from "../../images/gpt.jpg";
import affan from "../../images/affan.svg";
import yogaBlog from "../../images/yogablog.jpg"
import mcell from "../../images/mcell.png"
import mcellKapak from "../../images/mcellKapak.jpg"
import twitter1 from "../../images/twitter1.jpg"
import twitter2 from "../../images/twitter2.jpg"

const projects = [
  {
    id: 1,
    proje: "AFFAN Psychosocial Support Project",
    aciklama: "Voluntary project for individuals that affect by earthquake in Turkiye",
    konular: ["vite.js","sqlite","node.js","express.js"],
    linkler: [
      {
        linkIsim: "View Site",
        site: "https://depremdanismafrontend.onrender.com/",
      },
      {
        linkIsim: "Github",
        site: "https://github.com/onurdzd/DepremDanisma",
      },
    ],
    imageLink: affan,
  },
   {
    id: 2,
    proje: "A Yoga Brand Website",
    aciklama: "Developed with Next.js",
    konular: ["next.js","responsive design","typescript"],
    linkler: [
      {
        linkIsim: "View Site",
        site: "https://veiyoga.com/",
      },
      {
        linkIsim: "Github",
        site: "https://github.com/onurdzd/veiyg",
      },
    ],
    imageLink: yogaBlog,
  },
  {
    id: 3,
    proje: "Twitter Clone Website",
    aciklama: "Developed with Next.js",
    konular: ["vite","responsive design"],
    linkler: [
      {
        linkIsim: "View Site",
        site: "https://twitter-clone123.vercel.app/",
      },
      {
        linkIsim: "Github",
        site: "https://github.com/onurdzd/TwitterClone-Full-Stack",
      },
    ],
    imageLink: twitter1,
  },
  {
    id: 4,
    proje: "Twitter Backend With Node Js",
    aciklama: "Developed with Node.js",
    konular: ["node.js","express.js","Rest Api's"],
    linkler: [
      {
        linkIsim: "View Site",
        site: "https://github.com/onurdzd/Twitter-Backend",
      },
      {
        linkIsim: "Github",
        site: "https://github.com/onurdzd/Twitter-Backend",
      },
    ],
    imageLink: twitter2,
  },
  {
    id: 5,
    proje: "Phone Trailing System",
    aciklama: "Developed with .NET Windows Form Application",
    konular: [".Net","C#","Sqlite"],
    linkler: [
      {
        linkIsim: "View Site",
        site: mcell,
      },
      {
        linkIsim: "Github",
        site: "https://github.com/onurdzd/mcellWinFormApp",
      },
    ],
    imageLink: mcellKapak,
  },
  {
    id: 6,
    proje: "Stock News with API",
    aciklama: "Search stocks for Up-to-date stock news",
    konular: ["react","node.js","express.js","api"],
    linkler: [
      {
        linkIsim: "View Site",
        site: "https://stock-market-web-api.vercel.app/",
      },
      {
        linkIsim: "Github",
        site: "https://github.com/onurdzd/Stock-Market-web-api",
      },
    ],
    imageLink: stock,
  },
  {
    id: 7,
    proje: "Pizza Order ",
    aciklama: "Pizza order website with React components.",
    konular: ["react", "Responsive Design"],
    linkler: [
      {
        linkIsim: "View Site",
        site: "https://pizza-siparis-id8dmfu1u-onurdzd.vercel.app/",
      },
      {
        linkIsim: "Github",
        site: "https://github.com/onurdzd/FSWeb-S7-Challenge",
      },
    ],
    imageLink: pizzaProject,
  },
  {
    id: 8,
    proje: "TV Series Watch List with API",
    aciklama: "Create watch list via site.",
    konular: ["react", "api" , "Responsive Design"],
    linkler: [
      {
        linkIsim: "View Site",
        site: "https://fs-web-s8-film-listesi-challenge.vercel.app/",
      },
      {
        linkIsim: "Github",
        site: "https://github.com/onurdzd/FSWeb-S8-film-listesi-challenge",
      },
    ],
    imageLink: proje2,
  },
  {
    id: 9,
    proje: "Chat GPT with API",
    aciklama: "Chat GPT request website with API.",
    konular: ["react","node.js","express.js","api"],
    linkler: [
      {
        linkIsim: "View Site",
        site: "https://react-vite-chatgpt-test.vercel.app/",
      },
      {
        linkIsim: "Github",
        site: "https://github.com/onurdzd/React-vite-chatgpt",
      },
    ],
    imageLink: gpt,
  },  
];

export default projects;
