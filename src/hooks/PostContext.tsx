import { nanoid } from "nanoid";
import React, { createContext, ReactNode, useReducer, useState } from "react";
import { Post } from "../types";

const getAllResponse: Post[] = [
  {
    id: "1",
    post_id: "1",
    status: "APPROVED",
    reporter: "123",
    content: {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
      images: ["https://bit.ly/2Z4KKcF", "https://bit.ly/3Cz3EJf"],
      createdDate: "2020-01-02T00:00:00.000Z",
      county: "IASI",
      reporterName: "Cosmin",
    },
    up_votes: 1,
    down_votes: 1,
  },
  {
    id: "2",
    post_id: "1",
    status: "APPROVED",
    reporter: "123",
    content: {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
      images: ["https://bit.ly/2Z4KKcF"],
      createdDate: "2020-01-02T00:00:00.000Z",
      county: "IASI",
      reporterName: "Cosmin",
    },
    up_votes: 1,
    down_votes: 1,
  },
  {
    id: "3",
    post_id: "1",
    status: "APPROVED",
    reporter: "123",
    content: {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
      createdDate: "2020-01-02T00:00:00.000Z",
      county: "IASI",
      reporterName: "Cosmin",
    },
    up_votes: 1,
    down_votes: 1,
  },
];

const getByIdResponse = (id: string): Post[] => {
  return getAllResponse.filter((post) => post.id === id);
};

const postsList: PostsState = {
  posts: getAllResponse,
  isPending: false,
};

type PostsState = {
  posts: Post[];
  isPending: boolean;
};
type GetAllAction = {
  type: "getAll";
  payload: {};
};
type GetByIdAction = {
  type: "getById";
  payload: {
    id: string;
  };
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
  | GetAllAction
  | GetByIdAction
  | PostAction
  | PutAction
  | DeleteAction
  | SortAction;

const postsReducer = (state: PostsState, action: PostsAction): PostsState => {
  switch (action.type) {
    case "getAll": {
      return {
        ...state,
        posts: getAllResponse,
      };
    }
    case "getById": {
      return {
        ...state,
        posts: getByIdResponse(action.payload.id),
      };
    }
    case "post": {
      const newPost: Post = {
        id: nanoid(),
        reporter: nanoid(),
        post_id: nanoid(),
        status: "PENDING_APPROVAL",
        content: {
          title: "",
          description: "",
          images: [],
          createdDate: new Date().toISOString(),
          county: "",
          reporterName: "",
        },
        up_votes: 0,
        down_votes: 0,
        ...action.payload,
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
                -new Date(left.content.createdDate).getTime() +
                new Date(right.content.createdDate).getTime()
            ),
          };
        }
        case "popular": {
          return {
            ...state,
            posts: state.posts.sort(
              (left, right) => -left.up_votes + right.up_votes
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
