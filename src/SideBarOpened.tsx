import { Link } from 'react-router-dom';

function SideBarOpened() {
    return(
        <aside id="sideBarOpened">
            <div id="sideBar">
                <Link to="/about" className="sideBarItem"> <p>About</p> <img src="/about.png" id="about"></img></Link>
                <Link to="/resume" className="sideBarItem"><p>Resume</p> <img src="/about.png" id="about"></img></Link>
                <Link to="/contact" className="sideBarItem"> <p>Contact</p> <img src="/about.png" id="about"></img></Link>
            </div>
        </aside>
    );
}

export default SideBarOpened;