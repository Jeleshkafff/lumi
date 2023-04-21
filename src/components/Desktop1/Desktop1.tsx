import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Desktop1.module.css';
import { Icon } from './Icon.js';
import { Polygon1Icon } from './Polygon1Icon.js';
import { Polygon2Icon } from './Polygon2Icon.js';
import { Rectangle46Icon } from './Rectangle46Icon.js';
import { Rectangle49Icon } from './Rectangle49Icon.js';

interface Props {
  className?: string;
}
/* @figmaId 1:2 */
export const Desktop1: FC<Props> = memo(function Desktop1(props = {}) {
  return (
    <div >
      <div className={classes.rectangle11}></div>
      <div className={classes.HttpsTMeJeleshkaffff}>
        Короче, тут должны быть социалки, но у меня их нет, так-что подписыватесь на мою телегу
        https://t.me/jeleshkaffff
      </div>
 
      <div className={classes.ico1}></div>

      <div className={classes.rectangle47}></div>
      <div className={classes.QR}>Войти с помощью QR-кота </div>

      <input className={classes.rectangle48} type="text" />
      <input className={classes.rectangle49} type="text" />
 
      <div className={classes.rectangle50}></div>
      <button className={classes.unnamed2}>Вход</button>
    
      <div className={classes.unnamed3}>Пароль</div>
      <div className={classes.unnamed4}>Логин</div>
      {/* <div className={classes.unnamed5}>Забыли пароль?</div> */}
      <a className={classes.unnamed5}href="#">Забыли пароль?</a>
      <div className={classes.polygon1}>
        <Polygon1Icon className={classes.icon4} />
      </div>
      <div className={classes.polygon2}>
        <Polygon2Icon className={classes.icon5} />
      </div>
    </div>
  );
});
