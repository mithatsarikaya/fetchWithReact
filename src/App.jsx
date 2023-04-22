import { useState, useEffect } from "react";
import Form from "./Form";
import Button from "./Button";

function App() {
  const [req, setReq] = useState("users");
  const [data, setData] = useState();

  const reqUrls = ["users", "comments", "posts"];

  const API_URL = "https://jsonplaceholder.typicode.com/";

  useEffect(() => {
    const fetchApi = async (url) => {
      let response = await fetch(`${API_URL}${url}`);
      console.log(`${API_URL}${url}`);
      let result = await response.json();
      setData(JSON.stringify(result));
    };

    fetchApi(req);
  }, [req]);

  return (
    <>
      <Form req={req} setReq={setReq} reqUrls={reqUrls} />
      <p>{data}</p>
    </>
  );
}

export default App;
