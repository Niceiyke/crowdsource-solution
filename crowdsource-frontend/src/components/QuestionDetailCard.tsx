import QuestionFooter from "./QuestionFooter";
import UserCard from "./UserCard";


const QuestionDetailCard: React.FC<Question> =({title,description,user})=>{
    
  return (
    <div>
      <section className="p-2">
        <UserCard avatar={user.pix} username={user.username}/>
        <p className=" font-semibold text-xl mb-2">{title}</p>
        <p>{description}</p>
      </section>
      <QuestionFooter/>
    </div>
  );
}

export default QuestionDetailCard;
