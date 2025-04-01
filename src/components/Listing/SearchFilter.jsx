import React, {useContext, useEffect} from 'react'
import InputText from '../inputs/InputText'
import SearchIcon from '../icons/SearchIcon'
import { filterUrlContext } from '../../context/filterUrlContext'

const SearchFilter = () => {
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
