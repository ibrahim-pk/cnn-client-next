import { PrivateRoute } from "@/Admin/PrivteRouter/AdminRouter"

const { default: Header } = require("@/Admin/Header")
const { default: Sidebar } = require("@/Admin/Sidebar")

const AdminLayout=({children})=>{
    return(
       <PrivateRoute>
          <div
        className="flex flex-col min-h-screen max-h-full dashboard w-full"
        style={{ backgroundColor: "#f1f5f9" }}>
         <div className="flex">
          <Sidebar />
          <div className="flex-grow flex flex-col">
            <Header />
            {children}
          </div>
        </div>
      </div>
       </PrivateRoute>
    )
}

export default AdminLayout