import * as types from './types';

const initialState = {
  approved: [],
  rejected: [],
  current: null,
  error: null
};

export default function collection(state = initialState, action) {
  switch (action.type) {
    case types.getInitialState: {
      return state;
    }

    case types.fetchImage.SUCCESS: {
      const {
        id,
        urls,
        description,
        color
      } = action.result
      return {
        ...state,
        current: {
          id,
          urls,
          description,
          color
        }
      };
    }

    case types.fetchImage.FAILURE: {
      return {
        ...state,
        error: action.result
      };
    }

    case types.approveImage.SUCCESS: {
      return {
        ...state,
        approved: [
          ...state.approved,
          action.payload
        ]
      };
    }

    case types.rejectImage.SUCCESS: {
      return {
        ...state,
        rejected: [
          ...state.rejected,
          action.payload.id
        ]
      };
    }

    case types.getInitialState.SUCCESS: {
      const {
        rejected,
        approved
      } = action.payload
      return {
        ...state,
        rejected,
        approved
      };
    }

    default: {
      return state;
    }
  }
}
