import { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <button onMouseDown={() => setCounter(counter - 1)}>-</button>
            {counter}
            <button onMouseDown={() => setCounter(counter + 1)}>+</button>
        </div>
    )

}
export default Counter;