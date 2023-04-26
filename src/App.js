import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";
import './App.css';
import Header from './Components/Header/Header';
import Home from './Pages/Home/home';
import Footer from './Components/Footer/Footer';
import CreateAccount from './Pages/CreateAccount/CreateAccount';
import Error from './Pages/notFound/notFound';
import SignIn from './Pages/SignIn/SignIn';
import Account from './Pages/Account/Account';
import Order from "./Pages/Order/Order";

import ProductDetalis from './Pages/Product_Detalis/product_detalis';
import Cart from './Pages/Cart/cart';
import Address from "./Pages/Account/Address/Address";
import AddAddress from "./Pages/Account/Address/AddAddress/AddAddress";
import Profile from "./Pages/Account/profile/profile";
import EditProfile from "./Pages/Account/profile/editProfile/editProfile";
import ForgetPassword from "./Pages/Account/forgetPassword/forgetPassword";
import OTP from "./Pages/Account/forgetPassword/OTP/OTP";
import UpdatePasword from "./Pages/Account/updatePassword/updatePassword";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUser } from "./Store/Actions/userActions";
function App() {
  const dispatch = useDispatch()
  const { userInfo } = useSelector(state => state.user);
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      dispatch(fetchUser(token))
    }
  }, [])
  console.log(userInfo);
  return (

    <div className="App">

      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/product/:productId' element={<ProductDetalis />} />
        <Route path='/CreateAccount' element={<CreateAccount />} />
        <Route path='/SignIn' element={<SignIn />} />
        <Route path='/Account' element={<Account />} />
        <Route path='/Order' element={<Order />} />
        <Route path='/Address' element={<Address />} />
        <Route path='/AddAddress' element={<AddAddress />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/editProfile' element={<EditProfile />} />
        <Route path='/forgetPassword' element={<ForgetPassword />} />
        <Route path='/OTP' element={<OTP />} />
        <Route path='/updatePassword' element={<UpdatePasword />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <div className='footer__div'>
        <Footer />
      </div>
    </div>

  );
}

export default App;
