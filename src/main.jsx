import React, { useEffect } from 'react'
import { useState } from "react";
import { createRoot } from 'react-dom/client'
import './style.css'

const Items = [
  {id: 1, name: "Object 1"},
  {id: 2, name: "Object 2"},
  {id: 3, name: "Object 3"},
];

function Welcome() {
  return <h1>Hello!</h1>
}

function ItemList() {
  const [items] = useState(Items);
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide List" : "Generate List"}
      </button>

      {show && (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <img src={`https://picsum.photos/seed/${item.id}/200`} alt={item.name} width={200}/>
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function StatusMessage({ count }) {
  return (
    <p>{count > 0 ? `You have ${count} items` : "No items yet"}</p>
  );
}

function App() {
  return (
    <>
      <Welcome/>
      <ItemList/>
      <StatusMessage count={Items.length}/>
    </>
  )
}

createRoot(document.getElementById('app')).render(<App/>)