//^ ROUTES
import { createBrowserRouter } from "react-router-dom";
import Home from './src/App'
import Lodash1 from "./src/Lodash";
import Lodash2 from "./src/Lodash2";
import Otp from "./src/Otp";



// * ROUTER
export const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/loadash1', element: <Lodash1 /> },
  { path: '/loadash2', element: <Lodash2 /> },
  { path: '/otp', element: <Otp /> },
])