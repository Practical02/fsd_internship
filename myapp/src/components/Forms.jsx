import {
  Button,
  TextField,
} from "@mui/material";
import React from "react";
import { useState } from "react";

const Forms = () => {
  var [inputs, setInputs] = useState([]);

  var [temp, setTemp] = useState({ id: "", name: "", age: "" });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setTemp((temp) => ({
      ...temp,
      [name]: value,
    }));
    console.log(JSON.stringify(temp));
  };

  const submit = () => {
    setInputs((inputs) => [...inputs, temp]);
    setTemp({ id: "", name: "", age: "" });
    console.log(inputs);
  };

  return (
    <div>
      <br />
      <TextField
        variant="outlined"
        name={"id"}
        label="ID"
        value={temp.id}
        onChange={inputHandler}
      ></TextField>
      <br />
      <br />
      <TextField
        variant="outlined"
        name={"name"}
        label="Name"
        value={temp.name}
        onChange={inputHandler}
      ></TextField>
      <br />
      <br />
      <TextField
        variant="outlined"
        name={"age"}
        label="Age"
        value={temp.age}
        onChange={inputHandler}
      ></TextField>
      <br />
      <br />
      <Button variant="outlined" onClick={submit}>
        Submit
      </Button>
      <br />
    </div>
  );
};

export default Forms;
