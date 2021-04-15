import React, { useState } from "react";
import { moviesData } from "./Compontment/List";
import Surch from "./Compontment/Surch";
import MovieList from "./Compontment/MovieList";
import MovieAdd from "./Compontment/MovieAdd";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Info from "./Compontment/Info";

const App = () => {
  const [movies, setMovies] = useState(moviesData);
  const [surchValue, setsurchValue] = useState("");
  const [surchRating, setSurchRating] = useState(1);
  const handelAdd = (newMovie) => {
    setMovies([...movies, newMovie]);
    console.log(newMovie);
  };

  const handelRating = (rate) => setSurchRating(rate);
  const handelSurch = (e) => setsurchValue(e.target.value);

  return (
    <div className="App">
      <Router>
        <Surch
          handelRaiting={handelRating}
          handelSurch={handelSurch}
          surchValue={surchValue}
          surchRating={surchRating}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <MovieList
                films={movies.filter(
                  (movie) =>
                    movie.name
                      .toLocaleLowerCase()
                      .includes(surchValue.toLocaleLowerCase().trim()) &&
                    movie.rating >= surchRating
                )}
              />
            )}
          />
          <Route path="/Info/name" render={(props)=><Info movie={movies} {...props} /> }/>
        </Switch>
      </Router>

      <MovieAdd handelAdd={handelAdd} />
    </div>
  );
};

export default App;
