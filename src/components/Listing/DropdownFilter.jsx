import React, { useState, useEffect, useContext } from 'react'
import fetchUserData from '../../hooks/fetchUserData'
import { filterUrlContext } from '../../context/filterUrlContext'

const DropdownFilter = () => {
    const { filterUrl, setFilterUrl } = useContext(filterUrlContext);
    const [citys, setCitys] = useState([])

    useEffect(() => {
        const fetchCitys = async () => {
            const citys = await fetchUserData('getcitys','');
            setCitys(citys)
        }
        fetchCitys();
    }, [])

    const handlechange = async (e) => {
        const searchString = e.target.value;
        setFilterUrl(prevState => ({...prevState,city : searchString}))
    }

  return (
    <div className="table-dropdown">
        <select name="pan" id="start-date" onChange={handlechange}>
            <option value=''>--Select City--</option>
            {
                citys.map((singlecity, index) => (
                    !singlecity.city  ? '' : <option value={singlecity.city} key={index}>{singlecity.city}</option>
                ))
            }
        </select>
    </div>
  )
}

export default DropdownFilter
