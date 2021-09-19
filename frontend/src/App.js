
import { BrowserRouter as Router, Route } from "react-router-dom";
import './bootstrap.min.css'
import './index.css'
import './App.css'
import Login from "./Admin/pages/LogIn/Login";
import SignUp from "./Admin/pages/signup/SignUp";
import ResetPw from "./Admin/pages/resetPw/ResetPw";
import AdminDashboard from "./Admin/pages/Admin_Dashboard/AdminDashboard";
import UserList from "./Admin/pages/userList/UserList";
import UserPageAd from "./Admin/pages/user/UserPageAd";
import FormSuccess from "./Pages/userSignUp/FormSuccess";
import SignIn from "./Pages/userSignIn/SignIn";
import ProductTable from "./Admin/pages/productList/ProductList";
import HomePage from "./Pages/homepage/HomePage";
import CartPage from "./Pages/CartPage";
import Orders from "./Admin/pages/orders/Orders";
import AddProduct from "./Admin/pages/newProduct/addProduct";
import EditProduct from './Admin/pages/newProduct/EditProduct'
import Delivery_Status from "./Admin/pages/orders/Delivery_Status";
import Payment_Status from "./Admin/pages/orders/Payment_Status";
import ProductPage from "./Pages/productPage/ProductPage";
import UserProfile from "./Pages/userProfile/UserProfile";
import FormSignUp from "./Pages/userSignUp/FormSignUp";
import emailVer from "./Admin/pages/signup/emailVer";
import UserEdit from "./Pages/userProfile/UserEdit";
import { Shipping } from "./Pages/Shipping";
import { OrderPage } from "./Pages/OrderPage";
import AddProductImage from "./Admin/pages/newProduct/AddProductImage";
import UpdateProduct from "./Admin/pages/newProduct/UpdateProduct";
import Review from "./Pages/productPage/review";
import ShippingAddresses from "./Admin/pages/orders/ShippingAddresses";
import ReviewTable from "./Admin/pages/productList/Reviews";
function App() {
  return (

    <Router>
      <Route path='/admindashboard' component={AdminDashboard} exact />
      <Route path='/users' component={UserList} exact />
      <Route path='/products' component={ProductTable} />
      <Route path='/newproduct' component={AddProduct}/>  
      <Route path='/productedit' component={EditProduct}/>
      <Route path='/product/:id' component={ProductPage} />
      <Route path='/addimage/:id' component={AddProductImage} />
      <Route path='/review/:id' component={Review} />
      <Route path='/updateproduct/:id' component={UpdateProduct} />
      <Route path='/cart/:id?' component={CartPage} />
      <Route path='/orders' component={Orders}/>
      <Route path='/delivered/:id' component={Delivery_Status}/>
      <Route path='/paid/:id' component={Payment_Status}/>
      <Route path='/register' component={FormSignUp} exact />
      <Route path='/resetpw' component={ResetPw} exact />
      <Route path='/adminlogin' component={Login} exact />
      <Route path='/emailsent' component={FormSuccess} exact />
      <Route path='/adminsignup' component={SignUp} exact />
      <Route path='/user/:userId' component={UserPageAd} exact />
      <Route path='/profile' component={UserProfile} exact />
      <Route path='/edit' component={UserEdit} exact />
      <Route path='/login' component={SignIn} exact />
      <Route path='/shipping' component={Shipping} exact />
      <Route path='/order' component={OrderPage} exact />
      <Route path='/' component={HomePage} exact />
      <Route path='/shippingaddresses' component={ShippingAddresses} exact />
      <Route path='/reviews' component={ReviewTable} exact />
      <Route path='/verifiedemail' component={emailVer}/>
      
    </Router>


  );
}

export default App;
