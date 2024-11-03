import CustomModal from "../CustomModal";
import {Text} from "../Text";
import {Image, TouchableOpacity} from "react-native";
import {Header} from "../NewTaskModal/style";
import TaskForm from "../TaskForm";


export default function EditTaskModal({ visible, onClose, onSave, task }) {
	return (
		<CustomModal
			visible={visible}
			onClose={onClose}
		>
			<Header>
				<Text weight={600}>Editar Tarefa</Text>
				
				<TouchableOpacity onPress={onClose}>
					<Image source={require('../../assets/images/close.png')}></Image>
				</TouchableOpacity>
			</Header>
			
			<TaskForm onSave={onSave} buttonLabel="Alterar" task={task}/>
		</CustomModal>
	);
}