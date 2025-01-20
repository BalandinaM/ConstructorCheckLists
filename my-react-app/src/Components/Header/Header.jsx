import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux';
import { exitProfile } from "../../redux/authReducer";

const HeaderWrap = styled.div`
	width: 100%;
	background-color: ${(props) => props.theme.colors.primary};
`;

const HeaderCustom = styled.header`
	width: 980px;
	padding: 20px;
	display: flex;
	flex-direction: row;
	color: ${(props) => props.theme.colors.primarySecondary};
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
`;

const TooltipText = styled.span`
	visibility: hidden;
	width: 75px;
	height: 75px;
	background-color: ${(props) => props.theme.colors.primary};
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
  z-index: 1;
	top: -3%;
	left: -3%;
`;

const IconWrap = styled.div`
	width: 70px;
	height: 70px;
	background-color: ${(props) => props.theme.colors.primarySecondary};
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;

	&:hover > ${TooltipText} {
    visibility: visible;
    opacity: 1;
  }
`;

const ImgWrap = styled(IconWrap)`
	margin-right: ${(props) => (props.$authToken === "true" ? "auto" : null )};;
`;

const TitleHeader = styled.h2`
	font-size: 3.2rem;
	font-weight: 700;
	margin: ${(props) => (props.$authToken === "true" ? null : "0 361px 0 300px" )};
`;

const UserWrap = styled.div`
	 margin-left: auto;
	 display: flex;
	 flex-direction: row;
	 gap: 20px;
`;


const Header = () => {
	const authToken = useSelector((state) => state.auth.isAuth);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleExitProfile = () => {
		setTimeout(() => {
			alert("Выход из профиля");
			dispatch(exitProfile());
			navigate("/");
		}, 800);
	};

	return (
		<HeaderWrap>
			<HeaderCustom>
				<ImgWrap $authToken={authToken ? "true" : "false"}>
					<img src="./image/logo.png" alt="Лого" width={50} height={50} />
				</ImgWrap>
				<TitleHeader $authToken={authToken ? "true" : "false"}>Check Master</TitleHeader>
				{authToken ? (
					<UserWrap>
						<NavLink to="./profile">
							<IconWrap>
								<img
									src="./image/icon_profile.png"
									alt="Фото пользователя"
									width={50}
									height={50}
								/>
								<TooltipText>Профиль</TooltipText>
							</IconWrap>
						</NavLink>
						<button onClick={handleExitProfile}>
							<IconWrap>
								<img src="./image/icon_exit.png" alt="" width={50} height={50} />
							</IconWrap>
						</button>
					</UserWrap>
				) : null}
			</HeaderCustom>
		</HeaderWrap>
	);
}

export default Header;
