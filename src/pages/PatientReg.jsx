import { Card,  List, ListItem, Typography } from "@material-tailwind/react"
import Search from "../components/Search"
import { useState } from "react"
import {newPatientArr } from "../../api";
import PatientInfo from "../components/PatientInfo";


function PatientReg() {
  const [query, setQuery] = useState('');

  const onQuerySearch = (e) => {
    setQuery(e.target.value);
  }

  const filterPatients = newPatientArr.filter((patient) =>(
    patient.name.toLowerCase().includes(query.toLowerCase())
  ))

  return (
    <section className="min-h-screen gap-5 flex font-poppins bg-gray-200">
      <div className="h-screen overflow-hidden flex flex-col">
        <Typography variant="h5" className="font-poppins bg-orange-500 p-2 shadow rounded-sm text-gray-100 text-center">Waiting Patients</Typography>
        <Card className="overflow-y-auto shadow-xl shadow-blue-gray-900/5">
          <Search query={query} onQuerySearch={onQuerySearch} />
          <List>
            {
              filterPatients.map((patient, index) => (
                <ListItem key={index}>{patient.name}</ListItem>
              )).sort()
            }
          </List>
        </Card>
      </div>
      <div className="flex w-[80%] justify-center">
        <PatientInfo />
      </div>
    </section>
  )
}

export default PatientReg
