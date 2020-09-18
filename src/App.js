import React, { useState, useEffect } from 'react'
import 'react-table-v6/react-table.css'
import axios from 'axios'
import ReactTable from 'react-table-v6'

const App = () => {

const [employeeState, setEmployeeState] = useState({
    employees: [],
    columns: [
        {
            Header: 'Name',
            accessor: 'name',
            filterable: true
        },
        {
            Header: 'Phone',
            accessor: 'phone',
            filterable: true
        },
        {
            Header: 'Email',
            accessor: 'email'
        },
        {
            Header: 'Gender',
            accessor: 'gender'
        }
    ]
})

userEffect(() => {
    axios.get('https://randomuser.me/api?results=20')
    .then(({ data: { results } }) => {
        let employees = results.map(user => ({
            name: employee.name.first + '' + employee.name.last,
            phone: employee.phone,
            email: employee.email,
            gender: employee.gender
        }))
        // code goes here
        setEmployeeState({ ...employeeState, employees})
    })
    .catch(err => console.log(err))
}, [])

    return(
        <ReactTable
        data={employeeState.employees}
        columns={employeeState.columns}
        />
    )
}

export default App