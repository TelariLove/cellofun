'use client';
import { useState } from "react";
import { getBodySms } from "./utils";
import style from "./Calc.module.css";
import Logo from "./Logo/Logo";
import Brewery from "./Brewery/Brewery";
import Range from "./Range/Range";
import Console from "./Console/Console";
import Contact from "./Contact/Contact";

export default function Calc() {
	const [palletsOfFullBoxes, setPalletsOfFullBoxes] = useState(0);
	const [palletsOfEmptyBoxes, setPalletsOfEmptyBoxes] = useState(0);
	const [brewery, setBrewery] = useState("");
	const [layers, setLayers] = useState(0);
	const maxPalletsSpace = 33;
	const [isClient] = useState(() => typeof window !== "undefined");
	const [contact, setContact] = useState({name: "", phone: ""});
	
	function changeBrewery({target}: React.ChangeEvent<HTMLSelectElement>) {

		setBrewery(target.value);

		switch (target.value) {
			case "Carlsberg":
				setLayers(5);
				break;
			case "Kompania Piwowarska":
			case "Grupa Zywiec":
				setLayers(6);
				break;
			default: setLayers(0); break;
		}		
	}
	return (
		<div className={style.container}>
			<Logo />
			<Brewery changeBrewery={changeBrewery}/>

			{brewery !== "" &&
				<div>
					<Range label="Palety pełne:" current={palletsOfFullBoxes} setCurrent={setPalletsOfFullBoxes} max={maxPalletsSpace - palletsOfEmptyBoxes} />
					<Range label="Palety puste:" current={palletsOfEmptyBoxes} setCurrent={setPalletsOfEmptyBoxes} max={maxPalletsSpace - palletsOfFullBoxes} />
					pozostało miejsca na palecie: {maxPalletsSpace - (palletsOfEmptyBoxes + palletsOfFullBoxes)}
				</div>
			}

			{isClient && <Contact onChange={setContact}/>}

			

			<a className={style.button} href={`sms:${contact.phone}?body=${getBodySms(brewery, palletsOfFullBoxes, palletsOfEmptyBoxes, layers)}`}>SMS</a>

			<Console contact={contact} brewery={brewery} palletsOfFullBoxes={palletsOfFullBoxes} palletsOfEmptyBoxes={palletsOfEmptyBoxes} layers={layers} maxPalletsSpace={maxPalletsSpace} />

					
		</div>
	)
}



