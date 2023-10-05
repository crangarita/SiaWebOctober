import { useState } from "react";
import reactLogo from './../assets/react.svg'
import './../App.css'

export default function Principal() {
    const [count, setCount] = useState(0)

    const badge = 'https://assets.holopin.io/hf2023levels/level0-gold-0-0-0.webp'
    return (

        <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={badge} className="badge" alt="Vite logo" />
        </a>
      </div>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Site Hacktober Fest 2023</h1>
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

    );
}