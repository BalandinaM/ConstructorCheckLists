//import { useState, useRef } from "react";
import styled from "styled-components";
import { Wrap } from "../../Elements/Wrapper";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
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

const NewCheckList = () => {
	return (
		<Wrap>
			<WrapForm>
				<h2>Новый чек-лист</h2>
				<Formik
					initialValues={{ titleCheckList: "", description: "", tasks: [] }}
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
							<FieldArray
								name="tasks"
								render={(arrayHelpers) => (
									<div>
										{values.tasks && values.tasks.length > 0 ? (
											values.tasks.map((task, index) => (
												<div key={index}>
													<TextField name={`tasks.${index}`} />
													<button
														type="button"
														onClick={() => arrayHelpers.remove(index)}
													>
														-
													</button>
													<button
														type="button"
														onClick={() => arrayHelpers.insert(index, "")}
													>
														+
													</button>
												</div>
											))
										) : (
											<button
												type="button"
												onClick={() => arrayHelpers.push("")}
											>
												Добавить задачу
											</button>
										)}
									</div>
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

export default NewCheckList;
