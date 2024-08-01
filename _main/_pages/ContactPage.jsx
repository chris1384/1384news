import { Navbar } from "../_components/Navbar";
import Footer from "../_components/Footer";
import BgVideo from "../_components/BgVideo";
import video3 from "../_assets/bg3.mp4";

export default function ContactPage () {
    return (
        <div>
            <Navbar/>

            <BgVideo style={{maxHeight: "auto"}}>
                <video src={video3} autoPlay loop style={{width: "100vw", height: "calc(100vw / 1.7777)", position: "absolute", zIndex: "-1"}}/>
                <div style={{width: "100vw", justifyContent: "center", alignItems: "center"}}>
                    <div className="_paragraph">Contact us now for any information!</div>
                    <div className="_paragraph-contact">contact@1384news.com</div>
                </div>
            </BgVideo>
            <Footer/>
        </div>
    );
}