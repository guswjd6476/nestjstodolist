import { useEffect, useState } from 'react'
import { TodoObject } from '../Todo';
import { addTodo, markTodoDone, removeTodo, setTodoChange, updateTodo } from '@/Todofunction';


export default function Home() {
  const [todo, setTodo] = useState({
    title: '',
    content: '',
  });
  const [todos, setTodos] = useState<TodoObject[]>([]);
  const [editInfo, setEditInfo] = useState<string | null>(null);

   console.log(todos,'??todos')
  useEffect(() => {
    const localtodolist =  window.sessionStorage.getItem('todolist');
    const Jsonlocaltodolist =  localtodolist&&JSON.parse(localtodolist);
    
    if (localtodolist) {
      setTodos(Jsonlocaltodolist);
    }
  }, []);


  const startEditingTodo = (id: string) => {
    setEditInfo(id);
  };

 

  return (
    <>
      <header className="bg-slate-950 p-4">
        <h1 className="text-5xl text-white">TODO LIST</h1>
      </header>

      <main className="p-4">
        <div className='flex flex-col'>
        <input
            type="text"
            placeholder="할일의 제목"
            className="p-2 rounded mb-1 text-slate-900"
            onChange={(e) => setTodo({ ...todo, title: e.target.value })}
            value={todo.title}
          />
          <textarea
            type="text"
            placeholder="자세한 내용"
            className="p-2 rounded mb-1 text-slate-900"
            onChange={(e) => setTodo({ ...todo, content: e.target.value })}
            value={todo.content}
            rows={5}
          />
          <button className="border-2 p-2 text-white bg-sky-700 rounded" onClick={() => addTodo(todos,setTodos,todo,setTodo)}>
            할일 추가
          </button>
        </div>
        <ul className="mt-5">
          {todos&&todos.map((todo, index) => (
            <li
              key={todo.id}
              className={`text-1xl ml-5 cursor-pointer ${
                todo.done ? 'line-through' : 'no-underline'
              }`}
            // Updated this line
            >
              {editInfo === todo.id ? (
                <>
                  <input
                  style={{color:'#000'}}
                    type="text"
                    value={todo.value}
                    onChange={(e)=>setTodoChange(todo,setTodos,e)}
                  />
                  <button className="ml-2" onClick={() => updateTodo(setEditInfo,todos)}>
                    Save
                  </button>
                </>
              ) : (
                <>
                  {index + 1}.
                  <span   onClick={() => markTodoDone(todo.id,todos,setTodos,todo)}  className="ml-1">{todo.value}</span>
                  <button
                    className="ml-2 text-xs text-red-500"
                    onClick={(e) => {
                      e.stopPropagation();
                      // 이벤트 버블링 
                      removeTodo(todo.id,todos,setTodos)}}
                  >
                    삭제
                  </button>
                  <button
                    className="ml-2 text-xs"
                    onClick={() => startEditingTodo(todo.id)}
                  >
                    수정
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
