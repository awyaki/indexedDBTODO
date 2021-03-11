/** @jsxImportSource @emotion/react */
import "destyle.css";
import { useState, useEffect, ChangeEventHandler, MouseEvent } from "react";
import { Interpolation, Theme } from "@emotion/react";
import TodoList from "TodoList";
import { Todo } from "types";
import InputArea from "InputArea";
import EditField from "EditField";

const appStyle: Interpolation<Theme> = {
  width: "70%",
  minWidth: "400px",
  height: "100vh",
  margin: "0 auto",
  padding: ".7rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

const appTitleStyle: Interpolation<Theme> = {
  fontSize: "3rem",
  fontWeight: "lighter",
};


const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState<string>("");

  useEffect(() => {
  // データベースを開く

  // Appの初回マウント時にデータベースを作成する
    const openReq = indexedDB.open("todos", 1);
    openReq.onupgradeneeded = () => {
      const db = openReq.result;
      const objStore = db.createObjectStore("todo", {
        keyPath: "id",
        autoIncrement: true,
      })
    };
    openReq.onsuccess = () => {
      const db = openReq.result;
      const trans =  db.transaction("todo", "readonly");
      const objStore = trans.objectStore("todo");
      const getAllReq: IDBRequest<Todo[]> = objStore.getAll();
      getAllReq.onsuccess = () => {
        // IndexedDBに依存させたくないのであとでインターフェイスを作る
        setTodos(getAllReq.result);
      };
    };
  }, []);



  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setText(e.target.value);
  };

  const handleTodoCreate = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (text !== "") {
      // データベースの更新
      const openReq = indexedDB.open("todos");
      openReq.onsuccess = () => {
        const db = openReq.result;
        const trans = db.transaction("todo", "readwrite");
        const objStore = trans.objectStore("todo");
        objStore.add({ title: text });
        const getAllReq: IDBRequest<Todo[]> = objStore.getAll();
        getAllReq.onsuccess = () => {
          setTodos(getAllReq.result);
        }
      };

      setText("");
    }
  };

  const handleTodoDelete = (e: MouseEvent<HTMLButtonElement>, id: number) => {
    const openReq = indexedDB.open("todos");
    openReq.onsuccess = () => {
      const db = openReq.result;
      const trans = db.transaction("todo", "readwrite");
      const objStore = trans.objectStore("todo");
      objStore.delete(id);
      const getAllReq: IDBRequest<Todo[]> = objStore.getAll();
      getAllReq.onsuccess = () => {
        setTodos(getAllReq.result);
      };
    };
  };

  return (
    <div css={appStyle}>
      <h1 css={appTitleStyle}>TODO</h1>
      <TodoList todos={todos} handleTodoDelete={handleTodoDelete} />
      <InputArea 
        text={text}
        handleChange={handleChange}
        handleClick={handleTodoCreate} />
        <EditField />
    </div>
  );
};

export default App;