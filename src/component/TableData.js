import React, { useEffect, useState } from 'react'

const TableData = () => {
    const [datas, setDatas] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setDatas(data)
                // console.log(data) 
            })
    })
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Username</th>
                    <th scope="col">Email</th>
                    <th scope="col">Address</th>
                    <th scope="col">city</th>
                    <th scope="col">street</th>
                    <th scope="col">zipcode</th>
                    <th scope="col">name</th>
                    <th scope="col">catchPhrase</th>
                </tr>
            </thead>
            <tbody>
                {datas.map((user, index) => {
                    return <tr key={index}>
                        <th scope="row">{user.id}</th>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.address.city}</td>
                        <td>{user.address.street}</td>
                        <td>{user.address.zipcode}</td>
                        <td>{user.address.suite}</td>
                        <td>{user.company.name}</td>
                        <td>{user.company.catchPhrase}</td>
                    </tr>
                })}

                {/* <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Larry the Bird</td>
        <td>@twitter</td>
        <td>@twitter</td>
      </tr> */}
            </tbody>
        </table>
    )
}

export default TableData