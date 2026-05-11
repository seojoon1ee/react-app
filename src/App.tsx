import './app.css'
import Header from "./Header";
import Footer from "./Footer";
import MainView from "./MainView";

function App() {
  return(
    <div id="view">
      <Header></Header>
      <MainView></MainView>
      <hr></hr>
      <Footer></Footer>
    </div>
  );
}

export default App
