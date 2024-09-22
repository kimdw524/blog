import * as s from './Tag.css';

interface TagProps {
  tags: string[];
}

const Tag = ({ tags }: TagProps) => {
  return (
    <div className={s.container}>
      {tags.map((tag) => (
        <span className={s.tag}>{tag}</span>
      ))}
    </div>
  );
};

export default Tag;
