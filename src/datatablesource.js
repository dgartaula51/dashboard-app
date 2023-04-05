export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.userName}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "age",
    headerName: "Age",
    width: 230,
  },
  {
    field: "status",
    headerName: "Status",
    width: 230,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];
export const userRows = [
  {
    id: 1,
    userName: "Snow",
    img: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    status: "active",
    email: "jsnow@yahoo.com",
    age: 35,
  },
  {
    id: 2,
    userName: "Cersei Lannister",
    img: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    status: "passive",
    email: "clannister@gmail.com",
    age: 42,
  },
  {
    id: 3,
    userName: "Jaime Lannister",
    img: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    status: "passive",
    email: "jlan@yahoo.com",
    age: 45,
  },

  {
    id: 4,
    userName: "Arya Stark",
    img: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    status: "pending",
    email: "astark@yahoo.com",
    age: 19,
  },
  {
    id: 5,
    userName: "Daenerys Targaryen",
    img: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    status: "active",
    email: "dtar@yahoo.com",
    age: 35,
  },
  {
    id: 6,
    userName: "Melisandre",
    img: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    status: "active",
    email: "melisandre@yahoo.com",
    age: null,
  },
  {
    id: 7,
    userName: "Ferrara Clifford",
    img: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    status: "pending",
    email: "ferrclif@gmail.com",
    age: 35,
  },
  {
    id: 8,
    userName: "Tashi Lee",
    img: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    status: "active",
    email: "tashilee@gmail.com",
    age: null,
  },
  {
    id: 9,
    userName: "Steven T",
    img: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    status: "active",
    email: "stevet@yahoo.com",
    age: 22,
  },
];
