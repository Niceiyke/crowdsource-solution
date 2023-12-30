
import { ThreeScreen } from '../layouts/SplitScreen';

import RightSidebar from '../components/RightSidebar';
import LeftSidebar from '../components/LeftSidebar';
import QuestionDetail from '../components/QuestionDetail';

function QuestionDetailPage() {
    return (

        <ThreeScreen left={<LeftSidebar />} center={<QuestionDetail />} right={<RightSidebar />} />

    );
}




export default QuestionDetailPage