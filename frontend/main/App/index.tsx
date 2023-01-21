import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>This is an about page</h1>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "app",
    element: <App />,
  },
  {
    path: "app/about",
    element: <About />,
  },
]);

const AppWithRouter = () => {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

export default AppWithRouter;
