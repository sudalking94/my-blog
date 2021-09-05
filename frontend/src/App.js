import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import BottomNavigation from "./components/BottomNavigation";
import Globalstyles from "./Globalstyles";
import Home from "./Routes/Home";
import Posts from "./Routes/Posts";
import Post from "./Routes/Post";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Route path="/" exact component={Home} />
        <Route path="/posts" exact component={Posts} />
        <Route path="/posts/:id" component={Post} />
        <BottomNavigation />
      </Router>
      <Globalstyles />
    </>
  );
}

export default App;
