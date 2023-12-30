interface User {
  id: string;
  email: string;
  username: string;
  bio: string;
  total_point: number;
  profile_picture: string;
}


interface Question {
  id: string;
  user: User;
  title: string;
  description: string;
  created_at: string;
}

interface NewQuestion {
  title: string;
  description: string;
  created_by: string;
  category: string;


}

interface Comment {
  id: string;
  comment_owner: User;
  description: string;
  created_at: string;
  solution: string;
  created_by: string;
  parent: string | null;
}


interface Solution {
  id: string;
  comments: Comment[];
  solution_owner: User;
  user_vote: number;
  description: string;
  created_at: string;
  question: string;
  created_by: string;
}
