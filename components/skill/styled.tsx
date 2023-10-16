import styled from 'styled-components';

export const ContentIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 10rem;
`;
export const DivContentIcons = styled.div`
  animation: movie 5s infinite linear;
  transition: transform 1s linear;
  @keyframes movie {
    from {
      transform: translate(-100%, 0);
    }
    to {
      transform: translate(100%, 0);
    }
  }
`;
