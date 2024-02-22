import { useState } from 'react'

export default function (SignUpForm) {
const [username, setUsername] = useState("")
const [password, setPassword] = useState("")
const [error, setError] = useState(null)
   
async function handleSubmit(event){
    event.preventDefault();

    try{
        const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username: username.data,
                password: password.data,
            })
        }) 
    }  catch(error) {
            setError(error.message)
    }
}   

return <>
   <h2>Sign Up!</h2>
   {error && <p>{error}</p>}
    <form onSubmit={handleSubmit}>
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