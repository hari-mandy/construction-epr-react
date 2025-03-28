import React from 'react'

const Buttons = ({rowsPerPage, totalNumberOfPosts, offsetPosts, currentPagenumber, totalPages}) => {
    
  return (
    <div className="pagination-content">
        <h4>Rows per page: {rowsPerPage}</h4>
        <div className="pagination-footer">
            <h4>{offsetPosts + 1 }-{offsetPosts + rowsPerPage} of {totalNumberOfPosts}</h4>
            <div className="button-container">
                <button className="primary-btn prev-icon">
                    Previous
                </button>
                <button className="primary-btn next-icon">
                    Next
                </button>
            </div>
        </div>
    </div>
  )
}

export default Buttons
