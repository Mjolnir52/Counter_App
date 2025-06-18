import React, { useState, useEffect } from 'react';

const Counter = () => {
    const [inputtext, setInputText] = useState("");
  return (
    <div className='bg-gray-100 p-10 mt-10 place-content-center`ne '>
        <h1>Write Something</h1>
        <input type="text" onChange={(e)=>setInputText(e.target.value)} placeholder='Write Something'/>
        <p>{inputtext}</p>
    </div>
  )
}

export default Counter
