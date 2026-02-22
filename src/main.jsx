import React, { useEffect } from 'react'
import { useState } from "react";
import { createRoot } from 'react-dom/client'
import './style.css'


const Items = [
  {id: Math.floor(Math.random() * 1000), name: "Object 1"},
  {id: Math.floor(Math.random() * 1000), name: "Object 2"},
  {id: Math.floor(Math.random() * 1000), name: "Object 3"},
];

function Welcome() {
  return (
  <div>
      <h1>Hello, world!</h1>
      <p>Expand the list to see items</p>
  </div>
  );
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