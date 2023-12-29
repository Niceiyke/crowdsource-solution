import axios from "axios"


const BASEURL = 'http://127.0.0.1:8000/api'



export const getQuestions = async (): Promise<Question[]> => {
   const response = await fetch(`${BASEURL}/problems`)

   return response.json()
}

export const addQuestion = async (newData: NewQuestion): Promise<any> => {
   return axios.post(`${BASEURL}/problems`, newData)
}