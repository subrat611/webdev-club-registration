import { useState, useEffect } from "react";
import Loader from "./components/Loader";
import HomePage from "./pages/HomePage";

function App() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);
  return <div className="App">{loader ? <Loader /> : <HomePage />}</div>;
}

export default App;
