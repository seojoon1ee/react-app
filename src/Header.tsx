function Header() {
    return(
        <header>
            <img src="./src/assets/photo.jpg" alt="picture of me!" id="img"></img>
            <nav>
                <ul id="tabbar">
                </ul>
            </nav>
            <div id="name">
                <h1>Seojoon Lee</h1>
                <p>(이서준)</p>
            </div>
            <div id="contacts">
                <p>seojoonlee@korea.ac.kr</p>
                <p>010-4161-1462</p>
            </div>
        </header>
    );
}

export default Header