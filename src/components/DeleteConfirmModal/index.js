import {Text} from "../Text";
import CustomModal from "../CustomModal";
import Button from "../Button";
import {Actions} from "./style";


export default function DeleteConfirmModal({ visible, onClose, onConfirm }) {
	return (
		<CustomModal onClose={onClose} visible={visible}>
			<Text size={18} weight="600">
				Tem certeza que deseja remover a tarefa?
			</Text>
			
			<Text opacity={0.5} style={{ marginTop: 4 }}>
				Essa ação não pode ser desfeita
			</Text>
			
			<Actions>
				<Button onPress={onClose} primary={false}>Cancelar</Button>
				<Button onPress={onConfirm}>Confirmar</Button>
			</Actions>
		</CustomModal>
	);
}