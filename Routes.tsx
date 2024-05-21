//^ ROUTES
import { createBrowserRouter } from "react-router-dom";
import Home from './src/App'

export const router = createBrowserRouter([
  { path: '/', element: <Home /> }
])