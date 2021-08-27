import "./newProduct.css";
import AdminHeader from "../../components/adminheader/AdminHeader";
export default function NewProduct() {
  return (
    <div>
      <AdminHeader/>
      <div className="newProduct">
        <h1 className="addProductTitle">New Product</h1>
        <form className="addProductForm">
          <div className="addProductItem">
            <label>Image</label>
            <input type="file" id="file" />
          </div>
          <div className="addProductItem">
            <label>Name</label>
            <input type="text" placeholder="T shirt" />
          </div>
          <div className="addProductItem">
            <label>Category</label>
            <select name="active" id="active">
              <option value="yes">Man</option>
              <option value="no">Woman</option>
              <option value="no">Child</option>
            </select>
          </div>

          <div className="addProductItem">
            <label>Sub Category</label>
            <input type="text" placeholder="abc" />
          </div>
          <div className="addProductItem">
            <label>Price</label>
            <input type="text" placeholder="123" />
          </div>
          <div className="addProductItem">
            <label>Description</label>
            <textarea placeholder="Product Description" />
          </div>
          <div className="addProductItem">
            <label>Stock</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <button className="addProductButton">Create</button>
        </form>
      </div >
    </div>

  );
}
