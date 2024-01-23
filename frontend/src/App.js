import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';


import Footer from './components/Footer/Footer';
import Homepage from './Pages/Homepage/Homepage';
import Property from './Pages/Propertypage/property';
import SignUp from './Pages/Signup/SignUp';

import './App.css'
import Login from './Pages/Login/Login';

function App() {
  return (
    <div className="App">
            <Header/>
            <Routes>
                <Route element={<Homepage/>}
                    path='/'
                >
                </Route>
                <Route element={<Property/>} path='/properties' exact></Route>
                <Route element={<Login/>} path='/login'></Route>
                <Route element={<SignUp/>} path ='/sign-up'></Route>
            </Routes>
            <Footer/>
        
    </div>
  );
}

export default App;
