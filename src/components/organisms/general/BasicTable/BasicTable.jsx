import React from "react";
import { TableFooter,Box } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Progress from "../../../atom/general/ProgressBar";
import dropBox from "../../../../assets/img/project-logo 1.png";
import slack from "../../../../assets/img/project-logo 2.png";
import github from "../../../../assets/img/project-logo 3.png";
import character from "../../../../assets/img/project-logo 4.png";
import webApp from "../../../../assets/img/project-logo 5.png";
import memLogo from "../../../../assets/img/td.svg";
const rows = [
  {
    name: "File Management App",
    hours: 34,
    priority: "Medium",
    priorityText: "black",
    priorityColor: "#F59E0B",
    members: memLogo,
    progress:"15%",
    projectLogo: dropBox,
  },
  {
    name: "Slack Team UI Design",
    hours: 34,
    priority: "Medium",
    priorityText: "white",
    priorityColor: "#624BFF",
    members: memLogo,
    progress: "25%",
    projectLogo: slack,
  },
  {
    name: "GitHub Satellite",
    hours: 34,
    priority: "Medium",
    priorityText: "white",
    priorityColor: "#28A745",
    members: memLogo,
    progress:"15%",
    projectLogo: github,
  },
  {
    name: "3D Character Modelling",
    hours: 34,
    priority: "Height",
    priorityText: "white",
    priorityColor: "#DC3545",
    members: memLogo,
    progress: "15%",
    projectLogo: character,
  },
  {
    name: "Webapp Design System",
    hours: 34,
    priority: "Height",
    priorityText: "white",
    priorityColor: "#DC3545",
    members: memLogo,
    progress: "15%",
    projectLogo: webApp,
  },
];
export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 650, fontFamily: "Inter" }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow className="bg-[#F1F5F9]">
            <TableCell>Project Name</TableCell>
            <TableCell>Hours</TableCell>
            <TableCell>Priority</TableCell>
            <TableCell>Members</TableCell>
            <TableCell>Progress</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
           <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                <Box
                  display="flex"
                  justifyContent="start"
                  alignItems="center"
                  fontSize="16px"
                  gap="16px"
                  flexGrow={1}
                >
                  <img src={row.projectLogo} alt={row.projectName} width="42" />
                  {row.name}
                </Box>
              </TableCell>
              <TableCell>{row.hours}</TableCell>
              <TableCell>
                <TableCell
                  style={{
                    backgroundColor: row.priorityColor,
                    color: row.priorityText,
                    borderRadius: "4px",
                  }}
                  
                >
                  {row.priority}
                </TableCell>
              </TableCell>
              <TableCell>
                <img src={row.members} alt={row.members} width="120" />
              </TableCell>
              <TableCell>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  gap="4px"
                >
                  {row.progress}
                  <Progress />
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={5} align="center">
              <a href="#" className="text-[#624BFF] text-lg">View All Projects</a>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
