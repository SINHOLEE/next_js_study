# next routing

- file-system based router
- 라우터에서 가능 불가능 영역
  ```js
  import Link from 'next/link'
  import React from 'react';
    
  const ids = [1, 2, 3, 4, 5]
  const INDEX = [123,'about','Capital','posts','한글']
  const About = () => {
    
  return (
    <div>
      <ul>
      {ids.map(id => <li key={id}>
      <Link href={`/about/${id}`}>
         <a>{id}로 가는 법</a>
      </Link>
      </li>)}
      </ul>
      <ul>
      {INDEX.map(id => <li key={id}>
       <Link href={`/${encodeURIComponent(id)}`}>
        <a>{id}로 가기</a>
        </Link>
      </li>)}
    </ul>
    
  </div>
    );
  };
    
  export default About;
  ```
  - 숫자 가능
  - 영어 대소문자 구분 가능
  - 한글 불가
- Link vs a
  - a
    - 링크는 도메인까지 다 필요
    - 즉 외부링크에 적합
    - **링크 경로를 새로고침 하는 효과를 낸다.**
  - Link 
    - href는 도메인 이후의 경로만 필요
    - 즉 pages폴더 이하의 디렉토리만 필요
