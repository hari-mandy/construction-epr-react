const userDetail = localStorage.getItem('userDetail');
export const userData = userDetail ? JSON.parse(userDetail) : '';

if (userData && userData.dateofbirth) {
  userData.dateofbirth = new Date(userData.dateofbirth).toISOString().split("T")[0];
}
