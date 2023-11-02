// import React, { useEffect, useState } from "react";
// import Card from "@mui/material/Card";

// import Dialog from "@mui/material/Dialog";

// import DialogContent from "@mui/material/DialogContent";

// // Material Dashboard 2 PRO React TS components
// import MDBox from "components/MDBox";
// import MDTypography from "components/MDTypography";

// // Material Dashboard 2 PRO React TS examples components
// import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Button from "components/MDButton";
// import DataTable from "examples/Tables/DataTable";
// import IconButton from "@mui/material/IconButton";
// import DeleteIcon from "@mui/icons-material/Delete";
// import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
// import axios from "axios";
// import Grid from "@mui/material/Grid";
// import MDInput from "components/MDInput";
// import { useFormik } from "formik";
// import Updateworking from "./updateworking";

// function Workingdays() {
//   // updating  dialog box
//   const [tasks, setTasks] = useState([]);
//   const [editTaskData, setEditTaskData] = useState(null);
//   const [openupdate, setOpenupdate] = useState(false);
//   const handleOpenupdate = (index: number) => {
//     const main_data = tasks[index];
//     console.log(main_data, "maindata");

//     setOpenupdate(true);
//     setEditTaskData(main_data);
//   };
//   const handleCloseupdate = () => {
//     setOpenupdate(false);
//   };
//   //Deleting part
//   const handleDeleteTask = async (name: any) => {
//     console.log(name, "function is working");
//     try {
//       await axios.delete("http://10.0.20.133:8001/exceptionalworkday", {
//         data: { name: name },
//       });
//       window.location.reload();
//     } catch (error) {
//       console.error("Not Deleted", error);
//     }
//   };
//   //for dialog box start
//   const [open, setOpen] = useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     axios
//       .get("http://10.0.20.133:8001/exceptionalworkday")
//       .then((response) => {
//         setData(response.data);
//         setTasks(response.data); //updating
//         console.log(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, []);
//   const workingdata = {
//     columns: [
//       { Header: "Name", accessor: "name", width: "20%" },
//       { Header: "Date", accessor: "date", width: "20%" },
//       { Header: "Location", accessor: "location", width: "20%" },
//       { Header: "Description", accessor: "description", width: "25%" },
//       { Header: "Action", accessor: "action", width: "10" },
//     ],
//     rows: data.map((row, index) => ({
//       name: <p>{row.name}</p>,
//       date: <p>{row.date}</p>,
//       location: <p>{row.applicable_for}</p>,
//       description: <p>{row.description} </p>,
//       action: (
//         <MDTypography variant="p">
//           <IconButton
//             onClick={() => {
//               handleOpenupdate(index);
//             }}
//           >
//             <CreateRoundedIcon />
//           </IconButton>
//           <IconButton onClick={() => handleDeleteTask(row.name)}>
//             <DeleteIcon />
//           </IconButton>
//         </MDTypography>
//       ),
//     })),
//   };
//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       date: "",
//       location: "",
//       description: "",
//     },

//     onSubmit: (values, action) => {
//       axios
//         .post("http://10.0.20.133:8001/exceptionalworkday", {
//           name: values.name,
//           date: values.date,
//           applicable_for: [values.location],
//           description: values.description,
//         })
//         .then((response) => {
//           console.log(response);
//         })
//         .catch((error) => {
//           console.log(error);
//         });

//       console.log(values);
//       action.resetForm();
//     },
//   });
//   return (
//     <DashboardLayout>
//       <DashboardNavbar />
//       <Grid sx={{ display: "flex", justifyContent: "flex-end" }}>
//         <Button variant="contained" color="info" onClick={handleClickOpen}>
//           + ADD
//         </Button>
//       </Grid>
//       <Dialog open={open} onClose={handleClose}>
//         <DialogContent>
//           <Card>
//             <form onSubmit={formik.handleSubmit}>
//               <MDBox p={4}>
//                 <Grid container spacing={2}>
//                   <Grid sm={12}>
//                     <MDInput
//                       sx={{ width: "75%" }}
//                       // id="email"
//                       variant="standard"
//                       name="name"
//                       label="Name"
//                       value={formik.values.name}
//                       onChange={formik.handleChange}
//                       onBlur={formik.handleBlur}
//                       error={formik.touched.name && Boolean(formik.errors.name)}
//                       helperText={formik.touched.name && formik.errors.name}
//                       mb={10}
//                       mt={10}
//                     />
//                   </Grid>
//                   <Grid sm={12}>
//                     <MDInput
//                       sx={{ width: "75%" }}
//                       // id="email"
//                       variant="standard"
//                       name="date"
//                       label="Date"
//                       value={formik.values.date}
//                       onChange={formik.handleChange}
//                       onBlur={formik.handleBlur}
//                       error={formik.touched.date && Boolean(formik.errors.date)}
//                       helperText={formik.touched.date && formik.errors.date}
//                       mb={10}
//                       mt={10}
//                     />
//                   </Grid>
//                   <Grid sm={12}>
//                     <MDInput
//                       // id="email"
//                       sx={{ width: "75%" }}
//                       variant="standard"
//                       name="location"
//                       label="Location"
//                       value={formik.values.location}
//                       onChange={formik.handleChange}
//                       onBlur={formik.handleBlur}
//                       error={formik.touched.location && Boolean(formik.errors.location)}
//                       helperText={formik.touched.location && formik.errors.location}
//                       mb={10}
//                       mt={10}
//                     />
//                   </Grid>

//                   <Grid sm={12}>
//                     <MDInput
//                       variant="standard"
//                       name="description"
//                       label="Description..."
//                       value={formik.values.description}
//                       onChange={formik.handleChange}
//                       onBlur={formik.handleBlur}
//                       error={formik.touched.description && Boolean(formik.errors.description)}
//                       helperText={formik.touched.description && formik.errors.description}
//                       mb={10}
//                       mt={10}
//                       sx={{ width: "80%" }}
//                       multiline
//                       rows={5}
//                     />
//                   </Grid>

//                   <Grid mt={3}>
//                     <Button color="info" variant="contained" type="submit" onClick={handleClose}>
//                       Save
//                     </Button>
//                   </Grid>
//                   <Grid ml={2} mt={3}>
//                     <Button color="primary" variant="contained" onClick={handleClose}>
//                       Cancel
//                     </Button>
//                   </Grid>
//                 </Grid>
//               </MDBox>
//             </form>
//           </Card>
//         </DialogContent>
//       </Dialog>
//       <Dialog open={openupdate} onClose={handleCloseupdate}>
//         <Updateworking openupdate={openupdate} setOpenupdate={setOpenupdate} task={editTaskData} />
//       </Dialog>

//       <DataTable table={workingdata} canSearch />
//     </DashboardLayout>
//   );
// }

// export default Workingdays;

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import React from "react";

const workingdays = () => {
  return (
    <div>
      <DashboardLayout>
        <div>Half Code work is done, will complete later</div>
      </DashboardLayout>
    </div>
  );
};

export default workingdays;
