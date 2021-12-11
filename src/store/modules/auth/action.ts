import {IAuth} from '../../../types';

interface IAction {
  type: string;
  payload: {
    auth: IAuth;
  };
}

export const getToken = (auth: IAuth): IAction => {
  return {
    type: 'SET_TOKEN',
    payload: {
      auth,
    },
  };
};

export const logOut = (auth: IAuth): IAction => {
  return {
    type: 'LOG_OUT',
    payload: {
      auth,
    },
  };
};
