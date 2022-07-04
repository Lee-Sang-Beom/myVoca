Project - MyVoca
======================

## 1. 프로젝트 계획 이유
 JS와 비교하여, 버그를 사전에 제거하는 것에 도움이 되는 TS를 공부하고, 그를 사용해보는 것이 목표입니다.

 또한 TS기반의 React 프로젝트를 개발함과 동시에, 자기계발을 위하여 영단어를 함께 공부할 수 있으면 좋을 것이라 생각하여 해당 프로젝트를 계획하였습니다.

 데이터 저장은 json-server를 이용합니다.

### - 제공기능
	1. Day 별 영단어 확인
	2. Day 별 영단어 뜻 보기, 가리기
	3. Day 별 영단어 삭제하기
    4. Day, 단어 추가하기

## 2. 설치
 > 프로그램 실행을 위한 설치과정을 기술합니다.

### 2.1 Node.js 설치
 - React 실행을 위해, Node.js가 사전에 설치되어 있어야 합니다.

### 2.2 Typescript 설치

 - Typescript를 설치합니다.
```
npm install [-g : 전역설치 시, 해당 명령어 사용] typescript
```

 - Typescript를 node에서 실행시킬 수 있는 런타임을 설치합니다.
```
npm install ts-node --save-dev
```

### 2.3 React 설치

 - Node.js 설치 후, React를 설치합니다.
```
npm install -g create-react-app
```

 - 설치 확인은 아래의 명령어를 사용하여 확인할 수 있습니다.
```
npm -v
```

 - 실행
```
npm start
```

### 2.4 json-server 설치
 - 영단어 데이터 관리를 위하여, json-server를 사용하기 때문에, json-server를 설치합니다.
```
npm install -g json-server
```

 - json-server 실행은 아래 명령어를 사용할 수 있습니다.
```
json-server --watch (json파일 경로) --port (포트번호)
```
