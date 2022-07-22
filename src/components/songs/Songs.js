import "./songs.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Form } from "react-bootstrap"
import { useState, useEffect } from "react"
import apiClient from "../../pages/auth/Spotify"
import TrackSearchResult from "./TrackSearchResult"

export default function Songs() {
    const [ searchInput, setSearchInput ] = useState("");
    const [ searchResults, setSearchResults ] = useState([]);

    useEffect(() => {
        if (!searchInput) return setSearchResults([])

        let cancel = false
        apiClient.get("search?q=" + searchInput + "&type=track").then(function (response) {
            if (cancel) return
            setSearchResults(response.data.tracks.items.map(track => {
                const smallestAlbumImage = track.album.images.reduce((smallest, image) => {
                    if (image.height < smallest.height) return image
                    return smallest
                }, track.album.images[0])
                return {
                    artist: track.artists[0].name,
                    title: track.name,
                    uri: track.uri,
                    albumUrl: smallestAlbumImage.url
                }
            }))
        })

        return () => {
            cancel = true
        }
    }, [searchInput])


    return (
        <div className="songs">
        <Container className="d-flex flex-column py-2" style={{ height: "100vh" }}>
            <Form.Control 
                type="search" 
                placeholder="Search Songs/Artists"
                value={searchInput}
                onChange={e => setSearchInput(e.target.value)}
            />
                <div className="flex-grow-1 my-2" stlye={{ overflowY: "auto" }}>
                    {searchResults.map(track => (
                        <TrackSearchResult track={track} key={track.uri} />
                    ))}
                </div>
        </Container>
        </div>
    )
}
