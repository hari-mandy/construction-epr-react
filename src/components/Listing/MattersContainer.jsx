import React, {useState, useContext} from 'react'
import UsersTable from '../Listing/UsersTable'
import MattersFilterBar from './MattersFilterBar'
import { filterUsersContext } from '../../context/filterUsersContext'


const MattersContainer = () => {
    const [usersList, setUsersList] = useState([]);
    
    return (
        <filterUsersContext.Provider value={{ usersList, setUsersList }} >
            <div className='content-wrapper'>
                <MattersFilterBar />
                <UsersTable />
            </div>
        </filterUsersContext.Provider>
    )
}

export default MattersContainer
