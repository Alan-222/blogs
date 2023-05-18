(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{455:function(t,a,v){"use strict";v.r(a);var r=v(2),_=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),a("p",[t._v("由于笔者项目的需要，必须要开发一个刮刮奖抽奖系统，但苦恼于如何实现。首先，在网上查询时看到了 canvas 标签的方法，但比较晦涩难懂。后来，在网上寻找到了一个 vue 的刮刮奖组件，相对比较好用，笔者在此教大家来安装使用。")]),t._v(" "),a("h2",{attrs:{id:"原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[t._v("#")]),t._v(" 原理")]),t._v(" "),a("p",[t._v("在介绍这个组件之前，先来简单描述一下刮刮奖实现的原理是什么。首先，我们先将其分为遮罩层和奖品层。原理就是像用橡皮擦擦掉遮罩层，把奖品层展示在下面。")]),t._v(" "),a("h2",{attrs:{id:"实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现"}},[t._v("#")]),t._v(" 实现")]),t._v(" "),a("p",[t._v("首先，引入组件")]),t._v(" "),a("p",[t._v("1、使用 npm 下载安装插件")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("npm install lzy-scratch-card --save\n")])])]),a("p",[t._v("2、在需要使用的页面引入组件")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("//在需要的组件局部引入\nimport scratchCard from 'lzy-scratch-card'\n​\ncomponents: {\n    scratchCard\n},\n")])])]),a("p",[t._v("3.组件中使用")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<template>\n  <scratch-card\n            elementId="scratch"\n            width="246px"\n            height="102px"\n            :moveRadius="15"\n            :ratio="0.7"\n            :startCallback="startCallback"\n            :clearCallback="clearCallbackUp"\n            :coverImg="require(\'../assets/overlay.png\')"\n            coverColor="#ff0000"\n            :result="result"\n            style="\n              position: absolute;\n              top: 51%;\n              left: 50%;\n              transform: translate(-50%, -50%);\n            "\n          >\n          </scratch-card>\n</template>\n​\n<script>\nimport scratchCard from "lzy-scratch-card";\nexport default {\n   name:"guaguajiang",\n   components:{\n       scratchCard\n   },\n   data () {\n       return {\n           prize,\n           result:\n        `<div style=" background-color: #FFE2B7;width: 246px;height: 102px; border-radius: 5px;text-align: center;"><div style="font-size: 17px;color:#FE3555;font-weight: Bold;padding-top: 24px;">—— 恭喜获得 ——</div><div style="  font-size: 14px;color: #333333;line-height: 21px;margin-top: 14px;">${prize}<span style="color:#FE3555">扫码领5代金券</span></div></div>`,\n           //遮罩层下面的页面（html）注：以html标签字符串的样式写\n       }\n   },\n   methods: {\n     //开始刮时的回调函数\n    startCallback() {},\n     //刮刮乐刮层全部清除后的回调函数\n    clearCallback() {},\n   }\n}\n<\/script>\n')])])]),a("p",[t._v("4.实现效果（奖品层也可以是图片）")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fb9378aee220497e9e35ac669a5b7224~tplv-k3u1fbpfcp-watermark.image?",alt:"puk28-a28s1.gif"}})]),t._v(" "),a("p",[t._v("5.参数及其方法说明")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("elementId")]),t._v(" "),a("td",[t._v("组件最外层 DOM 的 id 属性，区分单个页面多次使用刮刮乐")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("elementId")])]),t._v(" "),a("tr",[a("td",[t._v("width")]),t._v(" "),a("td",[t._v("组件宽度")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("254px")])]),t._v(" "),a("tr",[a("td",[t._v("height")]),t._v(" "),a("td",[t._v("组件高度")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("134px")])]),t._v(" "),a("tr",[a("td",[t._v("moveRadius")]),t._v(" "),a("td",[t._v("刮卡范围")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[t._v("15")])]),t._v(" "),a("tr",[a("td",[t._v("ratio")]),t._v(" "),a("td",[t._v("要求刮掉的面积占比，达到这个占比后，将会自动把其余区域清除")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[t._v("0.8")])]),t._v(" "),a("tr",[a("td",[t._v("coverColor")]),t._v(" "),a("td",[t._v("刮刮乐遮罩颜色")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("#fff")])]),t._v(" "),a("tr",[a("td",[t._v("coverImg")]),t._v(" "),a("td",[t._v("刮刮乐遮罩图片")]),t._v(" "),a("td",[t._v("string(网络图片，设置这个后，coverColor 就不起作用了)")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("result")]),t._v(" "),a("td",[t._v("中奖的结果")]),t._v(" "),a("td",[t._v("string（最好用 html，用的时候更好控制结果显示")]),t._v(" "),a("td",[t._v("-")])])])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("方法")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("类型")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("startCallback")]),t._v(" "),a("td",[t._v("开始刮时的回调函数")]),t._v(" "),a("td",[t._v("function")])]),t._v(" "),a("tr",[a("td",[t._v("clearCallback")]),t._v(" "),a("td",[t._v("刮刮乐刮层全部清除后的回调函数")]),t._v(" "),a("td",[t._v("function")])])])]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("以上就是通过组件实现刮刮奖的方式，但通过组件终究没有理解其实现的原理，下期笔者将尝试用传统方式（canvas）来实现")])])}),[],!1,null,null,null);a.default=_.exports}}]);