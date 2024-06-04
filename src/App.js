import React, { useState, createContext} from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { pages } from "./components";
import NotFoundPage from "./pages/404/NotFoundPage";
import '../src/styles/dashboard.scss';
import './App.scss';

export const AppContext = createContext();

function App() {

  const podcastsData = localStorage.getItem("podcasts") ? JSON.parse(localStorage.getItem("podcasts")) : null;

  const [allPodcasts, setAllPodcasts] = useState(podcastsData?.data ? podcastsData?.data : []);
  const [allPodcastsLastUpdate, setAllPodcastsLastUpdate] = useState(podcastsData?.timestamp ? podcastsData?.timestamp : null);
  const [allPodcastsAreLoading, setAllPodcastsAreLoading] = useState(false);
  const [allPodcastsError, setAllPodcastsError] = useState(false);
  const [onePodcast, setOnePodcast] = useState([]);
  const [onePodcastLastUpdate, setOnePodcastLastUpdate] = useState(null);
  const [onePodcastIsLoading, setOnePoscastIsLoading] = useState(false);
  const [onePodcastError, setOnePodcastError] = useState(false);

  return (
    <AppContext.Provider
      value={{
        allPodcasts, 
        setAllPodcasts,
        allPodcastsLastUpdate, 
        setAllPodcastsLastUpdate,
        allPodcastsAreLoading, 
        setAllPodcastsAreLoading,
        allPodcastsError,
        setAllPodcastsError,
        onePodcast, 
        setOnePodcast,
        onePodcastLastUpdate, 
        setOnePodcastLastUpdate,
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
