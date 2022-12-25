#mongoose #nodeJS #Error #javaScript 
![](https://i.imgur.com/vvjUw24.png)
# ERROR message
	게시판 post 요청시 error 메세지 출력
	Code 11000
	keyPattern : { postId: 1 }
	keyValue : {postId : null} 

처음 postId 라는 변수를 넣고 개발을 진행하던 중 동료의 피드백으로 해당 변수가 필요가 없다는
것을 알고 해당변수를 삭제 (비활성화:/주석처리) 하고 post 호출을 진행하면 해당 메세지가 계속 나오고 있었다. 

[./routes/posts.js]
![](https://i.imgur.com/6paxbfV.png)
	- 해당 라우터 코드에서 기존에 있던 postsId 부분을 변경
	- 이후 post 작성에는 문제 없는 코드로 확인

[./schemes/posts.js]
![](https://i.imgur.com/AJ8WUv1.png)

	-  