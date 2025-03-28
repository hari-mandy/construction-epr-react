const prevNavigation = (currentPage) => {
    const previous = currentPage - 1;
    return previous;
}

const nextNavigation = (currentPage) => {
    const next = currentPage + 1;
    return next;
}

export  { prevNavigation, nextNavigation };