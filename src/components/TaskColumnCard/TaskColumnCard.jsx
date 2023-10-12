import TaskToolbar from '../TaskToolbar/TaskToolbar';
import {
  Container,
  ContainerPhotoProfile,
  ContainerTaskCard,
  PriorityTask,
  TaskText,
} from './TaskColumnCard.styled';
import { useSelector } from 'react-redux';

function TaskColumnCard({ text, priority }) {
  const photoProfile = useSelector();
  console.log();
  return (
    <ContainerTaskCard>
      <TaskText>{text}</TaskText>
      <Container>
        <ContainerPhotoProfile>
          <img src={photoProfile} alt="" width="32" height="32"></img>
          <PriorityTask>{priority}</PriorityTask>
        </ContainerPhotoProfile>
        <TaskToolbar />
      </Container>
    </ContainerTaskCard>
  );
}
export default TaskColumnCard;
