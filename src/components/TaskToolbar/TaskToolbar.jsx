import { ReactComponent as ButtonMove } from '../Icons/move.svg';
import { ReactComponent as ButtonEdit } from '../Icons/edit.svg';
import { ReactComponent as ButtonDelete } from '../Icons/delete.svg';
import { ContainerButton, ContainerTaskToolbar } from './TaskToolbar.styled';
import { useState } from 'react';
// import { createContext } from 'react';

// export const ContextMenuProvider = ({ children }) => {
//   const [contextMenuItems, setContextMenuItems] = useState([]);
//   return(<ContextMenu.Provider value={{}}></ContextMenu.Provider>)

// }

// export const ContextMenuItem = {
//   name: 'srting',
//   onClick: () => {},
// };

// export const ContextMenuModel = {
//   setContextMenu: (items) => {},
// };

// export const ContextMenu = createContext({ setContextMenu: () => {} });

// export const ContextMenu = () => {
//   return <></>;
// };

const TaskToolbar = ({ category }) => {
  const [visible, setVisible] = useState(false);

  const moveTask = () => {
    console.log('move task');
    setVisible(true);
  };

  const editTask = () => {
    console.log('edit task');
  };

  const deleteTask = () => {
    console.log('delete task');
  };

  const handleClick = (event) => {
    console.log('handle click');

    if (event.nativeEvent.target.innerHTML === 'To do') {
      console.log('To do');
      // dispatch(updateTask({ category: "to-do"}));
    }
    if (event.nativeEvent.target.innerHTML === 'In progress') {
      console.log('In progress');
      // dispatch(updateTask({ category: 'in-progress' }));
    }
    if (event.nativeEvent.target.innerHTML === 'Done') {
      console.log('Done');
      // dispatch(updateTask({ category: 'done' }));
    }
  };

  const getVisibleContextMenuItems = () => {
    let visibleContextMenuItems = [];

    if (category === 'to-do') {
      visibleContextMenuItems.push('In progress', 'Done');
    }
    if (category === 'in-progress') {
      visibleContextMenuItems.push('To do', 'Done');
    }
    if (category === 'done') {
      visibleContextMenuItems.push('To do', 'In progress');
    }

    return visibleContextMenuItems;
  };

  const visibleContextMenuItems = getVisibleContextMenuItems();

  return (
    <ContainerTaskToolbar>
      <ContainerButton>
        <ButtonMove type="button" onClick={moveTask} />
        {visible && (
          <div>
            {visibleContextMenuItems.map((item, index) => (
              <div key={index} onClick={handleClick}>
                {item}
              </div>
            ))}
          </div>
        )}
      </ContainerButton>
      <ContainerButton>
        <ButtonEdit type="button" onClick={editTask} />
      </ContainerButton>
      <ContainerButton>
        <ButtonDelete type="button" onClick={deleteTask} />
      </ContainerButton>
    </ContainerTaskToolbar>
  );
};
export default TaskToolbar;
