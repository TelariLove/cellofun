import  style from "./Range.module.css";

export default function Range({label, current, max, setCurrent}: {label: string, current: number, max: number, setCurrent: (value: number) => void}) {
	return (
		<label>
			<b>{label}</b> [{current}]
			<input className={style.range} type="range" min="0" max={max} defaultValue={current} onChange={({target}) => {
				return setCurrent(Number(target.value));
			}} />
		</label>
	)
};