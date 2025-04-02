import React, { useContext, useEffect, useState } from 'react'
import {filterUsersContext} from '../../context/filterUsersContext'
import fetchUserData from '../../hooks/fetchUserData';

const UsersTable = () => {
    const { usersList, setUsersList } = useContext(filterUsersContext);
    const [checkedRows, setCheckedRows] = useState([]);
    const [headChecked, setHeadChecked] = useState(false);

    useEffect(() => {
        const fetchUsers = async () => {
            const users = await fetchUserData('users','');
            setUsersList(users);
        };
        fetchUsers();
    }, []);

    // Update header checkbox state based on all checked rows
    useEffect(() => {
        if (usersList && usersList.items) {
            const allChecked = usersList.items.length > 0 && usersList.items.every((_, index) => checkedRows[index] === true);
            setHeadChecked(allChecked);
        }
    }, [checkedRows, usersList]);

    // Handle row checkbox change
    const handleRowCheck = (index) => {
        const updatedCheckedRows = [...checkedRows];
        updatedCheckedRows[index] = !updatedCheckedRows[index];
        setCheckedRows(updatedCheckedRows);
    }

    // Handle header checkbox change (select/deselect all rows)
    const handleHeadCheck = () => {
        const newCheckedState = !headChecked;
        setHeadChecked(newCheckedState);
        setCheckedRows(usersList.items.map(() => newCheckedState));
    }
    
    return (
        <div className="table-container">
            <table className="user-table">
                <tbody>
                    <tr className="table-heading">
                        <th><span className="table-checkbox"><input type="checkbox" checked={headChecked} onChange={handleHeadCheck} /><span className="table-checkbox-adjuster"></span></span></th>
                        <th>Name</th>
                        <th className="sort-icon">E-Mail</th>
                        <th>User Name</th>
                        <th className="sort-icon">Postal Code</th>
                        <th>City</th>
                        <th>Country</th>
                    </tr>
                    {usersList && usersList.items ? (
                        usersList.items.map((user, index) => (
                            <tr className="table-data" key={index}>
                                <td><span className="table-checkbox"><input type="checkbox" checked={checkedRows[index] || false}  onChange={() => handleRowCheck(index)} /> <span className="table-checkbox-adjuster"></span></span></td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.username}</td>
                                <td>{user.postal_code}</td>
                                <td>{user.city}</td>
                                <td>{user.country}</td>
                            </tr>
                        ))
                    ) : (
                        <tr><td colSpan="7">Loading...</td></tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default UsersTable