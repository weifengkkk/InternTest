import React from "react";
import Prepare from "../components/Prepare";
import Learning from "../components/Learning";
import Complete from "../components/Complete";
import styled from "styled-components";
import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { v4 as uuidv4, v4 } from "uuid";
export default function Index() {
  const [inputNum, setInputNum] = useState(0);
  const [complete, setComlete] = useState([]);
  const [learning, setLearning] = useState([]);
  const [prepare, setPrepare] = useState([]);
  // 元素移动

  const addInput = () => {
    // let body = document.getElementById("body");
    // let input = document.createElement("input");
    // input.id = `input_${inputNum}`;
    // input.onchange = () => pushData(input.id, input.value);
    // body.appendChild(input);

    prepare.push({ id: `item-${inputNum + 1}`, content: "" });
    setPrepare(prepare);
    setInputNum(inputNum + 1);
  };
  const move = (arr1, startIndex, arr2, toIndex) => {
    let temp = arr1.splice(startIndex, 1);
    console.log("log", arr2, temp);
    arr2 = [...arr2, ...temp];
    console.log(prepare, learning);
    setPrepare(prepare);
    setLearning(arr2);
  };
  const onDragEnd = (result) => {
    console.log(result);
    if (!result.destination) {
      return;
    }
    console.log(learning);
    move(prepare, result.source.index, learning, result.destination.index - 10);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => {
          return (
            <div
              //provided.droppableProps应用的相同元素.
              {...provided.droppableProps}
              ref={provided.innerRef}
              // style={getListStyle(snapshot.isDraggingOver)}
            >
              <IndexContainer>
                <div className="prepare">
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
                              <div>
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
                    <button onClick={() => addInput()}>添加</button>
                  </div>
                </div>
                <div className="learning">
                  <div className="head">Learing...</div>
                  <div className="container">
                    <div className="body" id="body">
                      {learning.map((item, index) => {
                        console.log(item);
                        return (
                          <Draggable
                            key={item.id}
                            draggableId={item.id}
                            index={index + 10}
                          >
                            {(provided, snapshot) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                <div>
                                  <input type="text" value={item.content} />
                                </div>
                              </div>
                            )}
                          </Draggable>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="complete">
                  <div className="head">Complete</div>
                  <div className="container">
                    <div className="body" id="body">
                      {complete.map((item, index) => (
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
                              <div>
                                <input type="text" />
                              </div>
                            </div>
                          )}
                        </Draggable>
                      ))}
                    </div>
                  </div>
                </div>
              </IndexContainer>
            </div>
          );
        }}
      </Droppable>
    </DragDropContext>
  );
}

const IndexContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  input {
    width: 8vw;
    height: 2vh;
    border: 1.5px solid;
  }
  margin-top: 10%;
  margin-left: 15%;
  margin-right: 15%;
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
        padding: 1rem;
        display: flex;
        flex-direction: column;
      }
      button {
        width: 50%;
        margin-bottom: 1rem;
      }
    }
  }
  .learning {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    .head {
      background-color: #6db57c;
      text-align: center;
    }
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 10vw;
      min-height: 50vh;
      background-color: #6db57c;
      .body {
        padding: 1rem;
        width: 80%;
        display: flex;
        gap: 1rem;
        flex-direction: column;
      }
      button {
        width: 50%;
        margin-bottom: 1rem;
      }
    }
  }
  .complete {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    .head {
      background-color: #c9c7c7;
      text-align: center;
    }
    .container {
      display: flex;
      flex-direction: column;
      width: 10vw;
      min-height: 50vh;
      background-color: #c9c7c7;
      .body {
        padding: 1rem;
        width: 80%;
        display: flex;
        align-items: center;
        gap: 1rem;
        flex-direction: column;
      }
      button {
        width: 50%;
        margin-bottom: 1rem;
      }
    }
  }
`;
