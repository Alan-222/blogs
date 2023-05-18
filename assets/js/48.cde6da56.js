(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{453:function(t,n,e){"use strict";e.r(n);var s=e(2),a=Object(s.a)({},(function(){var t=this,n=t._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h3",{attrs:{id:"前言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),n("p",[t._v("上文提到了用组件的方式来实现刮刮奖，本文笔者将用 canvas 覆盖源图像的方式来自己实现。")]),t._v(" "),n("h3",{attrs:{id:"实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#实现"}},[t._v("#")]),t._v(" 实现")]),t._v(" "),n("p",[t._v("1."),n("strong",[t._v("定义模板")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('<template>\n  <div>\n    <div\n      id="1"\n      class="scratchCard"\n      :style="\'width:\' + width + \';height:\' + height"\n    >\n      <--源图像层--\x3e\n      <div class="result"></div>\n      <--覆盖层--\x3e\n      <canvas id="canvas"></canvas>\n    </div>\n  </div>\n</template>\n')])])]),n("p",[t._v("2."),n("strong",[t._v("开始初始化 canvas 画布并定义样式")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('mounted() {\n      this.init();\n  },\n  methods: {\n    init() {\n      if (!this.isSupportCanvas()) {\n        alert("当前浏览器不支持canvas");\n        return;\n      }\n      //创建画布并添加样式\n      const canvasWrap = document.getElementById("1");\n      this.canvas = canvasWrap.querySelector("#canvas");\n      this.ctx = this.canvas.getContext("2d");\n      this.canvas.width = canvasWrap.clientWidth;\n      this.canvas.height = canvasWrap.clientHeight;\n      this.ctx.fillstyle = "#a0a0a0";\n      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);\n      //开始绑定事件\n      this.bindevent();\n    },\n}\n')])])]),n("p",[t._v("3."),n("strong",[t._v("添加判断并开始事件处理")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('    bindevent() {\n      //判断是移动端还是pc端操作\n      if ("ontouchstart" in window) this.supportTouch = true;\n      this.events = this.supportTouch\n        ? ["touchstart", "touchmove", "touchend"]\n        : ["mousedown", "mousemove", "mouseup"];\n      this.canvas.addEventListener(\n        this.events[0],\n        this.startEventHandler,\n        false\n      );\n    },\n    startEventHandler(e) {\n      //防止触摸时滑动滚动条\n      e.preventDefault();\n      //创建开始触摸事件回调（可自行添加逻辑处理）\n      if (this.firstTouch) {\n        this.startCallback();\n        this.firstTouch = false;\n      }\n      //显示奖品层在底层\n      this.showLucky = true;\n      //监听移动事件\n      this.canvas.addEventListener(\n        this.events[1],\n        this.moveEventHandler,\n        false\n      );\n      document.addEventListener(this.events[2], this.endEventHandler, false);\n    },\n')])])]),n("p",[t._v("4."),n("strong",[t._v("对于移动事件进行处理")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('moveEventHandler(e) {\n      e.preventDefault();\n      //判断为触摸还是鼠标\n      e = this.supportTouch ? e.touches[0] : e;\n      //getBoundingClientRect用于获得页面中某个元素的左，上，右和下分别相对浏览器视窗的位置。\n      const canvasPos = this.canvas.getBoundingClientRect(),\n        scrollT = document.documentElement.scrollTop || document.body.scrollTop,\n        scrollL =\n          document.documentElement.scrollLeft || document.body.scrollLeft,\n        mouseX = e.pageX - canvasPos.left - scrollL,\n        mouseY = e.pageY - canvasPos.top - scrollT;\n      this.ctx.beginPath();\n      this.ctx.fillStyle = "#FFFFFF";\n      //在源图像外显示目标图像。只有源图像外的目标图像部分会被显示，源图像是透明的。\n      this.ctx.globalCompositeOperation = "destination-out";\n      //创建弧/曲线（用于创建圆形或部分圆）\n      this.ctx.arc(mouseX, mouseY, this.moveRadius, 0, 2 * Math.PI);\n      this.ctx.fill();\n    },\n   endEventHandler(e) {\n      e.preventDefault();\n      //移除事件句柄\n      this.canvas.removeEventListener(this.events[1], this.moveHandler, false);\n      document.removeEventListener(this.events[2], this.endMoveHandler, false);\n      this.endMoveHandler = null;\n      this.caleArea();\n    },\n    caleArea() {\n      let pixels = this.ctx.getImageData(\n          0,\n          0,\n          this.canvas.width,\n          this.canvas.height\n        ),\n        transPixels = [];\n      pixels.data.map((item, i) => {\n        const pixel = pixels.data[i + 3];\n        if (pixel === 0) {\n          transPixels.push(pixel);\n        }\n      });\n      //判断刮得比例，大于这个比例之和就彻底清除\n      if (transPixels.length / pixels.data.length > this.ratio) {\n        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n        this.canvas.removeEventListener(this.events[0], this.startEventHandler);\n        this.canvas.removeEventListener(\n          this.events[1],\n          this.moveEventHandler,\n          false\n        );\n        document.removeEventListener(\n          this.events[2],\n          this.endEventHandler,\n          false\n        );\n        //结束的回调函数（可添加逻辑处理）\n        this.clearCallback();\n      }\n    },\n')])])]),n("p",[t._v("5."),n("strong",[t._v("实现效果")])]),t._v(" "),n("p",[n("strong",[t._v("背景文字")])]),t._v(" "),n("p",[n("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/886fc456307841698ad62ebdfa672342~tplv-k3u1fbpfcp-watermark.image?",alt:"31h2h-wsez0.gif"}})]),t._v(" "),n("p",[n("strong",[t._v("图片")])]),t._v(" "),n("p",[n("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/59eb823691bb472a9e0803c166f938c2~tplv-k3u1fbpfcp-watermark.image?",alt:"3je14-dp4fq.gif"}})]),t._v(" "),n("h3",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),n("p",[t._v("本文通过 canvas 画布实现了简单的刮刮奖，借鉴了网上的一些文章的经验完成，希望大家能够有所收获！")])])}),[],!1,null,null,null);n.default=a.exports}}]);