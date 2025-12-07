import React from 'react'
import Form from '../../Componets/FormSearchComponent/Form'
import CategoryCard from '../../Componets/CategoryCardComponent/CategoryCard'
import Categories from '../../Componets/CategoryCardComponent/Categories'

const SearchCard = () => {
  return (
    <div className='bg-[#fafbfc] min-h-screen'>
        <Form />
        <Categories />
        
    </div>
  )
}

export default SearchCard