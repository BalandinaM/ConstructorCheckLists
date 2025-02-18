import { useState } from "react";
import styled from "styled-components";
import { Wrap } from "../../Elements/Wrapper";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import { HandleFormSubmit } from "../../assests/forForms/handleFormSubmit";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { saveNewCheckListAsync, updateCheckListAsync } from "../../redux/checkListReducer";
import { useNavigate, useParams } from "react-router-dom";

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
			props.$isinvalid === true
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

const LabelArrayField = styled.h4`
	font-size: 1.6rem;
	padding: 10px 5px;
	line-height: 1.6;
	text-align: left;
`;

const WrapInputTask = styled.div`
	position: relative;
	width: 100%;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	margin-bottom: 30px;
`;

const ButtonRemoveTask = styled.button`
	width: 30px;
	height: 30px;
	background-color: ${(props) => props.theme.colors.primary};
	border-radius: 50%;
	position: relative;
	cursor: pointer;
`;

const Minus = styled.span`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 60%;
	height: 5px;
	background-color: ${(props) => props.theme.colors.primarySecondary};
`;

const InputTask = styled(TextField)`
	padding-right: 80px;
`;

const WrapButtonRemoveTask = styled.div`
	position: absolute;
	top: 8px;
	right: 8px;
`;

const EditCheckList = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const params = useParams();
	const idCheckList = params.id;
	const arrCheckLists = useSelector((state) => state.checklist.checkListsData);
	const currentCheckList = arrCheckLists.find((item) => item.id === idCheckList);


	const tasks = currentCheckList.tasksData;

	const handleEditCheckList = (values) => {
		dispatch(updateCheckListAsync(values))
			.then((result) => {
				navigate(`/checklist/${result.payload.id}`, {
					state: result.payload.id,
				});
			})
			.catch((error) => {
				console.error(error);
			});
	};

	return (
		<Wrap>
			<WrapForm>
				<h2>Редактировать чек-лист</h2>
				<Formik
					initialValues={{
						id: idCheckList,
						title: currentCheckList.title,
						description: currentCheckList.description,
						public: currentCheckList.public,
						tasksData: [...tasks],
					}}
					validationSchema={Yup.object({
						title: Yup.string()
							.min(6, "Минимум 6 символов")
							.required("Пожалуйста, озаглавьте ваш чек-лист!"),
						description: Yup.string().max(80, "Максимум 80 символов"),
						public: Yup.boolean(),
					})}
					onSubmit={(values, { setSubmitting }) => {
						HandleFormSubmit(values, { setSubmitting });
						handleEditCheckList(values);
					}}
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
								<LabelTextField htmlFor="public">
									Виден всем пользователям
								</LabelTextField>
								<Field type="checkbox" name="public" />
							</InputWrap>
							<InputWrap>
								<LabelTextField htmlFor="title">
									Название чек-листа
								</LabelTextField>
								<TextField
									type="text"
									name="title"
									id="title"
									value={values.title}
									onChange={handleChange}
									onBlur={handleBlur}
									$isinvalid={
										!!errors.title && !!touched.title
									}
								/>
								<ErrorMessageBox name="title" component="div" />
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
							<LabelArrayField>Задачи</LabelArrayField>
							<FieldArray
								name="tasksData"
								render={(arrayHelpers) => (
									<InputWrap>
										{values.tasksData &&
											values.tasksData.length > 0 &&
											values.tasksData.map((task, index) => (
												<WrapInputTask key={index}>
													<InputTask
														name={`tasksData[${index}].task`}
														$isinvalid={
															!!errors?.tasksData?.[index] &&
															!!touched?.tasksData?.[index]
														}
													/>
													<WrapButtonRemoveTask>
														<ButtonRemoveTask
															type="button"
															onClick={() => arrayHelpers.remove(index)}
														>
															<Minus></Minus>
														</ButtonRemoveTask>
													</WrapButtonRemoveTask>
													<ErrorMessageBox
														name={`tasksData.${index}`}
														component="div"
													/>
												</WrapInputTask>
											))}
										<ButtonSubmit
											type="button"
											onClick={() => arrayHelpers.push("")}
										>
											Добавить задачу
										</ButtonSubmit>
									</InputWrap>
								)}
							/>
							<ButtonSubmit type="submit" disabled={isSubmitting}>
								Сохранить чек-лист
							</ButtonSubmit>
						</FormLogin>
					)}
				</Formik>
			</WrapForm>
		</Wrap>
	);
};

export default EditCheckList;
