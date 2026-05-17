import Project from "./project";

function Home() {
    return(
        <div id="main">
            <div id="centerView">
                <h1 id="name">Seojoon Lee</h1>
                <div id="jobs">
                    <p>General Software Developer</p>
                    <p>Web / App / AI and more!</p>
                </div>
                <img src="/arrow.png" id="arrow"></img>
            </div>
            <div id="content">
                <div id="line"></div>
                <h1 style={{marginTop: "10px", marginBottom: "10px", fontSize: "36px"}}>Projects</h1>
                <Project name="Node: A self hosted text editing app." date="Feb. 2026 ~ Current" skills="React, Typescript, Node.js" image="/node.jpg" link="https://github.com/seojoon1ee/node"/>
                <Project name="Gesture Control w/OpenCV" date="Mar. 2023 ~ Dec. 2024" skills="Python, CNN" video="/gc.mp4" link="https://github.com/seojoon1ee/gesture-control"/>
                <Project name="Centerlocked: A mobile game" date="Jan. 2021 ~ Dec. 2022" video="/centerlocked.mp4" skills="Unity, C#" width="25vw" link="https://github.com/seojoon1ee/centerlocked"/>
                <Project name="Portable handheld gaming device" date="Aug. 2020 ~ Jan. 2022" skills="Raspberry Pi, Lattepanda, Arduino, 3D Printing, 3D Modeling" video="/mk.mp4" width="50vw" link="https://github.com/seojoon1ee/handheld/"/>
            </div>
            <div id="skills">
                <div id="line"/>
                <h1 style={{marginTop: "20px", marginBottom: "10px", fontSize: "36px"}}>Skills</h1>
                <h3>1. Web / App Development</h3>
                <p>JS, TS, React, XCode, Swift, Flask</p>
                <h3 style={{marginTop: "20px"}}>2. Self Hosting</h3>
                <p>Docker, Tailscale, APIs, Cloudflare</p>
                <h3 style={{marginTop: "20px"}}>3. Linux</h3>
                <p>Bash, SSH, Ubuntu, Arch Linux, Raspberry Pi</p>
                <h3 style={{marginTop: "20px"}}>4. AI</h3>
                <p>OpenCV, Ollama Local LLMs, RAG</p>
                <h3 style={{marginTop: "20px"}}>5. 3D Modeling / Shaders / Game Development</h3>
                <p style={{marginBottom: "40px"}}>Blender, Unity, Unreal</p>
            </div>
        </div>
    );
}

export default Home;