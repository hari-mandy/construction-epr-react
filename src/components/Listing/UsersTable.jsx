import React, { useEffect, useState } from 'react'
import fetchUserData from '../../hooks/fetchUserData'

const UsersTable = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const users = await fetchUserData('getalluser','');
            setUsers(users)
        };
        fetchUsers();
    }, []);

  return (
    <table className="user-table">
        <tbody>
            <tr className="table-heading">
                <th><span className="table-checkbox"><input type="checkbox" /><span className="table-checkbox-adjuster"></span></span></th>
                <th>Name</th>
                <th className="sort-icon">E-Mail</th>
                <th>User Name</th>
                <th className="sort-icon">Postal Code</th>
                <th>City</th>
                <th>Country</th>
            </tr>
            {users.map((user, index) => (
                <tr className='table-data'>
                    <td><span className="table-checkbox"><input type="checkbox" /><span className="table-checkbox-adjuster"></span></span></td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.username}</td>
                    <td>{user.postal_code}</td>
                    <td>{user.city}</td>
                    <td>{user.country}</td>
                </tr>
            ))}
        </tbody>
    </table>
  )
}

export default UsersTable
