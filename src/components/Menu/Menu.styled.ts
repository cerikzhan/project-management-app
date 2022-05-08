import styled from 'styled-components';

export const StyledMenu = styled.nav<{ open: boolean }>`
  display: flex;
  gap: 0.4em;
  @media (max-width: 768px) {
    top: 0;
    right: 0;
    height: 100vh;
    width: 40vw;
    position: fixed;
    background-color: #be8b7b;
    z-index: 1;

    display: flex;
    flex-direction: column;
    padding: 10rem 0;

    transition: transform 0.3s ease-in-out;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const StyledLink = styled.a`
  @media (max-width: 768px) {
    padding: 0 2rem;
    font-size: 2rem;
    color: #fdf2e9;
    text-decoration: none;

    :hover {
      color: #fbe69b;
    }
  }
`;
