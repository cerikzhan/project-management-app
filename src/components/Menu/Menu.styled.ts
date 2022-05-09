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
    background-color: #959595;
    z-index: 1;
    padding: 5rem 1rem;
    display: flex;
    flex-direction: column;
    padding: 5rem 1rem;
    transition: transform 0.3s ease-in-out;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    font-size: 25px;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const StyledLink = styled.a`
  @media (max-width: 768px) {
    padding: 0.4rem 2rem;
    font-size: 1em;
    text-decoration: none;
    text-transform: none;
  }
`;
