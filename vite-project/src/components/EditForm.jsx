import { useState } from 'react'
function EditForm({ id, newContent, editTodo }) {
    const [content, setContent] = useState(newContent);
    return <form className="create-form" onSubmit={(e) => {
        e.preventDefault();
        editTodo(id, content);
        setContent('');
    }}>
        <input type="text" placeholder="Enter a new todo..." value={content} onChange={(e) => setContent(e.target.value)} />
        <button type="submit">Finish</button>
    </form>
}
export default EditForm