import React, {useState} from 'react';


export function RegistrationView(props) {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, username, password);
        props.onLoggedIn(username);
    };

    return (
        <form>
            <label>
                Email:
                <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
            </label>
            <label>
                Username:
                <input type="text" value={username} onChange={e => setUsername(e.target.value)}/>

            </label>
            <label>
                Password:
                <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
            </label>
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
    );
}
