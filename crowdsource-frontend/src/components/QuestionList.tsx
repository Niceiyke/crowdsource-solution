// src/components/QuestionsList.js
import React from 'react';

const QuestionsList = () => {
    return (
        <div className="w-3/4">
            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Latest Questions</h2>
                {/* Replace this with a list of questions */}
                <div className="bg-white p-4 shadow">
                    <h3 className="text-lg font-semibold">Sample Question Title</h3>
                    <p className="text-gray-600">Sample question description...</p>
                </div>
            </div>
        </div>
    );
};

export default QuestionsList;
