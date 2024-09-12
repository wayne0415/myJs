import { useState } from "react";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);
    const pushMe = (e) => {
        console.dir(e);
        setCount(count + 1);
    };
    return (
        <div>
            <button onClick={pushMe}>按了我{count}次</button>
        </div>
    );
}

export default App;
