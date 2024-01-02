interface SolutionCardProps {
  id: string
  title: string
  description: string

}

const SolutionCard: React.FC<SolutionCardProps> = ({description}) => {

  return (
    <article className="p-4">
      <p className="text-gray-800 text-md">{description}</p>
    </article>
  );
};

export default SolutionCard;