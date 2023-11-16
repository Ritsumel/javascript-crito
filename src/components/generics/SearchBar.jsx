import React from 'react'

const SearchBar = () => {
  return (
    <div className='searchbar'>
        <form>
        <i class="fa-sharp fa-solid fa-magnifying-glass"></i><input type="text" placeholder="Type to search..." />
        </form>
    </div>
  )
}

export default SearchBar