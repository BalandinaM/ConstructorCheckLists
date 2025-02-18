import { HashRouter, Route, Routes } from "react-router-dom";
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import GlobalStyles from './GlobalStyles';
import { ThemeProvider } from 'styled-components';
import theme from './assests/constants/theme';
import SignUp from './Components/SignUp/SignUp';
import ListCheckListsContainer from './Components/ListCheckLists/ListCheckListsContainer';
import Header from './Components/Header/Header';
import styled from 'styled-components';
import FooterPage from './Components/Footer/Footer';
import CheckList from "./Components/CheckList/CheckList";
import NewCheckList from "./Components/NewCheckList/NewChecklist";
import EditCheckList from "./Components/EditCheckList/EditCheckList";

const BodyContainer = styled.div`
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
						<Route path='/list' element={<ListCheckListsContainer />}/>
						<Route path="/checklist/:id" element={<CheckList />}/>
						<Route path="/checklist/:id/edit" element={<EditCheckList/>}/>
						<Route path="/newchecklist" element={<NewCheckList />}/>
					</Routes>
					<FooterPage />
				</BodyContainer>
			</ThemeProvider>
		</HashRouter>
	);
}

export default App;
