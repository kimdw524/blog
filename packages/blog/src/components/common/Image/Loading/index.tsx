import { mergeClass } from '@/utils/mergeClass';

import * as s from './Loading.css';

interface LoadingProps {
  done: boolean;
}

const Loading = ({ done }: LoadingProps) => {
  return <div className={mergeClass(s.container, done && s.done)}></div>;
};

export default Loading;
