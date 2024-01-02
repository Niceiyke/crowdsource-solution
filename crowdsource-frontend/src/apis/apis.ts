import axios from "axios"


const BASEURL = 'http://127.0.0.1:8000/api'



export const getQuestions = async () => {
   return axios.get(`${BASEURL}/questions`)

}

export const addQuestion = async (newData: NewQuestion): Promise<any> => {
   return axios.post(`${BASEURL}/questions`, newData)
}

export const getQuestionDetail = async (qustionId: string | undefined) => {
   return axios.get(`${BASEURL}/question/${qustionId}`)
}

export const getSolution = async (qustionId: string | undefined) => {
   return axios.get(`${BASEURL}/solution/${qustionId}`)
}