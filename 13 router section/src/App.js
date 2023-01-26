import {
  createBrowserRouter,
  // createRoutesFromElements,
  // Route,
  RouterProvider,
} from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import RootLayout from "./components/RootLayout";

import ErrorPage from "./components/ErrorPage";
import ProductDetail from "./components/ProductDetail";

// const routerDefinition = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<Home />}></Route>
//     <Route path="/About" element={<About />}></Route>
//   </Route>
// );

// const router = createBrowserRouter(routerDefinition);
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "about", element: <About /> },
      { path: "about/:id", element: <ProductDetail /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
