import "./sidebar.css"
import { RssFeed, Chat, HelpOutline, Search, MusicNote } from "@mui/icons-material"

function handleSongsClick() {
    window.location.pathname = "/songs"
}

function handleFeedClick() {
    window.location.pathname = "/"
}

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem" onClick={handleFeedClick}>
                        <RssFeed className="sidebarListIcon"/>
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <Chat className="sidebarListIcon"/>
                        <span className="sidebarListItemText">Messages</span>
                    </li>
                    <li className="sidebarListItem" onClick={handleSongsClick}>
                        <MusicNote className="sidebarListIcon"/>
                        <span className="sidebarListItemText">Songs</span>
                    </li>
                    <li className="sidebarListItem">
                        <Search className="sidebarListIcon"/>
                        <span className="sidebarListItemText">Explore</span>
                    </li>
                    <li className="sidebarListItem">
                        <HelpOutline className="sidebarListIcon"/>
                        <span className="sidebarListItemText">Questions</span>
                    </li>
                </ul>
                <hr className="sidebarHr"/>
                { /*TODO: Link spotify get friends to this
                <ul className="sidebarFriendsList">
                    <li></li>
                </ul> */}
            </div>
        </div>
    )
}