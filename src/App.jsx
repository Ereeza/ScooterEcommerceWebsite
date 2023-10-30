import AppRoutes from "./routes/appRoutes";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Nav />
      <AppRoutes />
      <Footer />
    </Router>
  );
};

export default App;
