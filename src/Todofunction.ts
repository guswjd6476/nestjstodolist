import { v4 as uuid } from 'uuid';

export const addTodo = (todos,setTodos,todo,setTodo) => {
    const localtodolist =  window.sessionStorage.getItem('todolist');
   const Jsonlocaltodolist =  localtodolist&&JSON.parse(localtodolist);
  
    const newdata = { id: uuid(), value: todo, done: false };
    const newArray = Jsonlocaltodolist ? [newdata, ...Jsonlocaltodolist] : [newdata];
  
    window.sessionStorage.setItem('todolist', JSON.stringify(newArray));
    setTodos([newdata, ...todos]);
    setTodo('');
  };

  export  const removeTodo = (id: string,todos,setTodos) => {
    const updatedTodos = todos.filter(todo=>todo.id !==id)
     window.sessionStorage.setItem('todolist', JSON.stringify(updatedTodos));
    setTodos(prev => prev.filter((todo) => todo.id !== id));
  };


  export const markTodoDone = (id: string, todos, setTodos) => {
     const updatedTodos = todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t));
    setTodos(updatedTodos);
    window.sessionStorage.setItem('todolist', JSON.stringify(updatedTodos));
  };


 export const setTodoChange =(todo,setTodos,e)=>{
  
    setTodos((prevTodos) =>
    prevTodos.map((t) =>
      t.id === todo.id ? { ...t, value: e.target.value } : t
    )
  );
  }
 export const updateTodo = (setEditInfo,todos) => {
    window.sessionStorage.setItem('todolist', JSON.stringify(todos));
    setEditInfo(null);
  };