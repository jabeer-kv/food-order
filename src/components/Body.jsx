import Restocard from "./Resto-card";
import FAKEDATA from"../utils/newfile"
function Body() {

 

  return (
    <>
      <div className="search">
        <input type="text" />
        <button>search</button>
      </div>
      <div>
      <button onClick={()=>{
        console.log(FAKEDATA)
          FAKEDATA=FAKEDATA.filter((res)=>res.rat>4)
        }}>
          top rated
        </button>
      </div>
      <div  className="res-card">
        {FAKEDATA.map((item) => (
          <Restocard key={item.id} restdata={item} />
        ))}
      </div>
    </>
  );
}
export default Body;
