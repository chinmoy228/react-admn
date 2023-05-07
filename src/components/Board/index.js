import React, { useState } from "react";
import { MoreHorizontal } from "react-feather";
import CustomInput from "../CustomInput/CustomInput";
import "./Board.scss";
import { Card, Dropdown } from "antd";
import CardElement from "../card";

function Board(props) {
  const {
    board,
    addCard,
    removeBoard,
    removeCard,
    onDragEnd,
    onDragEnter,
    updateCard,
    onDragEndBoard,
    onDragEnterBoard,
  } = props;

  const items = [
    {
      label: <p onClick={() => removeBoard(board?.id)}>Delete Board</p>,
      key: "0",
    },
  ];

  return (
    <div
      className="board d-flex"
      draggable
      onDragEnd={() => onDragEndBoard(board?.id)}
      onDragEnter={() => {
        onDragEnterBoard(board?.id);
      }}
    >
      <div className="board-inner p-4 rounded" key={board?.id}>
        <div className="board-header d-flex align-items-center pb-2">
          <p className="board-header-title text-bolder fs-16 d-flex align-items-center">
            {board?.title}
            <span>{board?.cards?.length || 0}</span>
          </p>
          <div className="board-header-title-more">
            <Dropdown
              menu={{
                items,
              }}
              trigger={["click"]}
              placement="bottomLeft"
            >
              <MoreHorizontal />
            </Dropdown>
          </div>
        </div>
        
        {board?.cards?.length > 0 ? (
          board?.cards?.map((item) => (
            <CardElement
              key={item.id}
              card={item}
              boardId={board.id}
              removeCard={removeCard}
              onDragEnter={onDragEnter}
              onDragEnd={onDragEnd}
              updateCard={updateCard}
            />
          ))
        ) : (
          <>
            <Card
              className="board-placeholder text-center mb-3"
              onDragEnter={() => onDragEnter(board?.id)}
            >
              Drop your Card Here...
            </Card>
          </>
        )}
        <CustomInput
          text="+ Add Card"
          placeholder="Enter Card Title"
          displayClass="board-add-card"
          editClass="board-add-card-edit"
          onSubmit={(value) => addCard(board?.id, value)}
        />
        
      </div>
    </div>
  );
}

export default Board;
