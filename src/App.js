import "./styles.css";
import axios from "axios";
import { useEffect, useState } from "react";
export default function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchReddit = async () => {
      const redditAPI = "https://www.reddit.com/r/gaming.json";
      const res = await axios.get(redditAPI);
      const newPosts = res.data.data.children.map((el) => el.data);
      console.log(newPosts);
      setPosts(newPosts);
    };
    fetchReddit();
  }, []);
  return (
    <div className="App">
      <h1>r/reactjs</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <i>{post.author}</i>:
            <a href={`https://www.reddit.com/${post.permalink}`}>
              <strong>{post.title}</strong>
            </a>
            ^{post.score}
          </li>
        ))}
      </ul>
      {}
    </div>
  );
}
