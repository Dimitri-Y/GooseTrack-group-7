import styled from 'styled-components';

export const UserInfoStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const UserName = styled.span`
  font-size: 14px;
  font-weight: 700;
  line-height: 1.28;
  color: ${p => p.theme.secondaryTextColor};
`;

export const UserAvatar = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px; 
  height: 32px;
  border-radius: 32px;
  border: 1.8px solid ${p => p.theme.mainAccentColor};
`;

export const FirstLetterIcon = styled.span`
  font-size: 18px;
  font-weight: 700;
  line-height: 1.3;
  color: ${p => p.theme.mainTextColor};
`;

export const UserAvatarBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 32px;
  border: 1.8px solid ${p => p.theme.mainAccentColor};
`;