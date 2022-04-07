import styled from 'styled-components';

export const Button = styled.button`
	/* Adapt the colors based on primary prop */
	background: ${(props) => props.background};
	color: ${(props) => props.color};

	font-size: 16px;
	margin: 16px;
	padding: 4px 16px;
	border: 2px solid ${(props) => props.background};
	border-radius: 3px;

	&:hover {
		background: none;
		color: ${(props) => props.background};
	}
`;

export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	padding: 200px 0 200px 0;
`;
