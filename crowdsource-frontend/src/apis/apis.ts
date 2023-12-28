

const BASEURL ='http://127.0.0.1:8000/api'



export const getQuestions =async (): Promise<Question[]>=>{
   const response = await fetch(`${BASEURL}/problems`)

   return response.json()
}