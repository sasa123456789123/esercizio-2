import { Route , Routes,NavLink} from "react-router"
import HomePage from "./pages/Homepage"
import Users from "./pages/Users";
import ProductsPage from "./pages/ProductsPage";
import Navbar from "../src/Components/Navbar";

function App() {

  return (
    <>
    <Navbar></Navbar>
    <main>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/Users" element={<Users/>}/>
        <Route path="/Prodotti" element={<ProductsPage/>}/>
      </Routes>
    </main>
    <footer>
      <p>Questo è il footer </p>
    </footer>
    
      
    </>
  )
}

export default App
