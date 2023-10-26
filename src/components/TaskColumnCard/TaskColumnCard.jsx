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
import { useMemo } from 'react';
import getBackgroundColorPriority from '../../utils/getBackgroundColorPriority';

const TaskColumnCard = ({ task }) => {
  const { title, priority, owner } = task;

  const VisibleTaskText = useMemo(() => getVisibleTaskText(title, 34), [title]);
  return (
    <ContainerTaskCard>
      <TaskText>{VisibleTaskText}</TaskText>
      <Container>
        <ContainerPhotoProfile>
          <ContainerAvatar>
            {owner.avatarURL && (
              <img
                src={owner.avatarURL}
                alt="photo profile"
                width="32"
                height="32"
              ></img>
            )}
          </ContainerAvatar>
          <PriorityTask
            $backgroundColor={() => getBackgroundColorPriority(priority)}
          >
            {priority}
          </PriorityTask>
        </ContainerPhotoProfile>
        <TaskToolbar task={task} />
      </Container>
    </ContainerTaskCard>
  );
};
export default TaskColumnCard;
