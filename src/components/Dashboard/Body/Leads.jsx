import React from "react";
import PropTypes from "prop-types";
import { withStyles, makeStyles, useTheme } from "@material-ui/core/styles";
import { Table, TableRow, TableHead, TableFooter, TablePagination, TableCell, TableContainer, TableBody, Typography, Paper, IconButton } from "@material-ui/core";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
import LastPageIcon from "@material-ui/icons/LastPage";
import { IoPeopleOutline } from "react-icons/io5";

const useStyles1 = makeStyles(theme => ({
 root: {
  flexShrink: 0,
  marginLeft: theme.spacing(2.5),
 },
}));

const StyledTableCell = withStyles(theme => ({
 head: {
  backgroundColor: " #003273",
  color: theme.palette.common.white,
 },
 body: {
  fontSize: 14,
 },
}))(TableCell);

function TablePaginationActions(props) {
 const classes = useStyles1();
 const theme = useTheme();
 const { count, page, rowsPerPage, onChangePage } = props;

 const handleFirstPageButtonClick = event => {
  onChangePage(event, 0);
 };

 const handleBackButtonClick = event => {
  onChangePage(event, page - 1);
 };

 const handleNextButtonClick = event => {
  onChangePage(event, page + 1);
 };

 const handleLastPageButtonClick = event => {
  onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
 };

 return (
  <div className={classes.root}>
   <IconButton onClick={handleFirstPageButtonClick} disabled={page === 0} aria-label='first page'>
    {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
   </IconButton>
   <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label='previous page'>
    {theme.direction === "rtl" ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
   </IconButton>
   <IconButton onClick={handleNextButtonClick} disabled={page >= Math.ceil(count / rowsPerPage) - 1} aria-label='next page'>
    {theme.direction === "rtl" ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
   </IconButton>
   <IconButton onClick={handleLastPageButtonClick} disabled={page >= Math.ceil(count / rowsPerPage) - 1} aria-label='last page'>
    {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
   </IconButton>
  </div>
 );
}

TablePaginationActions.propTypes = {
 count: PropTypes.number.isRequired,
 onChangePage: PropTypes.func.isRequired,
 page: PropTypes.number.isRequired,
 rowsPerPage: PropTypes.number.isRequired,
};

function createData(name, fileName) {
 return { name, fileName };
}

const rows = [
 createData("Lead 1", "Waiting"),
 createData("Lead 2", "Waiting"),
 createData("Lead 3", "Waiting"),
 createData("Lead 4", "Waiting"),
 createData("Lead 5", "Waiting"),
 createData("Lead 6", "Waiting"),
 createData("Lead 7", "Waiting"),
 createData("Lead 8", "Waiting"),
 createData("Lead 9", "Waiting"),
 createData("Lead 10", "Waiting"),
 createData("Lead 11", "Waiting"),
 createData("Lead 12", "Waiting"),
 createData("Lead 13", "Waiting"),
].sort((a, b) => (a.time < b.time ? -1 : 1));

const useStyles2 = makeStyles({
 table: {
  minWidth: 100,
 },
});

export default function CustomPaginationActionsTable() {
 const classes = useStyles2();
 const [page, setPage] = React.useState(0);
 const [rowsPerPage, setRowsPerPage] = React.useState(5);

 const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

 const handleChangePage = (event, newPage) => {
  setPage(newPage);
 };

 const handleChangeRowsPerPage = event => {
  setRowsPerPage(parseInt(event.target.value, 10));
  setPage(0);
 };

 return (
  <TableContainer component={Paper} elevation={3}>
   <Typography className='p-3'>
    <IoPeopleOutline size='2em' />
    <b> LEADS</b>
   </Typography>
   <Table className={classes.table} aria-label='custom pagination table'>
    <TableHead>
     <TableRow>
      <StyledTableCell>Lead Name</StyledTableCell>
      <StyledTableCell align='right'>File Name</StyledTableCell>
     </TableRow>
    </TableHead>
    <TableBody>
     {(rowsPerPage > 0 ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : rows).map(row => (
      <TableRow key={row.name}>
       <TableCell component='th' scope='row'>
        {row.name}
       </TableCell>
       <TableCell style={{ width: 160 }} align='right'>
        {row.fileName}
       </TableCell>
      </TableRow>
     ))}

     {emptyRows > 0 && (
      <TableRow style={{ height: 53 * emptyRows }}>
       <TableCell colSpan={6} />
      </TableRow>
     )}
    </TableBody>
    <TableFooter>
     <TableRow>
      <TablePagination
       rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
       colSpan={3}
       count={rows.length}
       rowsPerPage={rowsPerPage}
       page={page}
       SelectProps={{
        inputProps: { "aria-label": "rows per page" },
        native: true,
       }}
       onChangePage={handleChangePage}
       onChangeRowsPerPage={handleChangeRowsPerPage}
       ActionsComponent={TablePaginationActions}
      />
     </TableRow>
    </TableFooter>
   </Table>
  </TableContainer>
 );
}
