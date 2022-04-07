import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	text-align: center;
	flex-wrap: wrap;
	text-align: center;
	justify-content: center;
	padding: 0;
	margin: 0;
`;

export const Wrapper = styled.div`
	display: flex;
	text-align: center;
	flex-wrap: wrap;
	text-align: center;
	justify-content: center;
`;

export const Image = styled.img`
	height: 250px;
	width: 250px;
	object-fit: cover;
	object-position: top;
`;

export const Tile = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	background-color: green;
	padding: 10px 25px 10px 25px;
	margin: 25px;
	max-width: 250px;
	border-radius: 10px;
	color: white;
`;

export const Button = styled.button`
	display: flex;
	justify-content: center;
	background-color: ${(props) => props.backgroundColor};
	color: white;
	cursor: pointer;
	width: 50%;
	margin: 0 auto;
	border: none;
	padding: 10px 20px;
	border-radius: 10px;
`;

export const H1 = styled.h1`
	margin: 0;
	padding: 0;
	font-size: 1.5em;
`;

export const H3 = styled.h3`
	margin: 0;
	padding: 0;
	font-size: 1em;
`;

export const H5 = styled.h3`
	margin: 0;
	padding: 0;
`;
