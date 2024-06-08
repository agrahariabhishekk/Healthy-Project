import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Heading from "./components/heading";
import Foodlist from "./components/foodlist";
import Error from "./components/error";
import Container from "./components/container";
import SearchArea from "./components/searcharea";
import { useState } from "react";

function App() {
  let [foodItem, SetfoodItem] = useState([]);

  const handleOnChange = (event) => {
    if (event.key === "Enter") {
      let newfoodItem = event.target.value;
      let newItems = [...foodItem, newfoodItem];
      SetfoodItem(newItems);
    }
  };
  return (
    <>
      <Container>
        <Heading></Heading>
        <SearchArea handleOnChange={handleOnChange}></SearchArea>
        <Error Foodlist={foodItem}></Error>
        <Foodlist Foodlist={foodItem}></Foodlist>
      </Container>
    </>
  );
}

export default App;
