import { Card, CardBody, CardHeader } from "@material-tailwind/react"

function PatientInfo() {
  return (
    <>
      <Card  className="shadow-xl shadow-blue-gray-900/5">
        <CardHeader>Patient Information</CardHeader>
        <CardBody>
          <table>
            <tr>Branch</tr>
          </table>
        </CardBody>
      </Card>
    </>
  )
}

export default PatientInfo
