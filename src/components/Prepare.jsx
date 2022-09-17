import React from "react";
import styled from "styled-components";
import { Droppable, Draggable } from "react-beautiful-dnd";
export default function Prepare({ prepare, addInput }) {
  return (
    <>
      <PrepareComponent>
        <div className="prepare">
          <div className="head">Prepare to Study</div>
          <Droppable droppableId="droppable-1">
            {(provided, snapshot) => {
              return (
                <div
                  //provided.droppableProps应用的相同元素.
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  // style={getListStyle(snapshot.isDraggingOver)}
                >
                  <div className="container">
                    <div className="body" id="body">
                      {prepare.map((item, index) => (
                        <Draggable
                          key={item.id}
                          draggableId={item.id}
                          index={index}
                        >
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
                              <div className="input">
                                <input
                                  type="text"
                                  id={item.id}
                                  onChange={() => {
                                    item.content = document.getElementById(
                                      item.id
                                    ).value;
                                    console.log(item.content);
                                  }}
                                />
                              </div>
                            </div>
                          )}
                        </Draggable>
                      ))}
                    </div>
                    <button onClick={() => addInput()}>+</button>
                  </div>
                </div>
              );
            }}
          </Droppable>
        </div>
      </PrepareComponent>
    </>
  );
}

const PrepareComponent = styled.div`
  .prepare {
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
        gap: 1rem;

        padding: 1rem;
        display: flex;
        flex-direction: column;
        .input {
          display: flex;
          flex-direction: row;
          justify-content: center;
          input {
            width: 80%;
            border: 1.5px solid;
          }
        }
      }
      button {
        width: width;
        height: 25%;
        margin-bottom: 1rem;
        border-radius: 10rem;
      }
      button:hover {
        opacity: 70%;
      }
    }
  }
`;
