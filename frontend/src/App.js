import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import BottomNavigation from "./components/BottomNavigation";
import Globalstyles from "./Globalstyles";
import Home from "./Routes/Home";
import Post from "./Routes/Post";
import Page from "./Routes/Page";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Route
          path="/"
          exact
          render={(props) => (
            <Page title="Home | J-Blog">
              <Home></Home>
            </Page>
          )}
        />
        <Route
          path="/posts"
          render={(props) => (
            <Page title="공부흔적 | J-Blog">
              <Post></Post>
            </Page>
          )}
        />
        <BottomNavigation />
      </Router>
      <Globalstyles />
    </>
  );
}

export default App;
