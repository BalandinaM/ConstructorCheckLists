import styled from "styled-components";
import { Wrapper } from "../../Elements/Wrapper";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const ListCheckListsWrapper = styled(Wrapper)`
	display: flex;
  flex-direction: column;
	padding: 20px 60px;
`;
const Title = styled.h1`
	margin-bottom: 2.0rem;
`

const List = styled.ul`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: repeat(3, 1fr);
	gap: 30px;
	justify-items: center;
	margin-bottom: 2.0rem;
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

const Pagination = styled.ul`
	display: flex;
	flex-direction: row;
	gap: 15px;
	align-self: center;
`;

const ItemPagination = styled.li`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 30px;
	height: 30px;
	box-shadow: 1px 2px 3px 0px rgba(0, 62, 100, 0.23);
	background-color: ${(props) => props.theme.colors.primarySecondary};
	color: rgba(0, 62, 100, 0.5);// потом прописать в зависимости от входящих пропсов,активная страница - темный цвет

	&:hover {
		transform: scale(1.1);
	}
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

const ItemTitle = styled.h3`
	height: 50px;
`;

const ItemText = styled.p`
	font-size: 1.2rem;
	flex-grow: 1;
`;

const Button = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 30px;
	height: 30px;
	background-color: ${(props) => props.theme.colors.primarySecondary};
	border-radius: 50%;
	box-shadow: 1px 2px 3px 0px rgba(0, 62, 100, 0.23);

	&:hover {
		transform: scale(1.1);
	}
`;

const ButtonLeft = styled(Button)`
	& img {
		transform: rotate(45deg);
	}
`;

const ButtonRight = styled(Button)`
	& img {
		transform: rotate(225deg);
	}
`;


const ListCheckLists= () => {
	const arrCheckLists = useSelector((state) => state.checklist.checkListsData);
	console.log(arrCheckLists);

	const staticElement = (
    <ItemStatic key="new-checklist-link">
      <ImgWrap>
				<img src="./image/icon_add_1.png" alt="Добавить новую запись" width={70} height={70} />
			</ImgWrap>
    </ItemStatic>
  );


	return (
		<ListCheckListsWrapper>
			<Title>Список чеклистов</Title>
			<List>
			{[staticElement].concat(
        arrCheckLists.map((elem) => (
					<Item key={elem.id}>
						<NavLinkCustom to={`/checklist/${elem.id}`}>
							<ItemTitle>{elem.title}</ItemTitle>
							<ItemText>{elem.description}</ItemText>
						</NavLinkCustom>
					</Item>
				))
      )}
			</List>
			<Pagination>
				<ButtonLeft>
					<img src="./image/icon_arrow.png" width={10} height={10} />
				</ButtonLeft>
				<ItemPagination>1</ItemPagination>
				<ItemPagination>2</ItemPagination>
				<ItemPagination>3</ItemPagination>
				<ItemPagination>4</ItemPagination>
				<ButtonRight>
					<img src="./image/icon_arrow.png" width={10} height={10} />
				</ButtonRight>
			</Pagination>
		</ListCheckListsWrapper>
	)
}

export default ListCheckLists;
