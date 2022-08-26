import introStyles from "./intro.module.css";
import { TypeAnimation } from 'react-type-animation';
import bunny from "../../assets/bunny.gif"

const Intro = () => {

  return(
    <div className={introStyles.intro}>
      <h1 className={introStyles.intro}>
        <TypeAnimation
          sequence={["✨ Hi there. I'm Jerrie,", 1000]}
          wrapper="h1"
          repeat={Infinity}
        />
      </h1>
      <img src={bunny} alt="intro img" style={{width:"75%", height:"300px", objectFit:"cover", objectPosition:"0 80%"}}></img>
      <h2>a computer science and bioinformatics student at the University of Toronto.</h2>
    </div>
  )
};

export default Intro;
