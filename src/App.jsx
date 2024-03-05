import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Clarification from "./components/Clarification";

function App() {
  return (
    <>
      <Clarification />
      <Header />
      <div className="w-full h-[1px] bg-[#E4EBED]"></div>
      <Navbar />
      <div className="w-full h-[1px] bg-[#E4EBED]"></div>
      <Main />
      <Footer />
    </>
  );
}

export default App;
