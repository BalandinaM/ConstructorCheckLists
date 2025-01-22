/* eslint-disable react/prop-types */

import "./Pagination.css";
import styled from "styled-components";
import { Wrapper } from "../../Elements/Wrapper";
import { NavLink } from "react-router-dom";
import Pagination from "./Pagination";

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

const Item = styled.li`
	width: 100%;
	padding: 15px;
	aspect-ratio: 1 / 1;
	background-color: ${(props) => props.theme.colors.primarySecondary};
	box-shadow: 0px 5px 3px 1px rgba(0, 62, 100, 0.23);
`;

const NavLinkCustom = styled(NavLink)`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 16px;
`;

const ItemTitle = styled.h3`
	height: 50px;
`;

const ItemText = styled.p`
	font-size: 1.2rem;
	flex-grow: 1;
`;

const ListCheckLists = ({
	currentItems,
	handlePageClick,
	pageCount,
	staticElement,
}) => {
	return (
		<ListCheckListsWrapper>
			<Title>Список чеклистов</Title>
			<List>
				{[staticElement].concat(
					currentItems.map((elem) => (
						<Item key={elem.id}>
							<NavLinkCustom to={`/checklist/${elem.id}`}>
								<ItemTitle>{elem.title}</ItemTitle>
								<ItemText>{elem.description}</ItemText>
							</NavLinkCustom>
						</Item>
					))
				)}
			</List>
			<Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
		</ListCheckListsWrapper>
	);
};

export default ListCheckLists;
