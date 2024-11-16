import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/HomePage';

import BookingForm from './Components/BookingForm';
import SearchPage from './Components/SearchPage'
import {
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <>
      <Header/>
      
      {/* <SearchPage /> */}
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="searchroom" element={<SearchPage />} />
          <Route path="bookingform" element={<BookingForm />} />

          
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
