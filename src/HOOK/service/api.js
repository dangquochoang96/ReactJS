import axios from 'axios'

const getListDataUsers = async (page = 1) => {
    //Hiển thị 3 User trên 1 trang
    const perPage = 3
    const url = `https://reqres.in/api/users?page=${page}&per_page=${perPage}`
    const response = await axios.get(url)
    const data = await response.status === 200 ? response.data : []
    return data
}
export const api = {getListDataUsers}