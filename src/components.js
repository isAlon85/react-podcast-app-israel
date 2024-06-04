import DashboardLayout from "./components/dashboard/DashboardLayout";
import HomePage from "./pages/home/HomePage";
import PodcastDetailPage from "./pages/home/PodcastDetailPage";
import routes from "./routes/routes";

 export const pages = [
  // Public pages
  {
    exact: true,
    path: routes.home,
    component: HomePage,
    layout: DashboardLayout
  },
  {
    exact: true,
    path: routes.podcastDetail,
    component: PodcastDetailPage,
    layout: DashboardLayout
  },
  {
    exact: true,
    path: routes.episodeDetail,
    component: PodcastDetailPage,
    layout: DashboardLayout
  }
]