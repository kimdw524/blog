import { globalFontFace, globalStyle } from '@vanilla-extract/css';

import Pretenard from '../assets/fonts/PretendardVariable.woff2';

globalFontFace('Pretendard', {
  src: `local(Pretendard), url(${Pretenard}) format('woff2')`,
});

globalStyle('*', {
  fontFamily: 'Pretendard',
});
