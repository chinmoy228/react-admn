import React from 'react'
import "./BoardCard.scss"
import { Card, Dropdown } from 'antd'
import { AlignLeft, CheckSquare, Clock, MoreHorizontal } from "react-feather";
import Chip from '../Chip';

const BoardCard = ({content}) => {
    console.log(content)
  return (
    <div>
      <Card>
      <div className="card-top">
              <div className="card-top-lebels">
                {content?.labels?.map((e) => {
                  return (
                    <div key={e.id}>
                      <Chip text={e.text} colorBack={e.color} />
                    </div>
                  );
                })}
              </div>
              <div className="card-top-more">
                <Dropdown
                //   menu={{
                //     items,
                //   }}
                //   placement="bottomLeft"
                //   arrow={{
                //     pointAtCenter: true,
                //   }}
                >
                  <MoreHorizontal />
                </Dropdown>
              </div>
            </div>
            <div className="card-title">{content.title || "task"}</div>

            <p title={content.desc || "No description Added"}>
              <AlignLeft />
            </p>

            <div className="card-footer">
              {content?.date && (
                <p className="card-footer-item">
                  <Clock className="card-footer-icon" />
                  {/* {formatDate(content.date)} */}
                </p>
              )}
              {content?.tasks && content?.tasks.length > 0 && (
                <p className="card-footer-item">
                  <CheckSquare className="card-footer-icon" />
                  {content.tasks.filter((e) => e.completed).length}/
                  {content.tasks.length}
                </p>
              )}
            </div>
      </Card>
    </div>
  )
}

export default BoardCard
