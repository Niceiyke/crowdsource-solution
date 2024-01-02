import React from "react";
import { getSolution } from "../../apis/apis";
import { useQuery } from "@tanstack/react-query";
import SolutionCard from "./SolutionCard";
import UserCard from "../UserCard";
import Footer from "../Footer";

const Solution: React.FC<Solution> = ({ id }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["solution", id],
    queryFn: () => getSolution(id),
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  console.log(data?.data);

  return (
    <>
      {data?.data.map((solution: Solution) => (

        <section key={solution.id} className="border mb-2">
            <UserCard
            avatar={solution.solution_owner.profile_picture}
            username={solution.solution_owner.username}
            duration={solution.created_at}
            action= 'answerd'
          />
          <SolutionCard
            description={solution.description}
            id={solution.id}
            title={solution.description}
          />

          <Footer/>

        </section>
      ))}
    </>
  );
};

export default Solution;
