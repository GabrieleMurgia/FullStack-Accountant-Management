import { useSelector } from 'react-redux';
import classes from './home-manager.module.css';

export const HomeManager = (props) => {
	const users = useSelector((state=>state.gestionale.value.users))

	return (
		<div className={classes["home-manager"]}>
			<div className={classes["in-scadenza-wrapper"]}>
			<h2>In scadenza</h2>
			<div>

				{	users && users.map(item=>{
					return <div  key={Math.random()}className={classes["underline"]} >
						<span>{item.title} / </span> <span className={classes["red"]}>{item.start.toString().slice(0, 15)}</span>
						   </div>
				})	}

			</div>
			</div>
		</div>
	);
};