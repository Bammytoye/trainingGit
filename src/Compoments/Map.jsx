import React from 'react'

const Map = () => {
  let allStudents = [
    { firstName: "Sara", lastName: "Fola", age: 20 },
    { firstName: "Sola", lastName: "Dayo", age: 20 },
    { firstName: "Sola", lastName: "Abbas", age: 20 }
  ]

  // const changeName =()=>{
  //     name="Hikmah"
  // }

  return (
    <div>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-white border-b">
                  <tr>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      S/N
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      First Name
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Last Name
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Age
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {
                    allStudents.map((items, index) => (

                      <tr className="bg-gray-100 border-b">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {items.firstName}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {items.lastName}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {items.age}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <button className='rounded-md bg-yellow-300 p-2 px-4 mx-5'>Edit</button>
                          <button className='rounded-md bg-red-500 p-2 px-4'>Delete</button>
                        </td>
                      </tr>
                    ))
                  }

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

{/* <button className='rounded-md bg-yellow-300 p-2 px-4 mx-5' onClick={changeName}>Change name</button> */ }


export default Map