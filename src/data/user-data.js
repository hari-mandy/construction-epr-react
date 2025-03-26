const userDetail = localStorage.getItem('userDetail');
export const userData = userDetail ? JSON.parse(userDetail) : '';

if (userData && userData.dateofbirth) {
    // Convert to local YYYY-MM-DD format
    const date = new Date(userData.dateofbirth);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Month is 0-based
    const day = String(date.getDate()).padStart(2, "0");

    userData.dateofbirth = `${year}-${month}-${day}`;
}
