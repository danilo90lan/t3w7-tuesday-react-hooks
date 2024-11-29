import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [count, setCount] = useState(0);
    const [randomWord, setWord] = useState("Ciao");

    //lifecycle methods
    //useEffect() method ====> 2 parameters callback funcion and dependency array

    //Works like componentDidMount (Only once)
    useEffect(() => {
        console.log(`Component Mounted.`);
        //works like componentDidUnmount
    
        return (() => {
            console.log("Component will unmount now")
        })
    }, [])


    //Works like componentDidUpdate
    useEffect(() => {
        console.log(`Count is now ${count}`);
    }, [randomWord, count])

    

    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default App
