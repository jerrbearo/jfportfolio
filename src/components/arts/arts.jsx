import artStyles from "./arts.module.css";
import illu from "../../assets/illustration.png";
import photo from "../../assets/photo.png";


const Arts = () => {

  return(
    <div className={artStyles.main}>

      <h2>I also make illustrations and experiment with photography.</h2>
      <div className={artStyles.row}>
        <div className={artStyles.column}>
            <img src={illu} alt="illustrations" style={{height:"370px", objectFit:"cover"}}></img>
            <button
              className={artStyles.vbutton}
              onClick={() => {
                window.open(
                  "https://jerrie.pb.studio/illutrations",
                  "_blank"
                );
              }}>
            Illustrations
            </button>
        </div>
        <div className={artStyles.column} style={{marginLeft:"80px"}}>
            <img src={photo} alt="photography"></img>
            <button
              className={artStyles.vbutton}
              onClick={() => {
                window.open(
                  "https://jerrie.pb.studio/photography",
                  "_blank"
                );
              }}>
              Photography
            </button>
        </div>
      </div>

      <div className={artStyles.links}>
      </div>
      
    </div>
  )
};

export default Arts;
