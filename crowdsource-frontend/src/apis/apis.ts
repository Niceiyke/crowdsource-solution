

const BASEURL = 'http://127.0.0.1:8000/api'



export const getQuestions = async (): Promise<Question[]> => {
   const response = await fetch(`${BASEURL}/problems`)

   return response.json()
}

export const addQuestion = async (newData: NewQuestion): Promise<any> => {
   const response = await fetch(`${BASEURL}/problems`, {
      method: 'POST',
      body: JSON.stringify(newData),
      headers: {
         'Content-Type': 'application/json',
      },
   });

   return response.json();
}