import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./components/main";

function App() {
  function updateCounter() {
    let count = 1;
    console.log(count);
  }
  return (
    <div className="App">
      <section className="todoapp">
        <Header />
        <Main />
        <Footer />
      </section>
    </div>
  );
}

export default App;
