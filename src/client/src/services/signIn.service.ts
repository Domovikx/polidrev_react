import firebase from 'firebase';

import { PropsAuthLogin } from '../storeAtom/storeAtom.types';

export const signInService = async ({
  email,
  password,
}: PropsAuthLogin): Promise<void | Error> => {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
  } catch (error) {
    return error;
  }
};
