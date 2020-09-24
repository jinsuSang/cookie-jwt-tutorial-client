import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [token, setToken] = useState('')
  const [breads, setBreads] = useState([])
  const [newBread, setNewBread] = useState('')
  const fetchToken = async () => {
    try {
      await axios.get('/bakery')
    } catch (error) {
      console.error(error)
    }
  }

  const fetchBreads = async () => {
    try {
      const { data } = await axios.get('/breads', { withCredentials: true })
      setBreads(data)
    } catch (error) {
      console.error(error)
    }
  }

  const breadLists = breads.map(bread => {
    return <li key={bread}>{bread}</li>
  })

  const newBreadHandler = (event) => {
    setNewBread(event.target.value)
  }

  const createNewBread = async (event) => {
    event.preventDefault()
    if (newBread) {
      try {
        await axios.post('/newBread', { newBread }, {
          withCredentials: true
        })
      } catch (error) {
        console.error(error)
      }
    }
  }
  return (
    <div>
      <div>
        <button onClick={fetchToken}>Get Token</button>
        <p>{token}</p>
      </div>
      <div>
        <button onClick={fetchBreads}>Get Breads</button>
        <ul>{breadLists}</ul>
      </div>
      <form onSubmit={createNewBread}>
        <input onChange={newBreadHandler} placeholder='create new bread' />
        <button>New Bread!!</button>
      </form>
    </div>
  );
}
export default App;