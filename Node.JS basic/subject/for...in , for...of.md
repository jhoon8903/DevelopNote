#javaScript 

# For 문
	for 문은 대표적인 반복문으로 JS 내부에서 Object / Array 등을 
	반복적으로 순환시킬 수 있는 문법이다.
## for ... in  (ES1)
	for ... in 반복문은 object의 속성들을 반복하여 작업을 수행할 수 있는 문법
	모든 object에서 사용이 가능하다.
	즉, 객체 (이하 obj)의 자료들을 하나씩 꺼내고 싶을때 사용을 하게 되는 것
	
![](https://i.imgur.com/16lbkte.png)

하지만 보는 것 과 같이 obj의 'Key'값만 불러 올 수 있다.
Value 값까지 다 보려면 다음과 같이 obj[key] 를 입력해보자

![](https://i.imgur.com/VeEwc8X.png)
- 'key'타입이 강제로 'String' 으로 변경된다.
- 'key'값만 가져올 수 있음
- enumerable 한 것들만 사용가능
	- enumerable : 셀 수 있는 

## for ... of (ES6)
