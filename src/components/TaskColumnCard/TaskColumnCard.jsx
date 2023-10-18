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

  const getBackgroundColorPriority = () => {
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
  };

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
          <PriorityTask $backgroundColor={() => getBackgroundColorPriority()}>
            {priority}
          </PriorityTask>
        </ContainerPhotoProfile>
        <TaskToolbar task={task} />
      </Container>
    </ContainerTaskCard>
  );
};
export default TaskColumnCard;
