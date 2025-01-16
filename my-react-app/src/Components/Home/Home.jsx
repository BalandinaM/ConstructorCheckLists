import {useState, useEffect} from "react";
import { useSelector } from 'react-redux';

const Home = () => {
	const [isAuth, setIsAuth] = useState(false);
	const authToken = useSelector((state) => state.auth.isAuth);

	useEffect(() => {
			if (authToken) {
				setIsAuth(true);
			}
		}, [authToken]);

	return isAuth ? (
			<p>Список чеклистов</p>
	) : (
			<p>Логин</p>
	)
}

export default Home;
