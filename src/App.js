
import axios from 'axios'
import {useState, useEffect} from 'react'


function App() {
  const [ users, setUsers ] = useState( null )
  const [ error, setError ] = useState( null )
  
  const url='https://jsonplaceholder.typicode.com/users'
  
useEffect(() => {

  axios.get( url )
    .then( ( response ) => {
  setUsers(response.data)
    } )
    .catch( ( error ) => {
      setError( error.message )
      
    
  })

}, [])

  return (
    <div className="App">
      <header className="App-header">
        Data Fetch with Axios
      </header>
      <div>{users && <pre>{JSON.stringify( users, null, 2 )}</pre>}</div>
      <div>{error && <pre>{JSON.stringify( error, null, 2 )}</pre>}</div>
      
    </div>
  );
}

export default App;