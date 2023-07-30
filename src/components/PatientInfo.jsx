import { Card, CardBody, CardHeader,Typography } from "@material-tailwind/react"

function PatientInfo(props) {
  const {patientDetails} = props

  return (
    <section >
      <Card  className="shadow-xl shadow-blue-gray-900/5 mt-10">
        <CardHeader color="orange" className="m-0 grid place-items-center rounded-b-none py-8 px-4 text-center font-bold text-2xl">Patient Information</CardHeader>
        <CardBody>
          <div className="grid lg:flex items-baseline justify-between gap-10">
            <div>
              <span className="flex items-baseline gap-1"><Typography variant="h6">PATIENT NAME:</Typography>{patientDetails ? patientDetails.name : ""} </span>
              <span className="flex items-baseline gap-1"><Typography variant="h6">PATIENT ID:</Typography>{patientDetails ? patientDetails.patient_id : ""}</span>
              <span className="flex items-baseline gap-1"><Typography variant="h6">BRANCH:</Typography>{patientDetails ? patientDetails.branch : ""}</span>
              <span className="flex items-baseline gap-1"><Typography variant="h6">ADDRESS:</Typography>{patientDetails ? patientDetails.address : ""}</span>
            </div>
            <div>
              <span className="flex items-baseline gap-1"><Typography variant="h6">GENDER:</Typography>{patientDetails ? patientDetails.gender : ""}</span>
              <span className="flex items-baseline gap-1"><Typography variant="h6">HOSPITAL:</Typography>{patientDetails ? patientDetails.hospital : ""}</span>
              <span className="flex items-baseline gap-1"><Typography variant="h6">AGE:</Typography>{patientDetails ? patientDetails.age : ""}</span>
              <span className="flex items-baseline gap-1"><Typography variant="h6">TEL NO:</Typography>{patientDetails ? patientDetails.tel_no : ""}</span>
            </div>
            <div>
              <span className="flex items-baseline gap-1"><Typography variant="h6">DOCTOR:</Typography>{patientDetails ? patientDetails.doctor : ""}</span>
              <span className="flex items-baseline gap-1"><Typography variant="h6">DATE:</Typography>{patientDetails ? patientDetails.date : ""}</span>
              <span className="flex items-baseline gap-1"><Typography variant="h6">RESIDENCE ADDRESS:</Typography>Ghana</span>
            </div>
          </div>
        </CardBody>
      </Card>
    </section>
  )
}

export default PatientInfo
