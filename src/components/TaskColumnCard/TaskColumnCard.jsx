import TaskToolbar from '../TaskToolbar/TaskToolbar';
import {
  Container,
  ContainerAvatar,
  ContainerPhotoProfile,
  ContainerTaskCard,
  PriorityTask,
  TaskText,
} from './TaskColumnCard.styled';
import getVisibleTaskText from '../../utils/getVisibleTaskText';
// import { useSelector } from 'react-redux';
import photoProfile from '../../assets/photo-profile.png';
import { useMemo } from 'react';

const TaskColumnCard = ({ task }) => {
  // const photoProfile = useSelector(selectPhotoProfile);

  const { title, priority } = task;

  const VisibleTaskText = useMemo(() => getVisibleTaskText(title, 34), [title]);

  return (
    <ContainerTaskCard>
      <TaskText>{VisibleTaskText}</TaskText>
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
        <TaskToolbar task={task} />
      </Container>
    </ContainerTaskCard>
  );
};
export default TaskColumnCard;
