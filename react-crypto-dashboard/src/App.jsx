import "./App.css";
import Dashboard from "./pages/DashBoard/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Transaction from './pages/Transactions/Transaction';
import Support from './pages/Support/Support';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard/>,
  },
  {
    path: "/transaction",
    element: <Transaction/> ,
  }, {
    path: "/support",
    element: <Support/>,
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
