import styled from "styled-components";
import { Wrapper } from "../../Elements/Wrapper";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const List = styled.ul`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 30px;
	justify-items: center;
`

const Item = styled.li`
	width: 250px;
	border: 2px solid blue;
  height: 250px;
`;

const NavLinkCustom = styled(NavLink)`
	display: block;
	width: 100%;
	height: 100%;
`

const ListCheckLists= () => {
	const arrCheckLists = useSelector((state) => state.checklist.checkListsData);
	console.log(arrCheckLists);

	return (
		<Wrapper>
			<h1>Список чеклистов</h1>
			<List>
				<Item>
					<NavLinkCustom to="./checklist/${id}">
						<h3>Заголовок чеклиста</h3>
						<p>Описание чеклиста</p>
					</NavLinkCustom>
				</Item>
				<Item>
					Чеклист №2
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
		</Wrapper>
	)
}

export default ListCheckLists;
