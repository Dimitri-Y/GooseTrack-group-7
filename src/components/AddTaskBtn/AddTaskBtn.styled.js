import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  width: 300px;
  height: 48px;
  padding: 0;
  border: 1px dashed #3e85f3;
  border-radius: 8px;
  transition:
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 1s cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 1s cubic-bezier(0.4, 0, 0.2, 1);

  color: ${(p) => p.theme.mainTextColor};
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  background-color: ${(p) => p.theme.secondaryAccentColorActive};

  .button {
    width: 14px;
    height: 14px;
    transition:
      transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
      stroke 1s cubic-bezier(0.4, 0, 0.2, 1);

    stroke: ${(p) => p.theme.mainTextColor};

    @media (min-width: 375px) {
      width: 16px;
      height: 16px;
    }
  }

  @media (min-width: 375px) {
    width: 304px;
    height: 52px;
  }
`;
