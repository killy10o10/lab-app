/* eslint-disable react/prop-types */
import {Input} from '@material-tailwind/react'
import {HiMagnifyingGlass} from 'react-icons/hi2'

function Search(props) {
  const {query, onQuerySearch } = props;
  return (
  <div className="p-2">
    <Input value={query} onChange={onQuerySearch} icon={<HiMagnifyingGlass className="h-5 w-5" />}  label="search"/> 
  </div>
  )
}

export default Search
