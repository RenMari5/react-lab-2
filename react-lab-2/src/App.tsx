import "./App.css";
import SocialPost from "./components/SocialPosts";

export interface Post {
  title: string;
  thought: string;
}

function App() {
  return (
    <div className="App">
      <SocialPost />
    </div>
  );
}

export default App;
