import firebase from 'firebase';

import { PropsAuthLogin } from '../storeAtom/storeAtom.types';

export const signInService = async (
  props: PropsAuthLogin,
): Promise<boolean | Error> => {
  const { email, password } = props;
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);

    return true;
  } catch (error) {
    return new Error(error);
  }
};
