import articles from "./hackerNoonArticles";
import { Header } from "./Header";
import { Body } from "./Body";
import { Footer } from "./Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Body />
        <Footer />
      </header>
    </div>
  );
}

export default App;
