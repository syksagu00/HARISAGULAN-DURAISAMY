import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import useEvent from '../../hooks/useEvent';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./index.css"

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));





function RegisterationList() {

  const [load, setload] = useState(false)


  const onVerify = async (id) => {

    try {
      await axios.patch(`${process.env.REACT_APP_BACKEND}/api/v1/user/${id}`, { isVerified: true, userPaymentPhoto: "checked" })

      await axios.get(`${process.env.REACT_APP_BACKEND}/api/v1/user/${id}`)
        .then(res => {
          
          fetch(`${process.env.REACT_APP_BACKEND}/api/v1/mail`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(
              {
                name: res.data.data.name,
                email: res.data.data.email,
                events: res.data.data.technicalEvents.concat(res.data.data.nonTechnicalEvents)
              }),
          })
        })

      // setload(true)


    } catch (error) {
      console.error('Error submitting form:', error);
    }
  }


  useEffect(() => {
    if (load) {
      window.location.reload();
    }
  }, [load]);

  function debugBase64(base64URL) {
    let win = window.open();
    win.document.write('<iframe src="' + base64URL + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>');
  }



  const [user] = useEvent(`${process.env.REACT_APP_BACKEND}/api/v1/user`)



  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell> S.No</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Number</StyledTableCell>
            <StyledTableCell align="right">College</StyledTableCell>
            <StyledTableCell align="right">Events</StyledTableCell>
            <StyledTableCell align="right">Image</StyledTableCell>
            <StyledTableCell align="right">status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {user?.data?.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {index + 1}
              </StyledTableCell>
              <StyledTableCell align="right">{row.name}</StyledTableCell>
              <StyledTableCell align="right">{row.email}</StyledTableCell>
              <StyledTableCell align="right">{row.number}</StyledTableCell>
              <StyledTableCell align="right">{row.collegeName}</StyledTableCell>
              <StyledTableCell align="right">{`Tech: ${row.technicalEvents}`.toString() + " Non Tech: " + `${row.nonTechnicalEvents}`.toString()}</StyledTableCell>
              <StyledTableCell align="right"><button
                onClick={() => { debugBase64(row.userPaymentPhoto) }}
                disabled={row.isVerified}
              >View payment</button></StyledTableCell>
              <StyledTableCell align="right">
                <button
                  className={row.isVerified === true ? "verified" : "verify"}
                  onClick={() => { onVerify(row._id) }}
                >{row.isVerified === true ? "verified" : "verify"} </button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default RegisterationList;