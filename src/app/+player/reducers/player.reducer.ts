import { ActionReducer, Action } from '@ngrx/store';

import { PlayerActions } from '../actions/';

export interface PlayerState {
  url: string;
  progress: number;
  isPaused: boolean;
  currentTime?: number;
}

const initialState: PlayerState = {
  url: '',
  progress: 0,
  isPaused: true
};

export const playerReducer: ActionReducer<PlayerState> = (state = initialState, action: Action) => {
  switch (action.type) {
    case PlayerActions.PLAYER_LOAD_VIDEO: {
      return Object.assign({}, state, { url: action.payload });
    }

    case PlayerActions.PLAYER_LOAD_VIDEO_SUCCESS:
    case PlayerActions.PLAYER_PLAY: {
      return Object.assign({}, state, { isPaused: false });
    }

    case PlayerActions.PLAYER_PAUSE: {
      return Object.assign({}, state, { isPaused: true });
    }

    case PlayerActions.PLAYER_BACKWARD: {
      return Object.assign({}, state, { currentTime: state.currentTime - action.payload });
    }

    case PlayerActions.PLAYER_FORWARD: {
      return Object.assign({}, state, { currentTime: state.currentTime + action.payload });
    }

    case PlayerActions.PLAYER_JUMP_TO_SUCCESS: {
      return Object.assign({}, state, { progress: action.payload });
    }

    case PlayerActions.PLAYER_UPDATE_PROGRESS_SUCCESS: {
      return Object.assign({}, state, { progress: action.payload });
    }

    default: {
      return state;
    }
  }
};
