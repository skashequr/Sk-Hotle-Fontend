
import { Link, useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import RoomsCurd from "./RoomsCurd";

const HottleImgSlider = () => {
  const count = useLoaderData();
  const [cardInfo , setCurdInfo] = useState([])
  const [relode, setRelode] = useState(false)
  const [currwntPage , setCurrentPage] = useState(0)
  const itemsPerPage = 10;
  const numberOfPages = Math.ceil(count?.count / itemsPerPage);
  // const pages = [...Array(numberOfPages).keys()];
  const pages = []
  for (let i = 0; i < numberOfPages; i++) {
    pages.push(i);
    
  }
  // console.log( pages);
  const handleItems = ()=>{
      // const value = parseInt(e)
      console.log(currwntPage);
  }
  useEffect(() => {
    fetch(`http://localhost:5000/roomdInfo?page=${currwntPage}&size=${itemsPerPage}`)
    .then(res=>res.json())
    .then(data => {setCurdInfo(data)
     
    })

  }, [currwntPage,relode])


  const handleFilter = e =>{
    const maxPrice = 10000; // Set your maximum price here
    const filteredSuites = cardInfo.filter(suite => {
    const price = parseInt(suite.pricePerNight.replace('$', ''), 10);
    return price <= maxPrice;
});
setCurdInfo(filteredSuites)
console.log(filteredSuites);
  
  }
  const hightolow = e =>{
    const hitolo = cardInfo.sort((a, b) => {
      const priceA = parseInt(a.pricePerNight.replace('$', ''), 10);
      const priceB = parseInt(b.pricePerNight.replace('$', ''), 10);
      return priceB - priceA;
      
  });
console.log(hitolo);
setCurdInfo(hitolo)
setRelode(true)
  }
  return (
   <div>
       <div className="flex justify-center items-center mt-10">
            <details className="dropdown">
              <summary className="m-1 btn">Filter</summary>
              <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                <li>
                  <button onClick={handleFilter} className="">Low to hight </button>
                </li>
                <li>
                  <button onClick={hightolow}>Hight to low</button>
                </li>
              </ul>
            </details>
          </div>

     {cardInfo?.map(curdData => <RoomsCurd curdData={curdData} key={curdData.id} />)}
     
    <div>

    
    <div className="flex items-center justify-center mt-4">
    {
      pages?.map(page => 
        <button key={page} onClick={() => {
          setCurrentPage(page);
          handleItems();
        }} className="mx-1  h-9 w-9  rounded-full bg-pink-500 p-0 text-sm text-white shadow-md transition duration-150 ease-in-out"
       
      >
        
       {page}</button>)
    }
    </div>
   

    </div>
   </div>
  );
};

export default HottleImgSlider;
