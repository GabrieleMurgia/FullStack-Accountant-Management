import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addClient, addPaymentMethod, addExpiration, removeExpiration } from '../redux/gestionale';
import classes from './client-modal.module.css';
import "react-datepicker/dist/react-datepicker.css"
import ReactDatePicker from 'react-datepicker';


export const ClientModal = (props) => {
	const inputRefClient = useRef()
	const inputRefPayment = useRef()

	const clients = useSelector((state) => state.gestionale.value.clients)
	const payments = useSelector((state) => state.gestionale.value.payments)
	const users = useSelector((state) => state.gestionale.value.users)
  	const dispatch = useDispatch()
	const [disabled,setDisabled]= useState(true)
	const [newEvent, setNewEvent] = useState({ client: "", start: "", end: "", payment:"" });
    

	const handleAdd = (type)=>{
		if(type === "clients"){
			dispatch( addClient(inputRefClient.current.value) )
			inputRefPayment.current.value=""
		}else if(type === "payments"){
			dispatch( addPaymentMethod(inputRefPayment.current.value) )
			inputRefPayment.current.value=""
		}	
	}
	
	const handleChange = (type)=>{
		if(type==="clients"){
			if(inputRefClient.current.value !== "" ){
				setDisabled(false)
			}else{
				setDisabled(true)
			}
		}else if(type==="payments"){
			if(inputRefPayment.current.value !== "" ){
				setDisabled(false)
			}else{
				setDisabled(true)
			}
		}
	}

	const handleCalendar = ()=>{
		dispatch( addExpiration(newEvent) )
	}

	

	return (
		<div className={classes["client-modal-background"]}>
			<div className={props.type === "clients" || props.type === "clients" ? classes["client-modal"] : classes["calendar-modal"]}>
				<div className={classes["header-client-modal"]}>

				

				{ props.type==="clients" && <div className={classes["ciao"]}>
				<input ref={inputRefClient} onChange={()=>{handleChange("clients")}} type="text" placeholder='inserisci cliente...'/>
				<button onClick={()=>{handleAdd("clients")}} disabled={disabled}>Aggiungi</button>
				</div>}

				{
					props.type==="payments" && 
					<div className={classes["ciao"]}>
					<input ref={inputRefPayment}  onChange={()=>{handleChange("payments")}} type="text" placeholder='inserisci metodo...'/>
					<button onClick={()=>{handleAdd("payments")}} disabled={disabled}>Aggiungi</button>
					</div>
				}

					
					{
					props.type==="calendar" && 
					<div className={classes["calenndar-form"]}>

					<div className={classes["calendar-form-left"]}> 
					<label for="clients">Seleziona Cliente:</label>
					<select name="clients" id="clients" onChange={(e)=>{setNewEvent({...newEvent,client:e.target.value})}} >
					{clients ? clients.map(item=>{
						return <option value={item.name}>{item.name}</option>
					}) : <option>Nessun Cliente Inserito</option>}
					</select>

					<label for="payments">Seleziona Tipologia Pagamento:</label>
					<select name="payments" id="payments" onChange={(e)=>{setNewEvent({...newEvent,payment:e.target.value})}}>
  					{payments ? payments.map(item=>{
						return <option value={item.name}>{item.name}</option>
					}) : <option>Nessun Pagamento Inserito</option>}
					</select>
					</div>

					<div className={classes["calendar-form-right"]}>
					<label for="start-event">Seleziona Data inizio Evento:</label>
						<ReactDatePicker placeholderText='Inizio..' selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} ></ReactDatePicker>
					<label for="end-event">Seleziona Data fine Evento:</label>
					<ReactDatePicker placeholderText='Fine..' selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })}></ReactDatePicker>
					<button onClick={handleCalendar}>Aggiungi al calendario</button>
					</div>
					<div className={classes["delete-clients"]}>
						{users && users.map(item=>{
							return <div className={classes["clients"]}>
								<span>{item.title}</span>
								<button onClick={()=>{dispatch(removeExpiration(item.title))}}>x</button>
							</div>
						})}
					</div>
					</div>
				}
				</div>

				
				<button onClick={()=>props.handleShowModal()}>Close modal</button>
			</div>
		</div>
		
	);
};