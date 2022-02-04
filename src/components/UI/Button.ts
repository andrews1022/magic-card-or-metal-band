import styled from 'styled-components';

type ButtonProps = {
	color: 'bunting' | 'rouge' | 'jungleGreen' | 'halfPearlLusta';
};

export const Button = styled.button<ButtonProps>`
	display: inline-flex;
	align-items: center;
	justify-content: space-between;

	background-color: transparent;
	border: 2px solid ${(props) => props.theme.colors[props.color]};
	border-radius: 0.5rem;
	color: ${(props) => props.theme.colors[props.color]};
	cursor: pointer;
	font-size: 1.5rem;
	padding: 1rem 2rem;
	text-transform: uppercase;
	transition: all 250ms ease-in-out;

	@media (hover) {
		&:hover,
		&:active,
		&:focus {
			background-color: ${(props) => props.theme.colors[props.color]};
			box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.075);
			color: #fff;
			transform: translateY(-0.25rem);
		}
	}

	svg {
		margin-right: 1rem;
	}
`;
