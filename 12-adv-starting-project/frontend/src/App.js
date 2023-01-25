// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EditEventPage from "./pages/EditEventPage";
import ErrorPage from "./pages/ErrorPage";
import EventDetailPage, {
  eventDetailLoader,
  eventDeleteAction,
} from "./pages/EventDetailPage";
import EventsPage, { loader } from "./pages/EventsPage";
import Home from "./pages/Home";
import NewEventPage from "./pages/NewEventPage";
import RootPage from "./pages/RootPage";
import { addEventAction } from "./components/EventForm";
function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <RootPage></RootPage>,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home></Home> },
        {
          path: "events",
          element: <EventsPage />,
          loader: loader,
        },
        {
          path: "events/:id",
          element: <EventDetailPage />,
          loader: eventDetailLoader,
          action: eventDeleteAction,
        },
        {
          path: "events/new",
          element: <NewEventPage />,
          action: addEventAction,
        },
        {
          path: "events/:id/edit",
          element: <EditEventPage />,
          loader: eventDetailLoader,
          action: addEventAction,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
