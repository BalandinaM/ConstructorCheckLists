import { useState } from "react";
import styled from "styled-components";

const ButtonAddItem = styled(ButtonSubmit)`
	padding: 15px 25px;
	background-color: ${(props) => props.theme.colors.primary};
	font-size: 1.8rem;
	color: ${(props) => props.theme.colors.primarySecondary};
	border-radius: 5px;
	align-self: flex-end;
	width: fit-content;
	margin-top: 30px;
`;

const AddItemBox = styled.div`
	//display: ${(props) => (props.$isShowConfirm === "true" ? "block" : "none")};
	display: block;
	width: 600px;
	height: auto;
	padding: 30px;
	background-color: ${(props) => props.theme.colors.background};
	box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
	border-radius: 5px;
	z-index: 4;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

const AddItemBoxWrap = styled.div`
	position: relative;
`;

const TitleAddItem = styled.h4`
	font-size: 2.2rem;
`;

const ButtonSaveItem = styled(ButtonSubmit)`
	margin-top: 30px;
`;

const ButtonClose = styled(ButtonSubmit)`
	background-color: ${(props) => props.theme.colors.background};
	position: absolute;
	padding: 0;
	top: 0;
	right: 0;
`;

const Modal = () => {
	const [isShowDialog, setIsShowDialog] = useState(false);
	//const [inputValue, setInputValue] = useState('');
	//const inputRef = useRef(null);

	const handleAddItem = () => {
		//открытие модального окна
		setIsShowDialog(true);
	};

	const handleCloseDialog = () => {
		//нажатие на крестик
		setIsShowDialog(false);
	};

	const handleSaveDialog = () => {
		//сохранить введенное значение
		setIsShowDialog(false);
		// if (inputRef.current.value) {
		// 	const inputValue = inputRef.current.value;
		// 	alert(`Значение "${inputValue}" успешно сохранено!`);
		// }
	};

	return (
		<>
			<ButtonAddItem type="button" onClick={handleAddItem}>
				Добавить элемент списка
			</ButtonAddItem>
			{
				isShowDialog ? (
					<AddItemBox>
						<AddItemBoxWrap>
							<TitleAddItem>Добавить элемент</TitleAddItem>
							<InputWrap>
								<LabelTextField htmlFor="newItem">Название</LabelTextField>
								<TextField
									type="text"
									name="newItem"
									id="newItem"
									//ref={inputRef}
								></TextField>
							</InputWrap>
							<ButtonSaveItem type="button" onClick={handleSaveDialog}>
								Сохранить
							</ButtonSaveItem>
							<ButtonClose onClick={handleCloseDialog}>
								<img
									src="./image/icon_close.png"
									alt="Закрыть"
									width={30}
									height={30}
								/>
							</ButtonClose>
						</AddItemBoxWrap>
					</AddItemBox>
				) : null
				// <ul>
				// 	<li>
				// 		<input type="text" />
				// 	</li>
				// </ul>
			}
		</>
	);
};


export default Modal;
