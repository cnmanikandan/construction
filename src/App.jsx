import "./App.css";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./Component/NavBar";

function App() {
  return (
    <BrowserRouter>
      <h1 style={{color: 'black'}}>Hello World</h1>
      <NavBar />
    </BrowserRouter>
  );
}

export default App;
