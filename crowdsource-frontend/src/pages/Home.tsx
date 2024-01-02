import React from 'react'

import {ThreeScreen} from '../layouts/SplitScreen';
import QuestionFeed from '../components/question/QuestionFeed';
import RightSidebar from '../components/RightSidebar';
import LeftSidebar from '../components/LeftSidebar';

function Home() {
    return (

<ThreeScreen left={<LeftSidebar/>} center={<QuestionFeed/>} right={<RightSidebar/>}/>

    );
}




export default Home