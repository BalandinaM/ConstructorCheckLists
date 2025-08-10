import "./Pagination.css";
import styled from "styled-components";
import { Wrapper } from "../../Elements/Wrapper";
import Pagination from "./Pagination";
import ItemListCheckLists from "./ItemListCheckLists";

const ListCheckListsWrapper = styled(Wrapper)`
	display: flex;
	flex-direction: column;
	padding: 20px 60px;
`;

const Title = styled.h1`
	margin-bottom: 2rem;
`;

const List = styled.ul`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: repeat(3, 1fr);
	gap: 30px;
	justify-items: center;
	margin-bottom: 2rem;
`;

const ListCheckLists = ({
	currentItems,
	handlePageClick,
	pageCount,
	staticElement,
	handleDeleteClick,
	handleEditClick
}) => {
	return (
		<ListCheckListsWrapper>
			<Title>Список чеклистов</Title>
			<List>
				{[staticElement].concat(
					currentItems.map((elem) => (
						<ItemListCheckLists elem={elem} key={elem.id} handleDeleteClick={handleDeleteClick} handleEditClick={handleEditClick}/>
					))
				)}
			</List>
			<Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
		</ListCheckListsWrapper>
	);
};

export default ListCheckLists;
