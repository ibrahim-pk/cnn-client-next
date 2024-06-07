import Header from "@/Admin/Header";
import { PrivateRoute } from "@/Admin/PrivteRouter/AdminRouter";
import Sidebar from "@/Admin/Sidebar";
import AdminLayout from "@/Layout/AdminLayout";




function Admin() {
  return (
    <div>
        <p>Dashboard</p>
    </div>
  );
} 

export default Admin;

Admin.getLayout = function getLayout(page) {
    return (
      <AdminLayout>
        {page}
      </AdminLayout>
    )
  }