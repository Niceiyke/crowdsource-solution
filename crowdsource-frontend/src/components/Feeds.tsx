// src/components/TwitterFeed.tsx

import React from 'react';

const tweets = [
    {
        id: 1,
        username: 'user1',
        tweet: 'This is the first tweet!',
    },
    {
        id: 2,
        username: 'user2',
        tweet: 'Second tweet here.',
    },
    // Add more tweets as needed
];

const QuestionFeed: React.FC = () => {
    return (
        <main className="w-full max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-4">Twitter Feed</h1>
            <div className="space-y-4">
                {tweets.map((tweet) => (
                    <div key={tweet.id} className="bg-white p-4 rounded shadow">
                        <p className="text-lg font-semibold mb-2">@{tweet.username}</p>
                        <p>{tweet.tweet}</p>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default QuestionFeed;
