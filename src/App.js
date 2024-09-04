import './App.css';
import Navbar from './components/navbar';
import Box1 from './components/box1';
import Features from './components/features';
import Box2 from './components/box2'
import Box3 from './components/box3'
import Box4 from './components/box4'
import Bottom from './components/bottom'
import Footer from './components/footer'

function App() {
  return (
    <div className="App overflow-hidden bg-neutral-200">
      <Navbar/>
      <Box1/>
      <Features/>
      <Box2/>
      <Box3/>
      <Box4/>
      <Bottom/>
      <Footer />
    </div>
  );
}

export default App;
