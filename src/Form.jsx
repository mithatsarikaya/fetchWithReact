import Button from "./Button";

export default function Form({ req, setReq, reqList }) {
  return (
    <div>
      {reqList.map((item) => {
        <Button item={item} />;
      })}
    </div>
  );
}
