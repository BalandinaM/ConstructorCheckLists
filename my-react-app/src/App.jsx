import { useSelector } from 'react-redux';
import './App.css';
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import GlobalStyles from './GlobalStyles';
import { ThemeProvider } from 'styled-components';
import theme from './assests/constants/theme';
import SignUp from './Components/SignUp/SignUp';
import ListCheckLists from './Components/ListCheckLists/ListCheckLists';
// import Button from '@mui/material/Button';
// import Container from '@mui/material/Container';

function App() {
	const arrCheckLists = useSelector((state) => state.checklist.checkListsData);
	console.log(arrCheckLists);

	return (
		<HashRouter>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path='/signup'element={<SignUp />}/>
					<Route path='/list' element={<ListCheckLists />}/>
				</Routes>
			</ThemeProvider>
		</HashRouter>
	);
}

export default App;
