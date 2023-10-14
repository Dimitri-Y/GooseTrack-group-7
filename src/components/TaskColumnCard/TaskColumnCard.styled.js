import styled from 'styled-components';

export const ContainerTaskCard = styled.div`
  display: flex;
  gap: 32px;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
  border-radius: 8px;
  background-color: #f7f6f9;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ContainerPhotoProfile = styled.div`
  display: flex;
  align-items: center;
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
  width: 272px;
  height: 16px;
  overflow: hidden;
  font-size: 14px;
  color: #111111;
`;

export const PriorityTask = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 12px;
  padding: 4px 12px;
  margin: 0;
  border-radius: 4px;
  font-size: 10px;
  color: #ffffff;
  background-color: ${(priority) => {
    switch (priority) {
      case 'Low':
        return '#72c2f8';
      case 'Medium':
        return '#F3B249';
      case 'Hight':
        return '#EA3D65';
      default:
        return '#F3B249';
    }
  }};
`;
