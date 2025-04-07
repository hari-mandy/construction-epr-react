const userDetail = localStorage.getItem('userDetail') || sessionStorage.getItem('userDetail');
export const userData = userDetail ? JSON.parse(userDetail) : '';

if (userData && userData.dateofbirth) {
    const date = new Date(userData.dateofbirth);
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone; //to get the user Time Zone

    function formatDateInTimeZone(date, timeZone) {
    return new Intl.DateTimeFormat('en-GB', {
        timeZone: timeZone,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    }).format(date);
    }

    // Example: Display the date in different time zones in yyyy/mm/dd format
    const modifiedDate = formatDateInTimeZone(date, timeZone);

    function convertToDesiredFormat(dateStr) {
    const [day, month, year] = dateStr.split('/');
    return `${year}-${month}-${day}`;
    }

    const formattedDate = convertToDesiredFormat(modifiedDate);

    userData.dateofbirth = formattedDate;
}