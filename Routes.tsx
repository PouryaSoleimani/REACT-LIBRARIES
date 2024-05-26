//^ ROUTES
import { createBrowserRouter } from "react-router-dom";
import Home from './src/App'
import Lodash1 from "./src/Lodash";
import Lodash2 from "./src/Lodash2";
import Otp from "./src/Otp";
import CkEditor from "./src/CkEditorComponent";
import SSO from "./src/SSO";
import ReactSpinners from "./src/ReactSpinners";
import SWR from "./src/SWR";



// * ROUTER
export const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/lodash1', element: <Lodash1 /> },
  { path: '/lodash2', element: <Lodash2 /> },
  { path: '/otp', element: <Otp /> },
  { path: '/ck-editor', element: <CkEditor /> },
  { path: '/sso', element: <SSO /> },
  { path: '/react-spinners', element: <ReactSpinners /> },
  { path: '/swr', element: <SWR /> },
])