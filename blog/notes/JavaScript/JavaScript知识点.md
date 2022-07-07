---
title: JavaScript知识点
icon: page
date: 2022-03-25 11:18:14
category:
  - JavaScript
tag:
  - JavaScript
sticky: false
star: false
---

此文档帮助我在学习工作中，JavaScript易混知识点以及部分基础知识进行的梳理总结

<!-- more -->




## 字符串

1. charAt()：返回指定位置的`字符串`

   ```javascript
   let str = 'hello'
   console.log(str.charAt(0))		// 'h'
   console.log(str.charAt(1)) 		// 'e'
   ```

2. indexOf()：返回字符串值在字符串中首次出现的位置

   ```javascript
   let str = 'hello'
   console.log(str.indexOf('h'))		// 0 
   console.log(str.indexOf('e'))		// 1
   ```

3. split()：用指定的分割符，把字符串变为数组

   ```javascript
   let str = 'h-e-l-l-o'
   console.log(str.split('-'))		// ['h', 'e', 'l', 'l', 'o']
   ```

4. substring()：提取字符串

   ```javascript
   str.substring(indexStart[, indexEnd])
   ```

   - [x]  `indexStart` 必填

     需要截取的第一个字符的索引，该索引位置的字符作为返回的字符串的首字母

   - [ ]  `indexEnd` 可选

     一个 0 到字符串长度之间的整数，以该数字为索引的字符不包含在截取的字符串内 

5. substr()：提取字符串

   ```javascript
   str.substr(start[, length])
   ```

   - [x]  `start` 必填

     开始提取字符的位置

   - [ ]  `length` 可选

     提取的字符数（长度）

6. replace()：替换字符串

   ```javascript
   let str = 'hello'
   const res = str.replace('e','i')
   console.log(str)	// 'hello'
   console.log(res)	// 'hillo'
   ```


7. trim()：去除字符串前后的空格

   ```javascript
   let str = '   hello   '
   str.trim()	// 'hello'
   ```
   
8. 字符串补全(ES2017)

   ```javascript
   str.padStart(targetLength [, padString])
   str.padEnd(targetLength [, padString])
   ```

   - [x]  `targetLength`必填

     当前字符串需要填充到的目标长度

   - [ ]  `padString` 可选

     填充字符串

   


## 数组

> <font color='blue'>不改变</font>原数组

1. concat：连接数组，并且返回`新`数组

   ```javascript
   let arr = [1,2,3]
   console.log(arr.concat([4,5,6]))	// [1,2,3,4,5,6] 返回一个新数组
   ```

2. join：数组变字符串，以参数为分隔符，默认为逗号

   ```javascript
   let arr = [1,2,3]
   console.log(arr.join(-))  // "1-2-3"
   console.log(arr.join())  // "1,2,3"
   ```

3. map：对数组的所有成员依次调用一个函数，根据函数结果返回一个新数组

   ```javascript
   let arr = [1,2,3]
   const res = arr.map((item)=>{
     return item + 1;
   })
   console.log(res)	// [2,3,4] 返回一个新数组
   console.log(arr)	// [1,2,3]
   ```

4. filter()：所有数组成员依次执行该函数，返回结果为true的成员组成一个新数组返回

   ```javascript
   let arr = [1,2,3]
   const res = arr.filter((item)=>{
       return item>=2
   })
   console.log(res)	// [2,3] 返回一个新数组
   ```

5. every()：遍历数组每一项，若全部为true，则返回`true`

   ```javascript
   let arr = [1,2,3]
   const res = arr.every((item)=>{
       return item!==0
   })
   console.log(res)	// true 数组中每项值都不为0
   ```

6. some()：遍历数组的每一项，若其中一项为 true，则返回true

   ```javascript
   let arr = [1,2,3]
   const res = arr.some((item)=>{
       return item>=2
   })
   console.log(res)	// true 其中一项满足判断条件 则返回true
   ```

