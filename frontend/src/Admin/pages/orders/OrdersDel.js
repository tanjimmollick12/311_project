import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from "@material-ui/icons";
import Button from '@material-ui/core/Button';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import AdminHeader from '../../components/adminheader/AdminHeader'
import { Link } from "react-router-dom";
import './order.css'

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  {
    field: "cutomers_id",
    headerName: "C_ID",
    width: 120,

  },
  {
    field: 'products_id',
    headerName: 'P_ID',
    width: 120,
    editable: true,
  },

  {
    field: 'offer_name',
    headerName: 'Offer',
    width: 120,
    editable: true,
  },
  {
    field: 'numOfProd',
    headerName: 'NOP',
    width: 120,
    editable: true,
  },
  {
    field: 'delivery_charge',
    headerName: 'D_Charge',
    width: 150,
    editable: true,
  },

  {
    field: 'shipping_add',
    headerName: 'S_Add',
    width: 150,
    editable: true
  }, 
  {
    field: 'payment_status',
    headerName: 'P_Status',
    width: 150,
    editable: true,
  },
  {
    field: 'delivery_status',
    headerName: 'D_Status',
    width: 150,
    editable: true
  }, {
    field: 'transaction_id',
    headerName: 'T_ID',
    width: 150,
    editable: true
  }, {
    field: 'contact',
    headerName: 'Phone',
    width: 150,
    editable: true
  },
  {
    field: 'date',
    headerName: 'Time',
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
          <Link to={"/delivered"}>
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
{
    id:1,
}
];

export default function OrdersDel() {
  return (
    <div>

      <AdminHeader />
      <div>
        <h1 className='heading'>Orders Via Delivery Charge</h1>
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