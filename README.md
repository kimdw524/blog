# kimdw524

## packages

### [packages/blog](/packages/blog)

`React` `TypeScript`

### [packages/dds](/packages/dds)

디자인 시스템

`TypeScript` `Vanilla Extract`

### [packages/utils](/packages/utils)

다양한 프로젝트에서 공용으로 사용할 수 있는 모듈

`React` `TypeScript`

#### useIsInViewPort

DOM 요소가 Viewport 안에 들어와 있는지 여부를 반환하는 훅.

주로 이미지의 Lazy Loading을 구현하기 위해 제작하였습니다.

#### useIsScrolled

body가 스크롤이 되어있는지 여부를 반환하는 훅.

스크롤 여부에 따라 형태가 변하는 컴포넌트(sticky Navbar 등)를 위하여 구현하였습니다.

#### useModal

모달을 조금 더 편하게 사용하기 위하여 제작하였습니다.

- 모달이 추가될 때마다 모든 컴포넌트가 리렌더링 되는 성능 문제가 있었으나 useImperativeHandle을 사용하여 개선하였습니다.
- transition animation을 reflow를 통해 발생시켰으나 requestAnimationFrame을 사용하여 성능을 개선하였습니다.
