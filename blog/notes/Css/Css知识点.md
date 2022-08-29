---
title: Css知识点
icon: page
date: 2022-03-18 17:38:40
category:
  - CSS
tag:
  - CSS
sticky: false
star: false
---

此文档帮助我在学习工作中，Css易混知识点以及部分基础知识进行的梳理总结

<!-- more -->

- white-space

  css中white-space属性用来控制容器的文本中带有空白符、制表符、换行符等的显示

  ```css
  .cell {
      white-space: pre-line;
  }
  
  遇到`\n`的时候会自动换行
  ```

  

- 鼠标样式

  ```css
  cursor:crosshair;  // 十字准心
  cursor:pointer;    // 手
  cursor:not-allowed;// 禁止
  cursor:move; 	   // 移动
  cursor:wait;       // 等待/沙漏
  cursor:progress;   // 处理中
  ```

  

- 显示与隐藏

  ```css
  // 即使不可见的元素也会占据页面上的空间
  visibility:hidden
  
  // 不占据页面空间的不可见元素
  display:none
  ```

  

- 显示滚动条

  ```css
  overflow:auto; // 当内容溢出元素框自动显示滚动条
  height:200px; // 给定元素固定高度
  ```

  

- 垂直居中

  ```html
  <div  class="wrap">
  	<div  class="box"></div>
  </div>
  ```

  - flex布局

    ```css
    .wrap{
      width:300px;
      height:300px;
      border: 1px solid red;
      display:flex;
      justify-content:center;
      align-items:center;
    }
    .box{
      height:100px;
      width:100px
      boder:1px solid blue;
    }
    ```

    

  

- 字体渐变色

  - 渐变色字体的思路：将背景色改为渐变色，然后再去除字体外的多余部分，最后将字体设置为透明 ！

  ```css
  // 渐变色字体
    background-image: linear-gradient(#2de2ff,#8b67fb);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  ```

  