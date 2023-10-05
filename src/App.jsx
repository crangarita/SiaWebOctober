

import Principal from "./components/Principal";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

function App() {


  return (

    <Router>
        <Header />
        <Routes>
            <Route path="/principal" element={<Principal />} />
            <Route path="*" element={<p>Not found page</p>} />
        </Routes>
        <Footer />
    </Router>


    
  )
}

export default App
