
import { BrowserRouter as Router, Route } from "react-router-dom";
import './bootstrap.min.css'
import './index.css'
import './App.css'
import Login from "./Admin/pages/LogIn/Login";
import SignUp from "./Admin/pages/signup/SignUp";
import ResetPw from "./Admin/pages/resetPw/ResetPw";
import AdminDashboard from "./Admin/pages/Admin_Dashboard/AdminDashboard";
import UserList from "./Admin/pages/userList/UserList";
import Form from "./Pages/userSignUp/Form";
import UserPageAd from "./Admin/pages/user/UserPageAd";
import FormSuccess from "./Pages/userSignUp/FormSuccess";
import SignIn from "./Pages/userSignIn/SignIn";
import ProductList from "./Admin/pages/productList/ProductList";
import HomePage from "./Pages/homepage/HomePage";
import OrdersDel from "./Admin/pages/orders/OrdersDel";
import OrdersPay from './Admin/pages/orders/OrdersPay'
import NewProduct from './Admin/pages/newProduct/NewProduct'
import OrderType from "./Admin/pages/orders/OrderType";
import EditProduct from './Admin/pages/newProduct/EditProduct'
import Delivery_Status from "./Admin/pages/orders/Delivery_Status";
import ProductPage from "./Pages/productPage/ProductPage";
import UserProfile from "./Pages/userProfile/UserProfile";
import emailVer from "./Admin/pages/signup/emailVer";
function App() {
  return (

    <Router>
      <Route path='/admindashboard' component={AdminDashboard} exact />
      <Route path='/users' component={UserList} exact />
      <Route path='/products' component={ProductList} />
      <Route path='/newproduct' component={NewProduct}/>  
      <Route path='/productedit' component={EditProduct}/>
      <Route path='/ordertype' component={OrderType}/>
      <Route path='/product/:id' component={ProductPage} />
      <Route path='/ordersdel' component={OrdersDel}/>
      <Route path='/orderspay' component={OrdersPay}/> 
      <Route path='/delivered' component={Delivery_Status}/>
      <Route path='/usersignup' component={Form} exact />
      <Route path='/resetpw' component={ResetPw} exact />
      <Route path='/adminlogin' component={Login} exact />
      <Route path='/emailsent' component={FormSuccess} exact />
      <Route path='/adminsignup' component={SignUp} exact />
      <Route path='/user/:userId' component={UserPageAd} exact />
      <Route path='/username' component={UserProfile} exact />
      <Route path='/login' component={SignIn} exact />
      <Route path='/' component={HomePage} exact />
      <Route path='/verifiedemail' component={emailVer}/>
      
    </Router>


  );
}

export default App;
