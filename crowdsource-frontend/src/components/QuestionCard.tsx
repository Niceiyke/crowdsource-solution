import { Link } from "react-router-dom";
import { getSnippet } from "../utils/Formater";

interface QuestionCardProps {
  title: string
  description: string

}

const QuestionCard: React.FC<QuestionCardProps> = ({ title, description }) => {
  // Check if the date string is valid

  return (
    <article className="">
      <Link to='/' className="text-green-700">{title}</Link>
      <p className="text-gray-800 text-sm">{getSnippet(description)}</p>

    </article>
  );
};

export default QuestionCard;