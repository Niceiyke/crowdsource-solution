
import { ThreeScreen } from '../layouts/SplitScreen';

import RightSidebar from '../components/RightSidebar';
import LeftSidebar from '../components/LeftSidebar';
import QuestionForm from '../components/question/QuestionForm';

function QuestionPage() {
    return (

        <ThreeScreen left={<LeftSidebar />} center={<QuestionForm />} right={<RightSidebar />} />

    );
}




export default QuestionPage