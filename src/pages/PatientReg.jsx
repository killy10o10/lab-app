import { Card,  List, ListItem, Typography } from "@material-tailwind/react"
import Search from "../components/Search"
import { useState } from "react"
import {newPatientArr } from "../../api";
import PatientInfo from "../components/PatientInfo";


function PatientReg() {
  const [query, setQuery] = useState('');
  const [patientDetails, setPatientDetails] = useState(null)

  const onQuerySearch = (e) => {
    setQuery(e.target.value);
  }

  const filterPatients = newPatientArr.filter((patient) =>(
    patient.name.toLowerCase().includes(query.toLowerCase())
  ))

  return (
    <section className="min-h-screen gap-5 lg:flex font-poppins bg-gray-200 px-2 lg:pl-0">
      <div className="lg:h-screen h-[40vh] overflow-hidden flex flex-col bg-white rounded-b-lg">
        <Typography variant="h5" className="font-poppins bg-orange-500 p-2 shadow rounded-sm text-gray-100 text-center">Waiting Patients</Typography>
          <Search query={query} onQuerySearch={onQuerySearch} />
        <Card className="overflow-y-auto rounded-t-none shadow-xl shadow-blue-gray-900/5">
          <List>
            {
              filterPatients.map((patient, index) => (
                <ListItem 
                key={index}
                onClick={() => setPatientDetails(patient)}
                >{patient.name}</ListItem>
              ))
            }
          </List>
        </Card>
      </div>
      <div className="flex lg:w-[80%] w-[100%] lg:justify-center">
        <PatientInfo patientDetails={patientDetails} />
      </div>
    </section>
  )
}

export default PatientReg
