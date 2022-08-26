import './App.css';
import Intro from './components/intro/intro'
import Projects from './components/projects/projects'
import Arts from './components/arts/arts'


function App() {
  return (
    <div className="main">
    <main>
    
      <Intro/>
      <h1 style={{textAlign:"center", fontSize:"40px", marginTop:"50px", letterSpacing:"10px"}}>   .   .   .  </h1>
      <Projects/>
      <h1 style={{textAlign:"center", fontSize:"40px", marginTop:"50px", letterSpacing:"10px"}}>   .   .   .  </h1>
      <Arts/>
      
    </main>
    </div>
  );
}

{/* animate dots??? */}

export default App;
