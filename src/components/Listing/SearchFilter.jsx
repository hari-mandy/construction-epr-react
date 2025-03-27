import React, {useContext, useEffect} from 'react'
import InputText from '../inputs/InputText'
import SearchIcon from '../icons/SearchIcon'
import fetchUserData from '../../hooks/fetchUserData';
import { filterUsersContext } from '../../context/filterUsersContext';

const SearchFilter = () => {
    const { usersList, setUsersList } = useContext(filterUsersContext);

    const fetchUsers = async (e) => {
        const users = await fetchUserData('getalluser?like=',e.target.value);
        setUsersList(users);
    };

  return (
    <InputText inputType="search" placeholder="Search by Name Or Mobile No" containerStyle="table-search" inputStyle="table-search-field" searchButtonIcon={<SearchIcon />} searchButtonStyle="table-search-button" onChange={fetchUsers}/>
  )
}

export default SearchFilter
