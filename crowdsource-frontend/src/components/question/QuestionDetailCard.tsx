import SolutionFooter from "../Footer";
import UserCard from "../UserCard";
import Solution from "../solution/Solution";


const QuestionDetailCard: React.FC<Question> =({id,title,description,created_at,user})=>{
    
  return (
    <div>
      <section className="p-2">
        <UserCard avatar={user.profile_picture} username={user.username} duration={created_at}/>
        <p className=" font-semibold text-xl mb-2">{title}</p>
        <p>{description}</p>
        <SolutionFooter/>
      </section>

      <Solution id={id}/>
      
    </div>
  );
}

export default QuestionDetailCard;
