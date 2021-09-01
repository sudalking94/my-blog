import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Globalstyles from "./Globalstyles";
import Home from "./Routes/Home";
import Post from "./Routes/Post";
import Project from "./Routes/Project";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Route path="/" component={Home} exact />
        <Route path="/posts" component={Post} />
        <Route path="/projects" component={Project} />
      </Router>
      <Globalstyles />
    </>
  );
}

export default App;
