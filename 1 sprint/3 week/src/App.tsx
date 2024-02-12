import './App.css';
import {useEffect, useRef, useState} from 'react';
import {UniButton} from './components/UniButton';
import {UniInput} from './components/UniInput';


type Response = {
    userId: number
    id: number
    title: string
    completed: boolean
}

function App() {
    const [todos, setTodos] = useState<Response[]>([])
    // const [title, setTitle] = useState('')
    const title = useRef<HTMLInputElement | null>(null)

    const fetchFoo = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setTodos(json))
    }

    useEffect(() => fetchFoo(), [])
    const showMeHandler = () => fetchFoo()
    const hideMeHandler = () => setTodos([])


    const addTodo = () => {

        if (title.current) {
            const newTodo: Response = {
                userId: 666,
                id: todos.length + 1,
                title: title.current.value,
                completed: false
            }

            setTodos([newTodo, ...todos])
            title.current.value = ''
        }


    }


    return (
        <div className="App">
            <div>
                <UniButton name={'Show me'} onClick={showMeHandler}/>
                <UniButton name={'Hide me'} onClick={hideMeHandler}/>
            </div>

            <div>
                <UniInput value={title}/>
                <UniButton name={'Send'} onClick={addTodo}/>
            </div>
            <ul>
                {todos.map(t => {
                    return (
                        <li key={t.id}>
                            <span>{t.id}-</span>
                            <span>{t.userId}-</span>
                            <span>{t.title}-</span>
                            <input type={'checkbox'} checked={t.completed}></input>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default App;

