import firebase from 'firebase';

export const signInService = async (props: {
  email: string;
  password: string;
}): Promise<boolean | Error> => {
  const { email, password } = props;
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);

    return true;
  } catch (error) {
    return new Error(error);
  }
};
