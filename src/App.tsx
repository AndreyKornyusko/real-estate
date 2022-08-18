
import { BrowserRouter, Route, Routes  } from "react-router-dom";
import CardListPage from './components/pages/cardList'
import DetailsPage from './components/pages/details'
import "./App.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes >
          <Route
            path="/"
            element={<CardListPage/>}
          ></Route>
          <Route
            path='details/:id'
            element={<DetailsPage/>}
          ></Route>

        </Routes >
      </BrowserRouter>
    </div>
  );
}

export default App;
