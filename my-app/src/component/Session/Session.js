import React from 'react'
import List_products from '../list_products/List_products'
import Categories from '../Categories/Categories'

const Session = () => {
  return (
    <>
    <div className='flex  overflow-hidden' >
        <div className='w-4/12 h-96 overflow-y-auto overflow-x-hidden ' ><Categories /></div>
        <div className='w-8/12 h-96 overflow-y-auto overflow-x-hidden '><List_products /></div>
      </div>
    </>
  )
}

export default Session