import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";

//cake categories iamges
import dipCake from "../Assets/Images/CakeCategories/dipCake.webp";
import Pastry from "../Assets/Images/CakeCategories/Pastry.jpeg";
import CupCake from "../Assets/Images/CakeCategories/CupCake.png";
import ChocolateRoll from "../Assets/Images/CakeCategories/ChocolateRoll.jpg";
import BreadCake from "../Assets/Images/CakeCategories/BreadCake.jpg";
import GalaxyCake from "../Assets/Images/CakeCategories/GalaxyCake.jpg";
import D3Cake from "../Assets/Images/CakeCategories/3DCake.jpg";
import Brownie from "../Assets/Images/CakeCategories/Brownie.jpg";
import printedCake from "../Assets/Images/CakeCategories/printedCake.png";
import BundtCakes from "../Assets/Images/CakeCategories/BundtCakes.jpg";

//cake product Images
import DollCake from "../Assets/Images/product-img/DollCake.jpg";
import Chocolate from "../Assets/Images/product-img/ChocolateCake.jpg";
import BlackForest from "../Assets/Images/product-img/BlackForestCake.jpg";
import pineapple from "../Assets/Images/product-img/PineappleCake.jpg";
import RedVelvet from "../Assets/Images/product-img/RedVelvetCake.webp";
import StrawberryCake from "../Assets/Images/product-img/StrawberryCake.jpg";
import lemon from "../Assets/Images/product-img/LemonCupcakes.jpg";
import ButterScotch from "../Assets/Images/product-img/ButterScotch.jpg";
import layerCake from "../Assets/Images/product-img/layerCake.jpg";
import FruitCake from "../Assets/Images/product-img/Fruit Cakes.webp";
//navigation Data
export const navItem = [
  { title: "Home", url: "/" },
  { title: "Product", url: "/products" },
  { title: "Order", url: "/order" },
  { title: "About", url: "/about" },
  { title: "Contact US", url: "/contactUs" },
];

export const productData = [
  {
    CakeName: "Chocolate",
    prise: 450,
    Category: "Cake",
    image_Url: Chocolate,
    discountPrice: 400,
    total_Sell: 90,
    rating: 5,
    description: "Indulge in our rich and creamy Chocolate Cake, perfect for all chocolate lovers. Made with the finest ingredients, this cake offers a heavenly taste experience that will leave you craving for more."
  },
  {
    CakeName: "Black Forest",
    prise: 650,
    Category: "Cake",
    image_Url: BlackForest,
    discountPrice: 550,
    total_Sell: 120,
    rating: 4.5,
    description: "Our Black Forest Cake is a classic delight, featuring layers of moist chocolate sponge, whipped cream, and cherries. This cake is perfect for any occasion, delivering a perfect blend of sweetness and tartness."
  },
  {
    CakeName: "Pineapple",
    prise: null,
    Category: "pestry",
    image_Url: pineapple,
    discountPrice: 250,
    total_Sell: 50,
    rating: 4,
    description: "Enjoy the tropical taste of our Pineapple Pastry. With its light and fluffy texture, combined with juicy pineapple chunks, this pastry is a refreshing treat for any time of the day."
  },
  {
    CakeName: "Red Velvet",
    prise: 600,
    Category: "cup Cake",
    image_Url: RedVelvet,
    discountPrice: 500,
    total_Sell: 70,
    rating: 4.4,
    description: "Our Red Velvet Cupcake is a luxurious treat with its vibrant red color, soft and moist crumb, and a hint of cocoa. Topped with a generous swirl of cream cheese frosting, it's a feast for the eyes and the taste buds."
  },
  {
    CakeName: "Strawberry",
    prise: null,
    Category: "Pestry",
    image_Url: StrawberryCake,
    discountPrice: 200,
    total_Sell: 130,
    rating: 4.2,
    description: "Delight in the sweet and fruity flavor of our Strawberry Pastry. This pastry is filled with fresh strawberry pieces and creamy layers, making it a perfect choice for strawberry enthusiasts."
  },
  {
    CakeName: "Butter Scotch",
    prise: 450,
    Category: "Cake",
    image_Url: ButterScotch,
    discountPrice: 400,
    total_Sell: 200,
    rating: 4.5,
    description: "Our Butter Scotch Cake is a delightful combination of rich butterscotch flavor and a moist, tender crumb. Topped with butterscotch chips and drizzled with caramel sauce, this cake is a sweet indulgence."
  },
  {
    CakeName: "Lemon",
    prise:null,
    Category: "Cup Cake",
    image_Url: lemon,
    discountPrice: 150,
    total_Sell: 30,
    rating: 4.2,
    description: "Experience the zesty and refreshing taste of our Lemon Cupcake. With its light, fluffy texture and tangy lemon flavor, this cupcake is a perfect pick-me-up for any time of the day."
  },
  {
    CakeName: "Doll Cake",
    prise: 4000,
    Category: "Cake",
    image_Url: DollCake,
    discountPrice: 3000,
    total_Sell: 60,
    rating: 5,
    description: "Make any celebration special with our Doll Cake. This beautifully crafted cake features an intricately designed doll at the center, surrounded by layers of delicious cake. It's as delightful to look at as it is to eat."
  },
  {
    CakeName: "Fruit Cake",
    prise: 750,
    Category: "Cake",
    image_Url: FruitCake,
    discountPrice: 600,
    total_Sell: 40,
    rating: 5,
    description: "Make any celebration special with our Doll Cake. This beautifully crafted cake features an intricately designed doll at the center, surrounded by layers of delicious cake. It's as delightful to look at as it is to eat."
  },
  {
    CakeName: "Layer Cake",
    prise: 3000,
    Category: "Cake",
    image_Url: layerCake,
    discountPrice: 2000,
    total_Sell: 100,
    rating: 4.7,
    description: "Make any celebration special with our Doll Cake. This beautifully crafted cake features an intricately designed doll at the center, surrounded by layers of delicious cake. It's as delightful to look at as it is to eat."
  },
 

];

