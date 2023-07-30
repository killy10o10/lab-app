import { 
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route

} from "react-router-dom"
import Layout from "./components/Layout"
import Login from "./pages/Login"
import PatientReg from "./pages/PatientReg"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Login />} />
      <Route path="patients"  element={<PatientReg />}  />
    </Route>
  )
)

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
