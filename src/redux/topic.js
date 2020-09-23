// Action Types
export const ADD_TOPIC = 'ADD_TOPIC';
export const DELETE_TOPIC = 'DELETE_TOPIC';
export const SAVE_TOPIC = 'SAVE_TOPIC';
export const UNSAVE_TOPIC = 'UNSAFE_TOPIC';
export const UPVOTE_TOPIC = 'UPVOTE_TOPIC';
export const DOWNVOTE_TOPIC = 'DOWNVOTE_TOPIC';
export const RESET_VOTE = 'RESET_VOTE';
export const UPDATE_TOPIC = 'UPDATE_TOPIC';
export const TOGGLE_LIKE = 'TOGGLE_LIKE';

// Action Creators
let topicID = 0;

export const addTopic = (topic) => ({
  type: ADD_TOPIC,
  payload: {
    topic,
  },
});

export const updateTopic = (topic, id) => ({
  type: UPDATE_TOPIC,
  payload: {
    topic,
    id,
  },
});

export const deleteTopic = (id) => ({
  type: DELETE_TOPIC,
  payload: {
    id,
  },
});

export const saveTopic = (id) => ({
  type: SAVE_TOPIC,
  payload: {
    id,
  },
});

export const unsaveTopic = (id) => ({
  type: UNSAVE_TOPIC,
  payload: {
    id,
  },
});

export const upvoteTopic = (id) => ({
  type: UPVOTE_TOPIC,
  payload: {
    id,
  },
});

export const downvoteTopic = (id) => ({
  type: DOWNVOTE_TOPIC,
  payload: {
    id,
  },
});

export const toggleLike = (id) => ({
  type: TOGGLE_LIKE,
  payload: {
    id,
  },
});

// Action Reducers
export default function reducer(state = [], action) {
  switch (action.type) {
    case ADD_TOPIC:
      return [
        ...state,
        {
          id: ++topicID,
          topic: action.payload.topic,
          votesCount: 0,
          saved: false,
        },
      ];
    case TOGGLE_LIKE:
      return state.map((topic) =>
        topic.id === action.payload.id
          ? {...topic, saved: !topic.saved}
          : topic,
      );
    case UPDATE_TOPIC:
      return state.map((obj) =>
        obj.id !== action.payload.id
          ? obj
          : {...obj, topic: action.payload.topic},
      );
    case SAVE_TOPIC:
      return state.map((topic) =>
        topic.id !== action.payload.id ? topic : {...topic, saved: true},
      );
    case UNSAVE_TOPIC:
      return state.map((topic) =>
        topic.id !== action.payload.id ? topic : {...topic, saved: false},
      );
    case DELETE_TOPIC:
      return state.filter((topic) => topic.id !== action.payload.id);
    case UPVOTE_TOPIC:
      return state.map((topic) =>
        topic.id !== action.payload.id
          ? topic
          : {...topic, votesCount: ++topic.votesCount},
      );
    case DOWNVOTE_TOPIC:
      return state.map((topic) =>
        topic.id !== action.payload.id
          ? topic
          : {...topic, votesCount: --topic.votesCount},
      );
    default:
      return state;
  }
}
