import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const[sobrenome, setSobrenome] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }
  const handleChangeAge = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAge(Number(event.target.value));
  }
  const handleChangeSobrenome = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSobrenome(event.target.value);
  }

  return (
    <div>
      <div>
        Nome:
        <input type="text"value={name} onChange={handleChange}/>
      </div>

      <div>
        Sobrenome:
        <input type="text" value={sobrenome} onChange={handleChangeSobrenome} />
      </div>

      <div>
        Idade:
        <input type="text" value ={age} onChange={handleChangeAge}/>
      </div>

      <hr/>

      Olá {name}, tudo bem?<br/>
      Você tem {age} anos.
    </div>
  );
}

export default App;