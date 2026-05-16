function SideBarOpened() {
    return(
        <aside id="sideBarOpened">
            <div id="sideBar">
                <a href="/about" className="sideBarItem"> <p>About</p> <img src="/about.png" id="about"></img></a>
                <a href="/resume" className="sideBarItem"> <p>Resume</p> <img src="/about.png" id="about"></img></a>
                <a href="/contact" className="sideBarItem"> <p>Contact</p> <img src="/about.png" id="about"></img></a>
            </div>
        </aside>
    );
}

export default SideBarOpened;