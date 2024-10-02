import {Text} from "../Text";
import {
	Task,
	TaskActions,
	TaskDescription,
	TaskFooter,
	TaskHeader,
	TaskIcon,
	TaskStatus
} from "./styles";
import { pending } from '../../assets/images/pending.png';
import { done } from '../../assets/images/done.png';
import { edit } from '../../assets/images/edit.png';
import { del } from '../../assets/images/delete.png';
import {TouchableOpacity} from "react-native";

export default function Tasks() {
	return (
		<Task>
			<TaskHeader>
				<Text size={18} weight={600}>Estudar React Native</Text>
			</TaskHeader>
			
			<TaskDescription>
				<Text opacity={0.5}>Fazer atividade da última aula</Text>
			</TaskDescription>
			
			<TaskFooter>
				<TaskStatus onPress={() => alert("Alterou o status")}>
					<TaskIcon source={require('../../assets/images/pending.png')} />
					<Text color="#E620Ae">Pendente</Text>
				</TaskStatus>
				
				<TaskActions>
					<TouchableOpacity onPress={() => alert("Alterando tarefa")}>
						<TaskIcon source={require('../../assets/images/edit.png')} />
					</TouchableOpacity>
					
					<TouchableOpacity onPress={() => alert("Excluindo tarefa")}>
						<TaskIcon source={require('../../assets/images/delete.png')} />
					</TouchableOpacity>
				</TaskActions>
			</TaskFooter>
		</Task>
	);
}