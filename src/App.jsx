import { useState, useEffect } from "react";

function App() {
  const [req, setReq] = useState("users");

  const reqList = ["users", "comments", "posts"];

  const API_URL = "https://jsonplaceholder.typicode.com/";

  useEffect(() => {
    const fetchApi = async (req) => {
      let result = await fetch(`${API_URL}${req}`);
      let data = await result.json();
    };
  });

  return (
    <>
      <Form req={req} setReq={setReq} />
    </>
  );
}

export default App;
