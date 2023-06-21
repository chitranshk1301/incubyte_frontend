import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Main from './pages/main';
import './index.css';
import About from './pages/about';
import Expertise from './pages/expertise';
import SuccessStory from './pages/successStory';
import Contact from './pages/contact';

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <About />
      <Expertise />
      <SuccessStory />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
