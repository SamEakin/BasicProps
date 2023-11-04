import "../styles/App.css";

type ItemCardProps = {
  count: number;
  onButtonClick: () => void;
};
export default function Card(props: ItemCardProps) {
  return (
    <>
      <div className="card">
        <button onClick={() => props.onButtonClick()}>
          count is {props.count}
        </button>
      </div>
    </>
  );
}
