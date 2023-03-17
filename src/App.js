import './App.css';
import Banner from './components/banner';
import Banner2 from './components/banner2';
import Navbar from './components/navbar';
import Footer from "./components/footer";
import New from "./components/products"
import Banner3 from './components/banner3';
import Transport from './components/transport';
import Carousel from './components/carousel';
import Carousel2 from "./components/carousel2"
function App() {

  // const url = "https://res.cloudinary.com/dwdy4lewd/raw/upload/v1668789945/React%20Class/O.%20Sai%20Kiran/products_hktdc7.json";
  // const url2 = "https://res.cloudinary.com/dwdy4lewd/raw/upload/v1668789945/React%20Class/O.%20Sai%20Kiran/instagram_mn2tha.json";
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Carousel />
      <Banner2 />
      <New />
      <Banner3 />
      <Carousel2 />
      <Transport />
      <Footer />
    </div>
  );
}

export default App;
