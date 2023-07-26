import { Route, Routes } from "react-router-dom";
import RegisterClient from "../client/RegisterClient";
import Dashboard from "../dashboard/Dashboard";
import Layout from "./Layout";

function Home() {
  return (
    <Layout>
      <Routes>
        <Route path="/register-client" element={<RegisterClient />} />
        <Route path="/*" element={<Dashboard />} />
      </Routes>
    </Layout>
  );
}

export default Home;
