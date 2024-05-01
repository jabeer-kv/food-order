import Restocard from "./resto-card"
function Body () {
    return(
        <>
            <div className="search">
                <input type="text" />
                <button>search</button>
            </div>
            <div className="resto-card">
                    <Restocard/>
            </div>
            </>
    )


}
export default Body