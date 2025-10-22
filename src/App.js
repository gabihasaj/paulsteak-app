import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./Home";
import Menu from './Menu';
import Info from './Info';
function App() {
  
  return (
    <div className="App"> 
    <div>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/info" element={<Info />} />

              <Route path="/Menu" element={<Menu />} />

</Routes>
</div>
      
    </div>
  );
}

export default App;
