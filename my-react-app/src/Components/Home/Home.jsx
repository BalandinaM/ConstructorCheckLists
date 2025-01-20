import {useEffect} from "react";
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Wrapper } from "../../Elements/Wrapper";

const HomeWrapper = styled(Wrapper)`
	display: flex;
	flex-direction: column;
`;

const TitleGreeting = styled.p`
	font-size: 3.2rem;
	font-weight: 700;
	margin-top: 180px;
`;

const TextGreeting = styled.p`
	font-size: 2.8rem;
	font-weight: 500;
	margin-bottom: 3.2rem;
`;

const WrapLink = styled.div`
	display: flex;
	width: 500px;
	justify-content: space-between;
	align-items: center;
	margin: 0 auto;
`;

const NavLinkCustom = styled(NavLink)`
	font-size: 1.8rem;
	padding: 10px 40px;
	border-radius: 5%;
	box-shadow: 0px 5px 10px 2px rgba(0, 62, 100, 0.2);
`

const Home = () => {
	const authToken = useSelector((state) => state.auth.isAuth);
	const navigate = useNavigate()

	useEffect(() => {
			if (authToken) {
				navigate('/list')
			}
		}, [authToken, navigate]);

	return (
		<HomeWrapper>
					<TitleGreeting>Добро пожаловать!</TitleGreeting>
					<TextGreeting>Наведите порядок в списках своих дел, используя наше простое и лаконичное решение</TextGreeting>
					<WrapLink>
						<NavLinkCustom to='/signup'>Регистрация</NavLinkCustom>
						<NavLinkCustom to='/login'>Авторизация</NavLinkCustom>
					</WrapLink>
		</HomeWrapper>
	)

}

export default Home;
