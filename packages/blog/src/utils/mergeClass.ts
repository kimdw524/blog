/**
 * array 형태의 className을 string으로 변환
 */
export const mergeClass = (
  ...classNames: (string | null | undefined | boolean)[]
): string => {
  return classNames.filter(Boolean).join(' ');
};
