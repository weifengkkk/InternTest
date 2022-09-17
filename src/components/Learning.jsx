import React from "react";
import styled from "styled-components";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { BsDashCircleFill } from "react-icons/bs";
export default function Learning({ learning, handleDelete }) {
  return (
    <>
      <LearningComponent>
        <div className="learning">
          <div className="head">Learing...</div>
          <Droppable droppableId="droppable-2">
            {(provided, snapshot) => {
              return (
                <div
                  //provided.droppableProps应用的相同元素.
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  style={
                    snapshot.isDraggingOver
                      ? { border: "blue 2px solid" }
                      : {
                          border: "black 2px solid",
                        }
                  }
                >
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
                                  <BsDashCircleFill
                                    size="10%"
                                    color="white"
                                    onClick={() =>
                                      handleDelete(index, "learning")
                                    }
                                  ></BsDashCircleFill>
                                </div>
                              </div>
                            )}
                          </Draggable>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            }}
          </Droppable>
        </div>
      </LearningComponent>
    </>
  );
}
const LearningComponent = styled.div`
  .learning {
    display: flex;
    gap: 1rem;
    border: white 1.5px solid;
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
        .input {
          display: flex;
          flex-direction: row;
          justify-content: center;
          gap: 0.1rem;

          input {
            width: 80%;
            border: 1.5px solid;
          }
          .delete {
            width: 20px;
            height: 20px;
            border-radius: 60%;
            position: relative;
          }
        }
      }
    }
  }
`;
