import Restocard from "./Resto-card";
import fakedata from "../utils/newfile"
import { useState } from "react";
function Body() {
  const [data, setdata] = useState(fakedata)
  const [searchdata,setsearchdata]=useState("")
   return (
    <>
      <div className="filter">
        <input type="text" value={searchdata} onChange={(e)=>{setsearchdata(e.target.value)}}/>
        
        <button onClick={()=>{
          console.log(searchdata);
          const filterd=data.filter((jus)=>
              jus.name.toLocaleLowerCase().includes(searchdata.toLocaleLowerCase())
          )
          setdata(filterd)
        }}>search</button>
      
      
        <button className="" onClick={() => {
          const updated = data.filter((res) => res.rat > 4)
          console.log(updated);
          setdata(updated)
        }}>
          top rated
        </button>
      </div>
      <div className="res-card">
        {data.map((item) =>  <Restocard key={item.id} restdata={item} />
)}
      </div>
    </>
  );
}
export default Body;
