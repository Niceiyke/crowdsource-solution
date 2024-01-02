import QuestionButton from "./QuestionButton";
import Questions from "./Questions";


const QuestionFeed: React.FC = () => {
    return (
        <main className="w-full ">
            <QuestionButton to="/ask" text="Ask A Question"/>
            <Questions/>
        </main>
    );
};

export default QuestionFeed;
