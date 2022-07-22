import "./topbar.css"
import { Chat, Notifications } from "@mui/icons-material"
import { useEffect, useState } from "react";
import apiClient from "../../pages/auth/Spotify";

export default function Topbar() {
    const [ profileImg, setProfileImg ] = useState("/assets/defaultUserImg.jpeg");
    const [ username, setUsername ] = useState("");

    useEffect(() => {
        apiClient.get("me").then(response => {
            if (response.data.images.length !== 0) {
                setProfileImg(response.data.images[0].url)
            }
            setUsername(response.data.display_name);
            console.log(response.data);
        })
    }, []);

    function handleLogoClick() {
        window.location.pathname = "/";
    }

    function handleAccountClick() {
        window.location.pathname = "/account";
    }

    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="topbarLogo" onClick={handleLogoClick}>SpotifySocial</span>
            </div>
            <div className="topbarRight">
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Chat />
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications />
                        <span className="topbarIconBadge">3</span>
                    </div>
                </div>
                <div className="profile" onClick={handleAccountClick}>
                    <span className="username">{username}</span>
                    <img src={profileImg} alt="" className="topbarProfileImg"/>
                </div>
            </div>
        </div>
    )
}