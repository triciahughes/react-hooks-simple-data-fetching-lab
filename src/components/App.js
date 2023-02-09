// create your App component here
import React, { useEffect, useState } from "react";

function App() {
  const [dogImageData, setDogImageData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((r) => r.json())
      .then((data) => {
        setDogImageData(data);
        setIsLoaded(true);
      });
  }, []);

  if (!isLoaded) return <p>Loading...</p>;

  return <img src={dogImageData.message} alt="A Random Dog"></img>;
}

export default App;
