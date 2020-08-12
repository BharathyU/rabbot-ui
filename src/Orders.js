import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, interviewId, jobPosition, jobLocation ,experience,company, status) {
  return { id, date, interviewId, jobPosition, jobLocation ,experience,company, status };
}

const rows = [
  createData(0, '10 Aug, 2020', '1023021', 'Software Architect', 'Tupelo, MS', '10+ Years','Apple Co', 'Available'),
  createData(1, '01 Jul, 2020', '2322123', 'Watson Developer','London, UK', '04+ Years','Microsoft Co', 'Appeared'),
  createData(2, '16 Jun, 2020', '3242135', 'React Developer','Boston, MA', '02+ Years','IBM Co', 'Appeared'),
  createData(3, '16 May, 2020', '3214125', 'Project Manager','Gary, IN', '10+ Years','Infosys', 'Available'),
  createData(4, '15 Apr, 2020', '1341413', 'Node Js Developer','Long Branch, NJ', '10+ Years','Toyota','Available'),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Available Interviews</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date Posted</TableCell>
            <TableCell>Interview Id</TableCell>
            <TableCell>Job Position</TableCell>
            <TableCell>Job Location</TableCell>
            <TableCell>Experience Req</TableCell>
            <TableCell>Company</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.interviewId}</TableCell>
              <TableCell>{row.jobPosition}</TableCell>
              <TableCell>{row.jobLocation}</TableCell>
              <TableCell>{row.experience}</TableCell>
              <TableCell>{row.company}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}