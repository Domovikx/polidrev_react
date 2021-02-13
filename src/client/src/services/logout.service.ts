import firebase from 'firebase';

export const logoutService = async (): Promise<void> => {
  await firebase.auth().signOut();
};
