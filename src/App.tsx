import '@aws-amplify/ui-react/styles.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home.tsx";
import About from "./pages/About.jsx";


function App() {
  return (
    <Router>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route
            path="/contact"
            element={<Contact />}
        />
        <Route path="/blogs" element={<Blogs />} />
        <Route
            path="/sign-up"
            element={<SignUp />}
        /> */}
    </Routes>
    </Router>

  )  
}

export default App;
