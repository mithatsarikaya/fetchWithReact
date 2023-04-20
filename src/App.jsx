import { useState, useEffect } from "react";
import Form from "./Form";

function App() {
  const [req, setReq] = useState("users");

  const reqList = ["users", "comments", "posts"];

  const API_URL = "https://jsonplaceholder.typicode.com/";

  useEffect(() => {
    const fetchApi = async (url) => {
      let result = await fetch(`${API_URL}${url}`);
      let data = await result.json();
      console.log(data);
    };
    fetchApi(req);
  }, [req]);

  return (
    <>
      <Form req={req} setReq={setReq} reqList={reqList} />
    </>
  );
}

export default App;
