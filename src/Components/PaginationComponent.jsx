import React from 'react'
import ReactPaginate from 'react-paginate';

function PaginationComponent(props)
{
    const { pagination, pageCount } = props

    // myPagination={pagination} page={pageCount}
    const handlePageClick = (event) =>
    {
        console.log(`Pagination ,:`, pagination);
        console.log(`The action : `, event);
        pagination(event.selected + 1)
    }

    return (
        <>
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                marginPagesDisplayed={2}
                pageRangeDisplayed={2}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                containerClassName={'pagination justify-content-center p-3'}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link'}
                previousLinkClassName={'page-link'}
                nextLinkClassName={'page-link'}
                breakLinkClassName={'page-link'}
                breakClassName={'page-item'}
                activeClassName={'active'}

            />

        </>
    )
}

export default PaginationComponent

