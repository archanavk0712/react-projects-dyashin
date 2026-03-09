import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./components/molecules/NavbarComp";
import TableComp from "./components/molecules/TableComp";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <NavbarComp />
      <TableComp />
      <Toaster />
    </>
  );
}

export default App;
