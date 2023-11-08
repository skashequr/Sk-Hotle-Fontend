import { TypeAnimation } from 'react-type-animation';
export const RoomsHeader = () => {
    return (
        <div className="hero min-h-[400px] rounded-sm mb-8 mt-10" style={{backgroundImage: 'url(https://i.ibb.co/Lkr5D36/hotels-booking-500x500.webp)'}}>
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
            <p className="mb-5">Save an average of 15% on thousands of hotels when youre signed in
                Save an average of 15% on thousands of hotels when youre signed in</p>
            <button className="btn btn-primary">Regester</button>
          </div>
        </div>
      </div>
    );
  };