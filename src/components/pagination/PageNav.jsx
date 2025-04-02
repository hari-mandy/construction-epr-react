import React, { useState, useEffect } from 'react'

const PageNav = ({rowsPerPage, totalNumberOfPosts, offsetPosts, currentPagenumber, totalPages, onClickPrev, onClickNext}) => {
    const[prevDisable, setPrevDisable] = useState();
    const[nextDisable, setNextDisable] = useState();

    useEffect(() => {
        const checkPrevButtonState = () => {
            if (currentPagenumber === 1) {
                setPrevDisable(true);  
            } else {
                setPrevDisable(false);
            }
            if (totalPages == currentPagenumber) {
                setNextDisable(true);
            } else {
                setNextDisable(false);
            }
        };
        checkPrevButtonState(); // Call the function to check the button state
    }, [currentPagenumber]);
    
  return (
    <div className="pagination-content">
        <h4>Rows per page: {rowsPerPage}</h4>
        <div className="pagination-footer">
            <h4>{offsetPosts + 1 }-{offsetPosts + rowsPerPage} of {totalNumberOfPosts}</h4>
            <div className="button-container">
                <button className={`primary-btn prev-icon ${prevDisable ? "disabled" : ''}`} onClick={onClickPrev}>
                    Previous
                </button>
                <button className={`primary-btn next-icon ${nextDisable ? "disabled" : ''}`} onClick={onClickNext}>
                    Next
                </button>
            </div>
        </div>
    </div>
  )
}

export default PageNav
