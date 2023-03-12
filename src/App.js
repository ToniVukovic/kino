import Card from "./components/Card";

function App() {
  return (
    <div>
      <div className="card-container">
        <Card pretpremijera />
        <Card pretpremijera sink />
        <Card titl revija />
        <Card sink />
      </div>
      <div className="ticket-flex">
        <button className="ticket-btn sheen">
          <div className="ticket-box-2"></div>
          <div className="ticket-box-1"></div>
          ULAZNICE
        </button>
      </div>
    </div>
  );
}

export default App;
