import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import DataTable from "react-data-table-component";

export default function UserList() {
  const [userlist, setUserlist] = useState([]);
  useEffect(() => {
    db.collection("users").onSnapshot((snapshot) => {
      setUserlist(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  const columns = [
    {
      name: "Name",
      selector: (row) => row.Name,
    },
    {
      name: "Email",
      selector: (row) => row.Email,
    },
    {
      name: "Address",
      selector: (row) => row.Address,
    },
    {
      name: "Name",
      selector: (row) => row.Name,
    },
    {
      name: "Mobile",
      selector: (row) => row.Mobile,
    },
    {
      name: "AlternetMobile",
      selector: (row) => row.AlternetMobile,
    },
    {
      name: "Aadhaar",
      selector: (row) => row.Aadhaar,
    },
  ];

  return (
    <>
      <div className="countiner p-3">
        <div className="row justify-content-center ">
          <h5 className="text-center ">
            <b>User List </b>
          </h5>
          {/* <table class="table shadow text-center">
            <thead class="thead-dark">
              <tr> */}
          {/* <th scope="col">UserID</th> */}
          {/* <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Address</th>
                <th scope="col">Mobile</th>
                <th scope="col">AlternetMobile</th>
                <th scope="col">Aadhaar</th> */}
          {/* </tr>
            </thead>
            <tbody> */}
          {/* {userlist.map((data) => {
                return (
                  <tr key={data.Uid}>
                    {/* <th scope="row">{data.Uid}</th> */}
          {/* <td>{data.Name}</td>
                    <td>{data.Email}</td>
                    <td>{data.Address}</td>
                    <td>{data.Mobile}</td>
                    <td>{data.AlternetMobile}</td>
                    <td>{data.Aadhaar}</td>
                  </tr> */}
          {/* ); })} */}
          {/* </tbody>
          </table> */}
          <DataTable columns={columns} data={userlist} />
          {console.log("Userlist :" + userlist)}
        </div>
      </div>
    </>
  );
}
