import * as React from 'react';

import Img from './components/Img';

export interface HelloWorldProps {
  userName: string;
  lang: string;
}

export const App = ({ userName, lang }: HelloWorldProps) => (
  <>
    <h1>
      Hi {userName} from React! Welcome to {lang}!
    </h1>
    <Img></Img>
  </>
);
