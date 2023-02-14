import "./Style.css";
import imageInSrc from "./imageInSrc.jpg";
import myVideo from "./myVideo.mp4";

function App() {
  return (
    <>
      <div className="App">
        <h1 class="titlered">Your name here</h1>
        <img
          src={imageInSrc}
          alt="Logo"
          style={{ width: "15%", marginTop: "2cm" }}
        />
        <img
          src={process.env.PUBLIC_URL + "/imageInPublic.jpg"}
          alt="Mon Image"
          style={{ width: "15%", marginTop: "2cm" }}
        />
      </div>

      <video width="320" height="240" controls>
        <source src={myVideo} type="video/mp4" />
      </video>
    </>
  );
}

export default App;
