
import './App.css';
import Navbar from './Components/Navbar';
import Hero from "../src/Contents/Hero"
import Guidemiagtok from './Contents/Guidemiagtok';
import Membership from './Contents/Membership';
import Footer from './Components/Footer';
import Container from './Container/Container';
function App() {
  return (
    <>
    <div className="App">
    <Navbar/>
      <Container>
         
          <Hero/>
       <Guidemiagtok/>
       <Membership/>
       
       </Container>
       <Footer/>
    </div>
    
    </>
  );
}

export default App;
