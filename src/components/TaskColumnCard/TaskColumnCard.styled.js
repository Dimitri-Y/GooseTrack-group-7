import styled from 'styled-components';

export const ContainerTaskCard = styled.div`
  display: flex;
  gap: 32px;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px 15px 18px;
  transition:
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 1s cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border 1s cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 1s cubic-bezier(0.4, 0, 0.2, 1);

  border: ${(p) => p.theme.borderTasks};
  border-radius: 8px;
  background-color: ${(p) => p.theme.taskCardBGColor};
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ContainerPhotoProfile = styled.div`
  display: flex;
  align-items: end;
`;

export const ContainerAvatar = styled.div`
  width: 32px;
  height: 32px;
  margin-right: 8px;
  border-radius: 50%;
`;

export const TaskText = styled.p`
  padding: 0;
  margin: 0;
  max-width: 272px;
  height: 16px;
  font-size: 14px;
  transition:
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 1s cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 1s cubic-bezier(0.4, 0, 0.2, 1);

  color: ${(p) => p.theme.mainTextColor};
`;

export const PriorityTask = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 63px;
  padding: 4px 12px;
  margin: 0;
  border-radius: 4px;
  font-size: 10px;
  color: #f7f6f9;
  background-color: ${(props) => props.$backgroundColor};
`;
