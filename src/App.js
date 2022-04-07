import './App.css';
import Topnav from "./Components/Topnav";
import Background from "./Components/Background";
import Categories from './Components/Categories';
import Jokescategory from './Components/Jokescategory';
import Footer from "./Components/Footer";

function App() {
  return (
    <div style={{display:'flex',flexDirection:"column"}}>
      <Topnav />
      <Background />
      <Categories />
      <Jokescategory />
      <Footer />
    </div>
  );
}

export default App;
