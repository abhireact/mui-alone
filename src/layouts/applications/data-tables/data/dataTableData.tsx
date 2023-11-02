/**
=========================================================
* Material Dashboard 2 PRO React TS - v1.0.2
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-2-pro-react-ts
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
// import axios from "axios";
// axios
//   .get("http://10.0.20.131:8000/department", {})
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
const dataTableData = {
  columns: [
    { Header: "DEPARTMENT NAME", accessor: "dept_name", width: "10%" },
    { Header: "DEPARTMENT CODE", accessor: "dept_code", width: "20%" },
    { Header: "DESCRIPTION", accessor: "description", width: "20%" },
    // { Header: "Pincode", accessor: "age", width: "20%" },
    // { Header: "State", accessor: "startDate", width: "10%" },
    // { Header: "City", accessor: "salary", width: "10%" },
  ],

  rows: [
    {
      dept_name: "Hanny Baniard",
      dept_code: "Data Coordiator",
      description: "Baorixile",
    },

    {
      dept_name: "Lara Puleque",
      dept_code: "Payment Adjustment Coordinator",
      description: "Cijangkar",
    },
    {
      dept_name: "Torie Repper",
      dept_code: "Administrative Officer",
      description: "Montpellier",
    },
  ],
};

export default dataTableData;
