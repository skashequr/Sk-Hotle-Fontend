import { Outlet } from 'react-router-dom';
import Nav from '../Pages/HomePage/Nav';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Footer } from '../Footer/Rooter';
import { Toaster } from 'react-hot-toast';
const Roots = () => {
    return (
        <div>
            <Nav></Nav>
            <ToastContainer />
            <Toaster   position="top-center"
  reverseOrder={false} />
           <Outlet></Outlet> 
           <Footer></Footer>
    
        </div>
    );
};

export default Roots;