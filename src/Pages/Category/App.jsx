import { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  const[arr,setarr]= useState([]);
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setarr(json))
  },[]);
  let arr2=[
    "https://m.media-amazon.com/images/I/41fIBvc4cHL._AC_UF226,226_FMjpg_.jpg",
    "https://m.media-amazon.com/images/I/41zJ+gPPRzL._AC_UF226,226_FMjpg_.jpg",
    "https://m.media-amazon.com/images/I/41aoyjVszvL._AC_UF226,226_FMjpg_.jpg",
  "https://m.media-amazon.com/images/I/41FEKIfJ1tL._AC_UF226,226_FMjpg_.jpg",
  "https://m.media-amazon.com/images/I/31s6N4tRkgL._AC_UF226,226_FMjpg_.jpg",
  "https://m.media-amazon.com/images/I/21TRrlXNWkS._AC_UF226,226_FMjpg_.jpg",
  "https://m.media-amazon.com/images/I/31Orj0eqWVL._AC_UF226,226_FMjpg_.jpg",
  "https://m.media-amazon.com/images/I/21YaAusW+lL._AC_UF226,226_FMjpg_.jpg",
  "https://m.media-amazon.com/images/I/41b-qkkKCNL._AC_UF226,226_FMjpg_.jpg",  
  "https://m.media-amazon.com/images/I/41MEmKFu7kL._AC_UF226,226_FMjpg_.jpg",
  "https://m.media-amazon.com/images/I/31OKf03BLVS._AC_UF226,226_FMjpg_.jpg",
"https://m.media-amazon.com/images/I/310tiN-FsnL._AC_UF226,226_FMjpg_.jpg",
"https://m.media-amazon.com/images/I/318okewDG4L._AC_UF226,226_FMjpg_.jpg",
"https://m.media-amazon.com/images/I/31wR43Q2UhS._AC_UF226,226_FMjpg_.jpg",
"https://m.media-amazon.com/images/I/31oOHDug1DL._AC_UF226,226_FMjpg_.jpg",
]
  return (
    <>
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-2 cat-container">
            <ul>
              <li className="fw-bold">All deals</li>
              <li>Available</li>
              <li>Upcoming</li>
              <li>Watchlist</li>
            </ul>
            <h4 className="fw-bold">Prime programs</h4>
            <div id="prime">
              <input type="checkbox" name="prime" id="prime" />
              <label htmlFor="prime">prime</label>
            </div>
            <div>
              <input type="checkbox" name="prime-early" id="prime-early" />
              <label htmlFor="prime-early">Prime Early Access deals</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="prime-execlusive"
                id="prime-execlusive"
              />
              <label htmlFor="prime-execlusive">Prime Exclusive deals</label>
            </div>
            <h4>Categories</h4>
            <button className="btn btn-link">
              {" "}
              <span>select all</span>
            </button>
            <div>
              <input type="checkbox" name="Automative" id="Automative" />
              <label htmlFor="Automative">Automative</label>
            </div>
            <div>
              <input type="checkbox" name="Baby-Fashion" id="Baby-Fashion" />
              <label htmlFor="Baby-Fashion">Baby Fashion</label>
            </div>
            <div>
              <input type="checkbox" name="Baby-Products" id="Baby-Products" />
              <label htmlFor="Baby-Products">Baby Products</label>
            </div>
            <div>
              <input type="checkbox" name="Beauty" id="Beauty" />
              <label htmlFor="Beauty">Beauty</label>
            </div>
            <div>
              <input type="checkbox" name="Books" id="Books" />
              <label htmlFor="Books">Books</label>
            </div>
            <div>
              <input type="checkbox" name="Boy's-Fashion" id="Boy's-Fashion" />
              <label htmlFor="Boy's-Fashion">Boy's Fashion</label>
            </div>
            <div>
              <input type="checkbox" name="Computers" id="Computers" />
              <label htmlFor="Computers">Computers, Components & </label>
              <label htmlFor="Computers">Accessories</label>
            </div>
            <div>
              <input type="checkbox" name="Electronics" id="Electronics" />
              <label htmlFor="Electronics">Electronics</label>
            </div>
            <div>
              <input type="checkbox" name="Fashion" id="Fashion" />
              <label htmlFor="Fashion">Fashion</label>
            </div>
            <div>
              <input type="checkbox" name="Garden" id="Garden" />
              <label htmlFor="Garden">Garden</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="Girls'-Fashion"
                id="Girls'-Fashion"
              />
              <label htmlFor="Girls'-Fashion">Girls' Fashion</label>
            </div>
            <div>
              <input type="checkbox" name="Grocery" id="Grocery" />
              <label htmlFor="Grocery">Grocery</label>
            </div>
            <div>
              <input type="checkbox" name="Health" id="Health" />
              <label htmlFor="Health">Health & Household </label>
              <label htmlFor="Health"> Products</label>
            </div>
            <div>
              <input type="checkbox" name="Home" id="Home" />
              <label htmlFor="Home">Home & Kitchen</label>
            </div>
            <div>
              <input type="checkbox" name="Men's-Fashion" id="Men's-Fashion" />
              <label htmlFor="Men's-Fashion">Men's Fashion</label>
            </div>
            <div>
              <input type="checkbox" name="Mobile-Phones" id="Mobile-Phones" />
              <label htmlFor="Mobile-Phones">Mobile Phones & </label>
              <label htmlFor="Mobile-Phones">Communication Products</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="Office-Products"
                id="Office-Products"
              />
              <label htmlFor="Office-Products">Office Products</label>
            </div>
            <div>
              <input type="checkbox" name="Perfumes" id="Perfumes" />
              <label htmlFor="Perfumes">Perfumes & Fragrances</label>
            </div>
            <div>
              <input type="checkbox" name="Pet-Supplies" id="Pet-Supplies" />
              <label htmlFor="Pet-Supplies">Pet Supplies</label>
            </div>
            <div>
              <input type="checkbox" name="Sports" id="Sports" />
              <label htmlFor="Sports">Sports & Outdoors</label>
            </div>
            <div>
              <input type="checkbox" name="Tools" id="Tools" />
              <label htmlFor="Tools">Tools & Home Improvement</label>
            </div>
            <div>
              <input type="checkbox" name="Toys" id="Toys" />
              <label htmlFor="Toys">Toys</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="Women's-Fashion"
                id="Women's-Fashion"
              />
              <label htmlFor="Women's-Fashion">Women's Fashion</label>
            </div>
            <h4>Deal type</h4>
            <ul>
              <li className="fw-bold">All deals</li>
              <li>Deal of the day</li>
              <li>Lightning deals</li>
              <li>Best deal</li>
            </ul>

            <h4>Price</h4>
            <ul>
              <li className="fw-bold">All</li>
              <li>Under EGP400</li>
              <li>EGP400 to EGP800</li>
              <li>EGP800 to EGP1,200</li>
              <li>EGP1,200 to EGP1,600</li>
              <li>EGP1,600 & above</li>
            </ul>
            <h4>Discount</h4>
            <ul>
              <li className="fw-bold">All deals</li>
              <li>10% off or more</li>
              <li>20% off or more</li>
              <li>30% off or more</li>
              <li>40% off or more</li>
              <li>50% off or more</li>
            </ul>
          </div>
          <div className="col-9">
          <div className="row">
          {arr2.map((e,i)=>{
             return (
              <div id="mydiv" className="col-4" key={i}>
              <img src={e} 
               />
               <span className="up-to mt-2"> Up to 20% off</span>
               <span className="deal fw-bold">Deal</span>
               <span>
                <a href="/" className="brand mt-2">adidas shose</a>
               </span>
              
              </div>
             );
          })}
           

            </div>

          
        
          </div>
      



        </div>
       <div className="row">
        <div className="col-12">
        <div className="mx-auto mt-5 pag">
        <nav aria-label="...">
  <ul className="pagination">
    <li className="page-item disabled">
      <a className="page-link fw-bold">Previous</a>
    </li>
    <li className="page-item fw-bold"><a className="page-link" href="#">1</a></li>
    <li className="page-item active " aria-current="page">
      <a className="page-link fw-bold" href="#">2</a>
    </li>
    <li className="page-item fw-bold"><a className="page-link" href="#">3</a></li>
    <li className="page-item">
      <a className="page-link fw-bold" href="#">Next</a>
    </li>
  </ul>
</nav>
        </div>

        </div>
       </div>
      </div>
    </>
  );
}

export default App;
