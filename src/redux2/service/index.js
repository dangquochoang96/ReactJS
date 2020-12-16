import axios from 'axios'

export const getDataVirusCorona = async () => {
    const url = `https://api.covid19api.com/summary`
    const response = await axios.get(url);
    const result = await response.status === 200 ? await response.data : []
    return result
}



export const data = {
    nhiem_moi: 100, tong_nhiem: 3000, tu_vong: 123, tong_chet: 1232, khoi: 234, tong_khoi: 2342
}