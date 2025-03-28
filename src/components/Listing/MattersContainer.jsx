import React, {useState, useEffect} from 'react'
import UsersTable from '../Listing/UsersTable'
import MattersFilterBar from './MattersFilterBar'
import { filterUsersContext } from '../../context/filterUsersContext'
import fetchUserData from '../../hooks/fetchUserData'
import Buttons from '../pagination/Buttons'

const MattersContainer = () => {
    const [usersList, setUsersList] = useState({});

    return (
        <filterUsersContext.Provider value={{ usersList, setUsersList }} >
            <div className='content-wrapper'>
                <MattersFilterBar />
                <UsersTable />
                <Buttons totalNumberOfPosts={usersList.totalItems} rowsPerPage={usersList.items ? usersList.items.length : ''} offsetPosts={usersList.offset} />
            </div>
        </filterUsersContext.Provider>
    )
}

export default MattersContainer
