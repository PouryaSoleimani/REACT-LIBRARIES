//^ ROUTES
import { createBrowserRouter } from "react-router-dom";
import Home from './src/App'
import Loadash from "./src/Loadash";


// * ROUTER
export const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/loadash', element: <Loadash /> },
])