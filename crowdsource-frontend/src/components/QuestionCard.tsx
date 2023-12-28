import { formatDistanceToNow } from 'date-fns';

interface QuestionCardProps {
    title:string
    description:string
    created_at:string
  }

const QuestionCard: React.FC<QuestionCardProps> = ({ title,description,created_at }) => {
    const formattedDate = formatDistanceToNow(new Date(created_at), {
        addSuffix: true,
      });
    return (
      <article>
        <h4>{title}</h4>
 
        <p>{description}</p>
        <p>{formattedDate}</p>
      </article>
    );
  };
  
  export default QuestionCard;