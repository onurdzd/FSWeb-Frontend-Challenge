import proje1 from "../../images/project1.jpg";
import proje2 from "../../images/project2.jpg";
import pizzaProject from "../../images/Pizza.jpg";
import gpt from "../../images/gpt.jpg";

const projects = [
  {
    id: 1,
    proje: "Chat GPT with API",
    aciklama: "Chat GPT request website with API.",
    konular: ["react","node.js","express.js"],
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
  {
    id: 2,
    proje: "Pizza Order ",
    aciklama: "Pizza order website with React components.",
    konular: ["react", "vercel"],
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
    id: 3,
    proje: "Watch List ",
    aciklama: "Create watch list via site.",
    konular: ["react", "vercel"],
    linkler: [
      {
        linkIsim: "View Site",
        site: "https://redux-watchlist-project.vercel.app/",
      },
      {
        linkIsim: "Github",
        site: "https://github.com/onurdzd/fsweb-s10g3-redux-watchlist/tree/main",
      },
    ],
    imageLink: proje2,
  },
  {
    id: 4,
    proje: "Shopping Cart",
    aciklama: "You can create shopping cart before order!",
    konular: ["react", "redux", "vercel"],
    linkler: [
      {
        linkIsim: "View Site",
        site: "https://react-shopping-cart-test.vercel.app/",
      },
      {
        linkIsim: "Github",
        site: "https://github.com/onurdzd/fsweb-s11g1-shopping-cart/tree/main",
      },
    ],
    imageLink: proje1,
  },
];

export default projects;
