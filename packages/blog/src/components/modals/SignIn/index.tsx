import * as s from './SignIn.css';

import { Flex, Text } from '@kimdw524/dds';

import KakaoSignInImage from '@/assets/images/signin/kakao_signin.png';

const SignIn = () => {
  return (
    <div className={s.container}>
      <Flex flexDirection="column" gap="0.75rem" marginBottom="1rem">
        <Text element="h2">로그인</Text>
        <Text>아래 방법 중 하나로 로그인 할 수 있어요.</Text>
      </Flex>
      <div className={s.method}>
        <img src={KakaoSignInImage} className={s.kakao} />
      </div>
    </div>
  );
};

export default SignIn;
