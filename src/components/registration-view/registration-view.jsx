import React, {useState} from 'react';
import styles from './registration-view.scss';


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
        <div class="form-group">
        <form>
            <label>
                Email:
                <input type="email" class="form-control" value={email} onChange={e => setEmail(e.target.value)}/>
            </label>
            <label>
                Username:
                <input type="text" class="form-control" value={username} onChange={e => setUsername(e.target.value)}/>

            </label>
            <label>
                Password:
                <input type="password" class="form-control" value={password} onChange={e => setPassword(e.target.value)}/>
            </label>
            <label>
                Confirm Password:
                <input type="password" class="form-control" value={password}/>
            </label>
            <button type="submit" onClick={handleSubmit}>Register</button>
        </form>
        </div>
    );
}
