/* eslint-disable react/prop-types */

import ReactPaginate from "react-paginate";
import "./Pagination.css";
import styled from "styled-components";

const PaginationWrapper = styled.div`
	display: flex;
	justify-content: center;
	padding: 10px;
`;

const Pagination = ({ handlePageClick, pageCount }) => {
	return (
		<PaginationWrapper>
			<ReactPaginate
				previousLabel={<span>&#8592;</span>}
				nextLabel={<span>&#8594;</span>}
				breakLabel={"..."}
				breakClassName={"break-me"}
				pageCount={pageCount}
				marginPagesDisplayed={2}
				pageRangeDisplayed={5}
				onPageChange={handlePageClick}
				containerClassName={"pagination"}
				subContainerClassName={"pages pagination"}
				activeClassName={"active"}
			/>
		</PaginationWrapper>
	);
};

export default Pagination;
