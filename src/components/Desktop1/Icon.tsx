import { memo, SVGProps } from 'react';

const Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 638 42' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 8C0 3.58172 3.58172 0 8 0H630C634.418 0 638 3.58172 638 8V34C638 38.4183 634.418 42 630 42H8.00001C3.58174 42 0 38.4183 0 34V8Z'
      fill='#D9D9D9'
      fillOpacity={0.04}
      stroke='white'
      strokeOpacity={0.31}
    />
  </svg>
);
const Memo = memo(Icon);
export { Memo as Icon };
