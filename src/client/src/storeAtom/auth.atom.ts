import firebase from 'firebase';
import { atom } from 'jotai';

import { logoutService } from '../services/logout.service';
import { signInService } from '../services/signIn.service';

import { PropsAuthLogin } from './storeAtom.types';

export const isAuthAtom = atom<boolean | null | undefined>(false);

export const authLoginAtom = atom(
  (get) => get(isAuthAtom),
  async (get, set, props: PropsAuthLogin) => {
    await logoutService();
    await signInService(props);

    const user = firebase.auth().currentUser;
    const userUid = user?.uid;

    await set(isAuthAtom, userUid ? true : false);
  },
);
