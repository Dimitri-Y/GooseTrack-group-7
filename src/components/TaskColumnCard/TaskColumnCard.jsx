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

const TaskColumnCard = ({ task: { id, title, priority, category } }) => {
  // const photoProfile = useSelector(selectPhotoProfile);

  const getVisibleTaskText = () => {
    let taskText = title;
    if (title.length > 34) {
      taskText = `${title.split('').slice(0, 34).join('')}...`;
    }
    return taskText;
  };

  return (
    <ContainerTaskCard>
      <TaskText>{getVisibleTaskText()}</TaskText>
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
          <PriorityTask priority={priority}>{priority}</PriorityTask>
        </ContainerPhotoProfile>
        <TaskToolbar id={id} category={category} />
      </Container>
    </ContainerTaskCard>
  );
};
export default TaskColumnCard;
