import Footer from "./components/Footer/Footer";
import Layout from "./components/Layout/Layout";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Layout>
        <Outlet />
        <Footer />
      </Layout>
    </>
  );
}

export default App;
