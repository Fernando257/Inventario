import axios from 'axios'

const REACT_APP_API_URL = process.env.REACT_APP_API_URL
//Login 
export const loginUser = async (user) => {
  console.log(user)
  // return await axios.post(REACT_APP_API_URL + `/login`, userData, {
  //   headers: {
  //     'authorization': token
  //   }
  // })
}