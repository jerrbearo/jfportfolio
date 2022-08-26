import projStyles from "./projects.module.css";
import deepdiive from "../../assets/deepdiive.gif";

const Projects = () => {

  return(
    <div className={projStyles.section}>

      <h1>Some things I've built</h1>

      <div className={projStyles.box}>
        <iframe src="https://kzhang98.github.io/utmbio.html" title="utm"></iframe>
        <div className={projStyles.text}>
          <h2>Data Visualization</h2>
          <h3><span>D3.js</span></h3>
          <h3>Interactive data visualization of U of T’s Biology Faculty members with their area of research.</h3>
          
          <button
            className={projStyles.vbutton}
            onClick={() => {
              window.open(
                "https://www.utm.utoronto.ca/biology/research",
                "_blank"
              );
            }}
          >
            View
          </button>
        </div>
      </div>

      <div className={projStyles.box} style={{height:"615px"}}>
        <img src={deepdiive} alt="video"></img>
        <div className={projStyles.text}>
          <h2>Client-Server Game</h2>
          <h3><span>React, MongoDB</span></h3>
          <h3>Virtual card-conversation game that allows users to play together in real-time. (Group project - Role: Software Developer)</h3>

          <button
            className={projStyles.vbutton}
            onClick={() => {
              window.open(
                "https://deepdiive.netlify.app/",
                "_blank"
              );
            }}
          >
            View
          </button>
        </div>
      </div>
      <br/>
    </div>
    
  )
};

export default Projects;
