import "./songs.css"
import { useState } from "react"

export default function TrackSearchResult({ track }) {
    const [ isHovering, setIsHovering ] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
    }

    const handleMouseLeave = () => {
        setIsHovering(false);
    }

    return (
        <div className="d-flex m-2 align-items-center" style={{ cursor: "pointer", borderRadius: "5px", backgroundColor: isHovering ? '#535353' : '',}} 
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img src={track.albumUrl} alt="/assets/defaultUserImg.jpeg" style={{ height: "64px", width: "64px", borderRadius: "5px" }} />
            <div className="m-3" style={{ color: "#fefefe" }}>
                <div>{track.title}</div>
                <div className="ArtistText" style={{ color: "#b3b3b3" }}>{track.artist}</div>
            </div>
        </div>
    )
}
