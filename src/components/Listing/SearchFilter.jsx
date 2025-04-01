import React, {useContext, useEffect} from 'react'
import InputText from '../inputs/InputText'
import SearchIcon from '../icons/SearchIcon'
import fetchUserData from '../../hooks/fetchUserData';
import { filterUrlContext } from '../../context/filterUrlContext'
import { filterUsersContext } from '../../context/filterUsersContext';

const SearchFilter = () => {
    const { usersList, setUsersList } = useContext(filterUsersContext);
    const { filterUrl, setFilterUrl } = useContext(filterUrlContext);

    const fetchUsers = async (e) => {
        const searchString = e.target.value;
        setFilterUrl(prevState => ({...prevState,search: searchString}))
    };

  return (
    <InputText inputType="search" placeholder="Search by Name Or Mobile No" containerStyle="table-search" inputStyle="table-search-field" searchButtonIcon={<SearchIcon />} searchButtonStyle="table-search-button" onChange={fetchUsers}/>
  )
}

export default SearchFilter
