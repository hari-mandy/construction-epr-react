const fetchUserData = async (query, value) => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  let defaultData ;
  try {
    const response = await fetch(`${baseUrl}${query}${value}`);
    const data = await response.json();
    defaultData = data;
  } catch (error) {
    defaultData = "*Error in connecting Data Base !";
  }
  return  defaultData ;
}

export default fetchUserData
