import React, {useState, useEffect} from 'react'
import UsersTable from '../Listing/UsersTable'
import MattersFilterBar from './MattersFilterBar'
import { filterUsersContext } from '../../context/filterUsersContext'
import fetchUserData from '../../hooks/fetchUserData'
import PageNav from '../pagination/PageNav'
import { nextNavigation, prevNavigation } from '../../services/pagination-services'

const MattersContainer = () => {
    const [usersList, setUsersList] = useState({});

    const handleNextNav = async () => {
        const prevLink = nextNavigation(usersList.currentPage);
        const nextUsers = await fetchUserData('users?page=', prevLink)
        setUsersList(nextUsers);
    }

    const handlePrevNav = async () => {
        const prevLink = prevNavigation(usersList.currentPage);
        const nextUsers = await fetchUserData('users?page=', prevLink)
        setUsersList(nextUsers);
    }

    return (
        <filterUsersContext.Provider value={{ usersList, setUsersList }} >
            <div className='content-wrapper'>
                <MattersFilterBar />
                <UsersTable />
                <PageNav totalNumberOfPosts={usersList.totalItems} rowsPerPage={usersList.items ? usersList.items.length : ''} offsetPosts={usersList.offset} currentPagenumber={usersList.currentPage} totalPages={usersList.totalPages} onClickNext={handleNextNav} onClickPrev={handlePrevNav}/>
            </div>
        </filterUsersContext.Provider>
    )
}

export default MattersContainer
