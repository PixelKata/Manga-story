import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main>
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}
