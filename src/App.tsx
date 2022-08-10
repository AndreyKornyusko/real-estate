import CardList from "./components/cardList";
import Filters from "./components/filters";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <h1>Real Estate</h1>
      <Filters />
      <CardList />
    </div>
  );
}

export default App;
