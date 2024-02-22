import { useState } from 'react'

export default function (SignUpForm) {
const [username, setUsername] = useState("")
const [password, setPassword] = useState("")
const [error, setError] = useState(null)
   return <>
   <h2>Sign Up!</h2>
    <form>
        <label htmlFor="">
        Username: <input type="text" value={username} onChange={(event) =>
        setUsername(event.target.value)}/>
        </label>
        <label htmlFor="" >
            Password: <input type="text" value={password} onChange={(event) =>
        setPassword(event.target.value)}/>
        </label>
        <button type="submit">Submit</button>
    </form>
    </>
} 