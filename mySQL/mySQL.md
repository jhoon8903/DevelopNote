
Select Query 문
*어떤 Table에서 어떤  Field 의 data를 가져올지 *로 구성 됨

구성 
Execl sheet 를 생각하면 편하다.

![](https://i.imgur.com/hiOvjxA.png)

# 기초 문법

## SELECT 문
	- 기본적인 data 조회할 때 사용

특정 Table안의 모든 Field 조회
 - SELECT * from tableName

특정 Table안의 특정 Field 조회
- SELECT  fieldName form  tableName
- SELECT fieldName1 , fieldName2 from tableName

### Where 절
	- 특정 table안의 특정 data 조회
	- 텍스트상 구분 짓기위해 ( ) 표시 실제로는 ( )는 기입하지 않음
- SELECT * from (tableName) where (fieldName) = 'data'
	*data는 ' '  꼭 문자열로 표기* 

UP / DOWN ( data 가 ... Number 이상 혹은 ... 이하 )
- SELECT * from (tableName) where (field Name) >= Number
- SELECT * from (tableName) where (field Name) <= Number

AND / OR (data1 이면서 data2인 )
- SELECT * from (table Name) where (field name1) = 'data1' and (field Name2) = 'data2'
- SELECT * from (table Name) where (field name1) = 'data1' or (field Name2) = 'data2'

## Wh

