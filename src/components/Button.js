import React from "react";
import styled from "styled-components";

import theme from "../theme";
const { buttons } = theme;

const StyledButton = styled.a`
	text-decoration: none;
	padding: 0.8em 1.25em;
	font-weight: 700;
	border-radius: 8px;
	background: ${buttons.primary.background};
	color: ${buttons.primary.color};
	outline: none;
	width: fit-content;

	margin: 0 0.25em;

	transition: all 0.15s cubic-bezier(0.21, 0.63, 0.32, 0.98);

	:hover {
		background: ${buttons.hover.background};
		color: ${buttons.hover.color};
		cursor: pointer;
	}

	:active {
		background: ${buttons.hover.background};
		color: ${buttons.hover.color};
	}

	:first-child {
		margin-left: 0;
	}

	:last-child {
		margin-right: 0;
	}
`;

const StyledIcon = styled.span`
	font-size: 1.25em;
	position: relative;
	top: 0.2em;
`;

const Button = ({ to, icon, text }) => {
	return (
		<StyledButton href={to}>
			<StyledIcon>{icon}</StyledIcon> {text}
		</StyledButton>
	);
};

export default Button;
