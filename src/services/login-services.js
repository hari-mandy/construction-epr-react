import fetchUserData from '../hooks/fetchUserData'
import bcrypt from 'bcryptjs'
import Cookies from "js-cookie";

const handleEmail =  (e, requireMes, validMes) => {
    const tagetvalue = e.target.value;
    if(tagetvalue === '') {
        return requireMes;
    }
    return validateUserEmail(tagetvalue, validMes);
}

const validateUser = async (event, UserData, userPassword, rememberMe, errorMessageEmail) => {
    event.preventDefault(); // Only needed if called from a form submission
    try {
        const isMatch = await bcrypt.compare(userPassword, UserData);
        if (!isMatch) {
            return '*Password not Match*';
        }
        if (rememberMe) {
            Cookies.set("authToken", event.response, {expires: 7});
            return 'success';
        }
        if (errorMessageEmail ) {
            return 'Check the above Fields';
        }
        return 'success';
    } catch (error) {
        alert("Error validating password:", error);
    }
};

const validateUserEmail = async(tagetvalue, validMes) => {
    try {
        const data = await fetchUserData('get-user?email=', tagetvalue);
        return data[0].password;
    } catch {
        return validMes;
    }
}

export  { handleEmail, validateUser };