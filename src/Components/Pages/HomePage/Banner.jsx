import { TypeAnimation } from "react-type-animation";

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-[650px]" style={{backgroundImage: 'url(https://i.ibb.co/HxDqSzN/image.png)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
    <h1 className="mb-5 text-2xl font-bold"><TypeAnimation
  sequence={[
    'Hellow Theire',
    500,
    'Wealcome To our Webpage', //  Continuing previous Text
    500,
    'You Can book rooms',
    500,
    'Discound 20 prrsent forent clint',
    500,
    'One',
    500,
    '',
    500,
  ]}
  style={{ fontSize: '2em' }}
  repeat={Infinity}
/></h1>
      <p className="mb-5">"Welcome to our charming hotel, where comfort meets elegance. Nestled in the heart of Tongi GAzipur, our hotel offers a unique blend of modern luxury and timeless hospitality. With a rich history dating back to [Year of Establishment], we take pride in providing our guests with an unforgettable experience.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>       
    
        </div>
    );
};

export default Banner;