import Slider from "./Slider";
import Banner from "./Banner";
import { Parallax } from "react-parallax";
import dogImage from "../../../../public/vite.svg"; // Import your local image
import MapComponent from "./MapComponent";
import NewsLetterSign from "./NewsLetterSign";
import Testimonials from "./TestyMonial";
// import { MyMap } from './MyMap';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <MapComponent></MapComponent>
      <Parallax
        className="h-[500px] w-full"
        blur={5} // Set the blur strength (e.g., 15)
        bgImage="https://i.ibb.co/cLrVh95/209890188.jpg" // Use the imported local image
        bgImageAlt="https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fHww"
        strength={-200}
      >
        <div style={{ height: "200px" }} />
        <div className="flex justify-center items-center">
          <div className="card w-96 bg-primary  text-primary-content">
            <div className="card-body">
              <h2 className="card-title">Are you VIP!</h2>
              <p>if you ar find some expansive click VIP cabne</p>
              <div className="card-actions justify-end">
                <button className="btn">VIP Cabne</button>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
      <Testimonials></Testimonials>
      <NewsLetterSign></NewsLetterSign>
      <Slider></Slider>
    </div>
  );
};

export default Home;
