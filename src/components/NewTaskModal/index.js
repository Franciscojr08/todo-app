import CustomModal from "../CustomModal";
import {Header} from "./style";
import {Text} from "../Text";
import {Image, TouchableOpacity} from "react-native";
import TaskForm from "../TaskForm";

export default function NewTaskModal({ visible, onClose, onSave }) {
	return (
		<CustomModal visible={visible} onClose={onClose}>
			<Header>
				<Text weight={600}>Adicionar Tarefa</Text>
				
				<TouchableOpacity onPress={onClose}>
					<Image source={require('../../assets/images/close.png')}></Image>
				</TouchableOpacity>
			</Header>
			
			<TaskForm onSave={onSave} buttonLabel="Cadastrar" />
		</CustomModal>
	);
}