import React from 'react'

type PaginationProps = {
  currentPage: number
  pageSize: number
  totalPages: number
}

export const Pagination: React.FC<PaginationProps> = ({ currentPage, pageSize, totalPages }) => {
  const totalPage = Math.ceil(totalPages / pageSize)
  const pages = Array.from({ length: totalPage }, (_, i) => i + 1)

  return (
    <ul style={{ backgroundColor: 'white', display: 'flex', listStyleType: 'none' }}>
      {pages.map(page => (
        <li
          key={page}
          style={{
            color: page === currentPage ? 'blue' : 'black',
            cursor: 'pointer',
            margin: '0 10px',
          }}
        >
          {page}
        </li>
      ))}
    </ul>
  )
}
