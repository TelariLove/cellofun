import { calcBottles, calcBoxes } from "../utils";
import { useState } from "react";

export default function Console({contact, brewery, palletsOfFullBoxes, palletsOfEmptyBoxes, layers, maxPalletsSpace}: {contact: {name: string, phone: string}, brewery:string, palletsOfFullBoxes:number, palletsOfEmptyBoxes:number, layers:number, maxPalletsSpace:number}) {
	const [hasOpened, setHasOpened] = useState(false);
	return (
		<div>
			<div onClick={()=>{setHasOpened(!hasOpened)}}>Console:</div>
			{hasOpened && (
				<div>
					<div> Contact name: [{contact.name}]</div>
					<div> Contact Phone: [{contact.phone}]</div>
					<div> Browar: [{brewery}]</div>
					<div> Pozostalo: [{maxPalletsSpace - (palletsOfEmptyBoxes + palletsOfFullBoxes)}]</div>
					<div> palety: [{palletsOfFullBoxes + palletsOfEmptyBoxes}]</div>
					<div> skryni: [{calcBoxes(palletsOfFullBoxes + palletsOfEmptyBoxes, layers)}]</div>
					<div> butelki [{calcBottles(palletsOfFullBoxes, layers)}]</div>
					<div> layers: [{layers}]</div>
				</div>
			)}
		</div>
	)
}