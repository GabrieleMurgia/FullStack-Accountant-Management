import { useState } from 'react';
import { ClientModal } from '../ClientModal/ClientModal';
import classes from './central-header.module.css';

export const CentralHeader = (props) => {
	const [showModal,setShowModal] = useState(false)

	const handleShowModal = ()=>{
		setShowModal(!showModal)
	}

	return (
		<>
		<div className={classes["centralHeader"]}>
			<span>Logo</span>
			{props.type =="clients" && <div className={classes["left-centralHeader"]}>
				<span>Lista Clienti</span>
				<button onClick={handleShowModal}>Aggiungi nuovo Cliente</button>
			</div>}

			{props.type =="payments" && <div>
				<span>Lista metodi pagamento </span>
				<button onClick={handleShowModal}>Aggiungi nuovo Metodo</button>
				</div>}

		</div>
		{
			showModal && <ClientModal type={props.type} handleShowModal={handleShowModal}></ClientModal>
			}
		</>
	);
};