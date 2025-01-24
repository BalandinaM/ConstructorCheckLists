import styled from "styled-components";
import { NavLink } from "react-router-dom";

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


const ItemListCheckLists = ({elem}) => {
	return (
		<Item key={elem.id}>
			<NavLinkCustom to={`/checklist/${elem.id}`}>
				<ItemTitle>{elem.title}</ItemTitle>
				<ItemText>{elem.description}</ItemText>
			</NavLinkCustom>
		</Item>
	);
};

export default ItemListCheckLists;
