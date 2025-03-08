import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./Components/Pages/Home";
import { About } from "./Components/Pages/About";
import { Contact } from "./Components/Pages/Contact";
import { Movie } from "./Components/Pages/Movie";
import { AppLayout } from "./Components/Layouts/AppLayout";
import { ErrorPage } from "./Components/Pages/ErrorPage";
import { getMoviesData } from "./Components/Api/GetApiData";
import { MovieDetails } from "./Components/UI/MovieDetails";
import "./App.css";
import { getMoviesDetails } from "./Components/Api/GetMovieDetails";
import { contactData } from "./Components/Pages/Contact";
export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
          action: contactData,
        },
        {
          path: "/movie",
          element: <Movie />,
          loader: getMoviesData,
        },
        {
          path: "/movie/:movieId",
          element: <MovieDetails />,
          loader: getMoviesDetails,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
