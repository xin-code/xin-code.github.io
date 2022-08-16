---
title: Vue2
icon: page
date: 2022-03-24 16:13:37
category:
  - Vue
tag:
  - Vue
sticky: false
star: false
---


此文档帮助我在学习工作中，Vue易混知识点以及部分基础知识进行的梳理总结

<!-- more -->



## 指令

- v-if

  v-if="true" 插入元素

  v-if="false"移除元素

  



## import '@...' 中@指代

- @ 等价于 `/src` 这个目录，避免写麻烦又易错的相对路径



## 缩写

```vue
:class 等效于 v-bind:class
@click 等效于 v-on:click
<template #footer 等效于 <template v-slot:footer
```



## .native修饰符的使用

- 在 v-on （@）上使用的修饰符 .native 给子组件绑定一个原生的事件

  ```vue
  @keyup.enter.native="save"  // 回车触发事件 'save'
  @click.native="onClickDetail" // 点击触发事件 'onClickDetail'
  ```

  

## 具名插槽

- 父组件

  - 一个不带 `name` 的 `<slot>` 出口会带有隐含的名字“default”。

  ```vue
  <div class="container">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
  ```

  

- 子组件

  ```vue
  <div>
    <template v-slot:header>
    <!-- 可缩写为#header -->
    <template #header>
      <h1>Here might be a page title</h1>
    </template>
    </template>
  
    <template v-slot:default>
    <!-- 可缩写为#default -->
    <template #default>
      <p>A paragraph for the main content.</p>
      <p>And another one.</p>
    </template>
    </template>
  
    <template v-slot:footer>
    <!-- 可缩写为#footer -->
    <template #footer>
      <p>Here's some contact info</p>
    </template>
    </template>
  </div>
  ```

  



## this.$set( target, key, value )

- 使用场景：向响应式对象新增一个属性，并确保这个新属性同样是响应式的，可以触发视图更新
- 当使用watch方法时，可以用这个触发视图更新

```vue
🌹 target：要更改的数据源(可以是对象或者数组)
🌹 key：要更改的具体数据(index值)
🌹 value ：重新赋的值
```







## 防抖和节流

- 防抖：

  当持续触发事件时，一定时间段内没有再触发事件，事件处理函数才会执行一次，如果设定的时间到来之前，又一次触发了事件，就重新开始延时

- 节流：

  按照设定的时间固定执行一次函数

  


1. 利用lodash中内置的防抖和节流

   - 防抖（点击后最后一次时间的500毫秒后打印一次）

     ```vue
     import debounce from 'lodash/debounce'
     
     methods:{
     	test: debounce(function () {
           console.log(1);
         }, 500),
     }
     ```

   - 节流（每隔500毫秒打印一次）

     ```vue
    import throttle from 'lodash/throttle'
     
     methods:{
     	test: throttle(function () {
           console.log(1);
         }, 500),
     }
     ```
   
     

