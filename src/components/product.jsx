import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Rate } from "antd";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";

import "./product.css";

function Product() {

  const [searchParams] = useSearchParams();
  console.log(searchParams.get("catId"));

  let catId = searchParams.get("catId");
  const [sort, setSort] = useState(null);
  const [subCat, setSubCat] = useState(null);
  const [rate, setRate] = useState(null);
  const [price, setPrice] = useState(null);
  const [discount, setDiscount] = useState(null);
  const [stock, setStock] = useState(null);
let rateFilter=(rateVal)=>{
  setRate(rateVal);
  console.log(rate);}
  let priceFilter=(val)=>{
    setPrice(val);
  }
  let discountFilter=(val)=>{
    setDiscount(val);
  }
  let subCatFilter=(val)=>{
    setSubCat(val);

  }
  const [product, setProduct] = useState([]);
  useEffect(() => {
    //categoryID=${catId}
    fetch(`http://localhost:8000/Products`)
      .then((res) => res.json())
      .then((json) => {
        // console.log(json);
        setProduct(json.data);
      });
  }, []);
  // let arr2 = [
  //   "https://m.media-amazon.com/images/I/41fIBvc4cHL._AC_UF226,226_FMjpg_.jpg",
  //   "https://m.media-amazon.com/images/I/41zJ+gPPRzL._AC_UF226,226_FMjpg_.jpg",
  //   "https://m.media-amazon.com/images/I/41aoyjVszvL._AC_UF226,226_FMjpg_.jpg",
  //   "https://m.media-amazon.com/images/I/41FEKIfJ1tL._AC_UF226,226_FMjpg_.jpg",
  //   "https://m.media-amazon.com/images/I/31s6N4tRkgL._AC_UF226,226_FMjpg_.jpg",
  //   "https://m.media-amazon.com/images/I/21TRrlXNWkS._AC_UF226,226_FMjpg_.jpg",
  //   "https://m.media-amazon.com/images/I/31Orj0eqWVL._AC_UF226,226_FMjpg_.jpg",
  //   "https://m.media-amazon.com/images/I/21YaAusW+lL._AC_UF226,226_FMjpg_.jpg",
  //   "https://m.media-amazon.com/images/I/41b-qkkKCNL._AC_UF226,226_FMjpg_.jpg",
  //   "https://m.media-amazon.com/images/I/41MEmKFu7kL._AC_UF226,226_FMjpg_.jpg",
  //   "https://m.media-amazon.com/images/I/31OKf03BLVS._AC_UF226,226_FMjpg_.jpg",
  //   "https://m.media-amazon.com/images/I/310tiN-FsnL._AC_UF226,226_FMjpg_.jpg",
  //   "https://m.media-amazon.com/images/I/318okewDG4L._AC_UF226,226_FMjpg_.jpg",
  //   "https://m.media-amazon.com/images/I/31wR43Q2UhS._AC_UF226,226_FMjpg_.jpg",
  //   "https://m.media-amazon.com/images/I/31oOHDug1DL._AC_UF226,226_FMjpg_.jpg",
  //   "https://m.media-amazon.com/images/I/41C5UGpNaZL._AC_UF226,226_FMjpg_.jpg",
  //   "https://m.media-amazon.com/images/I/41Yv8IkIA3L._AC_UF226,226_FMjpg_.jpg",
  //   "https://m.media-amazon.com/images/I/41uyL3zbeVL._AC_UF226,226_FMjpg_.jpg",
  //   "https://m.media-amazon.com/images/I/41vhfr1MNbL._AC_UF226,226_FMjpg_.jpg",
  // ];
  let [t1, setT1] = useState(true);
  let t2 = true;
  let t3 = false;
  let fun = () => {
    setT1(!t1);
    console.log("t1" + t1);
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-2 cat-container">
            <ul>
              <li className="fw-bold">All deals</li>
              <li>Available</li>
            </ul>

            <h4>Categories</h4>
            {/* <button onClick={() => fun()}>test</button> */}

            <div>
              {/* <input type="checkbox" name="Automative" id="Automative" />
              <label htmlFor="Automative">Automative</label> */}
              <ul>
                <li className="liDeactive">sports</li>
                <li onClick={()=>subCatFilter("foot ball")}>foot ball</li>
                
              </ul>
              <ul>
              <li className="liDeactive">Supermarket</li>
                <li onClick={()=>subCatFilter("Home Equipment")}>Home Equipment</li>
                <li onClick={()=>subCatFilter("Baby Products")}>Baby Products</li>
                <li onClick={()=>subCatFilter("Hair & Skin Care")}>Hair & Skin Care</li>
                <li onClick={()=>subCatFilter("Household")}>Household</li>
                <li onClick={()=>subCatFilter("Food & Beveragest")}>Food & Beveragest</li>
              </ul>
              <ul>
              <li className="liDeactive">Beauty</li>
                <li onClick={()=>subCatFilter("Skin Care")}>Skin Care</li>
                <li onClick={()=>subCatFilter("Beauty Appliances")}>Beauty Appliances</li>
                <li onClick={()=>subCatFilter("Makeup")}>Makeup</li>
                <li onClick={()=>subCatFilter("Perfumes")}>Perfumes</li>
              </ul>
              <ul>
              <li className="liDeactive">New arrivals Bags & Wallets</li>
           
              </ul>
              <ul>
              <li className="liDeactive">Camera & accessories</li>
                           </ul>
              <ul>
              <li className="liDeactive">Musical Instruments</li>
                <li onClick={()=>subCatFilter("Karaoke Equipment")}>Karaoke Equipment</li>
                <li onClick={()=>subCatFilter("String Instruments")}>String Instruments</li>
                <li onClick={()=>subCatFilter("Drums & Percussion")}>Drums & Percussion</li>
                <li onClick={()=>subCatFilter("Piano & Keyboard")}>Piano & Keyboard</li>
                <li onClick={()=>subCatFilter("Guitars, Basses & Gear")}>Guitars, Basses & Gear</li>
              </ul>
              <ul>
              <li className="liDeactive">Men's Clothes</li>
               
                             </ul>
              <ul>
              <li className="liDeactive">Dresses</li>
               
              </ul>
              <ul>
              <li className="liDeactive">Headphones</li>
              
              </ul>
              <ul>
              <li className="liDeactive">Kitchen essentials</li>
                <li onClick={()=>subCatFilter("Kitchen Appliances")}>Kitchen Appliances</li>
             
              </ul>
              <ul>
              <li className="liDeactive">kids Part</li>
            
              </ul>
              <ul>
              <li className="liDeactive">Electronics</li>
               
              </ul>
              <ul>
              <li className="liDeactive">Gaming & accessories</li>
              
              </ul>
              <ul>
              <li className="liDeactive">Security cameras</li>
              </ul>
              <ul>
              <li className="liDeactive">Beauty picks</li>
                <li onClick={()=>subCatFilter("Mens bb")}>Mens bb</li>
                <li onClick={()=>subCatFilter("Mens")}>Mens</li>
                <li onClick={()=>subCatFilter("Women")}>Women</li>
                <li onClick={()=>subCatFilter("Baby")}>Baby</li>
              
              </ul>


            </div>
            {/* <div>
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
            </ul> */}

            <h4>Price</h4>
            <ul>
              <li className="fw-bold">All</li>
              <li onClick={()=>priceFilter(400)}>Under EGP400</li>
              <li onClick={()=>priceFilter(800)}>EGP400 to EGP800</li>
              <li onClick={()=>priceFilter(1200)}>EGP800 to EGP1,200</li>
              <li onClick={()=>priceFilter(1600)}>EGP1,200 to EGP1,600</li>
              <li onClick={()=>priceFilter(1600)}>EGP1,600 & above</li>
            </ul>
            <h4>Discount</h4>
            <ul>
              <li className="fw-bold">All deals</li>
              <li onClick={()=>discountFilter(.10)}>10% off or more</li>
              <li onClick={()=>discountFilter(.20)}>20% off or more</li>
              <li onClick={()=>discountFilter(.30)}>30% off or more</li>
              <li onClick={()=>discountFilter(.40)}>40% off or more</li>
              <li onClick={()=>discountFilter(.50)}>50% off or more</li>
            </ul>
            <h4>Rating</h4>
           <ul>
            <li onClick={()=>rateFilter(4)}>
            <div className="ratings">
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star"></i>
            </div>
            </li>
            <li onClick={()=>rateFilter(3)}>
            <div className="ratings">
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star r"></i>
                <i className="fa fa-star"></i>
            </div>
            </li>
            <li onClick={()=>rateFilter(2)}>
            <div className="ratings">
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star "></i>
                <i className="fa fa-star"></i>
            </div>
            </li >
            <li onClick={()=>rateFilter(1)}>  <div className="ratings">
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star "></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
            </div></li>
           </ul>
           
           
          

          </div>
          <div className="col-9">
            <div className="row">
              {product?.map((e, i) => {
                return (
                  <div className="col-3 col-md-4 p-0" key={i}>
                    <div className="my-1 mx-1 w-100">
                      <div id="imgWrap">
                        <img
                          src={e.images[0]}
                          className="card-img-top"
                          alt="..."
                          id="productImg"
                        />
                      </div>
                      <div className="card-body">
                        <p className="h"> <i>{e.description}</i></p>
                       <Rate defaultValue={e.ratings}
                       allowHalf
                       allowClear={false}
                       disabled
                       >

                       </Rate>
                         
                        
                        
                        <span className="deal fw-bold">{e.price}$</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="mx-auto justify-content-center d-flex align-items-center mt-5 pag">
              <nav aria-label="...">
                <ul className="pagination">
                  <li className="page-item disabled">
                    <a className="page-link fw-bold">Previous</a>
                  </li>
                  <li className="page-item fw-bold">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item active " aria-current="page">
                    <a className="page-link fw-bold" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item fw-bold">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link fw-bold" href="#">
                      Next
                    </a>
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

export default Product;
