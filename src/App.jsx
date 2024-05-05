import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./Page/HomePage";
import CategoriesPage from "./Page/CategoriesPage";
import AppLayout from "./AppLayout";
import SearchPage from "./Page/SearchPage";
import SingleGIFPage from "./Page/SingleGIFPage";
import FavouritePage from "./Page/FavouritePage";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/:category",
        element: <CategoriesPage />,
      },
      {
        path: "/search/:query",
        element: <SearchPage />,
      },
      {
        path: "/clips/:SingleGIF",
        element: <SingleGIFPage />,
      },
      {
        path: "/favourite",
        element: <FavouritePage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
