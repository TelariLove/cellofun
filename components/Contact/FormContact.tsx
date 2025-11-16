import { useState } from "react";
import style from "./Contact.module.css";

export default function FormContact({setContact}: {setContact: (contact: {name: string; phone: string}) => void}) {
	const [phone, setPhone] = useState("");
	const [name, setName] = useState("");
	return (
		<div>
			<form>
				<input className={style.input} type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
				<input className={style.input} type="tel" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
				<button className={style.button} type="submit" onClick={()=> {
					setContact({name: name, phone: phone});
					return false;
				}}>Submit</button>
			</form>
		</div>
	)
}