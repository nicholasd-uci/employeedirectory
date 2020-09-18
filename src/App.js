import React, { useState, useEffect } from 'react'
import 'react-table-v6/react-table.css'
import axios from 'axios'
import ReactTable from 'react-table-v6'

const App = () => {

const [employeeState, setEmployeeState] = useState({
    employees: [],
    columns: [
        {
            Header: 'Photo',
            accessor: 'photo'
        },
        {
            Header: 'Username',
            accessor: 'username'
        },
        {
            Header: 'Name',
            accessor: 'name'
        },
        {
            Header: 'Phone',
            accessor: 'phone'
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

useEffect(() => {
    axios.get('https://randomuser.me/api?results=20')
    .then(({ data }) => {
        let employees = data.results.map(employee => ({
            photo:  `${employee.picture.medium}`,
            username: employee.login.username,
            name: employee.name.first + ' ' + employee.name.last,
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