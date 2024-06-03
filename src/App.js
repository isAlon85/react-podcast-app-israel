import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import routes from "./routes/routes";
import NotFoundPage from "./pages/404/NotFoundPage";

function App() {

  const pages = [
    // Public pages
    {
      exact: true,
      path: routes.home,
      component: null,
      layout: null
    },
    {
      exact: true,
      path: routes.podcastDetail,
      component: null,
      layout: null
    },
    {
      exact: true,
      path: routes.episodeDetail,
      component: null,
      layout: null
    }
  ]

  return (
    <Router>
      <Routes>
        <Route path='' element={<Navigate replace to='/'/>}/>
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
  );
}

export default App;
