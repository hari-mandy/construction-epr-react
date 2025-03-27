import React,{ useContext } from 'react'
import SearchFilter from './SearchFilter'
import { filterUsersContext } from '../../context/filterUsersContext';
import DropdownFilter from './DropdownFilter'

const MattersFilterBar = () => {
    const { usersList, setUsersList } = useContext(filterUsersContext);
    
  return (
    <div className="table-filter-bar-wrapper">
        <h4>CONTACT Info ({usersList.length})</h4>
        <div className="table-filters">
            <SearchFilter />
            <DropdownFilter />
        </div>
    </div>
  )
}

export default MattersFilterBar
