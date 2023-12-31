import {createRoot} from 'react-dom/client'
import 'react-loading-skeleton/dist/skeleton.css'
import './index.css'
import MainTemplate from "./templates/template1/MainTemplate.jsx";
import Home from "./components/Home.jsx";
import {Provider} from "react-redux";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import NotFound from "./components/NotFound.jsx";
import MovieDetails from "./components/MovieDetails.jsx";
import store from "./store/index.js";

const router = createBrowserRouter([
    {
        path:"/",
        element: <Home/>,
        errorElement:<NotFound/>,
    },
    {
        path:"/movie/:movieId",
        element:<MovieDetails/>,
        errorElement:<NotFound/>,
    }
])

createRoot(document.getElementById('root')).render(
      <Provider store={store}>
          <MainTemplate>
              <RouterProvider router={router}/>
          </MainTemplate>
      </Provider>
)
