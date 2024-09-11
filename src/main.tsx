import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import Home from "./routes/Home/index.tsx";
import Login from "./routes/Login/index.tsx";
import Cadastro from "./routes/Cadastro/index.tsx";
import Diagnostico from "./routes/Diagnostico/index.tsx";
import Agendamento from "./routes/Agendamento/index.tsx";
import Oficinas from "./routes/Oficinas/index.tsx";
import ErrorPage from "./routes/ErrorPage/index.tsx";
import EsqueceuASenha from "./routes/EsqueceuASenha/index.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "cadastro",
        element: <Cadastro />,
      },
      {
        path: "esqueciMinhaSenha",
        element: <EsqueceuASenha />,
      },
      {
        path: "diagnostico",
        element: <Diagnostico />,
      },
      {
        path: "agendamento/:id",
        element: <Agendamento />,
      },
      {
        path: "oficinas",
        element: <Oficinas />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
