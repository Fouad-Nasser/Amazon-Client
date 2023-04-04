import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Pages/home';
import CreateAccount from './Pages/CreateAccount/CreateAccount';
import Error from './Pages/notFound/notFound';
import SignIn from './Pages/SignIn/SignIn';
import Account from './Pages/Account/Account';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/CreateAccount' element={<CreateAccount />} />
        <Route path='/SignIn' element={<SignIn />} />
        <Route path='/Account' element={<Account />} />
        <Route path='*' element={<Error />} />
      </Routes>

    </div>
  );
}

export default App;
