import { ReactComponent as ButtonMove } from '../Icons/move.svg';
import { ReactComponent as ButtonEdit } from '../Icons/edit.svg';
import { ReactComponent as ButtonDelete } from '../Icons/delete.svg';
import { ContainerButton, ContainerTaskToolbar } from './TaskToolbar.styled';

function TaskToolbar() {
  const moveTask = () => {
    console.log('move task');
  };

  const editTask = () => {
    console.log('edit task');
  };

  const deleteTask = () => {
    console.log('delete task');
  };

  return (
    <ContainerTaskToolbar>
      <ContainerButton>
        <ButtonMove type="button" onClick={moveTask} />
      </ContainerButton>
      <ContainerButton>
        <ButtonEdit type="button" onClick={editTask} />
      </ContainerButton>
      <ContainerButton>
        <ButtonDelete type="button" onClick={deleteTask} />
      </ContainerButton>
    </ContainerTaskToolbar>
  );
}
export default TaskToolbar;
