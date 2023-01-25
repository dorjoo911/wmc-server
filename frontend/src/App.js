import { Route, Routes, BrowserRouter } from "react-router-dom";
import axios from "axios";
import AddPost from "./components/AddPosts";
import Loginout from "./Loginout";
import Home from "./Home";
import ListPosts from "./ListPosts";
import About from "./screens/About";

axios.defaults.baseURL = "http://http://18.204.7.140/";
function App() {
  return (
    <header className="App-header">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/auth" element={<Loginout />}></Route>
          <Route path="/addpost" element={<AddPost />}></Route>
          <Route path="/listpost" element={<ListPosts />}></Route>
          {/* <Route path="/followers" element={<Followers />}></Route> */}
          {/* <Route path="/review" element={<Review />}></Route> */}
          {/* <Route path="/join" element={<Join />}></Route> */}
        </Routes>
      </BrowserRouter>
    </header>
  );
}

export default App;
