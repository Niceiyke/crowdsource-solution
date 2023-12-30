import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import { getQuestionDetail } from "../apis/apis"
import QuestionDetailCard from "./QuestionDetailCard"



function QuestionDetail() {

    const { questionId } = useParams()

    const { data, isLoading, error } = useQuery({ queryKey: ['qustion', questionId], queryFn: () => getQuestionDetail(questionId) })
    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    const question:Question =data?.data
   

    return (
        <QuestionDetailCard id ={question.id} user={question.user} created_at={question.created_at} title={question.title} description={question.description}/>
    )
}

export default QuestionDetail