import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Item = styled.li`
	position: relative;
	width: 100%;
	padding: 15px;
	aspect-ratio: 1 / 1;
	background-color: ${(props) => props.theme.colors.primarySecondary};
	box-shadow: 0px 5px 3px 1px rgba(0, 62, 100, 0.23);
`;

const NavLinkCustom = styled(NavLink)`
	padding: 2px 15px;

	&:hover {
		scale: 1.1;
	}
`;

const ItemTitle = styled.h3`
	height: 50px;
`;

const ItemText = styled.p`
	font-size: 1.2rem;
	flex-grow: 1;
`;

const Popup = styled.div`
	position: absolute;
  top: 0;
  left: 0;
  width: 100%;
	height: 100%;
  padding: 10px;
  background-color: ${(props) => props.theme.colors.primarySecondary};
  color: ${(props) => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
	gap: 10px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;

  ${Item}:hover & {
    opacity: 1;
    visibility: visible;
  }
`


const ItemListCheckLists = ({ elem, handleDeleteClick, handleEditClick }) => {
	return (
		<Item key={elem.id}>
			<ItemTitle>{elem.title}</ItemTitle>
			<ItemText>{elem.description}</ItemText>
			<Popup>
				<NavLinkCustom to={`/checklist/${elem.id}`}>Посмотреть</NavLinkCustom>
				<NavLinkCustom
					to="#"
					onClick={(e) => {
						e.preventDefault();
						if (elem.id) {
							handleEditClick(elem.id);
						} else {
							console.error("ID элемента не определён");
						}
					}}
				>
					Редактировать
				</NavLinkCustom>
				<NavLinkCustom onClick={() => handleDeleteClick(elem.id)}>
					Удалить
				</NavLinkCustom>
			</Popup>
		</Item>
	);
};

export default ItemListCheckLists;
