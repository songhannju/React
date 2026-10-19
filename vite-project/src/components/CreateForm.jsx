import { useState } from "react"
function CreateForm({addTodo}) {
    const [content, setContent] = useState('');
    return <form className="create-form" onSubmit={(e) => {
        e.preventDefault();
        addTodo(content);
        setContent('');
    }}>
        <input type="text" placeholder="Enter a new todo..." value={content} onChange={(e) => setContent(e.target.value)} />
        <button type="submit">Add</button>
    </form>
}
export default CreateForm