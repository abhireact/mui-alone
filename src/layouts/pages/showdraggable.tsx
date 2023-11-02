import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import Dialog from "@mui/material/Dialog";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDAvatar from "components/MDAvatar";

import Draggable from "react-draggable";
import imagecontent from "./practiceimages/name2.png";

import Editdrag from "./editdraggable";

const Showdrag = () => {
  //element positions we get via api
  const positions = [
    { x: 419, y: 98 },
    { x: 670, y: 131 },
    { x: 300, y: 20 },
    { x: 300, y: 40 },
    { x: 300, y: 60 },
  ];
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Grid sx={{ display: "flex", justifyContent: "flex-end" }}>
        <MDButton variant="contained" color="info" onClick={handleOpen}>
          Edit Page
        </MDButton>
      </Grid>
      <Dialog open={open} onClose={handleClose} fullScreen>
        <Editdrag handleClose={handleClose} />
      </Dialog>
      <Draggable position={positions[0]} disabled={true}>
        <MDTypography variant="h4">Mindcom Company</MDTypography>
      </Draggable>
      <Draggable position={positions[1]} disabled={true}>
        <MDAvatar
          variant="square"
          bgColor="info"
          src={imagecontent}
          sx={{ width: 100, height: 100 }}
        />
      </Draggable>
      <Draggable position={positions[2]} disabled={true}>
        <MDTypography>Abhijit Verma</MDTypography>
      </Draggable>

      <Draggable position={positions[3]} disabled={true}>
        <MDTypography>React Intern</MDTypography>
      </Draggable>

      <Draggable position={positions[4]} disabled={true}>
        <MDTypography> 3 Months</MDTypography>
      </Draggable>
    </DashboardLayout>
  );
};

export default Showdrag;
