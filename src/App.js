import React, { useState, createContext} from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { pages } from "./components";
import NotFoundPage from "./pages/404/NotFoundPage";
import routes from "./routes/routes";
import '../src/styles/dashboard.scss';
import './App.scss';

export const AppContext = createContext();

function App() {

  const [allPodcasts, setAllPodcasts] = useState([]);
  const [allPodcastsAreLoading, setAllPodcastsAreLoading] = useState(false);
  const [allPodcastsError, setAllPodcastsError] = useState(false);
  const [onePodcast, setOnePodcast] = useState([]);
  const [onePodcastIsLoading, setOnePoscastIsLoading] = useState(false);
  const [onePodcastError, setOnePodcastError] = useState(false);

  return (
    <AppContext.Provider
      value={{
        allPodcasts, 
        setAllPodcasts,
        allPodcastsAreLoading, 
        setAllPodcastsAreLoading,
        allPodcastsError,
        setAllPodcastsError,
        onePodcast, 
        setOnePodcast,
        onePodcastIsLoading, 
        setOnePoscastIsLoading,
        onePodcastError, 
        setOnePodcastError
      }
    }>
      <Router>
        <Routes>
          { pages.map(
            ({ exact, path, component: Component, layout: Layout }, index) => (
              <Route
                key = { index }
                exact = { exact }
                path  ={ path }
                element = { <Layout main = { <Component/> }/> }
              />
            )
          )}
          <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
