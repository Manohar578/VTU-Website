// import logo from './logo.svg';
// import './App.css';

import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
// import ResultPage from "./components/ResultPage";

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <Outlet></Outlet>
        {/* <ResultPage></ResultPage> */}
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
