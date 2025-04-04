import React, {useState, useEffect} from 'react'
import UsersTable from '../Listing/UsersTable'
import MattersFilterBar from './MattersFilterBar'
import { filterUsersContext } from '../../context/filterUsersContext'
import { filterUrlContext } from '../../context/filterUrlContext'
import fetchUserData from '../../hooks/fetchUserData'
import PageNav from '../pagination/PageNav'
import { nextNavigation, prevNavigation } from '../../services/pagination-services'

const MattersContainer = () => {
    const [usersList, setUsersList] = useState({});
    const [filterUrl, setFilterUrl] = useState({
        search : '',
        city : ''
    });

    useEffect(() => {
        async function fetchUserList() {
            const makeList = await fetchUserData(`users?city=${filterUrl.city}&search=${filterUrl.search}`,'')
            setUsersList(makeList);
        }
        async function alterUser() {
            const alterList = await fetchUserData(`users?city=${filterUrl.city}&search=${filterUrl.search}&page=1`,'')
            setUsersList(alterList);
        }
        fetchUserList();
        fetchUserList();
        handleNextNav();
        handlePrevNav();
        alterUser();
    },[filterUrl])

    const handleNextNav = async () => {
        const prevLink = nextNavigation(usersList.currentPage);
        const nextUsers = await fetchUserData(`users?city=${filterUrl.city}&search=${filterUrl.search}&page=${prevLink}`,'')
        setUsersList(nextUsers);
    }

    const handlePrevNav = async () => {
        const prevLink = prevNavigation(usersList.currentPage);
        const nextUsers = await fetchUserData(`users?city=${filterUrl.city}&search=${filterUrl.search}&page=${prevLink}`,'')
        setUsersList(nextUsers);
    }

    return (
        <filterUsersContext.Provider value={{ usersList, setUsersList }} >
            <filterUrlContext.Provider value={{ filterUrl, setFilterUrl }} >
                <div className='content-wrapper'>
                    <MattersFilterBar />
                    <UsersTable />
                    <PageNav totalNumberOfPosts={usersList.totalItems} rowsPerPage={usersList.items ? usersList.items.length : ''} offsetPosts={usersList.offset} currentPagenumber={usersList.currentPage} totalPages={usersList.totalPages} onClickNext={handleNextNav} onClickPrev={handlePrevNav}/>
                </div>
            </filterUrlContext.Provider>
        </filterUsersContext.Provider>
    )
}

export default MattersContainer
