import { Wrap } from "../../Elements/Wrapper";
import styled from "styled-components";
import { Formik, Field, Form } from 'formik';

const WrapCheckList = styled.div`
	background-color: ${(props) => props.theme.colors.primarySecondary};
	box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
	width: 800px;
	height: auto;
	margin: 0 auto;
	padding: 30px;
	border-radius: 2%;
`;

const TitleCheckList = styled.h3`
	font-size: 2em;
	margin-bottom: 30px;
`;

const TextCheckList = styled.p`
	font-size: 2.0rem;
	margin-bottom: 30px;
	text-align: justify;
`;

const FormForCheckbox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 10px;
	padding-left: 40px;
`;

const Task = styled.label`
	display: flex;
	flex-direction: row;
	gap: 20px;
	justify-content: flex-start;
`;


const TaskName = styled.span`
	font-size: 2.0rem;
`;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const CheckList = () => {
	return (
		<Wrap>
			<WrapCheckList>
				<TitleCheckList>Я заголовок чеклиста</TitleCheckList>
				<TextCheckList>
					Я описание чек листа. Я расскажу о том зачем он создан когда и кем и
					еще много разной фигни
				</TextCheckList>
				{/* <ListTasks>
				  <Task>
						<input type="checkbox" />
						<TaskName htmlFor="">ОЧень важный пункт</TaskName>
					</Task>
					<Task>
						<input type="checkbox" />
						<TaskName htmlFor="">Нууууу</TaskName>
					</Task>
					<Task>
						<input type="checkbox" />
						<TaskName htmlFor="">Может и не очень важный</TaskName>
					</Task>
				</ListTasks> */}
				<Formik
					initialValues={{
						tasks: [],
					}}
					onSubmit={async (values) => {
						await sleep(500);
						alert(JSON.stringify(values, null, 2));
					}}
				>
					{() => (
						<Form>
							{/* <div id="checkbox-group">Checked</div> */}
							<FormForCheckbox role="group" aria-labelledby="checkbox-group">
								<Task>
									<Field type="checkbox" name="tasks" value="11" />
									<TaskName>Собрать паспорта</TaskName>
								</Task>
								<Task>
									<Field type="checkbox" name="tasks" value="12" />
									<TaskName>Взять билеты</TaskName>
								</Task>
								<Task>
									<Field type="checkbox" name="tasks" value="13" />
									<TaskName>Забронировать отель</TaskName>
								</Task>
								<Task>
									<Field type="checkbox" name="tasks" value="14" />
									<TaskName>Взять наличку, банковские карты</TaskName>
								</Task>
							</FormForCheckbox>
							<button type="submit">Submit</button>
						</Form>
					)}
				</Formik>
			</WrapCheckList>
		</Wrap>
	);
};

export default CheckList;
