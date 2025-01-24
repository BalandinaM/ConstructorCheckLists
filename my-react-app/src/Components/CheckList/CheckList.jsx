import { Wrap } from "../../Elements/Wrapper";
import styled from "styled-components";

const WrapCheckList = styled.div`
	width: 740px;
	padding: 40px;
	background-color: antiquewhite;
`

const CheckList = () => {
	return (
		<Wrap>
			<WrapCheckList>
				<h3>Я заголовок чеклиста</h3>
				<p>Я описание чек листа. Я расскажу о том зачем он создан когда и кем и еще много разной фигни</p>
				<ul>
				  <li>
						<input type="checkbox" />
						<label htmlFor="">ОЧень важный пункт</label>
					</li>
					<li>
						<input type="checkbox" />
						<label htmlFor="">Нууууу</label>

					</li>
					<li>
						<input type="checkbox" />
						<label htmlFor="">Может и не очень важный</label>
					</li>
				</ul>
			</WrapCheckList>
		</Wrap>
	)
};

export default CheckList;
