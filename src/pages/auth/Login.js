import "./login.css";
import { loginEndpoint } from "./Spotify";

export default function Login() {
    return (
        <div className="loginPage">
            <img
                src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
                alt="spotifyLogo"
                className="logo"
            />
            <a href={loginEndpoint}>
                <div className="loginButton">LOG IN</div>
            </a>
        </div>
    )
}