import React, { useState } from 'react';
import Tweet from './Tweet'; // adjust path if using /components

const App = () => {
  const [tweets, setTweets] = useState([]);
  const [tweetText, setTweetText] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const handlePostTweet = () => {
    if (tweetText.trim() === '') return;

    if (isEditing) {
      setTweets(tweets.map(tweet =>
        tweet.id === editId ? { ...tweet, text: tweetText } : tweet
      ));
      setIsEditing(false);
      setEditId(null);
    } else {
      const newTweet = {
        id: Date.now(),
        text: tweetText
      };
      setTweets([newTweet, ...tweets]);
    }

    setTweetText('');
  };

  const handleEdit = (id) => {
    const tweetToEdit = tweets.find(t => t.id === id);
    setTweetText(tweetToEdit.text);
    setIsEditing(true);
    setEditId(id);
  };

  const handleDelete = (id) => {
    setTweets(tweets.filter(t => t.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-xl">
        <h1 className="text-2xl font-bold mb-4 text-center">📝 Tweet App</h1>

        <div className="mb-4">
          <textarea
            className="w-full border rounded-lg p-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="What's on your mind?"
            value={tweetText}
            onChange={(e) => setTweetText(e.target.value)}
          />
          <button
            onClick={handlePostTweet}
            className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-all"
          >
            {isEditing ? 'Update Tweet' : 'Post Tweet'}
          </button>
        </div>

        <div>
          {tweets.length === 0 ? (
            <p className="text-gray-500 text-center">No tweets yet</p>
          ) : (
            tweets.map(tweet => (
              <Tweet
                key={tweet.id}
                tweet={tweet}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
