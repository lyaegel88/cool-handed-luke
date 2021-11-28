import styles from './App.module.scss';
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import About from "./components/About/About";
import Navigation from "./components/Navigation/Navigation";
import Blog from "./components/Blog/Blog";

const App = () => {
    return (
        <Router>
            <div className={styles.backdrop}>
                <Navigation/>
                <Routes>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/" element={<Profile/>}/>
                    <Route path="/blog" element={<Blog/>}/>
                </Routes>
            </div>
        </Router>
    )
}

export default App;
