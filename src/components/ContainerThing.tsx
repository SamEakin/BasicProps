import "../styles/App.css";
import Card from "./Card";

type ContainerThingProps = {
  count: number;
  onButtonClick: () => void;
};
export default function ContainerThing(props: ContainerThingProps) {
  return (
    <>
      <div className="containerThing">
        <h1>Container Thing</h1>
        <h2>count = {props.count}</h2>

        <Card count={props.count} onButtonClick={props.onButtonClick} />
      </div>
    </>
  );
}
