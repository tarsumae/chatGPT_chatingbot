# This repository is a space for uploading and managing development codes for AI chatbot Tarsumy, which provides guidance on the screen shooting Suwon target zone.
# 이 레포지토리는 스크린사격 수원타겟존에 대해 안내를 하는 AI 챗봇 타수미의 개발 코드들을 업로드하고 관리하는 공간입니다.

아직 온라인에 정식배포되지 않은 개발버전이므로 등록된 파일들을 로컬로 다운받은 후 자신의 PC에서만 테스트를 해 볼 수 있습니다.

리포지토리에 있는 파일들을 모두 다운로드 하시고 frontend와 backend 폴더를 각각 만드세요.
frontend 폴더에는 index.html, style.css, script.js, system.txt, Slogan_Shooting_Target_Sheet.png 파일을 넣으세요.
backend 폴더에는 나머지 파일들을 넣습니다.

backend폴더의 index.js를 VS Code로 열고 코드 상단부에서 OpenAI에서 발급받은 API키를 입력합니다.
const apiKey = "sk-*****************";
index.js를 돌리기 전에 OpenAI에서 제공하는 Node.js 라이브러리가 설치되지 않았다면 먼저 이 라이브러리를 설치해야 합니다.
설치에 앞서 VS Code에서 터미널 창을 엽니다.
터미널 창이 열리면 "npm init"을 입력후 엔터를 누릅니다.
터미널 창에서 계속 엔터를 누르면 VS Code 왼쪽 디렉토리 창에 package.json이 생성됩니다.
이 디렉토리 창에서 package.json을 선택합니다.
다시 터미널 창에서 "npm install openai"를 입력하고 엔터를 칩니다.
그럼 왼쪽 디렉토리 창에 package-lock.json이 생성된 것을 볼 수 있습니다.
여기까지 완료했다면 backend의 index.js가 동작할 수 있는 환경이 준비된 것입니다.
이제 터미널 창에서 node index.js를 입력 후 엔터를 치면 로컬에서 backend가 구동됩니다.
그럼 VS Code에서 새 윈도우를 열고 index.html로 들어 옵니다.
index.html에서 우클릭하고 "Open with Live Server"를 클릭하면 새 브라우저가 열리면서 채팅화면이 나타납니다.
채팅화면의 아래에 궁금한 점을 입력하고 엔터나 send버튼을 누르면 챗도우미인 타수미가 답변을 합니다.
