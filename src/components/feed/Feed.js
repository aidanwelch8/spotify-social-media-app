import "./feed.css"
import apiClient from "../../pages/auth/Spotify"
import { useEffect, useState } from "react"

export default function Feed() {
    const [ playlists, setPlaylists ] = useState([]);
    useEffect(() => {
        apiClient.get("me/playlists").then(function (response) {
            if (response.data.items.length !== 0) {
                setPlaylists(response.data.items);
            }
        });
    }, []);
    return (
        <div className="feed">
            <div className="playlistBody">
                {playlists?.map((playlist) => (
                    <div className="playlistCard">
                        <img src={playlist.images[0].url} className="playlistImage" alt="Playlist Art"/>
                        <p>{playlist.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}