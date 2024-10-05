import * as s from './Item.css';

import { formatDate } from '@/utils/formateDate';

import Image from '@/components/common/Image';
import Tag from '@/components/common/Tag';

interface ItemProps extends React.ComponentProps<'div'> {
  thumbnail: string;
  title: string;
  content: string;
  date: string;
  width: string;
  tags: string[];
}

const Item = ({
  thumbnail,
  title,
  content,
  date,
  width,
  tags,
  ...rest
}: ItemProps) => {
  return (
    <div className={s.container} style={{ width }} {...rest}>
      <div className={s.thumbnailWrapper}>
        <Image
          src={thumbnail}
          className={s.thumbnail}
          alt="제목"
          width="100%"
        />
      </div>
      <div className={s.title}>{title}</div>
      <div className={s.content}>{content}</div>
      <div className={s.date}>{formatDate(date)}</div>
      <Tag tags={tags} />
    </div>
  );
};

export default Item;
