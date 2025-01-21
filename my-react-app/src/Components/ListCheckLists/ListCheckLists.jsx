import styled from "styled-components";
import { Wrapper } from "../../Elements/Wrapper";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const ListCheckListsWrapper = styled(Wrapper)`
	display: flex;
    flex-direction: column;
`

const Title = styled.h1`
	margin-bottom: 2.0rem;
`

const List = styled.ul`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 30px;
	justify-items: center;
	margin-bottom: 2.0rem;
`

const Item = styled.li`
	width: 100%;
	border: 2px solid blue;
  	//height: 250px;
	aspect-ratio: 1 / 1;
`;

const NavLinkCustom = styled(NavLink)`
	display: block;
	width: 100%;
	height: 100%;
`;

const Pagination = styled.ul`
	display: flex;
	flex-direction: row;
	gap: 5px;
	align-self: center;
`

const ItemPagination = styled.li`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 30px;
	height: 30px;
	border: 2px solid yellow;
`;

const ListCheckLists= () => {
	const arrCheckLists = useSelector((state) => state.checklist.checkListsData);
	console.log(arrCheckLists);

	return (
		<ListCheckListsWrapper>
			<Title>Список чеклистов</Title>
			<List>
				<Item>
					<p>Сюда надо добавить сслыку на создание нового чеклиста</p>
				</Item>
				<Item>
					<NavLinkCustom to="./checklist/${id}">
						<h3>Заголовок чеклиста</h3>
						<p>Описание чеклиста</p>
					</NavLinkCustom>
				</Item>
				<Item>
					Чеклист №3
				</Item>
				<Item>
					Чеклист №3
				</Item>
				<Item>
					Чеклист №3
				</Item>
				<Item>
					Чеклист №3
				</Item>
				<Item>
					Чеклист №3
				</Item>
				<Item>
					Чеклист №3
				</Item>
				<Item>
					Чеклист №3
				</Item>
				<Item>
					Чеклист №3
				</Item>
				<Item>
					Чеклист №3
				</Item>
				<Item>
					Чеклист №3
				</Item>
			</List>
			<Pagination>
				<ItemPagination>1</ItemPagination>
				<ItemPagination>2</ItemPagination>
				<ItemPagination>3</ItemPagination>
				<ItemPagination>4</ItemPagination>
			</Pagination>
		</ListCheckListsWrapper>
	)
}

export default ListCheckLists;
