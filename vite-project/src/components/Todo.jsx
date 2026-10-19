import { MdDelete, MdEdit } from 'react-icons/md'
import EditForm from './EditForm.jsx'
function Todo({id, content, deleteTodo, isCompleted, toggleComplete, toggleEdit, isEditing, editTodo}) {
    return isEditing? <EditForm id={id} newContent={content} editTodo={editTodo} /> : <div className={`todo ${isCompleted ? 'completed' : ''}`}>
        <p onClick={() => toggleComplete(id)}>{content}</p>
        <div>
        <MdEdit style={{ cursor: 'pointer' }} onClick={() => toggleEdit(id)} />
        <MdDelete style={{ cursor: 'pointer', marginLeft: '5px' }} onClick={() => deleteTodo(id)} />
        </div>
    </div>
}
export default Todo