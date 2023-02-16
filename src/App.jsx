import { useState, useEffect } from "react";
import Loader from "./components/Loader";

function App() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);
  return <div className="App">{loader ? <Loader /> : null}</div>;
}

export default App;
