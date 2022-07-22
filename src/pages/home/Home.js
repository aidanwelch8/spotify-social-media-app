import Topbar from "../../components/topbar/Topbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"
import Account from "../account/Account"
import AccountTopbar from "../account/AccountTopbar"
import "./home.css"


export default function Home() {
    let bodyComponents;
    let topbarComponent;
    switch (window.location.pathname) {
        case "/":
            topbarComponent = <Topbar />
            bodyComponents = [<Sidebar />, <Feed />, <Rightbar />]
            break
        case "/account":
            topbarComponent = <AccountTopbar />
            bodyComponents = <Account />
            break
    }

    return (
        <>
            {topbarComponent}
            <div className="homeContainer">
                {bodyComponents}
            </div>
        </>
    )
}