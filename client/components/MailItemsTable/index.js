import { useState, useEffect } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {fetchMails} from '../../services/mailService'

export function MailItemsTable() {
  const [data,setData] = useState([])
  useEffect(()=>{
    async function wrapper(){
      const res = await fetchMails();
      setData(res);
    }
    wrapper();
  }, [])
  if (!data) { return null}
  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Mail</TableCell>
          <TableCell>Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row) => (
          <TableRow
            key={data.email}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell>{row.email}</TableCell>
            <TableCell>{row.clicked ? 'clicked': 'NOT clicked'}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )

}