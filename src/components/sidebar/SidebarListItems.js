import { RssFeed, Chat, MusicNote, Search } from '@mui/icons-material';
import "./sidebar.css";

export const SidebarListItems = [
    {
        title: 'Feed',
        path: '/',
        icon: <RssFeed />,
        className: 'sidebarText'
    },
    {
        title: 'Messages',
        path: '/messages',
        icon: <Chat />,
        className: 'sidebarText'
    },
    {
        title: 'Songs',
        path: '/songs',
        icon: <MusicNote />,
        className: 'sidebarText'
    },
    {
        title: 'Explore',
        path: '/explore',
        icon: <Search />,
        className: 'sidebarText'
    },
]