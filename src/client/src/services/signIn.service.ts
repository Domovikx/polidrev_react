import firebase from 'firebase';

import { PropsAuthLogin } from '../storeAtom/storeAtom.types';

export const signInService = async (props: PropsAuthLogin): Promise<void> => {
  const { email, password } = props;
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
  } catch (error) {
    console.log('error :>> ', error);
  }
};
