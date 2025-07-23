import { Route, Routes } from "react-router-dom";
import "./App.css";
import { getEmotionImgById } from "./util";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";
import New from "./pages/New";
import { Link } from "react-router-dom";
import Editor from "./component/Editor";
import React, { useEffect, useReducer, useRef, useState } from "react";

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

const mockData = [
  {
    id: "mock1",
    date: new Date().getTime(),
    content: "완전 좋아요!!!",
    emotionId: 1,
  },
  {
    id: "mock2",
    date: new Date().getTime() - 10,
    content: "좋아요~~~~~",
    emotionId: 2,
  },
  {
    id: "mock3",
    date: new Date().getTime() - 100,
    content: "그럭저럭~~~",
    emotionId: 3,
  },
];
function reducer(state, action) {
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      return [action.data, ...state];
    }
    case "UPDATE": {
      return state.map((it) => {
        return String(it.id) === String(action.data.id)
          ? { ...action.data }
          : it;
      });
    }
    case "DELETE": {
      return state.filter((it) => String(it.id) !== String(action.targetId));
    }
    default:
      return state;
  }
}
function App() {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);
  useEffect(() => {
    dispatch({
      type: "INIT",
      data: mockData,
    });
    setIsDataLoaded(true);
  }, []);
  const onCreate = (date, content, emotionId) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current,
        date: new Date(date).getTime(),
        content,
        emotionId,
      },
    });
    idRef.current += 1;
  };
  const onUpdate = (targetId, date, content, emotionId) => {
    dispatch({
      type: "UPDATE",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotionId,
      },
    });
  };
  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    });
  };
  if (!isDataLoaded) {
    return <div>데이터를 불러오는 중입니다.</div>;
  } else {
    return (
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/edit/:id" element={<Edit />} />
              <Route path="/diary/:id" element={<Diary />} />
              <Route path="/new" element={<New />} />
            </Routes>
          </div>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    );
  }
}

export default App;
