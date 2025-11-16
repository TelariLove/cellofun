import style from "./Brewery.module.css";

export default function Brewery({changeBrewery}: {changeBrewery: (e: React.ChangeEvent<HTMLSelectElement>) => void}) {
	const breweryList = ["Carlsberg", "Kompania Piwowarska", "Grupa Zywiec"];
	return (
		<label> <b>Browar:</b>
			<select name="Brewery" id="Brewery" className={style.brewery} onChange={changeBrewery} defaultValue={""}>
				<option value="" disabled={true}>Wybierz browar</option>
				{breweryList.map((breweryName) => (
					<option key={breweryName} value={breweryName}>{breweryName}</option>
				))}
			</select>
		</label>
	);
}