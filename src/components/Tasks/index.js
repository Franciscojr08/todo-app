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
import {TouchableOpacity, FlatList} from "react-native";

export default function Tasks({ tasks, onEdit, onDelete, onChangeStatus }) {
	return (
		<FlatList
			data={tasks}
			keyExtractor={task => task.id}
			renderItem={({item: task}) => (
				<Task>
					<TaskHeader>
						<Text size={18} weight={600}>{task.title}</Text>
					</TaskHeader>
					
					<TaskDescription>
						<Text opacity={0.5}>{task.description}</Text>
					</TaskDescription>
					
					<TaskFooter>
						<TaskStatus onPress={() => onChangeStatus(task)}>
							<TaskIcon source={task.done ? require('../../assets/images/done.png') : require('../../assets/images/pending.png')} />
							
							<Text color={task.done ? '#2192d8' : '#E620AE'}>{task.done ? 'Feita' : 'Pendente'}</Text>
						</TaskStatus>
						
						<TaskActions>
							<TouchableOpacity onPress={() => onEdit(task)}>
								<TaskIcon source={require('../../assets/images/edit.png')} />
							</TouchableOpacity>
							
							<TouchableOpacity onPress={() => onDelete(task)}>
								<TaskIcon source={require('../../assets/images/delete.png')} />
							</TouchableOpacity>
						</TaskActions>
					</TaskFooter>
				</Task>
			)}
		/>
	);
}