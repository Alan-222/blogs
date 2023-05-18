(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{427:function(t,v,a){"use strict";a.r(v);var _=a(2),p=Object(_.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"前言"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),v("p",[t._v("本篇文章将会针对正常的布局流进行介绍---也就是没有修改任何默认的布局属性与规则之下的布局方式。正常布局流确保了文件的易读可读性，即便用户的浏览器兼容性或者屏幕阅读器受限依然能有较好的表现效果。此外，在做出布局的改动之前，它也是上手任何页面的最佳方式，下面让我来看看默认的页面布局会是什么样子。")]),t._v(" "),v("h2",{attrs:{id:"默认页面布局"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#默认页面布局"}},[t._v("#")]),t._v(" 默认页面布局")]),t._v(" "),v("p",[t._v("首先，我们需要知道页面是由一个一个的“盒子”所组成的，通过元素的内容、内边距、边框以及外边距组成一个"),v("strong",[t._v("盒子模型")]),t._v("。")]),t._v(" "),v("p",[t._v("其次，我们需要知道元素类型的不同所呈现的表现方式也不一样。")]),t._v(" "),v("p",[t._v("一是"),v("strong",[t._v("块级元素")]),t._v("默认内容宽度是其父元素的 100%，高度与内容高度一致,且有默认的外边距与根元素的字体大小一致一般为"),v("code",[t._v("16px")]),t._v("。例如，在"),v("code",[t._v("body")]),t._v("元素下添加"),v("code",[t._v("<p>ddddd</p>")])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3dbf5e2dc73d4547a83f4cf061235050~tplv-k3u1fbpfcp-watermark.image?",alt:"image.png"}})]),t._v(" "),v("p",[t._v("它的内容宽度变为"),v("code",[t._v("body")]),t._v("的宽度，高度为内容高度，外边距为"),v("code",[t._v("16px")]),t._v("。")]),t._v(" "),v("p",[t._v("二是"),v("strong",[t._v("内联元素")]),t._v("的高度和宽度都与内容保持一致且无法为其设置高度和宽度。一般内联元素都会嵌于块级元素的内容里，若要单独为其设置尺寸，需要设置"),v("code",[t._v("css")]),t._v("属性"),v("code",[t._v("display:block")]),t._v("或"),v("code",[t._v("display:inline-block")]),t._v("。")]),t._v(" "),v("p",[t._v("三是"),v("strong",[t._v("不同元素之间的表现")]),t._v("。一般而言，网页都是按自上而上的方式排列的。块级元素会在上一个元素下面另起一行，并按照设置好的"),v("code",[t._v("margin")]),t._v("值分隔")]),t._v(" "),v("blockquote",[v("p",[t._v("如果两个上下相邻的元素都设置了 margin 并且两个 margin 有重叠，那么更大的设置会被保留，小的则会消失 --- 这被称为"),v("strong",[t._v("外边距叠加")])])]),t._v(" "),v("p",[t._v("内联元素不会，只要行宽度还足够，它便会按前面内容（内联元素或文本内容）顺序排列。如果不够，溢出的内容将会被排至下一行。")]),t._v(" "),v("p",[t._v("下面我们通过一个例子来看一下（为了表现清楚采取内联样式表，一般不推荐）。")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v('<div style="width: 40%">\n<p>这是段落一，将会与下面的段落有margin边距。</p>\n<p style="margin-top: 30px">这是段落二，将会设置较大上边距。</p>\n<p>\n    这是段落三，将会有内联元素在这个段落。 <span>我是内联元素1</span>\n    <span>我是内联元素2,超出宽度，我将会另起一行</span> 本段落到此结束。\n</p>\n</div>\n')])])]),v("p",[v("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b95608daec4f4f08aa85119224cbe8e5~tplv-k3u1fbpfcp-watermark.image?",alt:"image.png"}})])])}),[],!1,null,null,null);v.default=p.exports}}]);