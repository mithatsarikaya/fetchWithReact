export default function Button({ reqUrl, req, setReq }) {
  const handleClick = () => {
    console.log(reqUrl);
    setReq(reqUrl);
  };

  return (
    <button
      key={reqUrl.id}
      onClick={handleClick}
      className={reqUrl === req ? "selected-button" : null}
    >
      {reqUrl}
    </button>
  );
}
