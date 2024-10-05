import * as s from './Tag.css';

interface TagProps {
  tags: string[];
}

const Tag = ({ tags }: TagProps) => {
  return (
    <div className={s.container}>
      {tags.map((tag, index) => (
        <span className={s.tag} key={index}>
          {tag}
        </span>
      ))}
    </div>
  );
};

export default Tag;
