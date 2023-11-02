import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import TreeItem, { treeItemClasses } from "@mui/lab/TreeItem";
import TreeView from "@mui/lab/TreeView";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import MDTypography from "components/MDTypography";
import Avatar from "@mui/material/Avatar";
import imagecontent from "./practiceimages/name2.png";
import imagecontent1 from "./practiceimages/name.png";

import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import { alpha, styled } from "@mui/material/styles";

import { TreeItemProps } from "@mui/lab/TreeItem";
import Collapse from "@mui/material/Collapse";
import { useSpring, animated } from "@react-spring/web";
import { TransitionProps } from "@mui/material/transitions";

interface TreeHeading {
  [key: string]: string[];
}
type StyledTreeItemProps = {
  rootNode?: boolean;
};

const StyledTreeItem = styled(TreeItem)<StyledTreeItemProps>(({ rootNode }) => {
  const borderColor = "gray";

  return {
    position: "relative",
    "&:before": {
      pointerEvents: "none",
      content: '""',
      position: "absolute",
      width: 32,
      left: -16,
      top: 12,
      borderBottom:
        // only display if the TreeItem is not root node
        !rootNode ? `1px dashed ${borderColor}` : "none",
    },

    [`& .${treeItemClasses.group}`]: {
      marginLeft: 16,
      paddingLeft: 18,
      borderLeft: `1px dashed ${borderColor}`,
    },
  };
});

export default function LabTabs() {
  const a = [{ prduct: "Hello" }];
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const treeheading: TreeHeading[] = [
    { Product: ["lemon", "orange"] },
    { Services: ["Call Center", "Developement", "Saleforce"] },
    { InformationTechnology: ["React", "Node"] },
    { Marketing: ["X", "Y", "Z"] },
    { HR: ["A", "B", "C"] },
  ];
  function MinusSquare(props: SvgIconProps) {
    return (
      <SvgIcon fontSize="inherit" style={{ width: 14, height: 14 }} {...props}>
        {/* tslint:disable-next-line: max-line-length */}
        <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 11.023h-11.826q-.375 0-.669.281t-.294.682v0q0 .401.294 .682t.669.281h11.826q.375 0 .669-.281t.294-.682v0q0-.401-.294-.682t-.669-.281z" />
      </SvgIcon>
    );
  }

  function PlusSquare(props: SvgIconProps) {
    return (
      <SvgIcon fontSize="inherit" style={{ width: 14, height: 14 }} {...props}>
        {/* tslint:disable-next-line: max-line-length */}
        <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 12.977h-4.923v4.896q0 .401-.281.682t-.682.281v0q-.375 0-.669-.281t-.294-.682v-4.896h-4.923q-.401 0-.682-.294t-.281-.669v0q0-.401.281-.682t.682-.281h4.923v-4.896q0-.401.294-.682t.669-.281v0q.401 0 .682.281t.281.682v4.896h4.923q.401 0 .682.281t.281.682v0q0 .375-.281.669t-.682.294z" />
      </SvgIcon>
    );
  }

  function CloseSquare(props: SvgIconProps) {
    return (
      <SvgIcon className="close" fontSize="inherit" style={{ width: 14, height: 14 }} {...props}>
        {/* tslint:disable-next-line: max-line-length */}
        <path d="M17.485 17.512q-.281.281-.682.281t-.696-.268l-4.12-4.147-4.12 4.147q-.294.268-.696.268t-.682-.281-.281-.682.294-.669l4.12-4.147-4.12-4.147q-.294-.268-.294-.669t.281-.682.682-.281.696 .268l4.12 4.147 4.12-4.147q.294-.268.696-.268t.682.281 .281.669-.294.682l-4.12 4.147 4.12 4.147q.294.268 .294.669t-.281.682zM22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0z" />
      </SvgIcon>
    );
  }

  function TransitionComponent(props: TransitionProps) {
    const style = useSpring({
      from: {
        opacity: 0,
        transform: "translate3d(20px,0,0)",
      },
      to: {
        opacity: props.in ? 1 : 0,
        transform: `translate3d(${props.in ? 0 : 20}px,0,0)`,
      },
    });

    return (
      <animated.div style={style}>
        <Collapse {...props} />
      </animated.div>
    );
  }

  const StyledTreeItem = styled((props: TreeItemProps) => (
    <TreeItem {...props} TransitionComponent={TransitionComponent} />
  ))(({ theme }) => ({
    [`& .${treeItemClasses.iconContainer}`]: {
      "& .close": {
        opacity: 0.3,
      },
    },
    [`& .${treeItemClasses.group}`]: {
      marginLeft: 15,
      paddingLeft: 18,
      borderLeft: `1px dashed ${alpha(theme.palette.text.primary, 0.4)}`,
    },
  }));
  return (
    <DashboardLayout>
      <Box sx={{ width: "100%", height: "100%" }}>
        <TabContext value={value}>
          <TabList onChange={handleChange}>
            <Tab label="Employee Tree" value="1" />
            <Tab label="Department Tree" value="2" />
          </TabList>
          <TabPanel value="1">
            <TreeView
              // aria-label="file system navigator"
              defaultCollapseIcon={<RemoveCircleIcon />}
              defaultExpandIcon={<AddCircleIcon />}
              sx={{ height: "70%", flexGrow: 1, overflowY: "auto" }}
            >
              <StyledTreeItem
                nodeId="1"
                label={<MDTypography>{a[0].prduct} Every one is getting the data</MDTypography>}
              >
                <StyledTreeItem nodeId="2" label="Calendar" />
                <StyledTreeItem nodeId="3" label="Drive" />
              </StyledTreeItem>
              <StyledTreeItem nodeId="8" label="Documents">
                <StyledTreeItem nodeId="9" label="OSS" />
                <StyledTreeItem nodeId="10" label="MUI">
                  <StyledTreeItem nodeId="11" label="hello" />
                </StyledTreeItem>
              </StyledTreeItem>
            </TreeView>
          </TabPanel>
          <TabPanel value="2">
            <TreeView
              // aria-label="file system navigator"
              sx={{ height: "70%", flexGrow: 1, overflowY: "auto" }}
            >
              {treeheading.map((treeItem, index) => {
                const key = Object.keys(treeItem)[0];
                const subItems = treeItem[key];

                return (
                  <StyledTreeItem
                    key={key}
                    nodeId={key}
                    label={
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          marginBottom: "2%",
                          borderRadius: "5",
                        }}
                      >
                        <Avatar alt="Testing" src={imagecontent1} />
                        {key}
                      </Box>
                    }
                  >
                    {subItems.map((subItem, subIndex) => (
                      <StyledTreeItem
                        key={`${key}-${subIndex}`}
                        nodeId={`${key}-${subIndex}`}
                        label={
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              marginBottom: "2%",
                            }}
                          >
                            <Avatar alt="Testing" src={imagecontent} />
                            {subItem}
                          </Box>
                        }
                      />
                    ))}
                  </StyledTreeItem>
                );
              })}
            </TreeView>
          </TabPanel>
        </TabContext>
      </Box>
    </DashboardLayout>
  );
}
