import * as s from './SuspenseFallback.css';

interface SuspenseFallbackProps {
  width: string;
  height: string;
  padding?: string;
}

const SuspenseFallback = ({
  width,
  height,
  padding = '0',
}: SuspenseFallbackProps) => {
  return (
    <div className={s.wrapper} style={{ width, height, padding }}>
      <div className={s.suspense}></div>
    </div>
  );
};

export default SuspenseFallback;
