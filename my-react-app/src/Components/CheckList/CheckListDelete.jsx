import { useState } from "react";
import { Wrap } from "../../Elements/Wrapper";
import styled from "styled-components";
import { Formik, Field, Form } from 'formik';
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

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

// const getInitialTasks = () => {
//   const tasks = {};
//   data.tasksData.forEach(task => {
//     tasks[task.idTask] = task.isDone;
//   });
//   return tasks;
// }

const CheckList = () => {
	const params = useParams();
	const idCheckList = params.id;//получение ид из параметров маршрута

	const arrCheckLists = useSelector((state) => state.checklist.checkListsData);//получаем массив чеклистов из хранилища
	const currentCheckList = arrCheckLists.find((item) => item.id === idCheckList);//находим чеклист по ид
	console.log([...currentCheckList.tasksData]);

	const getInitialTasks = () => { // Функция для создания начального состояния чекбоксов
		const tasks = {};
		currentCheckList.tasksData.forEach(task => {
			tasks[task.idTask] = task.isDone;
		});
		console.log(tasks)
		return tasks;
	}

	const [tasks, setTasks] = useState(getInitialTasks());//для хранения значений чекбоксов

	const handleChange = (e) => {
		const newTasks = { ...tasks };
		newTasks[e.target.name] = e.target.checked;
		setTasks(newTasks);
	};


	return (
		<Wrap>
			<WrapCheckList>
				<TitleCheckList>{currentCheckList.title}</TitleCheckList>
				<TextCheckList>{currentCheckList.description}</TextCheckList>
				{/* <Formik
								initialValues={{tasks}}
								onSubmit={async (values) => {
									await sleep(500);
									alert(JSON.stringify(values.tasks, null, 2));
								}}
							>
								{({values}) => (
									<Form>
										<FormForCheckbox role="group" aria-labelledby="checkbox-group">
											{currentCheckList.tasksData.map((task) => (
												<Task key={task.idTask}>
													<Field type="checkbox" name={task.idTask} value={values.tasks[task.idTask]} onChange={handleChange}/>
													<TaskName>{task.task}</TaskName>
												</Task>
											))}
										</FormForCheckbox>
										<button type="submit">Отправить</button>
									</Form>
								)}
							</Formik> */}
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
					{(props) => {
						const { setFieldValue } = props;

					return (
						<Form>
							<div id="checkbox-group">Checked</div>
							<FormForCheckbox role="group" aria-labelledby="checkbox-group">
								<Task>
									<Field type="checkbox" name="tasks" value="11" onChange={() => setFieldValue('tasks', [...props.values.tasks, '11'])}/>
									<TaskName>Собрать паспорта</TaskName>
								</Task>
								<Task>
									<Field type="checkbox" name="tasks" value="12" onChange={() => setFieldValue('tasks', [...props.values.tasks, '12'])}/>
									<TaskName>Взять билеты</TaskName>
								</Task>
								<Task>
									<Field type="checkbox" name="tasks" value="13" onChange={() => setFieldValue('tasks', [...props.values.tasks, '13'])}/>
									<TaskName>Забронировать отель</TaskName>
								</Task>
								<Task>
									<Field type="checkbox" name="tasks" value="14" onChange={() => setFieldValue('tasks', [...props.values.tasks, '14'])}/>
									<TaskName>Взять наличку, банковские карты</TaskName>
								</Task>
								<Task>
									<Field type="checkbox" name="tasks" value="15" onChange={() => setFieldValue('tasks', [...props.values.tasks, '15'])}/>
									<TaskName>Взять наличку, банковские карты</TaskName>
								</Task>
							</FormForCheckbox>
							<button type="submit">Submit</button>
						</Form>
					);
					}}
				</Formik>
			</WrapCheckList>
		</Wrap>
	);
};

export default CheckList;
