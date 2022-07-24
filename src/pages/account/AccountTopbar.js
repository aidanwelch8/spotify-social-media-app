import "./accountTopbar.css"
import { Chat, Notifications } from "@mui/icons-material"
import { useEffect, useState } from "react";
import apiClient from "../../pages/auth/Spotify";

export default function AccountTopbar() {
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
        <div className="accountTopbarContainer">
            <div className="accountTopbarLeft">
                <span className="accountTopbarLogo" onClick={handleLogoClick}>SpotifySocial</span>
            </div>
            <div className="accountTopbarRight">
                <div className="accountTopbarLinks">
                    <span className="accountTopbarLink">Homepage</span>
                    <span className="accountTopbarLink">Timeline</span>
                </div>
                <div className="accountTopbarIcons">
                    <div className="accountTopbarIconItem">
                        <Chat />
                        <span className="accountTopbarIconBadge">2</span>
                    </div>
                    <div className="accountTopbarIconItem">
                        <Notifications />
                        <span className="accountTopbarIconBadge">3</span>
                    </div>
                </div>
                <div className="accountProfile" onClick={handleAccountClick}>
                    <span className="username">{username}</span>
                    <img src={profileImg} alt="" className="accountTopbarProfileImg"/>
                </div>
            </div>
        </div>
    )
}