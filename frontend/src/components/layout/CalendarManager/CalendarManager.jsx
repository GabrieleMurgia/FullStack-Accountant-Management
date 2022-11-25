import classes from './calendar-manager.module.css';
import "react-big-calendar/lib/css/react-big-calendar.css"
import moment from 'moment-timezone';
import { ClientModal } from '../../../ClientModal/ClientModal';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Table } from 'antd';
require('moment/locale/it.js')

export const CalendarManager = (props) => {
	const expirations = useSelector((state) => state.gestionale.value.expirations)
	const [showModal,setShowModal] = useState(false)

	 

const columns = [
	{
		title:"Cliente",
		dataIndex:"costumer",
		key:"key"
	},
	{
		title:"Importo",
		dataIndex:"amount",
		key:"key"
	},
	{
		title:"Provvigione",
		dataIndex:"commission",
		key:"key"
	},
	{
		title:"Metodo Pagamento",
		dataIndex:"payment",
		key:"key"
	},
	{
		title:"Stato Pagamento",
		dataIndex:"status",
		key:"key"
	},
	{
		title:"Promemoria",
		dataIndex:"reminder",
		key:"key"
	},
	{
		title:"Data",
		dataIndex:"date",
		key:"key"
	},
]

	const handleShowModal = ()=>{
		setShowModal(!showModal)
	}

	return (
		<div>
			<button onClick={()=>handleShowModal()}>Aggiungi al Calendario</button>
				<Table
				 dataSource={expirations} 
				columns={columns}
				></Table>
				{ showModal && <ClientModal handleShowModal={handleShowModal} type="calendar"></ClientModal> }
		</div>
	);
};