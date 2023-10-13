import TaskToolbar from '../TaskToolbar/TaskToolbar';
import {
  Container,
  ContainerAvatar,
  ContainerPhotoProfile,
  ContainerTaskCard,
  PriorityTask,
  TaskText,
} from './TaskColumnCard.styled';
// import { useSelector } from 'react-redux';
import photoProfile from '../../assets/photo-profile.png';

const TaskColumnCard = ({ task: { title, priority, category } }) => {
  // const photoProfile = useSelector('../Icons/photo-profile.png');
  console.log(priority);
  return (
    <ContainerTaskCard>
      <TaskText>{title.length > 30 ? `${title}...` : title}</TaskText>
      <Container>
        <ContainerPhotoProfile>
          <ContainerAvatar>
            {photoProfile && (
              <img
                src={photoProfile}
                alt="photo profile"
                width="32"
                height="32"
              ></img>
            )}
          </ContainerAvatar>
          <PriorityTask >{priority}</PriorityTask>
        </ContainerPhotoProfile>
        <TaskToolbar category={category} />
      </Container>
    </ContainerTaskCard>
  );
};
export default TaskColumnCard;
