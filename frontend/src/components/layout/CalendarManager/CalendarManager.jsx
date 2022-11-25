import classes from './calendar-manager.module.css';
import { Calendar, dateFnsLocalizer, momentLocalizer } from 'react-big-calendar';
import "react-big-calendar/lib/css/react-big-calendar.css"
import moment from 'moment-timezone';
import { ClientModal } from '../../../ClientModal/ClientModal';
import { useSelector } from 'react-redux';
import { useState } from 'react';
require('moment/locale/it.js')

export const CalendarManager = (props) => {

	const localizer = momentLocalizer(moment)
	const events = useSelector((state) => state.gestionale.value.users)
	const [showModal,setShowModal] = useState(false)

	const handleShowModal = ()=>{
		setShowModal(!showModal)
	}

	return (
		<div>
			<button onClick={()=>handleShowModal()}>Aggiungi al Calendario</button>
			<Calendar localizer={localizer} events={events} startAccessor="start" endAccessor="end" style={{height:400,margin:"10px"}}   messages={{
                    next: "Avanti",
                    previous: "Indietro",
                    today: "Oggi",
                    month: "Mese",
                    week: "Settimana",
                    day: "Giorno",
					date:"Data",
					event:"Evento",
					time:"Orario",
                  }} />
				{ showModal && <ClientModal handleShowModal={handleShowModal} type="calendar"></ClientModal> }
		</div>
	);
};