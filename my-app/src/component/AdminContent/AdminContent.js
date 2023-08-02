import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import AddProduct from '../addProduct';
import AdminListProduct from '../AdminListProduct/AdminListProduct';
import Dashboard from '../Dashboard/Dashboard';

const AdminContent = () => {
  return (
    <div className='container'>
      <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
      >
        
        <Tab eventKey="profile" title="Charts">
        <Dashboard/>
        </Tab>
        <Tab eventKey="home" title="Products">
        <AdminListProduct/>
        </Tab>
        
      </Tabs>
    </div>
    
  );
}


export default AdminContent