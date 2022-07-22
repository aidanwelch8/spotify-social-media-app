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
            <img src={track.albumUrl} alt="/assets/defaultUserImg.jpeg" style={{ height: "64px", width: "64px" }} />
            <div className="m-3">
                <div>{track.title}</div>
                <div className="text-muted">{track.artist}</div>
            </div>
        </div>
    )
}
