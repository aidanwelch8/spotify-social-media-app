import "./songs.css"
import { useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { PlayArrow } from "@mui/icons-material"

export default function TrackSearchResult({ track }) {
    const [ isHovering, setIsHovering ] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
    }

    const handleMouseLeave = () => {
        setIsHovering(false);
    }

    return (
        <Container>
            <Row>
                <div className="d-flex m-2 align-items-center" style={{ cursor: "pointer", borderRadius: "5px", backgroundColor: isHovering ? '#686868' : '',}} 
                    onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <Col xs={0.5}>
                        <div className="playButton">{<PlayArrow />}</div>
                    </Col>
                    <Col xs={0.5} className="albumImageContainer">
                        <img src={track.albumUrl} alt="/assets/defaultUserImg.jpeg" style={{ height: "64px", width: "64px", borderRadius: "5px" }} className="albumImage"/>
                    </Col>
                    <Col xs={4}>
                        <div className="m-3" style={{ color: "#fefefe" }}>
                            <div>{track.title}</div>
                            <div className="ArtistText" style={{ color: "#d2d7df" }}>{track.artist}</div>
                        </div>
                    </Col>
                    <Col xs={5}>
                        <div style={{ color: "#fefefe" }}>{track.albumName}</div>
                    </Col>
                    <Col xs={2}>
                        <div style={{ color: "#fefefe" }}>{track.duration}</div>
                    </Col>
                </div>

            </Row>
        </Container>
    )
}
