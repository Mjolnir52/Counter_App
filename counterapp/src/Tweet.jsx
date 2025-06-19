import React, { useState } from 'react';

const Tweet = ({ tweet, onEdit, onDelete }) => {
  const [liked, setLiked] = useState(false);
  const [unliked, setUnliked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const [unlikesCount, setUnlikesCount] = useState(0);
  const [rating, setRating] = useState(0);
  const [rated, setRated] = useState(false);

  const handleLike = () => {
    if (!liked && !unliked) {
      setLiked(true);
      setLikesCount(likesCount + 1);
    } else if (!liked && unliked) {
      setLiked(true);
      setUnliked(false);
      setLikesCount(likesCount + 1);
      setUnlikesCount(unlikesCount - 1);
    }
  };

  const handleUnlike = () => {
    if (!unliked && !liked) {
      setUnliked(true);
      setUnlikesCount(unlikesCount + 1);
    } else if (!unliked && liked) {
      setUnliked(true);
      setLiked(false);
      setUnlikesCount(unlikesCount + 1);
      setLikesCount(likesCount - 1);
    }
  };

  const handleRating = (value) => {
    if (!rated) {
      setRating(value);
      setRated(true);
    }
  };

  return (
    <div className="bg-gray-50 border rounded-lg p-4 mb-3">
      <p className="text-gray-800 mb-2">{tweet.text}</p>

      <div className="flex items-center space-x-3 mb-2">
        <button
          onClick={handleLike}
          disabled={liked}
          className={`text-sm px-3 py-1 rounded ${
            liked ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
          } disabled:opacity-50`}
        >
          👍 Like ({likesCount})
        </button>

        <button
          onClick={handleUnlike}
          disabled={unliked}
          className={`text-sm px-3 py-1 rounded ${
            unliked ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700'
          } disabled:opacity-50`}
        >
          👎 Unlike ({unlikesCount})
        </button>
      </div>

      <div className="mb-2">
        <span className="text-sm font-medium">⭐ Rate this tweet:</span>
        <div className="flex items-center space-x-1 mt-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => handleRating(star)}
              disabled={rated}
              className={`text-xl ${
                rating >= star ? 'text-yellow-400' : 'text-gray-300'
              } ${rated ? 'cursor-not-allowed' : 'hover:text-yellow-500'}`}
            >
              ★
            </button>
          ))}
          {rated && <span className="text-sm text-green-600 ml-2">Rated {rating}/5</span>}
        </div>
      </div>

      <div className="mt-1 space-x-2">
        <button
          onClick={() => onEdit(tweet.id)}
          className="text-sm text-blue-600 hover:underline"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(tweet.id)}
          className="text-sm text-red-600 hover:underline"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Tweet;