import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function List() {
  const rows = [
    {
      id: 433432,
      product: "HP Spectre",
      img: "https://images.pexels.com/photos/8092507/pexels-photo-8092507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      customer: "Michael Doe",
      date: "1 March",
      amount: 1200,
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 234234,
      product: "Mad Earbuds",
      img: "https://images.pexels.com/photos/6686290/pexels-photo-6686290.jpeg",
      customer: "Bruce Steel",
      date: "12 March",
      amount: 299,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 565343,
      product: "Lunatic Lamp",
      img: "https://images.pexels.com/photos/943150/pexels-photo-943150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      customer: "Robert D",
      date: "10 May",
      amount: 566,
      method: "Online payment",
      status: "Approved",
    },
    {
      id: 988998,
      product: "Top Table",
      img: "https://images.pexels.com/photos/890669/pexels-photo-890669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      customer: "Leslie Here",
      date: "23 May",
      amount: 999,
      method: "Online payment",
      status: "Pending",
    },
    {
      id: 909424,
      product: "Badass Bunker Bed",
      img: "https://images.pexels.com/photos/3847561/pexels-photo-3847561.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      customer: "Rob There",
      date: "11 June",
      amount: 2500,
      method: "Cash on delivery",
      status: "Approved",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default List;
