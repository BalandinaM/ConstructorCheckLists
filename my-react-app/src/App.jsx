import { HashRouter, Route, Routes } from "react-router-dom";
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import GlobalStyles from './GlobalStyles';
import { ThemeProvider } from 'styled-components';
import theme from './assests/constants/theme';
import SignUp from './Components/SignUp/SignUp';
import ListCheckLists from './Components/ListCheckLists/ListCheckLists';
import Header from './Components/Header/Header';
import styled from 'styled-components';
import FooterPage from './Components/Footer/Footer';

const BodyContainer = styled.div`
	//width: 1220px;
	min-height: 100vh;
  display: flex;
  flex-direction: column;
	margin: 0 auto;
	text-align: center;
	outline: 5px solid red;
`

function App() {

	return (
		<HashRouter>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<BodyContainer>
					<Header	/>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/login" element={<Login />} />
						<Route path='/signup'element={<SignUp />}/>
						<Route path='/list' element={<ListCheckLists />}/>
					</Routes>
					<FooterPage />
				</BodyContainer>
			</ThemeProvider>
		</HashRouter>
	);
}

export default App;
