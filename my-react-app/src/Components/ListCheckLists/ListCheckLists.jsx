import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import './Pagination.css';
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

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
`;

const ListCheckLists= () => {
	const arrCheckLists = useSelector((state) => state.checklist.checkListsData);
	console.log(arrCheckLists);
	const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 11;

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * pageSize;
  const currentItems = arrCheckLists.slice(offset, offset + pageSize);
  const pageCount = Math.ceil(arrCheckLists.length / pageSize);

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
			<PaginationWrapper>
				<ReactPaginate
	        previousLabel={<span>&#8592;</span>}
	        nextLabel={<span>&#8594;</span>}
	        breakLabel={'...'}
	        breakClassName={'break-me'}
	        pageCount={pageCount}
	        marginPagesDisplayed={2}
	        pageRangeDisplayed={5}
	        onPageChange={handlePageClick}
	        containerClassName={'pagination'}
	        subContainerClassName={'pages pagination'}
	        activeClassName={'active'}
	      />
			</PaginationWrapper>
		</ListCheckListsWrapper>
	)
}

export default ListCheckLists;
