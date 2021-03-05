import firebase from 'firebase';

export const isUserService = (): boolean => {
  try {
    const user = firebase.auth().currentUser;
    const userUid = user?.uid;

    return userUid ? true : false;
  } catch (error) {
    return false;
  }
};
