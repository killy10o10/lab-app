import { Card} from '@material-tailwind/react';
import { nanoid } from 'nanoid';

function TestFeild() {
  const tableHead = ["Parameters", "Results Found", "Reference"];
  const tableRows = [

    {parameters: "cold water in blood",
     results: "something good here",
     reference: "tramadol morphine",
    },
  ]


  return (
    <>
      <Card className="w-full overflow-scroll my-10">
          <table className="w-full lg:min-w-max table-auto ">
            <thead>
              <tr>
                {
                  tableHead.map((head) => (
                    <th key={nanoid()} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                      <small className='text-blue-gray-500 leading-none opacity-70'>{head}</small>
                    </th>
                  ))
                }
              </tr>
            </thead>
            <tbody>
              {
                tableRows.map(({parameters, results, reference}, index) => {
                  const isLast = index === tableRows.length - 1;
                  const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                  return(
                    <tr key={nanoid()}>
                      <td className={classes}>
                        <small className='text-blue-gray-900'>
                          {parameters}
                        </small>
                      </td>
                      <td className={classes}>
                        <small className='text-blue-gray-900'>
                          {results}
                        </small>
                      </td>
                      <td className={classes}>
                        <small className='text-blue-gray-900'>
                          {reference}
                        </small>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
      </Card>
    </>
  );
}

export default TestFeild;
