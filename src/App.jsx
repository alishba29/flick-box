import React, { useState } from "react";
import axios from "axios";
import Search from "./components/Search";
import Results from "./components/Results";
import Popup from "./components/Popup";

function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {}
  });
  const apiurl = "http://www.omdbapi.com/?apikey=6c45e942";

  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiurl + "&s=" + state.s)
        .then(({ data }) => {
          if (data.Search) {
            let results = data.Search;
            setState((prevState) => ({ ...prevState, results: results }));
          }
        })
        .catch((error) => {
          console.error("Error fetching data", error);
        });
    }
  };

  const handleInput = (e) => {
    let s = e.target.value;
    setState((prevState) => ({ ...prevState, s: s }));
  };

  const openPopup = (id) => {
    axios(apiurl + "&i=" + id).then(({ data }) => {
      setState((prevState) => ({ ...prevState, selected: data }));
    });
  };

  const closePopup = () => {
    setState((prevState) => ({ ...prevState, selected: {} }));
  };

  return (
    <div className="App">
      <header>
        <h1>Movie Database</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search} />
        <Results results={state.results} openPopup={openPopup} />
        {state.selected.Title ? (
          <Popup selected={state.selected} closePopup={closePopup} />
        ) : null}
      </main>
    </div>
  );
}

export default App;
