import '@aws-amplify/ui-react/styles.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import TeamPage from "./pages/TeamPage.tsx";
import HomeApertureRobotics from "./teams/aperture-robotics/Home.tsx";

function App() {
  return (
    <>
        <Router>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/teams" element={<About />} />
        <Route path="/test" element={<HomeApertureRobotics />} />
        <Route path="/aperture-robotics" element={<TeamPage name="aperture-robotics" />} />
        <Route path="/cyber-spartan-x" element={<TeamPage name="cyber-spartan-x" />} />
        <Route path="/sparking" element={<TeamPage name="sparking" />} />
        <Route path="/spartan-tech" element={<TeamPage name="spartan-tech" />} />
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
</>
    
  )  
}

export default App;
