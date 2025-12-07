import React from 'react'
import SearchTab from './SearchTab'
import AllCategories from './AllCategories'
import Location from './Location'
import SearchButton from './SearchButton'

const Form = () => {
  return (
    <div className="mt-5 px-6 py-5 bg-white shadow-lg rounded-lg flex flex-col gap-4 items-center">
      <div className="w-full flex flex-col md:flex-row gap-4">
        <SearchTab />
        <AllCategories />
        <Location />
      </div>

      <SearchButton />
    </div>
  )
}

export default Form