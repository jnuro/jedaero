# 제대로 가자

## 개발 환경

다음 요소들은 깔아줍니다.
```
IDE: Visual Studio Code
Code Extensions: ESLint, Prettier, Stylelint
```

나머지 extension들(ex: `React Native Debugger`)의 경우 취향입니다. 쓰고싶은 사람은 알아서 깔아서 쓰세요. ~~전 안씁니다~~

프로젝트 settings.json에 다음 구문을 삽입해주세요. (optional)

```json
{
  "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true,
        "source.fixAll.stylelint": true
  },
}
```

이거 안해주면 나중에 저장할때 prettier가 안들어서 나중에 커밋할때 또 수정해야 해서 귀찮습니다.

pre-commit시 prettier, eslint 다 체크하고 있음. 어차피 prettier가 eslint에 통합되어 있어서 eslint때도 prettier 중복 검사하는 구조이겠지만. 걍 이대로 진행하겠습니다.

## 개발 방법

특별히 node_modules밀라고 한 적 없으면 그냥 요거 해주세요
```bash
npm install
```

metro packager 실행법.
```bash
npm start
```

android 실행 법
```bash
npm run android
```

ios 실행 법
```bash
# 걍 평범한 실행
npm run ios

# 특정 디바이스 시뮬레이터별 실행(아이폰 11)
npm run ios -- --simulator='iphone 11'

# 특정 실기기 실행
npm run ios -- --device='<Device ID>'
```

