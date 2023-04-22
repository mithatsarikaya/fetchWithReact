import Button from "./Button";

export default function Form({ req, setReq, reqUrls }) {
  return (
    <div>
      {reqUrls.map((reqUrl) => (
        <Button reqUrl={reqUrl} req={req} setReq={setReq} />
      ))}
    </div>
  );
}
