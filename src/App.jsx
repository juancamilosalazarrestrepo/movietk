import { MoviesGrid } from "./components/MoviesGrid";
import styles from "./App.module.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
import { LandingPage } from "./pages/LandingPage";
import { Nav } from "./components/Nav";




export
function App(){
    return <Router>
<header className={styles.headerStyle}>
    <Nav >     
    
      </Nav>
    </header>

     <main>

     <Switch>
          <Route path="/movies/:movieId">
            <MovieDetails/>
          </Route>
          <Route path="/">
            <LandingPage/>
          </Route>
        </Switch>
     </main>


    </Router>
}