import classes from './calendar-manager.module.css';
import "react-big-calendar/lib/css/react-big-calendar.css"
import { ClientModal } from '../../../ClientModal/ClientModal';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Table } from 'antd';
import { useMutation, useQuery , gql } from "@apollo/client";
import {GET_EXPIRATION_DATES} from "../../../queries/queries"
require('moment/locale/it.js')

export const CalendarManager = (props) => {
	const expirations = useSelector((state) => state.gestionale.value.expirations)
	const [showModal,setShowModal] = useState(false)
	const [provaArray,setProvaArray]=useState([])
	/* const [provaArray,setProvaArray]=useState([]) */
	
	 /* const normalize = (data) => {
		let isObject = (data) =>
		  Object.prototype.toString.call(data) === '[object Object]'
		let isArray = (data) =>
		  Object.prototype.toString.call(data) === '[object Array]'
	  
		let flatten = (data) => {
		  if (!data.attributes) return data
	  
		  return {
			id: data.id,
			...data.attributes
		  }
		}
	  
		if (isArray(data)) {
		  return data.map((item) => normalize(item))
		}
	  
		if (isObject(data)) {
		  if (isArray(data.data)) {
			data = [...data.data]
		  } else if (isObject(data.data)) {
			data = flatten({ ...data.data })
		  } else if (data.data === null) {
			data = null
		  } else {
			data = flatten(data)
		  }
	  
		  for (let key in data) {
			data[key] = normalize(data[key])
		  }
	  
		  return data
		}
	  
		return data
	  } */

	  const fromStrapiToNormal = (arrayOfObjects)=>{
		setProvaArray([])
		for(let i = 0 ; i < arrayOfObjects.length ; i++){
			/* setNames(current => [...current, 'Carl']); */
			setProvaArray(provaArray=>
				[
				...provaArray,
				{costumer:arrayOfObjects[i].attributes.costumer.data.attributes.businessName,
				amount:arrayOfObjects[i].attributes.amount,
				commission:arrayOfObjects[i].attributes.commission,
				payment:arrayOfObjects[i].attributes.payment.data.attributes.method,
				status:arrayOfObjects[i].attributes.status.data.attributes.sigle,
				reminder:arrayOfObjects[i].attributes.reminder,
				date:arrayOfObjects[i].attributes.data,}
			]
			)
		}
	} 


		const {data,loading,error} = useQuery(GET_EXPIRATION_DATES)
		console.log(data?.expirationDates?.data)


		
		

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
			<button onClick={()=>{fromStrapiToNormal(data?.expirationDates?.data)}}>DDDD</button>
			<button onClick={()=>handleShowModal()}>Aggiungi al Calendario</button>
				<Table
				dataSource={provaArray} 
				columns={columns}
				></Table>
				{ showModal && <ClientModal handleShowModal={handleShowModal} type="calendar"></ClientModal> }
		</div>
	);
};