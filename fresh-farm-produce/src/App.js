import "./App.css";
import NavScrollExample from "./components/NavScrollExample";
import Footer from "./components/Footer";
import Card from "./components/Card";
// import CardContainer from "./components/CardCon";
import AppRouterPages from "./router";

function App() {
  const handleClick = () => {
    // Handle click event here
    console.log("Card clicked!");
  };
  return (
    <>
      <div className="background">
        <NavScrollExample />

        <AppRouterPages />

        <Footer />
      </div>
    </>
  );
}

export default App;
