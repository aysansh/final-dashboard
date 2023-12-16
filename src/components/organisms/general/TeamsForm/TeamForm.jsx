import { Box } from "@mui/material";
import MoreVertOutlined from "@mui/icons-material/MoreVertOutlined";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import avatar1 from "../../../../assets/img/avatar/avatar-7.jpg";
import avatar2 from "../../../../assets/img/avatar/avatar-9.jpg";
import avatar3 from "../../../../assets/img/avatar/avatar-5.jpg";
import avatar4 from "../../../../assets/img/avatar/avatar-6.jpg";
import avatar5 from "../../../../assets/img/avatar/avatar-16.jpg";
const rows = [
  {
    name: "Jitu Chauhan",
    email: "jitu@example.com",
    role: "Front End Developer",
    lastActivity: "Today",
    lastActivityText: "black",
    moreIcon: MoreVertOutlined,
    avatar: avatar1,
  },
  {
    name: "Sandeep Chauhan",
    email: "sandeep@example.com",
    role: "Project Director",
    lastActivity: "Today",
    lastActivityText: "black",
    moreIcon: MoreVertOutlined,
    avatar: avatar2,
  },
  {
    name: "Amanda Darnell",
    email: "amanda@example.com",
    role: "Full- Stack Developer",
    lastActivity: "Today",
    lastActivityText: "black",
    moreIcon: MoreVertOutlined,
    avatar: avatar3,
  },
  {
    name: "Sandeep Chauhan",
    email: "sandeep@example.com",
    role: "Digital Marketer",
    lastActivity: "Yesterday",
    lastActivityText: "black",
    moreIcon: MoreVertOutlined,
    avatar: avatar4,
  },
  {
    name: "Amanda Darnell",
    email: "amanda@example.com",
    role: "Account Manager",
    lastActivity: "3 May 2022",
    lastActivityText: "black",
    moreIcon: MoreVertOutlined,
    avatar: avatar5,
  },
];
export default function BasicTable() {
  return (
    <TableContainer>
      <Table sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableHead>
          <TableRow className="bg-[#F1F5F9]">
            <TableCell>Name</TableCell>
            <TableCell align="center">Role</TableCell>
            <TableCell>Last Activity</TableCell>
            <TableCell></TableCell>
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
                  <img
                    src={row.avatar}
                    alt={row.avatar}
                    width="42"
                    className="rounded-full"
                  />
                  <Box
                    display="flex"
                    justifyContent="start"
                    flexDirection="column"
                    alignItems="start"
                    fontSize="16px"
                  >
                    {row.name}
                    <small>{row.email}</small>
                  </Box>
                </Box>
              </TableCell>
              <TableCell align="center">{row.role}</TableCell>
              <TableCell>{row.lastActivity}</TableCell>
              <TableCell>
                <row.moreIcon style={{ width: 20, height: 20 }} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
