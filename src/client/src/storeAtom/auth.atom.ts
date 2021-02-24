import { atom } from 'jotai';

import { isUserService } from '../services/isUser.service';
import { logoutService } from '../services/logout.service';
import { signInService } from '../services/signIn.service';

import { PropsAuthLogin } from './storeAtom.types';

export const isAuthAtom = atom<boolean | null | undefined>(false);

export const authLoginAtom = atom(
  (get) => get(isAuthAtom),
  async (get, set, props: PropsAuthLogin) => {
    await logoutService();
    await signInService(props);

    await set(isAuthAtom, isUserService());
  },
);

export const authLogoutAtom = atom(
  (get) => get(isAuthAtom),
  async (get, set) => {
    await logoutService();

    await set(isAuthAtom, false);
  },
);
