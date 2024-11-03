import {Text} from "../Text";
import {Add, Container} from "./style";

export default function AddButton({onPress}) {
	return (
		<Container onPress={onPress}>
			<Add>
				<Text color="#ffffff" size="36">
					+
				</Text>
			</Add>
		</Container>
	);
}