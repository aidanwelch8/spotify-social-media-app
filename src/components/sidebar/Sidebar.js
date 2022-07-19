import "./sidebar.css"
import { RssFeed, Chat, HelpOutline, Event, MusicNote } from "@mui/icons-material"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarListIcon"/>
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <Chat className="sidebarListIcon"/>
                        <span className="sidebarListItemText">Messages</span>
                    </li>
                    <li className="sidebarListItem">
                        <MusicNote className="sidebarListIcon"/>
                        <span className="sidebarListItemText">Songs</span>
                    </li>
                    <li className="sidebarListItem">
                        <HelpOutline className="sidebarListIcon"/>
                        <span className="sidebarListItemText">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                        <Event className="sidebarListIcon"/>
                        <span className="sidebarListItemText">Events</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr"/>
                { /*TODO: Link spotify get friends to this
                <ul className="sidebarFriendsList">
                    <li></li>
                </ul> */}
            </div>
        </div>
    )
}