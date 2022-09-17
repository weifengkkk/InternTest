import React, { lazy } from "react";
import styled from "styled-components";
import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { v4 as uuidv4, v4 } from "uuid";

import { BsPlusCircleFill } from "react-icons/bs";
import { BsDashCircleFill } from "react-icons/bs";

export default function Index() {
  const [inputNum, setInputNum] = useState(0);
  const [complete, setComlete] = useState([]);
  const [learning, setLearning] = useState([]);
  const [prepare, setPrepare] = useState([]);
  // 元素移动

  const addInput = () => {
    prepare.push({ id: `item-${inputNum + 1}`, content: "" });
    setPrepare(prepare);
    setInputNum(inputNum + 1);
  };
  const move = (arr1, startIndex, arr2, toIndex, type) => {
    if (type === "1-2") {
      let temp = arr1.splice(startIndex, 1);
      arr2 = [...arr2, ...temp];
      setPrepare(prepare);
      setLearning(arr2);
    } else if (type === "1-3") {
      let temp = arr1.splice(startIndex, 1);
      arr2 = [...arr2, ...temp];
      setPrepare(prepare);
      setComlete(arr2);
    } else if (type === "2-3") {
      let temp = arr1.splice(startIndex, 1);
      arr2 = [...arr2, ...temp];
      setLearning(learning);
      setComlete(arr2);
    }
  };
  const onDragEnd = (result) => {
    console.log(result);
    if (!result.destination) {
      return;
    }
    if (
      result.source.droppableId === "droppable-1" &&
      result.destination.droppableId === "droppable-2"
    ) {
      move(
        prepare,
        result.source.index,
        learning,
        result.destination.index,
        "1-2"
      );
    } else if (
      result.source.droppableId === "droppable-1" &&
      result.destination.droppableId === "droppable-2"
    ) {
      move(
        prepare,
        result.source.index,
        complete,
        result.destination.index,
        "1-3"
      );
    } else if (
      result.source.droppableId === "droppable-2" &&
      result.destination.droppableId === "droppable-3"
    ) {
      move(
        learning,
        result.source.index,
        complete,
        result.destination.index,
        "2-3"
      );
    }
  };
  const handleDelete = (index) => {
    let arr = learning.splice(index, 1);

    setLearning([...learning]);
    console.log(arr);
  };
  return (
    <IndexContainer>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable-1">
          {(provided, snapshot) => {
            return (
              <div
                //provided.droppableProps应用的相同元素.
                {...provided.droppableProps}
                ref={provided.innerRef}
              // style={getListStyle(snapshot.isDraggingOver)}
              >
                <div className="task-tab prepare">
                  <div className="head">Prepare to Study</div>
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
                    <button onClick={() => addInput()}>
                      <BsPlusCircleFill className="icon" color="#f0f0f0" size="100%" />
                    </button>
                  </div>
                </div>
              </div>
            );
          }}
        </Droppable>
        <Droppable droppableId="droppable-2">
          {(provided, snapshot) => {
            return (
              <div
                //provided.droppableProps应用的相同元素.
                {...provided.droppableProps}
                ref={provided.innerRef}
              // style={getListStyle(snapshot.isDraggingOver)}
              >
                <div className="task-tab learning">
                  <div className="head">Learing...</div>
                  <div className="container">
                    <div className="body" id="body">
                      {learning.map((item, index) => {
                        console.log(item);
                        return (
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
                              >
                                <div className="input">
                                  <input
                                    type="text"
                                    value={item.content}
                                  ></input>
                                  <button
                                    className="delete"
                                    onClick={() => handleDelete(index)}
                                  >
                                    X
                                  </button>
                                </div>
                              </div>
                            )}
                          </Draggable>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          }}
        </Droppable>
        <Droppable droppableId="droppable-3">
          {(provided, snapshot) => {
            return (
              <div
                //provided.droppableProps应用的相同元素.
                {...provided.droppableProps}
                ref={provided.innerRef}
              // style={getListStyle(snapshot.isDraggingOver)}
              >
                <div className="task-tab complete">
                  <div className="head">Complete</div>
                  <div className="container">
                    <div className="body" id="body">
                      {complete.map((item, index) => (
                        <Draggable
                          key={item.id}
                          draggableId={item.id}
                          index={index + 20}
                        >
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <div className="input">
                                <input type="text" value={item.content}></input>
                                <button className="delete">x</button>
                              </div>
                            </div>
                          )}
                        </Draggable>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          }}
        </Droppable>
      </DragDropContext>
    </IndexContainer>
  );
}


const IndexContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;

  margin-top: 10%;
  margin-left: 15%;
  margin-right: 15%;

  .task-tab {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    .head {
      text-align: center;
    }
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 10vw;
      min-height: 50vh;
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
        border: 0;
        width: 30%;
        background-color:transparent;

        .icon {
          width: 100%;
          color: #f0f0f0;
        }
      }
    }
  }

  
  .prepare {
    .head {
      background-color: #a98181;
    }
    .container {
      background-color: #a98181;
    }
  }

  .learning {
    .head {
      background-color: #6db57c;
    }
    .container {
      background-color: #6db57c;
    }
  }

  .complete {
    .head {
      background-color: #c9c7c7;
    }
    .container {
      background-color: #c9c7c7;
    }
  }  

`
