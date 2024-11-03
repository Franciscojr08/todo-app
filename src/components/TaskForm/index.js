import {Form, Input} from "./style";
import Button from "../Button";
import {useState} from "react";

export default function TaskForm({ onSave, buttonLabel, task }) {
	const [titulo, setTitulo] = useState(task?.title ?? "")
	const [descricao, setDescricao] = useState(task?.description ?? "")
	
	
	return (
		<Form>
			<Input placeholder="Título" placeholderTextColor="#666" value={titulo} onChangeText={setTitulo}></Input>
			
			<Input placeholder="Descrição" placeholderTextColor="#666" value={descricao} onChangeText={setDescricao}></Input>
			
			<Button
				onPress={() => onSave({titulo,descricao})}
				disable={titulo.length === 0 || descricao.length === 0 }
			>
				{buttonLabel}
			</Button>
		</Form>
	)
}