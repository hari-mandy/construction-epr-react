import React, { useContext, useEffect, useState } from 'react'
import {filterUsersContext} from '../../context/filterUsersContext'
import fetchUserData from '../../hooks/fetchUserData'
import fetchDeleteData from '../../hooks/fetchDeleteData'
import deleteIcon from '../../images/trash-can.png'
import TableRowSkeleton from '../skeleton/TableRowSkeleton'
import { filterUrlContext } from '../../context/filterUrlContext'

const UsersTable = () => {
    const { usersList, setUsersList } = useContext(filterUsersContext);
    const { filterUrl, setFilterUrl } = useContext(filterUrlContext);
    const [checkedRows, setCheckedRows] = useState([]);
    const [headChecked, setHeadChecked] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    const fetchUsers = async () => {
        const makeList = await fetchUserData(`users?city=${filterUrl.city}&search=${filterUrl.search}`,'')
        setUsersList(makeList);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    useEffect(() => {
        const loadData = () => {
            setIsLoaded(false);
            setTimeout(() => {
              setIsLoaded(true);
            }, 1000);
        };
        loadData();
    }, [usersList])

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

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this user?");
        if (!confirmDelete) {
            return; // Exit if user cancels
        }
        const userRemoved = await fetchDeleteData('removeuser?id=',id);
        if(userRemoved === 'success') {
            const makeList = await fetchUserData(`users?city=${filterUrl.city}&search=${filterUrl.search}&page=${usersList.currentPage}`,'')
            setUsersList(makeList);
            return;
        }
        alert('Unable to delete User');
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
                        <th className='text-center'>actions</th>
                    </tr>
                    {
                        isLoaded ? 
                            usersList && usersList.items ? (
                                usersList.items.map((user, index) => (
                                    <tr className="table-data" key={index}>
                                        <td><span className="table-checkbox"><input type="checkbox" checked={checkedRows[index] || false}  onChange={() => handleRowCheck(index)} /> <span className="table-checkbox-adjuster"></span></span></td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.username}</td>
                                        <td>{user.postal_code}</td>
                                        <td>{user.city}</td>
                                        <td>{user.country}</td>
                                        <td className="action-icons text-center">
                                            <button className="delete-icon-container" onClick={() => handleDelete(user.id)}><img src={deleteIcon} alt="" /></button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                ''
                            ) : <TableRowSkeleton amount={usersList.items ? usersList.items.length : 10} />
                    }
                </tbody>
            </table>
        </div>
    )
}

export default UsersTable