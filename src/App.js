import "./App.css";
import NavScrollExample from "./components/NavScrollExample";
import Footer from "./components/Footer";
import Card from "./components/Card";
import market from "./market.png";
import manage from "./manage.png";
import order from "./order.png";

function App() {
  const handleClick = () => {
    // Handle click event here
    console.log("Card clicked!");
  };
  return (
    <>
      <div className="background">
        <NavScrollExample />
        <div className="msg-farmer">
          Your Ultimate Destination for Selling Your Harvest
        </div>
        <div className="card-container">
          <Card image={market} title="Add Products" onClick={handleClick} />
          <Card image={manage} title="Manage Products" onClick={handleClick} />
          <Card image={order} title="Order List" onClick={handleClick} />
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
