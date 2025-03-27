import React, { useContext, useEffect, useState } from 'react'
import {filterUsersContext} from '../../context/filterUsersContext'
import fetchUserData from '../../hooks/fetchUserData';

const UsersTable = () => {
    const { usersList, setUsersList } = useContext(filterUsersContext);
    const [sortAscending, setSortAscending] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            const users = await fetchUserData('getalluser?like','');
            setUsersList(users)
        };
        fetchUsers();
    }, []);

    // Sorting function
    const sortList = (type) => {
        const sorted = [...usersList].sort((a, b) => {
        const valueA = a[type] ? a[type].toString() : '';
        const valueB = b[type] ? b[type].toString() : '';
        return sortAscending ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
        });
        
        setUsersList(sorted);
        setSortAscending(!sortAscending); // Toggle sorting direction
    };

    
  return (
    <table className="user-table">
        <tbody>
            <tr className="table-heading">
                <th><span className="table-checkbox"><input type="checkbox" /><span className="table-checkbox-adjuster"></span></span></th>
                <th>Name</th>
                <th className="sort-icon" onClick={() => sortList('email')}>E-Mail</th>
                <th>User Name</th>
                <th className="sort-icon" onClick={() => sortList('postal_code')}>Postal Code</th>
                <th>City</th>
                <th>Country</th>
            </tr>
            {usersList.map((user, index) => (
                <tr className='table-data' key={index}>
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
