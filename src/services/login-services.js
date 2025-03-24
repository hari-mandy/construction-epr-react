import fetchUserData from '../hooks/fetchUserData'
import bcrypt from 'bcryptjs'

const handleEmail =  (e, requireMes, validMes) => { //Function to verfiy it is not null.
    const tagetvalue = e;
    if(tagetvalue === '') {
        return requireMes;
    }
    return validateUserEmail(tagetvalue, validMes);
}

const validateUser = async (event, UserData, userPassword, rememberMe, errorMessageEmail) => { //Function to verfiy user password & Password in DB.
    event.preventDefault(); 
    try {
        const isMatch = await bcrypt.compare(userPassword, UserData.password);
        if (!isMatch) {
            return '*Password not Match*';
        }
        if (rememberMe) {
            storeUserLocal(UserData);
            return 'success';
        }
        if (errorMessageEmail ) {
            return 'Check the above Fields';
        }
        storeUserLocal(UserData);
        return 'success';
    } catch (error) {
        alert("Error validating password:", error);
    }
};

const validateUserEmail = async(tagetvalue, validMes) => { //Function to verfiy the email in the DB.
    try {
        const data = await fetchUserData('get-user?email=', tagetvalue);
        if(!data.error) {
            return data[0];
        }
        return validMes;
    } catch {
        return validMes;
    }
}

const storeUserLocal = (data) => {
    localStorage.setItem('userDetail', JSON.stringify(data));
}

const checkLocalUser = () => {
    const user = localStorage.getItem('userDetail');
    if(user) {
        return user;
    }
    return ;
}

const handleUnique= async (type, value) => {
    if(type === 'name') {
        return ;
    }
    try {
        const response = await fetchUserData(`checkunique?${type}=`, value);
        if (response.isUnique) {
            return ;
        }
        return "*Is already in use*";
    } catch (error) {
        alert('Error checking value');
    }
}


export  { handleEmail, validateUser, checkLocalUser, handleUnique };