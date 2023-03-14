import proje1 from "../images/project1.jpg";
import proje2 from "../images/project2.jpg";

const projects=[{
    id:1,
    proje:"Shopping Cart",
    aciklama:"A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
    konular:["react","redux","vercel"],
    linkler:[{linkIsim:"View Site",site:"https://react-shopping-cart-test.vercel.app/"},{linkIsim:"Github",site:"https://github.com/onurdzd/fsweb-s11g1-shopping-cart/tree/main"}],
    imageLink:proje1
},
{
    id:2,
    proje:"Watch List",
    aciklama:"A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
    konular:["react","vercel"],
    linkler:[{linkIsim:"View Site",site:"https://redux-watchlist-project.vercel.app/"},{linkIsim:"Github",site:"https://github.com/onurdzd/fsweb-s10g3-redux-watchlist/tree/main"}],
    imageLink:proje2
}]

export default projects;