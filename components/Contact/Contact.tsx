'use client';
import {useState, useEffect} from "react";
import style from "./Contact.module.css";
import FormContact from "./FormContact";

interface ContactInfo {
  name?: string;
  tel?: string;
}

declare global {
  interface Navigator {
	contacts: {
	  select: (properties: string[], options?: { multiple?: boolean }) => Promise<ContactInfo[]>;
	}
  }
}

export default function Contact({onChange}:{onChange: (contact: {name: string; phone: string}) => void}) {
	const [contact, setContact] = useState(() => {
		try {
			const saved = localStorage.getItem("contactInfo");
			if (saved) {
				const parsed = JSON.parse(saved);
				// onChange(parsed);
				return parsed;
			} else {
				return {name: "", phone: ""};
			}
		} catch (error) {
			console.log("Error reading contact info from localStorage:", error);
			return {name: "", phone: ""};
		}
	});

	const [hasForm, setHasForm] = useState(false);


	useEffect( () => {
		localStorage.setItem("contactInfo", JSON.stringify(contact));
		onChange(contact);
	}, [contact, onChange]);


	async function getContacts() {
		try {
			const [contacts] = await navigator.contacts.select(["name", "tel"], {multiple: false});
			const name = contacts.name || "";
			const phone = contacts.tel || "";

			setContact({name, phone});
			onChange({name, phone});
		} catch (error) {
			console.log("Contact Picker API not supported or permission denied.", error);
			setHasForm(true);
		}
	}

	if(hasForm) {
		return (
			<FormContact setContact={(contact) => {
				setContact(contact);
				onChange(contact);
				setHasForm(false);
			}}/>
		);
	} else {
		if((contact.phone!="") && (contact.name!="")) {
			return (
				<button className={style.button} onClick={getContacts}>Change Contact</button>
			);
		} else return (<button className={style.button} onClick={getContacts}>Get Contact</button>)
	}
}