import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Dnd = () => {
  //初始化列表数据
  const getItems = (count) =>
    Array.from({ length: count }, (v, k) => k).map((k) => ({
      id: `item-${k + 1}`,
      content: `this is content ${k + 1}`,
    }));

  // 元素移动
  const move = (arr, startIndex, toIndex) => {
    arr = arr.slice();
    arr.splice(toIndex, 0, arr.splice(startIndex, 1)[0]);
    return arr;
  };

  const grid = 8;

  const [items, setItems] = useState(getItems(11));

  return items.map((item, index) => (
    <Draggable key={item.id} draggableId={item.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          // style={getItemStyle(
          //   snapshot.isDragging,
          //   provided.draggableProps.style
          // )}
        >
          <div>
            <input type="text" value={index} />
          </div>
        </div>
      )}
    </Draggable>
  ));
};

export default Dnd;
