import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { createValidationSchema } from "../../assests/forForms/createValidationSchema";
import { HandleFormSubmit } from "../../assests/forForms/handleFormSubmit";


const WrapForm = styled.div`
	background-color: white;
	border: 2px solid blue;
	width: 500px;
	height: 500px;
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
`;

const TextField = styled(Field)`
	border-radius: 5px;
	width: 100%;
	flex-grow: 1;
	border: 2px solid ${props => props.isinvalid === 'true' ? 'red' : 'blue'};
`;

const LabelTextField = styled.label`
	font-size: 1.2rem;
	padding: 10px 5px;
`;

const ErrorMessageBox = styled(ErrorMessage)`
	color: red;
	font-size: 1rem;
	padding: 0 10px;
`

const Login = () => {
	return (
		<WrapForm>
			<TitleFormLogin>Зарегистрируйтесь или авторизуйтесь</TitleFormLogin>
			<Formik
        initialValues={{email: "",  password: "", rememberMe: false,}}
        validationSchema={createValidationSchema({email: "",  password: "", rememberMe: false,})}
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
            <InputWrap className="wrap-input">
                <LabelTextField htmlFor="password">Пароль</LabelTextField>
                <TextField type="password" name="password" isinvalid={(errors.password && touched.password) ? 'true' : 'false'}/>
                <ErrorMessageBox name="password" component="div"/>
            </InputWrap>
            <div className="wrap-input">
                <label htmlFor="rememberme">Запомнить меня</label>
                <Field type="checkbox" name="rememberme" />
            </div>
            <button type="submit" disabled={isSubmitting} className="button">
              Авторизоваться
            </button>
          </FormLogin>
        )}
      </Formik>
		</WrapForm>
	);
};

export default Login;
