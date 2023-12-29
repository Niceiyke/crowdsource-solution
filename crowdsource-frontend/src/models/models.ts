interface User {
  username: string;
  email: string;
  bio?: string;
  pix: string;
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
 category:string


}
