import React from 'react'

const Pagination = ({page, maxPage,setPage}) => {

  const pagesPerBlock = 6
  const currentBlock = Math.ceil(page / pagesPerBlock)
  const maxBlock = Math.ceil(maxPage / pagesPerBlock) 

  const arrPages = []
  const initialPageInBlock = (currentBlock - 1) * pagesPerBlock + 1
  const finalPage = maxBlock === currentBlock
    ? maxPage
    : currentBlock * pagesPerBlock

  for (let i = initialPageInBlock; i <= finalPage; i++){
    arrPages.push(i)
  }

  const handlePage = (numberPage) => {
    setPage(numberPage)
  }

  const handlePreviousPage = () => {
    if (page - 1 < 0) {
        setPage(page - 1)
    }
  }

  const handleNextPage = () => {
    if (page + 1 <= maxPage) {
      setPage(page + 1)
    }
  }
  
  return (
    <div>
      
      <ul>
        <li onClick={handlePreviousPage}>&#60;</li>
        {
          arrPages.map(e => (
            <li onClick={() => handlePage(e)} key={e}>{e}</li>
          ))
        }
        <li onClick={handleNextPage}>&#62;</li>
      </ul>

    </div>
  )
}

export default Pagination