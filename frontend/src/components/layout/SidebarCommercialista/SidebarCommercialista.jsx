import classes from './sidebar-commercialista.module.css';
import { Link } from 'react-router-dom';
export const SidebarCommercialista = (props) => {
	
	return (
		<div className={classes["sidebar"]}>

			<div className={classes["list-container"]}>
				<ul className={classes["ul-list"]}>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/clienti">Clienti</Link></li>
					<li><Link to="/pagamenti">Pagamenti</Link></li>
					<li><Link to="/calendario">Calendario</Link></li>
				</ul>
			</div>
			
		</div>
	);
};