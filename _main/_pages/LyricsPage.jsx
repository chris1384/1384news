import { Navbar } from "../_components/Navbar.jsx";
import Footer from "../_components/Footer.jsx";
// import "./LyricsPage.js"
import BodyContent from "../_components/BodyContent.jsx";
// import CForm from "../_components/Form.jsx";
import SongSearch from "./LyricsGenerator.jsx";
import BgVideo from "../_components/BgVideo.jsx";

import video2 from "../_assets/bg2.webm"

export default function LyricsPage () {
    return (
        <div>
            <Navbar/>

            <BgVideo>
                <video src={video2} autoPlay loop style={{width: "100vw", height: "calc(100vw / 1.7777)", position: "absolute", zIndex: "-1"}}/>
                <div style={{width: "100vw", justifyContent: "center", alignItems: "center"}}>
                    <div className="_paragraph">Get video playback, lyrics and download option in one go!</div>
                </div>
            </BgVideo>

            <BodyContent style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                <div className="_paragraph" style={{width: "100vw", height: "auto", marginBlock: "70px", fontSize: "20px", justifyContent: "center", alignItems: "center"}}>
                    Please add the author and the song you want to retrieve the lyrics from:
                </div>
                <SongSearch/>
            </BodyContent>
            
            <Footer/>
        </div>
    );
}