import { useState } from 'react';
import classes from './login-component.module.css';

export const LoginComponent = (props) => {

	const [formEvent,setFormEvent] = useState({username:"",password:""})
	
	return (
		<div className={classes["login-component"]}>

			<div className={classes["form-container"]}>

				<div className={classes["inside-form-container"]}>
					
				<div>
				<label htmlFor="username">Inserisci Username</label>
				<input id="username" placeholder='username' type={"text"} onChange={(e)=>{setFormEvent({...formEvent,username:e.target.value})}} />
				</div>

				<div>	
				<label htmlFor="password">Inserisci password</label>
				<input id="password" placeholder='password' type={"password"} onChange={(e)=>{setFormEvent({...formEvent,password:e.target.value})}} />
				</div>

				<button disabled={formEvent.password ==="" || formEvent.username===""} onClick={props.handleLogin}>Accedi</button>

				</div>
			</div>

		</div>
	);
};