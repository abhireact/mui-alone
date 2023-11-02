import { useEffect, useState } from "react";

import MDTypography from "components/MDTypography";
import MDBox from "components/MDBox";
import MDAvatar from "components/MDAvatar";

import Draggable from "react-draggable";
import imagecontent from "./practiceimages/name2.png";
import Grid from "@mui/material/Grid";
import MDButton from "components/MDButton";

const Editdrag = (props: any) => {
  const { handleClose } = props;
  //element positions we get via api
  const positions = [
    { x: 419, y: 98 },
    { x: 670, y: 131 },
    { x: 300, y: 20 },
    { x: 300, y: 40 },
    { x: 300, y: 60 },
  ];
  const [position1, setPosition1] = useState(positions[0]);

  const handleDrag1 = (e: any, data: { x: any; y: any }) => {
    setPosition1({ x: data.x, y: data.y });
  };
  const [position2, setPosition2] = useState(positions[1]);

  const handleDrag2 = (e: any, data: { x: any; y: any }) => {
    setPosition2({ x: data.x, y: data.y });
  };
  const [position3, setPosition3] = useState(positions[2]);

  const handleDrag3 = (e: any, data: { x: any; y: any }) => {
    setPosition3({ x: data.x, y: data.y });
  };
  const [position4, setPosition4] = useState(positions[3]);

  const handleDrag4 = (e: any, data: { x: any; y: any }) => {
    setPosition4({ x: data.x, y: data.y });
  };
  const [position5, setPosition5] = useState(positions[4]);

  const handleDrag5 = (e: any, data: { x: any; y: any }) => {
    setPosition5({ x: data.x, y: data.y });
  };

  // const savePositions = () => {
  //   console.log(position1);
  // };

  // useEffect(() => {
  //   savePositions();
  // }, [position1]);
  const handlePositions = () => {
    const positionsData = [position1, position2, position3, position4, position5];
    console.log(positionsData, "sending positions");
  };

  return (
    <>
      <MDBox p={4}>
        <Draggable onDrag={handleDrag1} position={position1}>
          <MDTypography variant="h4">Mindcom Company</MDTypography>
        </Draggable>
        <Draggable onDrag={handleDrag2} position={position2}>
          <MDAvatar
            variant="square"
            bgColor="info"
            src={imagecontent}
            sx={{ width: 100, height: 100 }}
          />
        </Draggable>
        <Draggable onDrag={handleDrag3} position={position3}>
          <MDTypography>Abhijit Verma</MDTypography>
        </Draggable>

        <Draggable onDrag={handleDrag4} position={position4}>
          <MDTypography>React Intern</MDTypography>
        </Draggable>

        <Draggable onDrag={handleDrag5} position={position5}>
          <MDTypography>3 Months</MDTypography>
        </Draggable>
        <Grid container sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Grid mt={3}>
            <MDButton
              color="info"
              variant="contained"
              //      type="submit"
              onClick={() => {
                handleClose();
                handlePositions();
              }}
            >
              Save
            </MDButton>
          </Grid>
          <Grid ml={2} mt={3}>
            <MDButton
              color="primary"
              variant="contained"
              onClick={() => {
                handleClose();
              }}
            >
              Cancel
            </MDButton>
          </Grid>
        </Grid>
      </MDBox>
    </>
  );
};

export default Editdrag;
