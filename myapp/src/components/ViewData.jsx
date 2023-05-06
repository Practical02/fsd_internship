import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const ViewData = () => {
  var [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/persons")
      // .get("https://jsonplaceholder.typicode.com/users")

      .then((response) => {
        setUsers(response.data);
        console.log(users)
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Username</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((value, index) => {
              return (
                <TableRow key={index}>
                  <TableCell >{value.person_name}</TableCell>
                  <TableCell >{value.person_place}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ViewData;
