import { memo } from 'react';
import type { FC } from 'react';

import classes from './App.module.css';
import resets from './components/_resets.module.css';
import { Desktop1 } from './components/Desktop1/Desktop1';
import Header from './components/Header/Header'

interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <Header/>
      <Desktop1 />
    </div>
  );
});
