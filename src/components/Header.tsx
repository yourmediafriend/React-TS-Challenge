import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../assets/fxdigitallogo.png";

const HeaderSC = styled.header`
	display: flex;
	justify-content: center;
	width: 100%;
	padding: 15px 0;
	border-bottom: 1px solid grey;
`;

const NavSC = styled.nav`
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	width: 100%;
	max-width: 1200px;
`;

export const Header = () => {
	return (
		<HeaderSC>
			<nav>
				<Link to="/">
					<img src={logo} alt="logo" />
				</Link>
			</nav>
		</HeaderSC>
	);
};

export default Header;
