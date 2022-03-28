import { nanoid } from "nanoid";
import React, { createContext, ReactNode, useReducer, useState } from "react";
import { Post } from "../types";

const postsList: PostsState = {
  posts: [
    {
      id: "1",
      author: "cosmin",
      county: "Iasi",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
      images: ["https://bit.ly/2Z4KKcF", "https://bit.ly/3Cz3EJf"],
      upvotes: 1,
      messages: [],
      createdDate: "2020-01-02T00:00:00.000Z",
    },
    {
      id: "2",
      author: "cosmin ",
      county: "Iasi",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
      images: ["https://bit.ly/2Z4KKcF"],
      upvotes: 3,
      messages: [],
      createdDate: "2020-01-01T00:00:00.000Z",
    },
    {
      id: "3",
      author: "cosmin",
      county: "Iasi",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
      upvotes: 2,
      messages: [],
      createdDate: "2020-01-02T00:00:00.000Z",
    },
  ],
  isPending: false,
};

type PostsState = {
  posts: Post[];
  isPending: boolean;
};
type GetAction = {
  type: "get";
  payload: {};
};
type PostAction = {
  type: "post";
  payload: Partial<Post>;
};
type PutAction = {
  type: "put";
  payload: Post;
};
type DeleteAction = {
  type: "delete";
  payload: {
    id: string;
  };
};
type SortAction = {
  type: "sort";
  payload: "popular" | "top" | "new";
};

type PostsAction =
  | GetAction
  | PostAction
  | PutAction
  | DeleteAction
  | SortAction;

const postsReducer = (state: PostsState, action: PostsAction): PostsState => {
  switch (action.type) {
    case "get": {
      return state;
    }
    case "post": {
      const newPost = {
        ...{
          author: "",
          county: "",
          title: "",
          description: "",
          images: [],
        },
        ...action.payload,
        id: nanoid(),
        createdDate: new Date().toISOString(),
        upvotes: 0,
        messages: [],
      };
      return { ...state, posts: [...state.posts, newPost] };
    }
    case "put": {
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.payload.id ? action.payload : post
        ),
      };
    }
    case "delete": {
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload.id),
      };
    }
    case "sort": {
      switch (action.payload) {
        case "new": {
          return {
            ...state,
            posts: state.posts.sort(
              (left, right) =>
                -new Date(left.createdDate).getTime() +
                new Date(right.createdDate).getTime()
            ),
          };
        }
        case "popular": {
          return {
            ...state,
            posts: state.posts.sort(
              (left, right) => -left.upvotes + right.upvotes
            ),
          };
        }
        case "top": {
          return {
            ...state,
          };
        }
      }
    }
    default: {
      throw new Error("invalid action");
    }
  }
};

interface IPostContext {
  posts: Post[];
  isPending: boolean;
  dispatch: React.Dispatch<PostsAction>;
}

const PostContext = createContext<IPostContext>({
  posts: [],
  isPending: false,
  dispatch: () => {},
});

const PostContextProvider = ({ children }: { children: ReactNode }) => {
  const [postsState, dispatch] = useReducer(postsReducer, postsList);

  return (
    <PostContext.Provider
      value={{
        posts: postsState.posts,
        isPending: postsState.isPending,
        dispatch,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export default PostContextProvider;

export { PostContext };
