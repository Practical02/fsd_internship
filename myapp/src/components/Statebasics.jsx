import { Button, Divider, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const Statebasics = () => {
  var [name, setName] = useState();

  var [val, setVal] = useState();

  const inHandler = (e) => setVal(e.target.value);

  const change = () => {
    setName(val);
    setVal("");
  };

  const keyPressed = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setName(val);
      setVal("");
    }
  };

  return (
    <div>
      <br />
      <Typography variant="h3">Welcome {name}</Typography>

      <br />
      <Divider />
      <br />
      <form>
        <TextField
          id="tf1"
          variant="outlined"
          placeholder="Enter text"
          value={val}
          onChange={inHandler}
          onKeyDown={keyPressed}
          onSubmit={keyPressed}></TextField>
        <br />
        <br />
        <Button variant="contained" color="secondary" onClick={change}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Statebasics;
