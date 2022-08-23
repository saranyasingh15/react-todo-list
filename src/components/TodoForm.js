// import React, {useState,useEffect,useRef} from 'react'

// function TodoForm(props) {
//     const [input,setInput]=useState(props.edit ? props.edit.value:'');

//     const inputRef= useRef(null)

//     useEffect(()=>{
//         inputRef.current.focus()
//     });

//     const handleSubmit = e =>{
//         e.preventDefault(); //page will not refreshon clicking the submit button
        
//         props.atSubmit({
//             id:Math.floor(Math.random()*10000),
//             text:input
//         });
//         setInput('') //after clicking on Add Todo button the field becomes empty again
//     }

//     const handleChange=e=>{
//         setInput(e.target.value)
//     }

//   return (
//     <form className='todo-form' onSubmit={handleSubmit} >
//         {props.edit ? (
//         <>
//         <input
//                 type="text"
//                  placeholder='update your item' 
//                  value={input} 
//                  name="text"
//                 className='todo-input' 
//                 onChange={handleChange} 

//                 // className='todo-button edit'
//                 ref={inputRef}
//                  />
//                <button className='todo-button' 
//             //    className='todo-button edit'
//             >
//                 update</button>)
//                </>
//                 ):(
//                 <>
//                 <input
//                 type="text"
//                  placeholder='Add a todo' 
//                  value={input}
//                   name="text"
//                   className='todo-input' 
//                   onChange={handleChange} 
//                   ref={inputRef} />

//                <button className='todo-button' onClick={handleSubmit}>Add a todo
//                </button>
//                </>
//                 )}
              
        
//     </form>
//   );
// }

// export default TodoForm

import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input

    })
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Add a todo'
            value={input}
            onChange={handleChange}
            // name='text'
            className='todo-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='todo-button'>
            Add todo
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;