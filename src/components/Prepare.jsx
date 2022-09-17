import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
export default function Prepare({ items, setItems }) {
  return (
    <>
      <PrepareComponent>
        <div className="head">Prepare to Study</div>
        <div className="container">
          <div className="body" id="body">
            {items.map((item, index) => (
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
                      <input type="text" />
                    </div>
                  </div>
                )}
              </Draggable>
            ))}
          </div>
          {/* <button onClick={() => addInput()}>添加</button> */}
        </div>
      </PrepareComponent>
    </>
  );
}

const PrepareComponent = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  .head {
    background-color: #a98181;
    text-align: center;
  }
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 10vw;
    min-height: 50vh;
    background-color: #a98181;
    .body {
      padding: 1rem;
      display: flex;
      flex-direction: column;
    }
    button {
      width: 50%;
      margin-bottom: 1rem;
    }
  }
`;
