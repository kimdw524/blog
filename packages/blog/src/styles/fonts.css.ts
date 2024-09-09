import { globalFontFace, globalStyle } from '@vanilla-extract/css';

globalFontFace('Pretendard', {
  src: `local('Pretendard'), url(/src/assets/fonts/PretendardVariable.woff2) format('woff2')`,
});

globalStyle('*', {
  fontFamily: 'Pretendard',
});
