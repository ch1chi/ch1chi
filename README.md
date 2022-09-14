# ch1chi

### 3조  Presentation  <img src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif" width="30px">
### I am Oh Chi Heon, Full Stack Web Developer from :kr: Seong-Nam, Republic of Korea 


### 1. Co-Worker ( 3 조 )

오치헌 ( 자료 연결  겸 발표 )<br/>
문형기 (  표지와 배경 담당 ) <br/>
도은빈 (  야구의 기능 담당 ) <br/>

### 2. Project Name

숫자 야구 ( 미니 게임 )


### 3. 게임의 규칙
1, 사용되는 숫자는 1에서 9까지 서로 다른 숫자이다. </br>
2. 숫자는 다를 때는 볼이 된다. </br>
3. 숫자가 맞으면 스트라이크가 된다. </br>

### 4. 핵심 포인트 
 (1) main.html     -->   버튼 설정 , 버튼 클릭 시 화면 전환<br/>
 (2) main.js        -->  화면에 나타내는 글씨와  글자가  나오게 하는 설정( 타이핑 속도 )<br/>
 (3) main.css      -->  글자 굵기 , 크기 설정<br/>
 (4) NumberBaseball.js -->  숫자 야구의 핵심 문법 기능

### 5. 다룰 만한 내용
![list](https://user-images.githubusercontent.com/108641279/190162178-7df039f1-d324-4200-ba9f-1d2ec087e908.PNG) </br>
( 그림 1 ) 목록 차트 부분 </br>
![image](https://user-images.githubusercontent.com/108641279/190149338-3cb45443-7395-46e2-b835-31699ed1a31c.png)<br/>
( 그림 2 ) 야구의 숫자 구성 함수<br/>
![image](https://user-images.githubusercontent.com/108641279/190150313-28a1ac98-8f62-48e2-810f-c98bc71276f8.png) <br/>
( 그림 3 ) n번째 시도 한 버튼 삽입<br/>



### 6.  예고편

![firstscreen](https://user-images.githubusercontent.com/108641279/190142767-b3ef9ba5-379d-4fc0-9956-6574bdd5ca42.gif)



### 7. 트러블 슈팅
  
###  ★ 오치헌   </br>
---> 
###  ★ 문형기   </br> 
--->게임 선택 페이지 중간 즈음에 미리 저장한 문자열을 받아 역동적으로 움직이게 구현한 부분이 있는데, 이 부분을 끊임 없이 움직이게 하고 싶었다. 
              오랜 고민 끝에 방법은 간단했는데, 임의의 전역변수를 사용하여 </br> 미리 저장된 문자열 배열의 인덱스에 접근하게 하고, 
              마지막 배열 인덱스를 벗어나면 다시 전역변수를 </br> 0으로 초기화 한 다음에  콜 백 함수를 활용하여 페이지의 생명 주기가  살아있는 한 해당 기능을 
              계속 유지할 수 있도록 구현을 하였다. </br>
### ★ 도은빈   </br> 
 ---> missing script start : package.json의 파일이 잘못된 위치에 있었고, node_modules, package_lock.json 과 같은 위치로 변경 후
               실행 혹은 새 폴더 만들어 npm i부터 진행하였다.

### 8. 느낌점


###  ★ 오치헌   </br> 
 --->  팀 작업을 함에 있어서, 모르는 부분을 서로 맞대고 의논을 하는 것이 제 자신을 좀 더 동기부여를 자극하게 만드는 것 같았다. </br>
###  ★ 문형기  </br> 
--->  게임 진입 페이지를 구성하는 작업을 하였으나, 리액트를 적용시키지 못하여 매우 아쉬웠다. 
                   작성한 함수를 어떻게 하면  리액트스럽게 코딩을 할 수 있을까 수도 없이 고민했지만,
                 아직 부족한 실력 탓에 구현해내지 못하여 더욱 갈고 닦아야 할 것을 느끼게 되었다. </br>
###  ★ 도은빈   </br> 
 --->  코드를 따라가다 보니 아직 모르는 게 너무 많다는 것을 다시 한번 느꼈습니다.
