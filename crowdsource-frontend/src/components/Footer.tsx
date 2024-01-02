// components/UpvoteDownvoteComment.tsx
import React from 'react';
import { FaComment} from 'react-icons/fa';
import { BiUpvote,BiDownvote} from 'react-icons/bi';
import IconButton from './IconButton';


const Footer: React.FC = () => {
  
  const vote= ()=>{}

  return (
    <div className="flex shadow-lg mt-2">
        <IconButton icon={<BiUpvote/>} onClick={vote} color=''/>
        <IconButton icon={<BiDownvote/>} onClick={vote} color=''/>
        <IconButton icon={<FaComment/>} onClick={vote} color='text-green-700'/>
       

    </div>
  );
};

export default Footer;
