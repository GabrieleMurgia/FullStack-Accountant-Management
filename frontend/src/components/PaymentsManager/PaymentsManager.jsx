import { useSelector } from 'react-redux';
import { CentralHeader } from '../../CentralHeader/CentralHeader';
import {ClientComponent} from "../ClientComponent/ClientComponent"
import classes from './payments-manager.module.css';

export const PaymentsManager = (props) => {
	 const clients = useSelector(state => state.gestionale.value.payments)
	 console.log(clients)
	return (
		<div>
			<CentralHeader type={"payments"}></CentralHeader>
			{clients && clients.map(item=>{
				return <ClientComponent key={item.id} id={item.id} name={item.name} type={"payments"}></ClientComponent>
			})}
		</div>
	);
};