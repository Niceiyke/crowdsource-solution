import { Link } from "react-router-dom";
import { getSnippet } from "../utils/Formater";

interface QuestionCardProps {
  id: string
  title: string
  description: string

}

const QuestionCard: React.FC<QuestionCardProps> = ({ id, title, description }) => {
  // Check if the date string is valid

  return (
    <article className="">
      <Link to={id} className="text-green-700">{title}</Link>
      <p className="text-gray-800 text-sm">{getSnippet(description)}</p>

    </article>
  );
};

export default QuestionCard;