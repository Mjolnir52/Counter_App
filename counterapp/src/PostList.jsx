import React, { useState } from 'react';

const PostList = () => {
  const postData = [
    {
      userId: 1,
      id: 1,
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      userId: 1,
      id: 2,
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      userId: 1,
      id: 3,
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
      userId: 1,
      id: 4,
      title: "eum et est occaecati",
      body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    }
  ];

  const [selectedId, setSelectedId] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);

  const handleChange = (e) => {
    const id = parseInt(e.target.value);
    setSelectedId(id);
    const foundPost = postData.find(post => post.id === id);
    setSelectedPost(foundPost || null);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Select Post ID</h1>

      <select value={selectedId} onChange={handleChange} className="border p-2 mb-4">
        <option value="">-- Select ID --</option>
        {postData.map(post => (
          <option key={post.id} value={post.id}>
            {post.id}
          </option>
        ))}
      </select>

      {selectedPost ? (
        <div className="border p-4 rounded shadow">
          <h2 className="text-xl font-semibold">{selectedPost.title}</h2>
          <p className="mt-2 whitespace-pre-line">{selectedPost.body}</p>
        </div>
      ) : (
        selectedId && <p>No post found with that ID.</p>
      )}
    </div>
  );
};

export default PostList;
