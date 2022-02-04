import styled from 'styled-components';

export const Name = styled.span`
	color: ${(props) => props.theme.colors.bunting};
	opacity: 0.85;
`;

export const ButtonRow = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	margin-top: 1.5%;

	button {
		margin: 0 1rem;
	}
`;
