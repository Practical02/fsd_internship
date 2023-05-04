import {
  Button,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

const TableArray = () => {
  var [names, setNames] = useState([]);

  var [temp, setTemp] = useState();

  const addItem = () => {
    setNames((names)=>[...names,temp]);
    setTemp("");
  };

  const numHandler = (e) => setTemp(e.target.value);


  const clearItems = () => setNames([]);
  

  return (
    <div>
      <Typography variant="h4">Array</Typography>
      <br />
      <TextField
        variant="outlined"
        placeholder="Enter number"
        value={temp}
        onChange={numHandler}></TextField>
      <br />
      <br />
      <Button variant="contained" onClick={addItem}>
        New Value
      </Button>
      &nbsp;&nbsp;
      <Button variant="contained" color="error" onClick={clearItems}>Clear</Button>
      <br />
      <br />
      <Divider />
      <br />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              
              <TableCell>Names</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {names.map((value, index) => {
              return (
                <TableRow>
                  <TableCell key={index}>{value}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableArray;
