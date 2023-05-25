import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Login from "./Pages/Login/Login";
import Join from "./Pages/Join/Join";
// import Main from "./Pages/Main/Main";
// import Map from "./Pages/Map/Map";
// import Place from "./Pages/Place/Place";
// import Review from "./Pages/Review/Review";
import ReviewWrite from "./Pages/ReviewWrite/ReviewWrite";
import Error from "./Pages/Error/Error";
// import Board from "./Pages/Board/Board";
import Write from "./Pages/Write/Write";
import Search from "./Pages/Search/Search";
// import Post from "./Pages/Post/Post";
import MyPage from "./Pages/MyPage/MyPage";
import MyPageEdit from "./Pages/MyPageEdit/MyPageEdit";
import Setting from "./Pages/Setting/Setting";
import PasswordChange from "./Pages/PasswordChange/PasswordChange";
import Personal from "./Pages/Personal/Personal";
import Service from "./Pages/Service/Service";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/join" element={<Join />} />
          {/* <Route path="/main" element={<Main />} />
          <Route path="/map" element={<Map />} />
          <Route path="/place" element={<Place />} />
          <Route path="/review" element={<Review />} /> */}
          <Route path="/reviewWrite" element={<ReviewWrite />} />
          <Route path="/error" element={<Error />} />
          {/* <Route path="/board" element={<Board />} /> */}
          <Route path="/write" element={<Write />} />
          <Route path="/search" element={<Search />} />
          {/* <Route path="/post" element={<Post />} /> */}
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/mypageEdit" element={<MyPageEdit />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/passwordChange" element={<PasswordChange />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/service" element={<Service />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
