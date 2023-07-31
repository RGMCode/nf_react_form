
import './App.css'
import {useState} from "react";

    function App() {
        const [firstName, setFirstName] = useState("");
        const [lastName, setLastName] = useState("");

        function handleSubmit(event: { preventDefault: () => void; }) {
            event.preventDefault();
            //logic
            console.log(firstName + " " + lastName)

            setFirstName("")
            setLastName("")
        }

        const isNotEmpty  = firstName === "" || lastName === "" ? true : false;

        return (
            <>
                <form onSubmit={handleSubmit}>
                    <label>First name:</label>
                    <input type={"text"} value={firstName} onChange={event => setFirstName(event.target.value)}/>
                    <label>Last name:</label>
                    <input type={"text"} value={lastName} onChange={event => setLastName(event.target.value)}/>
                    <button disabled={isNotEmpty}>Submit</button>
                </form>
            </>
        )
    }

export default App
