import styled from "styled-components"

export const AboutSection = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: ${({ theme }) => theme.colors.background};
	padding: ${({ theme }) => theme.spacing.pagePadding.mobile};
	margin-bottom: 5rem;
`

export const AboutTitle = styled.h1`
	color: ${({ theme }) => theme.colors.text};
	padding: 5px;
	border-top: 1px solid ${({ theme }) => theme.colors.primary};
	border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
	margin: 5rem 0;
`

export const AboutDescription = styled.p`
	width: 90%;
	color: ${({ theme }) => theme.colors.textSecondary};
  text-align: center;
	line-height: 25px;
	margin-bottom: 30px;
	white-space: pre-wrap;
`