import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo } from "../api/todoSlice";
import { useState } from "react";

const Parent = () => {
    const data = useSelector(state => state.list.data);
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    const deleteItem = (index) => {
        dispatch(deleteTodo(index));
    };

    const addItem = () => {
        dispatch(addTodo(text));
        setText("");
    };

    return (
        <div className="parent">
            <ul>
                {
                    data.map((item, index) => (
                        <li key={index}>
                            <span>{item}</span>
                            <button onClick={() => deleteItem(index)}>Delete</button>
                        </li>
                    ))
                }
            </ul>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={addItem}>Add</button>
        </div>
    );
};

export default Parent;
