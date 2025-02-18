import { useState } from "react";
import "./Pagination.css";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import ListCheckLists from "./ListCheckLists";
import { NavLink} from "react-router-dom";
import { deleteCheckList } from "../../redux/checkListReducer";
import { useNavigate } from "react-router-dom";

const Item = styled.li`
	width: 100%;
	padding: 15px;
	aspect-ratio: 1 / 1;
	background-color: ${(props) => props.theme.colors.primarySecondary};
	box-shadow: 0px 5px 3px 1px rgba(0, 62, 100, 0.23);
`;

const ItemStatic = styled(Item)`
	border: none;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${(props) => props.theme.colors.primary};
`;

const ImgWrap = styled.div`
	width: 110px;
	height: 110px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${(props) => props.theme.colors.primarySecondary};
	border-radius: 50%;
`;

const ListCheckListsContainer = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const arrCheckLists = useSelector((state) => state.checklist.checkListsData);
	const [currentPage, setCurrentPage] = useState(0);
	const pageSize = 11;

	const handlePageClick = ({ selected }) => {
		setCurrentPage(selected);
	};

	const handleDeleteClick = (id) => {
		if (window.confirm(`Вы уверены, что хотите удалить этот чек-лист?`)) {
			dispatch(deleteCheckList(id));
		}
	};

	const handleEditClick = (id) => {
		if (window.confirm(`Вы уверены, что хотите отредактировать этот чек-лист? Внесение изменений приведет к сбросу всех выполненных задач.`)) {
			navigate(`/checklist/${id}/edit`);
		}
	};

	const offset = currentPage * pageSize;
	const currentItems = arrCheckLists.slice(offset, offset + pageSize);
	const pageCount = Math.ceil(arrCheckLists.length / pageSize);

	const staticElement = (
		<ItemStatic key="new-checklist-link">
			<NavLink to={"/newchecklist"}>
				<ImgWrap>
					<img
						src="./image/icon_add_1.png"
						alt="Добавить новую запись"
						width={70}
						height={70}
					/>
				</ImgWrap>
			</NavLink>
		</ItemStatic>
	);

	return (
		<>
			<ListCheckLists
				currentItems={currentItems}
				handlePageClick={handlePageClick}
				pageCount={pageCount}
				staticElement={staticElement}
				handleDeleteClick={handleDeleteClick}
				handleEditClick={handleEditClick}
			/>
		</>
	);
};

export default ListCheckListsContainer;
