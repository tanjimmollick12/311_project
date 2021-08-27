import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from "@material-ui/icons";
import Button from '@material-ui/core/Button';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import AddIcon from '@material-ui/icons/Add';
import Header from '../../components/adminheader/AdminHeader'
import { Link } from "react-router-dom";
import './productList.css'
import { LinkContainer } from 'react-router-bootstrap';

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  {
    field: "prod_image",
    headerName: "Image",
    width: 170,
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
    field: 'prod_name',
    headerName: 'Product Name',
    width: 150,
    editable: true,
  },

  {
    field: 'cat_name',
    headerName: 'Category',
    width: 150,
    editable: true,
  },
  {
    field: 'subcat_name',
    headerName: 'Sub-Category',
    width: 150,
    editable: true,
  },
  {
    field: 'price',
    headerName: 'Price',
    width: 150,
    editable: true,
  },
  {
    field: 'upload',
    headerName: 'Added At',
    width: 150,
    editable: true,
  },
  {
    field: 'ais',
    headerName: 'In Stock',
    width: 150,
    editable: true
  }, {
    field: 'description',
    headerName: 'Description',
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
          <Link to={"/productedit"}>
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

export default function ProductList() {
  return (
    <div>

      <Header />
      <div>
        <h1 className='heading'>Product List</h1>
        <div>

          <Button
            variant="contained"
            color="primary"

            startIcon={<CloudDownloadIcon />}
          >
            Download
          </Button>

          <LinkContainer to='/newproduct'>

            <Button
              variant="contained"
              color="secondary"
              className='add'
              startIcon={<AddIcon />}
            >
              Add Product
            </Button>
          </LinkContainer>



        </div>


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