import { ReactComponent as ButtonMove } from '../Icons/move.svg';
import { ReactComponent as ButtonEdit } from '../Icons/edit.svg';
import { ReactComponent as ButtonDelete } from '../Icons/delete.svg';
import {
  ContainerContextMenuItem,
  ContainerTaskToolbar,
  ContextMenu,
  ContextMenuItem,
} from './TaskToolbar.styled';
import { useEffect, useState } from 'react';
import TaskModal from '../TaskModal/TaskModal';
// import { useDispatch } from 'react-redux';

const TaskToolbar = ({ task }) => {
  const [visibleContextMenuItems, setVisibleContextMenuItems] = useState([]);
  const [visible, setVisible] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  // const dispatch = useDispatch();
  const { id, category } = task;

  const moveTask = () => {
    setVisible(true);
  };

  const editTask = (id) => {
    console.log(`edit task ${id}`);
    setIsOpenModal(true);
  };
  
  const handleModalClose = () => {
    setIsOpenModal(false);
  };

  const deleteTask = (id) => {
    console.log(`delete task ${id}`);
    // dispatch(deleteTask(id));
  };

  const handleClickCategory = (event) => {
    setVisible(false);
    const value = event.nativeEvent.target.innerHTML;

    if (value === 'To do') {
      console.log('To do');
      // dispatch(updateTask(id, { category: "to-do"}));
    }
    if (value === 'In progress') {
      console.log('In progress');
      // dispatch(updateTask(id, { category: 'in-progress' }));
    }
    if (value === 'Done') {
      console.log('Done');
      // dispatch(updateTask(id, { category: 'done' }));
    }
  };

  useEffect(() => {
    if (category === 'to-do') {
      setVisibleContextMenuItems(['In progress', 'Done']);
    }
    if (category === 'in-progress') {
      setVisibleContextMenuItems(['To do', 'Done']);
    }
    if (category === 'done') {
      setVisibleContextMenuItems(['To do', 'In progress']);
    }
  }, [category]);

  return (
    <ContainerTaskToolbar>
      <ButtonMove className="button" type="button" onClick={moveTask} />
      <ButtonEdit
        className="button"
        type="button"
        onClick={() => editTask(id)}
      />
      {isOpenModal && <TaskModal task={task} onModalClose={handleModalClose}/>}
      <ButtonDelete
        className="button"
        type="button"
        onClick={() => deleteTask(id)}
      />
      {visible && (
        <ContextMenu>
          {visibleContextMenuItems.map((item, index) => (
            <ContainerContextMenuItem key={index} onClick={handleClickCategory}>
              <ContextMenuItem>{item}</ContextMenuItem>
              <ButtonMove />
            </ContainerContextMenuItem>
          ))}
        </ContextMenu>
      )}
    </ContainerTaskToolbar>
  );
};
export default TaskToolbar;
