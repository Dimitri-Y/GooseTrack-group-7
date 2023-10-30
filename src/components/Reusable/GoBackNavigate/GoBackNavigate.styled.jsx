import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AuthLink = styled(Link)`
  font-size: 12px;
  font-weight: 600;
  line-height: 1.16;
  transition:
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 1s cubic-bezier(0.4, 0, 0.2, 1);

  color: ${(p) => p.theme.buttonTextColor};

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
  }
`;
