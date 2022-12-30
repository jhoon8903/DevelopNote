
function is1(value) {
	return value === 1;
}

joi 라이브러리 검증

toHexString ?


mongoose  'Schema.virtual' ?
![](https://i.imgur.com/D07Co2s.png)
3T 에서 조회한 모습 

JSON Type로 mongoose에서 보았을 때
todoId 라는 가상의(virtual) Column을 보여준다 
![](https://i.imgur.com/W3t6zdq.png)


deleteOne(todoId) 

router.delete('/todos/:_id', async (req, res) => {

const { _id } = req.params;

const deleteTodo = await Todo.deleteOne({ _id })

.exec()

.then(res.status(201).json('삭제되었습니다.'))

.catch(res.status(400).json('없는 아이디 입니다.'));

});


