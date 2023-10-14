import { ReactComponent as ButtonMove } from '../Icons/move.svg';
import { ReactComponent as ButtonEdit } from '../Icons/edit.svg';
import { ReactComponent as ButtonDelete } from '../Icons/delete.svg';
import {
  ContainerButton,
  ContainerTaskToolbar,
  ContextMenu,
  ContextMenuItem,
} from './TaskToolbar.styled';
import { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';

const TaskToolbar = ({ id, category }) => {
  const [visibleContextMenuItems, setVisibleContextMenuItems] = useState([]);
  const [visible, setVisible] = useState(false);
  // const dispatch = useDispatch();

  const moveTask = () => {
    setVisible(true);
  };

  const editTask = (id) => {
    console.log(`edit task ${id}`);
    // dispatch(updateTask(id, { }));
  };

  const deleteTask = (id) => {
    console.log(`delete task ${id}`);
    // dispatch(deleteTask(id));
  };

  const handleClickCategory = (event) => {
    setVisible(false);
    const value = event.nativeEvent.target.innerHTML;
    console.log(value);

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
      <ContainerButton>
        <ButtonMove type="button" onClick={moveTask} />
      </ContainerButton>
      <ContainerButton>
        <ButtonEdit type="button" onClick={() => editTask(id)} />
      </ContainerButton>
      <ContainerButton>
        <ButtonDelete type="button" onClick={() => deleteTask(id)} />
      </ContainerButton>
      {visible && (
        <ContextMenu>
          {visibleContextMenuItems.map((item, index) => (
            <ContextMenuItem key={index} onClick={handleClickCategory}>
              {item}
            </ContextMenuItem>
          ))}
        </ContextMenu>
      )}
    </ContainerTaskToolbar>
  );
};
export default TaskToolbar;
