import React from "react";
import SideBarOpened from "./SideBarOpened";

function MainView() {
    const [isOpen, setIsOpen] = React.useState(false);

    return(
        <div id="main">
            <header id="header">
                <nav>
                    <div id="tabbar">
                        <button><a href="/"><img src="/logo.png" alt="logo" id="logo"></img></a></button>
                        <button onClick={() => setIsOpen(!isOpen)}id="menu"><img src="/menu.png" alt="menu" id="menu"></img></button>
                    </div>
                </nav>
            </header>
            <div id="centerView">
                <h1>Seojoon Lee</h1>
                <div id="jobs">
                    <p>General Software Developer</p>
                    <p>Apps / Games / AI / Web Frontend / Hosting and more!</p>
                </div>
                <img src="/arrow.png" id="arrow"></img>
            </div>
            <aside className={`sidebar-container ${isOpen ? "is-open" : ""}`}>
                <SideBarOpened/>
            </aside>
            <div id="content">
                <div id="line"></div>
            </div>
            <div id="foot">
                <div id="line"></div>
                <p>&copy; 2026 Seojoon Lee | All assets hand made.</p>
            </div>
        </div>
    );
}

export default MainView;