import { useState } from "react";
import "./styles/App.css";
import ContainerThing from "./components/ContainerThing";

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <h1>App</h1>
      <h2>count = {count}</h2>
      <ContainerThing count={count} onButtonClick={handleButtonClick} />
      <p>
        <code>App</code> component has <code>state::count</code> and{" "}
        <code>handleButtonClick()</code> that get passed down to{" "}
        <code>ContainerThing</code> component as props.
      </p>
      <p>
        <code>ContainerThing</code> component takes
        <code>prop::count</code> and <code>prop::handleButtonClick()</code>
        and passes them right down to <code>Card</code> component as props
        again.
      </p>
      <p>
        <code>Card</code> component takes in <code>prop::count</code> and{" "}
        <code>prop::onButtonClick()</code> which then gets hooked up to the
        button's <code>onClick()</code> event.
      </p>
      <p>
        The <code>onClick()</code> event triggers the{" "}
        <code>onButtonClick()</code> function which was passed all the way down
        from the <code>App</code> component, through the{" "}
        <code>ContainerThing</code> component. This is prop drilling. The
        function is able to be called in a child component because of how
        javascript closures work.
      </p>
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures">
        Javascript Closures
      </a>
    </>
  );

  function handleButtonClick() {
    setCount(count + 1);
  }
}

export default App;