export const CategoryData = [
  {
    id: 1,
    title: "Dip Cake",
    image: dipCake,
  },
  {
    id: 2,
    title: "Pastry",
    image: Pastry,
  },
  {
    id: 3,
    title: "Cup Cake",
    image: CupCake,
  },
  {
    id: 4,
    title: "Chocolate Roll",
    image: ChocolateRoll,
  },
  {
    id: 5,
    title: "Bread Cake",
    image: BreadCake,
  },
  {
    id: 6,
    title: "3D Cake",
    image: D3Cake,
  },
  {
    id: 7,
    title: "Galaxy Cake",
    image: GalaxyCake,
  },
  {
    id: 8,
    title: "Brownie",
    image: Brownie,
  },
  {
    id: 9,
    title: "Printed Cake",
    image: printedCake,
  },
  {
    id: 10,
    title: "Bundt Cakes",
    image: BundtCakes,
  },
];

export const brandingData = [
  {
    id: 1,
    title: "Free Home Delivary",
    Description: "Free home delivery Same day",
    icon: (
      <ShoppingCartOutlinedIcon fontSize="large" className="text-[#FFBB38]" />
    ),
  },

  {
    id: 2,
    title: "Daily Surprise Offers ",
    Description: "Save uo to 25% off",
    icon: <RefreshOutlinedIcon fontSize="large" className="text-[#FFBB38]" />,
  },
  {
    id: 3,
    title: "Affortable Prise",
    Description: "Give best cake in less price",
    icon: (
      <EmojiEventsOutlinedIcon fontSize="large" className="text-[#FFBB38]" />
    ),
  },
  {
    id: 4,
    title: "Secure Payment",
    Description: "100% protected payments",
    icon: <PaidOutlinedIcon fontSize="large" className="text-[#FFBB38]" />,
  },
];

export const FooterProductLink=[
  {name:"Home", link:"/"},
  {name:"Product", link:"/product"},
  {name:"Order", link:"/offer"},
  {name:"About us", link:"/about"},
  {name:"Contact us", link:"/contact"},
];

export const OurServices =[
  {title:"Custom Cake Design"},
  {title:"Wedding Cakes"},
  {title:"Free Home Delivery"},
  {title:"Special Offer"},
  {title:"Online Ordering"},

]