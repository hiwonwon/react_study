import { Button, Flex } from "antd";
import { useContext } from "react";
import { postContext } from "./MainApp";
import "@ant-design/v5-patch-for-react-19";
import React from "react";
import { Card } from "antd";
import { useState } from "react";

export default function PostItem({ userId, postId, title, body }) {
  const { deltePost, editPost } = useContext(postContext);
  const [isEditMode, setIsEditMode] = useState(false);
  const [inputValue, setInputValue] = useState(body);

  const onClickEdit = () => {
    console.log("수정");
    if (!isEditMode) {
      console.log(inputValue);
      setIsEditMode(true);
    } else {
      console.log(inputValue);
      editPost(postId, { body: inputValue });
      setIsEditMode(false);
    }
  };

  return (
    <div>
      <Card title={title} extra={<a href="#">More</a>} style={{ width: 300 }}>
        {isEditMode ? (
          <input
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
        ) : (
          <span> {body}</span>
        )}

        <Button
          type="primary"
          onClick={() => {
            onClickEdit();
          }}
        >
          Edit
        </Button>
        <Button
          danger
          onClick={() => {
            deltePost(postId);
          }}
        >
          Delete
        </Button>
      </Card>

      {/* <button
        onClick={() => {
          deltePost(postId);
        }}
      >
        Delete
      </button> */}
    </div>
  );
}
