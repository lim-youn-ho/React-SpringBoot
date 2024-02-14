import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  const [hello, setHello] = useState('')

  useEffect(() => {
    axios.get('/api/hello')
        .then(response => setHello(response.data))
        .catch(error => console.log(error))
  }, []);

  return (
      <div>
        백엔드에서 가져온 연결 데이터 : {hello}
      </div>
  );
}

export default App;