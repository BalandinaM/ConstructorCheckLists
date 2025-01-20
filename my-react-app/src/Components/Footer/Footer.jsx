import styled from 'styled-components';

const FooterWrap = styled.div`
	width: 100%;
	background-color: ${(props) => props.theme.colors.primary};
`;

const Footer = styled.footer`
	width: 980px;
	margin: 0 auto;
	padding: 20px 40px;
	text-align: center;
	color: ${(props) => props.theme.colors.primarySecondary};
`

const FooterPage = () => {
    return (
        <FooterWrap>
        	<Footer>
	            <a href="https://t.me/Balandina_MS">Copyright by Marina Balandina</a>
	        </Footer>
        </FooterWrap>
    )
}

export default FooterPage;
