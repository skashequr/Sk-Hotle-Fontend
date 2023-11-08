import Slider from './Slider';
import Banner from './Banner';
import { Parallax } from 'react-parallax';
import dogImage from '../../../../public/vite.svg'; // Import your local image
import MapComponent from './MapComponent';
import NewsLetterSign from './NewsLetterSign';
import Testimonials from './TestyMonial';
// import { MyMap } from './MyMap';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <MapComponent></MapComponent>
      <Parallax
        blur={15} // Set the blur strength (e.g., 15)
        bgImage={dogImage} // Use the imported local image
        bgImageAlt="the dog"
        strength={-200}
      >
        Blur transition from min to max
        <div style={{ height: '200px' }} />
      </Parallax>
      <Testimonials></Testimonials>
      <NewsLetterSign></NewsLetterSign>
      <Slider></Slider>
    </div>
  );
};

export default Home;
