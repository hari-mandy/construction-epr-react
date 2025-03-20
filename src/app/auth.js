const returnAuthToken =  () => {
    const TOKEN = localStorage.getItem('userDetail');
    const PUBLIC_ROUTES = ["login", "forget-password", "register", "reset-password"];
    const isPublicPage = PUBLIC_ROUTES.some( r => window.location.href.includes(r))

    if(!TOKEN && !isPublicPage){
        window.location.href = '/login'
        return;
    }
    return 'success';
};

export default returnAuthToken