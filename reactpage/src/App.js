import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Section1 from './Section1';
import Post from './Post';
import Post2 from './Post2';
import Contact from './Contact';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
       <Navbar />
       <Section1 />
       <Post />
       <Post2 />
       <Contact />
       <Footer />
    </div>
  );
}

export default App;
