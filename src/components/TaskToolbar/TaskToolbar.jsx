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
import { useDispatch } from 'react-redux';
import {
  deleteTask,
  fetchTasks,
  updateTask,
} from '../../redux/tasks/tasksOperations';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { selectError } from '../../redux/tasks/tasksSelectors';
import { useSelector } from 'react-redux';

const TaskToolbar = ({ task }) => {
  const [visibleContextMenuItems, setVisibleContextMenuItems] = useState([]);
  const [visible, setVisible] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const { _id, category, title } = task;

  const moveTask = () => {
    setVisible(true);
  };

  const editTask = (_id) => {
    console.log(`edit task ${_id}`);
    setIsOpenModal(true);
  };

  const handleModalClose = () => {
    setIsOpenModal(false);
  };
  const onDeleteTask = (_id) => {
    const fetchData = async () => {
      dispatch(deleteTask(_id));
    };
    fetchData();
    dispatch(fetchTasks());
    if (error) toast.error(error);
  };

  const handleClickCategory = (event) => {
    setVisible(false);
    const value = event.nativeEvent.target.innerHTML;
    if (value === 'To do') {
      console.log('To do');
      dispatch(updateTask({ taskId: _id, category: 'to-do', title: title }));

      if (error) toast.error(error);
    }
    if (value === 'In progress') {
      console.log('In progress');
      dispatch(
        updateTask({ taskId: _id, category: 'in-progress', title: title }),
      );

      if (error) toast.error(error);
    }
    if (value === 'Done') {
      console.log('Done');
      dispatch(updateTask({ taskId: _id, category: 'done', title: title }));

      if (error) toast.error(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchTasks());
    };
    fetchData();
    if (error) toast.error(error);
  }, [dispatch, error]);

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
        onClick={() => editTask(_id)}
      />
      {isOpenModal && <TaskModal task={task} onModalClose={handleModalClose} />}
      <ButtonDelete
        className="button"
        type="button"
        onClick={() => onDeleteTask(_id)}
      />
      {visible && (
        <ContextMenu>
          {visibleContextMenuItems.map((item, index) => (
            <ContainerContextMenuItem key={index} onClick={handleClickCategory}>
              <ContextMenuItem>{item}</ContextMenuItem>
              <ButtonMove className="button" type="button" />
            </ContainerContextMenuItem>
          ))}
        </ContextMenu>
      )}
      <ToastContainer />
    </ContainerTaskToolbar>
  );
};
export default TaskToolbar;
