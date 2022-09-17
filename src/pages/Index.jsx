import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Learning from "../components/Learning";
import Complete from "../components/Complete";
import Prepare from "../components/Prepare";
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
      setPrepare([...prepare]);
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
      result.destination.droppableId === "droppable-3"
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
  const handleDelete = (index, type) => {
    if (type === "learning") {
      learning.splice(index, 1);

      setLearning([...learning]);
    } else if (type === "complete") {
      complete.splice(index, 1);

      setComlete([...complete]);
    }
  };
  return (
    <IndexContainer>
      <DragDropContext onDragEnd={onDragEnd}>
        <Prepare prepare={prepare} addInput={() => addInput()}></Prepare>

        <Learning
          learning={learning}
          handleDelete={() => handleDelete(learning, "learning")}
        ></Learning>
        <Complete
          complete={complete}
          handleDelete={() => handleDelete(complete, "complete")}
        ></Complete>
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
`;