7. indexOf()：返回指定元素在数组中出现的位置，如果没有出现则返回-1

   ```javascript
   let arr = [1,2,3]
   arr.indexOf(1) // 0
   arr.indexOf(2) // 1
   ```

8. valueOf()：返回数组本身

   ```javascript
   let arr = [1, 2, 3];
   arr.valueOf()     // [1, 2, 3]
   ```

9. slice：用于<font color='red'>截取</font>原数组的一部分，返回一个新数组

   ```javascript
   arr.slice([begin[, end]])
   ```

   - [ ]  `begin` 可选

     开始的索引值开始

     如果省略 `begin`，则 `slice` 从索引 `0` 开始
     如果 `begin` 超出原数组的索引范围，则会返回空数组。

   - [ ]  `end` 可选

     结束的索引值位置

     如果 `end` 被省略，则 `slice` 会一直提取到原数组末尾。如果 `end` 大于数组的长度，`slice` 也会一直提取到原数组末尾。

   


> <font color='red'>改变</font>原数组

1. push：向数组末尾新增一个元素，并返回数组长度

   ```javascript
   let arr = [1,2,3]
   console.log(arr.push(4))	// 4 返回的是当前数组的长度
   console.log(arr)		// [1,2,3,4]
   ```

2. pop：删除最后一个元素，并返回`删除的元素`

   ```javascript
   let arr = [1,2,3,4]
   console.log(arr.pop())		// [4] 返回的是删除元素
   console.log(arr)		// [1,2,3]
   ```

3. unshift：向数组开头新增一个元素，并返回数组长度

   ```javascript
   let arr = [1,2,3]
   console.log(arr.unshift(4))	// 4 返回的是当前数组的长度
   console.log(arr)		// [4,1,2,3]
   ```

4. shift：删除第一个元素，并返回删除的元素，空即为undefined

   ```javascript
   let arr = [1,2,3]
   console.log(arr.shift())	// [1] 返回的是删除元素
   console.log(arr)		// [2,3]
   ```

5. reverse：颠倒数组顺序

   ```javascript
   let arr = [1,2,3]
   console.log(arr.reverse())	// [3,2,1]
   console.log(arr)		// [3,2,1]
   ```

6. sort：对数组排序 (默认情况下：从小到大排序)

   ```javascript
   [2,1,4,3].sort()		// [1,2,3,4]
   
   let arr = [
   	{"name":'张三',"age":20},
   	{"name":'李四',"age":18},
   	{"name":'王五',"age":33},
   ]
   
   arr.sort((a,b)=>{return a.age-b.age}) 	// a-b 为从小打大排序 18,20,33
   arr.sort((a,b)=>{return b.age-a.age})	// b-a 为从大到小排序 33,20,18
   ```

7. :star: splice：通过删除或替换现有元素或者原地添加新的元素来修改<font color='red'>原</font>数组

   ```javascript
   array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
   ```

   - [x]  `start ` 必填
     指定修改的开始位置（从0计数）

     如果只有一个参数，则删除从 index 开始到原数组结尾的所有元素

   - [ ]  `deleteCount ` 可选
     整数，表示要移除的数组元素的个数

   - [ ]  `item1, item2, ... ` 可选
     要添加进数组的元素,从start 位置开始。如果不指定，则 splice() 将只删除数组元素



## 辨析for in 与 for of 的区别

- 定义数组&对象

```javascript
const arr = [{"name":1},{"sex":3}]
const obj = {"name":1,"sex":2}
```

- for in

  for in数组

```javascript
for (let i in arr) {
  console.log(i)
}
// 结果 获得到index值，也就是该项在数组中所处的位置
0
1
```

  	for in对象

```javascript
for (let i in obj) {
  console.log(i)
}
// 结果 获得到key值
name
sex

for (let i in obj) {
  console.log(obj[i])
}
// 结果 获得到value值
1
2
```

