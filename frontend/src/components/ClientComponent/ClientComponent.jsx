import { useDispatch, useSelector } from 'react-redux';
import { removeClient, removePaymentMethod } from '../../redux/gestionale';
import classes from './client-component.module.css';

export const ClientComponent = (props) => {
	const dispatch = useDispatch()
	const clients = useSelector(state=> state.gestionale.value)

	const handleDelete = (type)=>{
		if(type==="clients"){
			dispatch(removeClient(props.id))
		console.log(clients,props.id)
		}else if(type==="payments"){
			dispatch(removePaymentMethod(props.id))
		}
	}

	return (
		<div className={classes["client-component"]}>
			<h3>{props.name}</h3>
			<button onClick={()=>{handleDelete(props.type)}}>X</button>
		</div>
	);
};