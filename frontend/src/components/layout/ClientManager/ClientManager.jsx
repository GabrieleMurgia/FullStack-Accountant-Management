import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CentralHeader } from '../../../CentralHeader/CentralHeader';
import { addClient } from '../../../redux/gestionale';
import { ClientComponent } from '../../ClientComponent/ClientComponent';
import classes from './client-manager.module.css';

export const ClientManager = (props) => {
	
	const count = useSelector((state) => state.gestionale.value)	

	return (
		<div className={classes["container-clienti"]}>
				<CentralHeader type="clients"></CentralHeader>
			{count && count.clients.map(item=>{
				return <ClientComponent key={item.id} id={item.id} name={item.name} type={"clients"}></ClientComponent>
			})}
		</div>
	);
};