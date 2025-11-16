export function calcBottles(pallet:number, layers:number, boxesOfLayer:number = 8, bottlesOfBox:number = 20) {
	return pallet * layers * boxesOfLayer * bottlesOfBox;
}

export function calcBoxes(pallet:number, layers:number, boxesOfLayer:number = 8) {
	return pallet * layers * boxesOfLayer;
}

export function getBodySms(brewery:string, palletsOfFullBoxes:number, palletsOfEmptyBoxes:number, layers:number, boxesOfLayer:number = 8, bottlesOfBox:number = 20) {
	const pallets = palletsOfFullBoxes + palletsOfEmptyBoxes;
	const totalBoxes = calcBoxes(pallets, layers, boxesOfLayer);
	const totalBottles = calcBottles(palletsOfFullBoxes, layers, boxesOfLayer, bottlesOfBox);
	return `Zwrot opakowań z browaru ${brewery}.
Palety - ${pallets}; skryni - ${totalBoxes}; butelki - ${totalBottles};`;
}