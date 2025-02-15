import { useState } from "react";
import { Wrap } from "../../Elements/Wrapper";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeIsDone } from "../../redux/checkListReducer";

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
	display: flex;
  flex-direction: column;
  gap: 5px;
`;

const TextCheckList = styled.p`
	font-size: 2.0rem;
	margin-bottom: 30px;
	text-align: justify;
`;

const TaskList = styled.ul`
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

const InfoPublic = styled.span`
	font-size: 1.3rem;
	opacity: 0.6;
`

const CheckList = () => {
	const params = useParams();
	const dispatch = useDispatch();
	const idCheckList = params.id;

	const arrCheckLists = useSelector((state) => state.checklist.checkListsData);
	const currentCheckList = arrCheckLists.find((item) => item.id === idCheckList);
	const tasksData = [...currentCheckList.tasksData];

	const [checked, setChecked] = useState(true);

	function handleChange(event) {
		setChecked(!checked);
		const idTask = event.target.id;
		const statusTask =  event.target.checked;
		dispatch(changeIsDone({idCheckList, idTask, statusTask}))
	}

	const tasks = tasksData.map((elem) => {
		const checkedTask = elem.isDone ? true : false;

		return (
					<li key={elem.idTask}>
						<Task>
							<input id={elem.idTask} type="checkbox" defaultChecked={checkedTask} onChange={handleChange}/>
							<TaskName>{elem.task}</TaskName>
						</Task>
					</li>
		)
	})

	return (
		<Wrap>
			<WrapCheckList>
				<TitleCheckList>{currentCheckList.title}
					{currentCheckList.public && <InfoPublic>Виден всем пользователям</InfoPublic>}
				</TitleCheckList>
				<TextCheckList>{currentCheckList.description}</TextCheckList>
				<TaskList>
					{tasks}
				</TaskList>
			</WrapCheckList>
		</Wrap>
	);
};

export default CheckList;
