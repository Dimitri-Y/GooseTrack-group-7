import styled from '@emotion/styled';

export const ContainerTaskCard = styled.div`
  display: flex;
  gap: 32px;
  flex-direction: column;
  padding: 15px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ContainerPhotoProfile = styled.div`
  display: flex;
  gap: 8;
`;

export const TaskText = styled.p`
  width: 272px;
  height: 16px;
  font-size: 14px;
  line-height: 18;
  color: #111111;
`;

export const PriorityTask = styled.p`
  display: flex;
  padding: 4px 12px;
  background-color: ${(props) => {
    switch (props.priority) {
      case 'low':
        return '#72c2f8';
      case 'medium':
        return '#F3B249';
      case 'hight':
        return '#EA3D65';
      default:
        return;
    }
  }};
`;
