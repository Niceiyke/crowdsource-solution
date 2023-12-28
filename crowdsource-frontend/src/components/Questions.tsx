
import { useQuery } from '@tanstack/react-query'

import { getQuestions } from '../apis/apis'

import QuestionsList from './QuestionList';

function Questions() {

    const {data,isLoading,error} =useQuery({queryKey:['questions'],queryFn:getQuestions})

    if (isLoading) {
        return <p>Loading...</p>;
      }
    
      if (error) {
        return <p>Error: {error.message}</p>;
      }

      console.log(data)
    
  return (
    <section>
         {data?.map((question)=>(
            <QuestionsList key={question.id} data={question} />
         ))}
    </section>
  )
}

export default Questions