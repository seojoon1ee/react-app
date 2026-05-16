function Home() {
    return(
        <div id="main">
            <div id="centerView">
                <h1 id="name">Seojoon Lee</h1>
                <div id="jobs">
                    <p>General Software Developer</p>
                    <p>Apps / Games / AI / Web Frontend / Hosting and more!</p>
                </div>
                <img src="/arrow.png" id="arrow"></img>
            </div>
            <div id="content">
                <div id="line"></div>
                <h1 style={{marginTop: "10px"}}>Projects</h1>
                <div id="projects">
                </div>
            </div>
        </div>
    );
}

export default Home;