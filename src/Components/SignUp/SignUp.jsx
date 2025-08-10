import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { HandleFormSubmit } from "../../assests/forForms/handleFormSubmit";
import * as Yup from 'yup';
import { Wrapper } from "../../Elements/Wrapper";

const WrapForm = styled.div`
	background-color: ${props => props.theme.colors.primarySecondary};
	box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
	width: 500px;
	height: auto;
	margin: 0 auto;
	padding: 30px;
	border-radius: 2%;
`;

const FormLogin = styled(Form)`
	display: flex;
	flex-direction: column;
	gap: 30px;
	padding: 20px;
`;

const InputWrap = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: stretch;
	gap: ${props => props.$gap || null };
`;

const TextField = styled(Field)`
	border-radius: 5px;
	width: 100%;
	flex-grow: 1;
	border: 2px solid ${props => props.isinvalid === 'true' ? props.theme.colors.warning : props.theme.colors.primary};
`;

const LabelTextField = styled.label`
	font-size: 1.6rem;
	padding: 10px 5px;
`;

const ErrorMessageBox = styled(ErrorMessage)`
	color: ${props => props.theme.colors.warning};
	font-size: 1rem;
	padding: 0 10px;
`;

const ButtonSubmit = styled.button`
	padding: 15px 25px;
	background-color: ${props => props.theme.colors.primary};
	font-size: 1.8rem;
	color: ${props => props.theme.colors.primarySecondary};
	border-radius: 5px;
`;

const SignUp = () => {

	return (
		<Wrapper>
			<WrapForm>
				<h2>Введите данные для создания учетной записи</h2>
				<Formik
					initialValues={{ email: "", password: "", confirmPassword: "" }}
					validationSchema={
						Yup.object({
							email: Yup.string().email('Неверный формат email').required('Email обязателен'),
							password: Yup.string()
								.min(6, 'Минимум 6 символов')
								.max(20, 'Максимум 20 символов')
								.required('Пароль обязателен'),
							confirmPassword: Yup.string()
								.oneOf([Yup.ref('password'), null], 'Пароли должны совпадать')
								.required('Подтверждение пароля обязательно'),
						})
					}
					onSubmit={HandleFormSubmit}
				>
					{({ errors, touched, isSubmitting }) => (
						<FormLogin>
							<InputWrap>
								<LabelTextField htmlFor="email">Адрес электронной почты</LabelTextField>
								<TextField
									type="email"
									name="email"
									id="email"
									autocomplete="email"
									isinvalid={errors.email && touched.email ? "true" : "false"}
								/>
								<ErrorMessageBox name="email" component="div" />
							</InputWrap>
							<InputWrap>
								<LabelTextField htmlFor="password">Пароль</LabelTextField>
								<TextField
									type="password"
									name="password"
									id="password"
									isinvalid={errors.password && touched.password ? "true" : "false"}
								/>
								<ErrorMessageBox name="password" component="div" />
							</InputWrap>
							<InputWrap>
								<LabelTextField htmlFor="confirmPassword">Повторите пароль</LabelTextField>
								<TextField
									type="password"
									name="confirmPassword"
									id="confirmPassword"
									isinvalid={errors.confirmPassword && touched.confirmPassword ? "true" : "false"}
								/>
								<ErrorMessageBox name="confirmPassword" component="div" />
							</InputWrap>
							<ButtonSubmit type="submit" disabled={isSubmitting}>
								Зарегистрироваться
							</ButtonSubmit>
						</FormLogin>
					)}
				</Formik>
			</WrapForm>
		</Wrapper>
	);
};

export default SignUp;
