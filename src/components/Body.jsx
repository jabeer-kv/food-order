import Restocard from "./Resto-card";
import { useState, useEffect } from "react";
function Body() {
  const [data, setdata] = useState([])
  useEffect(() => { Fetchdata() }, [])
  const Fetchdata = async () => {
    const dummy = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.8744775&lng=75.37036619999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    )
    const json = await dummy.json()
    setdata(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    console.log(data);
  }
  console.log("body");
  return (
    <>
      <div className="search">
        <input type="text" />
        <button>search</button>
      </div>
      <div>
        <button onClick={() => {
          const updated = data.filter((res) => res.rat > 4)
          console.log(updated);
          setdata(updated)
        }}>
          top rated
        </button>
      </div>
      <div className="res-card">
        {data.map((item) => (
          <Restocard key={item.id} restdata={item} />
        ))}
      </div>
    </>
  );
}
export default Body;
