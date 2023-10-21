import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout.jsx";
import { ContextProvider } from "./context/store.jsx";
import TrackingDetails from "./sections/TrackingDetails.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/trackingDetails/:trackingNum", element: <TrackingDetails /> },
      ],
    },
  ]);

  return (
    <ContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </ContextProvider>
  );
}

export default App;
