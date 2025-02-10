import { useState } from "react";
import { Wrap } from "../../Elements/Wrapper";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
// import { Formik, Form } from "formik";
// import { HandleFormSubmit } from "../../assests/forForms/handleFormSubmit";

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



const CheckList = () => {
	const params = useParams();
	const idCheckList = params.id;//получение ид из параметров маршрута

	const arrCheckLists = useSelector((state) => state.checklist.checkListsData);//получаем массив чеклистов из хранилища
	const currentCheckList = arrCheckLists.find((item) => item.id === idCheckList);//находим чеклист по ид
	const tasksData = [...currentCheckList.tasksData];

	const [checked, setChecked] = useState(true);

	const tasks = tasksData.map((elem) => {
		const checkedTask = elem.isDone ? true : false;

		return <label key={elem.idTask}>
						<input id={elem.idTask} type="checkbox" defaultChecked={checkedTask} onChange={() => setChecked(!checked)}/>
						{elem.task}
					</label>
	})

	return (
		<Wrap>
			<WrapCheckList>
				<TitleCheckList>{currentCheckList.title}</TitleCheckList>
				<TextCheckList>{currentCheckList.description}</TextCheckList>
				{tasks}
			</WrapCheckList>
		</Wrap>
	);
};

export default CheckList;
