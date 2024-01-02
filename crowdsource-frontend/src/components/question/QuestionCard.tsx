import { getSnippet } from "../../utils/Formater";

interface QuestionCardProps {
  id: string
  title: string
  description: string

}

const QuestionCard: React.FC<QuestionCardProps> = ({title, description }) => {
  // Check if the date string is valid

  return (
    <article className="">
      <h3 className="text-green-700">{title}</h3>
      <p className="text-gray-800 text-sm">{getSnippet(description)}</p>

    </article>
  );
};

export default QuestionCard;