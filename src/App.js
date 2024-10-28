import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/HomePage';
import BookNow from './Components/BookNow';
import Rooms from './Components/Rooms';
import PlaceToRemember from './Components/PlaceToRemember';
import PoolArea from './Components/PoolArea';
// import Booking from './Components/Booking';
import SearchPage from './Components/SearchPage'
function App() {
  return (
    <div className="App">
      <Header/>
      <Home />
      <BookNow/>
      {/* <Rooms/> */}
      <PlaceToRemember />
      <PoolArea />
      <Rooms/>
      <Footer/>
      {/* <Booking /> */}
      <SearchPage />
    </div>
  );
}

export default App;
