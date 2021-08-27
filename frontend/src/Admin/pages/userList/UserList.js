import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from "@material-ui/icons";
import Button from '@material-ui/core/Button';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import Header from '../../components/adminheader/AdminHeader'
import { Link } from "react-router-dom";
import './userList.css'

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  {
    field: "user",
    headerName: "Image",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="userListUser">
          <img className="userListImg" src={params.row.avatar} alt="" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },

  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'gender',
    headerName: 'Gender',
    width: 150,
    editable: true,
  },
  {
    field: 'DOB',
    headerName: 'Birth Date',
    width: 150,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    type: 'email',
    width: 110,
    editable: true,
  },
  {
    field: 'password',
    headerName: 'Password',
    width: 150,
    editable: true
  }, {
    field: 'contact',
    headerName: 'Phone',
    width: 150,
    editable: true
  },
  {
    field: 'activeCode',
    headerName: 'Active Code',
    width: 180,
    editable: true
  }, {
    field: 'status',
    headerName: 'Status',
    width: 150,
    editable: true
  }, {
    field: 'address',
    headerName: 'Address',
    width: 150,
    editable: true
  },
  {
    field: "action",
    headerName: "Action",
    width: 150,
    renderCell: (params) => {
      return (
        <>
          <Link to={"/user/" + params.row.id}>
            <button className="userListEdit">Edit</button>
          </Link>
          <DeleteOutline
            className="userListDelete"

          />
        </>
      );
    },
  },
];

const rows = [

];

export default function UserList() {
  return (
    <div>

      <Header />
      <div>
        <h1 className='heading'>User List</h1>
        <Button
          variant="contained"
          color="primary"

          startIcon={<CloudDownloadIcon />}
        >
          Download
        </Button>

      </div>


      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={7}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </div>
  );
}