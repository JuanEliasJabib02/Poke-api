import React from 'react'

const Pagination = ({page, maxPage}) => {

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
 
  return (
    <div>
      <ul>
        {
          arrPages.map(e => (
            <li>{e}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default Pagination