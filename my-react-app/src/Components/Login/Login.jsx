import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { createValidationSchema } from "../../assests/forForms/createValidationSchema";
import { HandleFormSubmit } from "../../assests/forForms/handleFormSubmit";


const WrapForm = styled.div`
	background-color: ${props => props.theme.colors.primarySecondary};
	border: 2px solid ${props => props.theme.colors.primary};
	width: 500px;
	height: auto;
	padding: 30px;
	border-radius: 2%;
`;

const TitleFormLogin = styled.h2`
	margin-bottom: 1.6rem;
`;

const FormLogin = styled(Form)`
	display: flex;
	flex-direction: column;
	gap: 30px;
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
`

const Login = () => {
	return (
		<WrapForm>
			<TitleFormLogin>Зарегистрируйтесь или авторизуйтесь</TitleFormLogin>
			<Formik
        initialValues={{email: "",  password: "", rememberMe: false,}}
        validationSchema={createValidationSchema({email: "",  password: "", remembeMe: false,})}
        onSubmit={HandleFormSubmit}
      >
        {({ errors, touched, isSubmitting }) => (
          <FormLogin>
            <InputWrap>
                <LabelTextField htmlFor="email">Адрес электронной почты</LabelTextField>
                {/* <TextField type="email" name="email" isinvalid={(errors.email && touched.email)}/> */}
								<TextField type="email" name="email" isinvalid={(errors.email && touched.email) ? 'true' : 'false'}/>
								<ErrorMessageBox name="email" component="div"/>
            </InputWrap>
            <InputWrap>
                <LabelTextField htmlFor="password">Пароль</LabelTextField>
                <TextField type="password" name="password" isinvalid={(errors.password && touched.password) ? 'true' : 'false'}/>
                <ErrorMessageBox name="password" component="div"/>
            </InputWrap>
						<InputWrap>
                <LabelTextField htmlFor="password">Повторите пароль</LabelTextField>
                <TextField type="password" name="password" isinvalid={(errors.password && touched.password) ? 'true' : 'false'}/>
                <ErrorMessageBox name="password" component="div"/>
            </InputWrap>
            <InputWrap $gap="15px">
                <label htmlFor="rememberme">Запомнить меня</label>
                <Field type="checkbox" name="rememberMe" />
            </InputWrap>
            <ButtonSubmit type="submit" disabled={isSubmitting}>
              Авторизоваться
            </ButtonSubmit>
          </FormLogin>
        )}
      </Formik>
		</WrapForm>
	);
};

export default Login;
