(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{494:function(t,s,a){"use strict";a.r(s);var r=a(3),e=Object(r.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("ol",[s("li",[s("p",[t._v("下载"),s("code",[t._v("wget https://repo.huaweicloud.com/java/jdk/8u202-b08/jdk-8u202-linux-x64.tar.gz")])])]),t._v(" "),s("li",[s("p",[t._v("解压"),s("code",[t._v("tar -zxvf jdk-8u202-linux-x64.tar.gz")])])]),t._v(" "),s("li",[s("p",[t._v("移动到系统目录"),s("code",[t._v("mv jdk1.8.0_202/ /usr/local/java1.8.0")])])]),t._v(" "),s("li",[s("p",[t._v("设置"),s("code",[t._v("/etc/profile")]),t._v("为可编辑状态 "),s("code",[t._v("sudo chmod -R 777 /etc/profile")])])]),t._v(" "),s("li",[s("p",[t._v("设置环境变量"),s("code",[t._v("vim /etc/profile")]),t._v("，在末尾添加：")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("export "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JAVA_HOME")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("usr"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("local"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("java1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8.0")]),t._v("\nexport "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CLASSPATH")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("$"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JAVA_HOME")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("lib"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("dt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("jar"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("$"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JAVA_HOME")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("lib"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("tools"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("jar"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("$"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JAVA_HOME")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("jre"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("lib"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("rt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("jar\nexport "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PATH")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("$"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PATH")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("$"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JAVA_HOME")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("bin\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])])]),t._v(" "),s("li",[s("p",[t._v("刷新环境变量"),s("code",[t._v("source /etc/profile")]),t._v("，验证是否成功："),s("code",[t._v("java -version")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);