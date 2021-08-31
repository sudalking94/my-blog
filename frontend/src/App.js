import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import Navigation from "./components/Navigation";
import Globalstyles from "./Globalstyles";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Route path="/" component={HomeScreen} exact />
      </Router>
      <Globalstyles />
    </>
  );
}

export default App;
