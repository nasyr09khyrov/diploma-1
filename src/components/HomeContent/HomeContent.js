import "./HomeContent.css";
import img from "./../../assets/ski-photo.jpg";


export default function HomeContent() {
    return (
        <div className="Home">
            <div className="content">
                <img src={img} alt="" className="photo"/>
                <h3 className="text-content">This product will surprise you with its quality</h3>
            </div>
        </div>
    )
}