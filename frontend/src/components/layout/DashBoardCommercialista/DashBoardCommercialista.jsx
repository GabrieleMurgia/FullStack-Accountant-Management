import classes from './dash-board-commercialista.module.css';
import { HeaderCommercialista } from '../HeaderCommercialista/HeaderCommercialista';
import {SidebarCommercialista} from "../SidebarCommercialista/SidebarCommercialista"
import { PromemoriaCommercialista } from '../PromemoriaCommercialista/PromemoriaCommercialista';
import { Route,Routes } from 'react-router-dom';
import { ClientManager } from '../ClientManager/ClientManager';
import { PaymentsManager } from '../../PaymentsManager/PaymentsManager';
import { CalendarManager } from '../CalendarManager/CalendarManager';
import { HomeManager } from '../HomeManager/HomeManager';

export const DashBoardCommercialista = (props) => {
	
	return (
		<div className={classes["dashboard"]}>
			<SidebarCommercialista></SidebarCommercialista>
			<div className={classes["dx-dashboard"]}>
			<HeaderCommercialista></HeaderCommercialista>


			<div className={classes["inside-dashboard"]}>
			{/* <PromemoriaCommercialista></PromemoriaCommercialista> */}
			<Routes>
				<Route path='/' element={<HomeManager></HomeManager>}/>
				<Route path="/pagamenti" element={<PaymentsManager></PaymentsManager>}/>
				<Route path="/calendario" element={<CalendarManager></CalendarManager>}/>
				<Route path='/clienti' element={<ClientManager/>}/>
			</Routes>
			</div>
			</div>
		</div>
	);
};