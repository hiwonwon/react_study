import { createContext, useContext, useEffect, useState } from "react";
import PostItem from "./PostItem";
import axios from "axios";
import { Button, Flex } from "antd";
import { Avatar, List } from "antd";

const postContext = createContext(null);
export { postContext };

function usePost() {
  return useContext(postContext);
}

export default function MainApp() {
  const [posts, setPosts] = useState([]);

  const deltePost = (postId) => {
    const tmp = posts.filter((post, index) => {
      return postId !== post.id;
    });
    setPosts(tmp);
  };

  //수정 함수
  const editPost = (postId, content) => {
    const editedPost = posts.map((post, i) => {
      if (postId === post.id) {
        return {
          ...post,
          ...content,
          id: post.id,
        };
      } else {
        return post; // 그대로 유지
      }
    });
    setPosts(editedPost);
  };

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

  useEffect(() => {
    const getPosts = async () => {
      const resp = await axios("https://jsonplaceholder.typicode.com/posts");
      setPosts(resp.data);
      //console.log(temp);
    };
    getPosts();
  }, []);
  return (
    <postContext.Provider
      value={{
        deltePost: deltePost,
        editPost: editPost,
      }}
    >
      <div style={{ maxWidth: "960px", margin: "auto" }}>
        <List
          itemLayout="horizontal"
          dataSource={posts}
          renderItem={(item, index) => {
            console.log(item);
            return (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Avatar
                      src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                    />
                  }
                  title={<a href="https://ant.design">{item.title}</a>}
                  description={item.body}
                />
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
              </List.Item>
            );
          }}
        />
      </div>
      {/* 
      <div>
        <h1>게시글</h1>
        {posts.map(({ userId, id, title, body }) => {
          return (
            <PostItem
              key={id}
              userId={userId}
              postId={id}
              title={title}
              body={body}
            />
          );
        })}
      </div> */}
    </postContext.Provider>
  );
}
