import AccountTopbar from "./AccountTopbar"
import apiClient from "../auth/Spotify";
import { useEffect, useState } from "react";
import "./account.css"

export default function Account() {
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

    return (
        <>
        <div className="accountPageBody">
            <img src={profileImg} alt="Profile"></img>
            <h1>{username}</h1>
        </div>
        </>
    )
}
