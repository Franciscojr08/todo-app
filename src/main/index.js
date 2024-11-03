import {Container} from "./styles";
import Header from "../components/Header";
import Tasks from "../components/Tasks";
import {tasks} from "../mocks/tasks";
import AddButton from "../components/AddButton";
import DeleteConfirmModal from "../components/DeleteConfirmModal";
import {useState} from "react";
import NewTaskModal from "../components/NewTaskModal";
import EditTaskModal from "../components/EditTaskModal";

export default function Main() {
	const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false)
	const [isNewTaskModalVisible, setIsNewTaskModalVisible] = useState(false)
	const [isEditTaskModalVisible, setIsEditTaskModalVisible] = useState(false)
	const [taskBeingEdit, setTaskBeingEdit] = useState()
	
	function handleConfirmDelete(task) {
		setIsDeleteModalVisible(true);
	}
	
	function handleDelete() {
		//Efetivação da Exclução
		setIsDeleteModalVisible(false);
	}
	
	function handleChangeStatus(task) {
		alert('Alterando Status da Tarefa');
	}
	
	function handleDeleteModal() {
		setIsDeleteModalVisible(false)
	}
	
	function handleCreateTask(task) {
		setIsNewTaskModalVisible(false)
	}
	
	function handleEditeTask(task) {
		setTaskBeingEdit(task)
		setIsEditTaskModalVisible(true)
	}
	
	function handleSaveEditTask(task) {
		setIsEditTaskModalVisible(false)
	}
	
	return (
		<Container>
			<Header/>
			<Tasks
				tasks={tasks}
				onEdit={handleEditeTask}
				onDelete={handleConfirmDelete}
				onChangeStatus={handleChangeStatus}
			/>
			
			<AddButton onPress={() => setIsNewTaskModalVisible(true)} />
			
			<DeleteConfirmModal
				visible={isDeleteModalVisible}
				onClose={() => setIsDeleteModalVisible(false)}
				onConfirm={handleDelete}
			/>
			
			<NewTaskModal
				visible={isNewTaskModalVisible}
				onClose={() => setIsNewTaskModalVisible(false)}
				onSave={handleCreateTask}
			/>
			
			<EditTaskModal
				visible={isEditTaskModalVisible}
				onClose={() => setIsEditTaskModalVisible(false)}
				onSave={handleSaveEditTask}
				task={taskBeingEdit}
			/>
		</Container>
	)
}