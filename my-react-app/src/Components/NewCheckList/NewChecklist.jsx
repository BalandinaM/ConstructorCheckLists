import { useState } from "react";
import styled from "styled-components";
import { Wrap } from "../../Elements/Wrapper";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { HandleFormSubmit } from "../../assests/forForms/handleFormSubmit";
import * as Yup from "yup";

const WrapForm = styled.div`
	background-color: ${(props) => props.theme.colors.primarySecondary};
	box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
	width: 800px;
	height: auto;
	margin: 0 auto;
	padding: 30px;
	border-radius: 2%;
	position: relative;
`;

const FormLogin = styled(Form)`
	display: flex;
	flex-direction: column;
	padding: 20px 0;
	height: 100%;
`;

const InputWrap = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: stretch;
	gap: ${(props) => props.$gap || null};
`;

const TextField = styled(Field)`
	border-radius: 5px;
	width: 100%;
	flex-grow: 1;
	border: 2px solid
		${(props) =>
			props.$isinvalid === "true"
				? props.theme.colors.warning
				: props.theme.colors.primary};
`;

const LabelTextField = styled.label`
	font-size: 1.6rem;
	padding: 10px 5px;
`;

const ErrorMessageBox = styled(ErrorMessage)`
	color: ${(props) => props.theme.colors.warning};
	font-size: 1rem;
	padding: 0 10px;
`;

const ButtonSubmit = styled.button`
	padding: 15px 25px;
	background-color: ${(props) => props.theme.colors.primary};
	font-size: 1.8rem;
	color: ${(props) => props.theme.colors.primarySecondary};
	border-radius: 5px;
	margin-top: auto;

	&:disabled {
		opacity: 0.4;
	}

	&:hover {
		transform: scale(1.01);
	}
`;

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
`

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
`

const NewCheckList = () => {
	const [isShowDialog, setIsShowDialog] = useState(false);

	const handleAddItem = () => {
		setIsShowDialog(true);
		console.log(isShowDialog);
	}

	const handleCloseDialog = () => {
		setIsShowDialog(false)
	}

	return (
		<Wrap>
			<WrapForm>
				<h2>Новый чек-лист</h2>
				<Formik
					initialValues={{ titleCheckList: "", description: "" }}
					validationSchema={Yup.object({
						titleCheckList: Yup.string().required(
							"Пожалуйста, озаглавьте ваш чек-лист!"
						),
						description: Yup.string()
							.min(6, "Минимум 6 символов")
							.max(150, "Максимум 150 символов")
							.required("Опишите для чего создан чек-лист"),
					})}
					onSubmit={HandleFormSubmit}
				>
					{({
						errors,
						touched,
						isSubmitting,
						handleChange,
						handleBlur,
						values,
					}) => (
						<FormLogin>
							<InputWrap>
								<LabelTextField htmlFor="titleCheckList">
									Название чек-листа
								</LabelTextField>
								<TextField
									type="text"
									name="titleCheckList"
									id="titleCheckList"
									value={values.titleCheckList}
									onChange={handleChange}
									onBlur={handleBlur}
									$isinvalid={
										!!errors.titleCheckList && !!touched.titleCheckList
									}
								/>
								<ErrorMessageBox name="titleCheckList" component="div" />
							</InputWrap>
							<InputWrap>
								<LabelTextField htmlFor="description">Описание</LabelTextField>
								<TextField
									as="textarea"
									rows={3}
									cols={30}
									name="description"
									id="description"
									value={values.description}
									onChange={handleChange}
									onBlur={handleBlur}
									$isinvalid={!!errors.description && !!touched.description}
								/>
								<ErrorMessageBox name="description" component="div" />
							</InputWrap>
							<ButtonAddItem type="button" onClick={handleAddItem}>Добавить элемент списка</ButtonAddItem>
							{isShowDialog ? (
								<AddItemBox>
									<AddItemBoxWrap>
										<TitleAddItem>Добавить элемент</TitleAddItem>
										<InputWrap>
											<LabelTextField htmlFor="newItem">Название</LabelTextField>
											<TextField type="text" name="newItem" id="newItem"></TextField>
										</InputWrap>
										<ButtonSaveItem type="button">Сохранить</ButtonSaveItem>
										<ButtonClose onClick={handleCloseDialog}>
											<img src="./image/icon_close.png" alt="Закрыть" width={30} height={30} />
										</ButtonClose>
									</AddItemBoxWrap>
								</AddItemBox>
							) : null}
							<ButtonSubmit type="submit" disabled={isSubmitting || isShowDialog}>
								Сохранить чек-лист
							</ButtonSubmit>
						</FormLogin>
					)}
				</Formik>
			</WrapForm>
		</Wrap>
	);
};

export default NewCheckList;
