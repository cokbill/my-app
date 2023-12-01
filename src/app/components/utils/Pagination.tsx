import React, { FC, Dispatch, SetStateAction } from 'react'

type PaginationProps = {
  page : number,
  setPage: Dispatch<SetStateAction<number>>,
  lastPage: number
}

const Pagination:FC<PaginationProps> = ({page, setPage, lastPage}) => {

  const handleNext = () => {
    if (page < lastPage) {
      setPage(page + 1)
      scrollTo({top: 0,
        behavior: 'smooth'})
    }
  }
  const handlePrev = () => {
    if (page > 1 && page <= lastPage) {
      setPage(page - 1)
      scrollTo({top: 0, 
        behavior: 'smooth'})
    }
  }

  return (
    <div className='w-full mt-3 flex justify-center items-center py-4 px-2 gap-4 text-2xl'>
      <button className='transition-all hover:text-red-700' onClick={handlePrev}>Prev</button>
      <p className=''> {page} of {lastPage}</p>
      <button className='transition-all hover:text-red-700' onClick={handleNext}>Next</button>
    </div>
  )
}

export default Pagination;