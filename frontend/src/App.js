import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BookingForm from "./pages/BookingForm";
import RentForm from "./pages/RentForm";
import Homepage from "./pages/Homepage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MenuItem from "./components/MenuItem";

function App() {
  return (
    <div className="App">
      
        <Router>
          
        <Navbar />
          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/menu" exact element={<Menu/>} />
            <Route path="/menuItem" exact element={<MenuItem/>} />
            <Route path="/book" exact element={<BookingForm/>}/>
            <Route path="/rent" exact element={<RentForm/>}/>
            <Route path="/about" exact element={<About/>} />
            <Route path="/contact" exact element={<Contact/>} />
         </Routes>
        </Router>

    </div>
  );
}

export default App;
