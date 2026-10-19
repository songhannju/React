import CreateForm from "./CreateForm.jsx"
import Todo from "./Todo.jsx"
import { useState } from "react"
function TodoWrapper() {
    const [todos, setTodos] = useState(
       [ {content: 'wash toilet', id: 'abc', isCompleted:true, isEditing: false}, {content: 'clean the house', id: 'def', isCompleted: false, isEditing: false}, {content: 'buy groceries', id: 'ghi', isCompleted: false, isEditing: false}
    ]);
    const addTodo = (content) => {
        const newTodo = {content: content, id: Math.random().toString(36).substr(2, 9), isCompleted: false, isEditing: false};
        setTodos((currentTodos) => [...currentTodos, newTodo]);
    }
    const deleteTodo = (id) => {
        setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
    }
    const editTodo = (id, newContent) => {
        setTodos((currentTodos) => currentTodos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, content: newContent, isEditing: false };
            }
            return todo;
        }));
    };
    const toggleComplete = (id) => {
        setTodos((currentTodos) => currentTodos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, isCompleted: !todo.isCompleted };
            }
            return todo;
        }));
    };
    const toggleEdit = (id) => {
        setTodos((currentTodos) => currentTodos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, isEditing: !todo.isEditing };
            }
            return todo;
        }));
    };
    return <div className="wrapper">
        <h1>ToDoList</h1>
        <CreateForm addTodo={addTodo} />
        {todos.map((todo) => {
            return <Todo key={todo.id} id={todo.id} content={todo.content} isCompleted={todo.isCompleted} isEditing={todo.isEditing} deleteTodo={deleteTodo} toggleComplete={toggleComplete} toggleEdit={toggleEdit} editTodo={editTodo} />
        })}
    </div>
}

export default TodoWrapper