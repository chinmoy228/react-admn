import React, { useState } from "react";
import "./CardElement.scss";
import { AlignLeft, CheckSquare, Clock, MoreHorizontal } from "react-feather";
import Chip from "../Chip";
import { Dropdown } from "antd";
import { formatDate } from "../../utils/commonFunction";
import CardInfo from "../CardInfo";

const CardElement = (props) => {
  const [showModal, setShowModal] = useState(false);
  const { card, boardId, removeCard, onDragEnd, onDragEnter, updateCard } =
    props;
  const { id, title, desc, date, tasks, labels } = card;
  const items = [
    {
      label: <p onClick={() => removeCard(boardId, id)}>Delete Card</p>,
      key: "0",
    },
  ];
 const handleClick=(e)=>{
    e.stopPropagation();
 }
  return (
    <>
      <CardInfo
        showModal={showModal}
        setShowModal={setShowModal}
        card={card}
        boardId={boardId}
        updateCard={updateCard}
      />

      <div
        className="card mb-2"
        key={card.id}
        draggable
        onDragEnd={(e) => {
          e.stopPropagation();
          onDragEnd(boardId, id);
        }}
        onDragEnter={(e) => {
          e.stopPropagation();
          onDragEnter(boardId, id);
        }}
        onClick={()=>setShowModal(true)}
      >
        <div className="card-top">
          <div className="card-top-labels">
            {labels?.map((item, index) => (
              <Chip key={index} item={item} />
            ))}
          </div>
          <div className="card-top-more">
            <Dropdown
              menu={{
                items,
              }}
              trigger={["click"]}
              placement="bottomLeft"
            >
              <MoreHorizontal onClick={handleClick}/>
            </Dropdown>
          </div>
        </div>
        <div className="card-title">{title}</div>
        <div>
          <p title={desc}>
            <AlignLeft />
          </p>
        </div>
        <div className="card-footer">
          {date && (
            <p className="card-footer-item">
              <Clock className="card-footer-icon" />
              {formatDate(date)}
            </p>
          )}
          {tasks && tasks?.length > 0 && (
            <p className="card-footer-item">
              <CheckSquare className="card-footer-icon" />
              {tasks?.filter((item) => item.completed)?.length}/{tasks?.length}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default CardElement;
