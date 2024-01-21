import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Image_and_search_bar from './components/image_and_search_bar/image_and_search_bar';
import Property from './components/properties/property';
import Footer from './components/Footer/Footer';
import Homepage from './Pages/Homepage/Homepage';


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

            </Routes>
            <Footer/>
        
    </div>
  );
}

export default App;
