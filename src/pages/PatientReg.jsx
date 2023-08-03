import { Button, Card, Input,  List, ListItem, Option, Select, Typography } from "@material-tailwind/react"
import Search from "../components/Search"
import { useState } from "react"
import {newPatientArr } from "../../api";
import PatientInfo from "../components/PatientInfo";
import TestFeild from "../components/TestFeild";


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
      <div className="flex flex-col lg:w-[80%] w-[100%]">
        <PatientInfo patientDetails={patientDetails} />
        <div className="w-[100%]">
            <Typography variant="h4" className="text-center font-poppins mb-10">Results</Typography>
            <div className="lg:flex gap-10 grid justify-center lg:justify-start">
            <div className="flex flex-col items-center">
                <div className="w-72">
                  <Select color="orange" label="Select Test Here" className="capitalize">
                    <Option className="capitalize">Urinalysis</Option>
                    <Option className="capitalize">Hematology</Option>
                    <Option className="capitalize">Complete Blood count</Option>
                    <Option className="capitalize">Activated partial thromboplastin time</Option>
                    <Option className="capitalize">Blood Test</Option>
                    <Option className="capitalize">Liver function test</Option>
                  </Select>
                </div>
                <TestFeild />
              </div>
              <div className="flex flex-col items-center justify-center w-full mb-10">
                <p  className="font-bold mb-10">Input your findings below:</p>
                <form className="flex flex-col gap-10">
                  <Input className="text-xl" />
                  <div className="flex gap-5 flex-wrap items-center justify-center">
                    <Button className=" bg-blue-400">Add</Button>
                    <Button variant="outlined" color="orange">Edit</Button>
                    <Button variant="outlined" color="red">Remove</Button>
                    <Button color="red">Remove All</Button>
                  </div>
                </form>
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default PatientReg
