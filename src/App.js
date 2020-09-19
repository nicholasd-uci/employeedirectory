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
            accessor: 'photo',
            width: 250
        },
        {
            Header: 'Name',
            accessor: 'name',
            filterable: true,
            width: 400
        },
        {
            Header: 'Username',
            accessor: 'username',
            filterable: true,
            width: 450
        },
        {
            Header: 'Phone',
            accessor: 'phone',
            filterable: true,
            width: 200
        },
        {
            Header: 'Email',
            accessor: 'email',
            filterable: true,
            width: 500
        },
        {
            Header: 'Gender',
            accessor: 'gender',
            filterable: true,
            width: 70
        }
    ]
})

useEffect(() => {
    axios.get('https://randomuser.me/api?results=20')
    .then(({ data }) => {
        let employees = data.results.map(employee => ({
            photo: <img src="`${employee.picture.medium}`" alt="EEphoto"/>,
            name: employee.name.first + ' ' + employee.name.last,
            username: employee.login.username,
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