# React Component Echarts

组件式百度图表，示例 https://dawiwt.github.io/react-component-echarts

[![Build Status](https://api.travis-ci.org/dawiwt/react-component-echarts.svg?branch=master)](https://travis-ci.org/dawiwt/react-component-echarts) [![Coverage Status](https://coveralls.io/repos/github/dawiwt/react-component-echarts/badge.svg?branch=master)](https://coveralls.io/github/dawiwt/react-component-echarts?branch=master) [![npm](https://img.shields.io/npm/v/react-component-echarts.svg)](https://www.npmjs.com/package/react-component-echarts) [![npm](https://img.shields.io/npm/dw/react-component-echarts.svg?label=npm%20downloads&style=flat)](https://www.npmjs.com/package/react-component-echarts) [![npm](https://img.shields.io/npm/l/react-component-echarts.svg)](https://www.npmjs.com/package/react-component-echarts)

## Feature

-   组件式开发
-   图表自适应
-   功能完全兼容`echarts`本身功能
-   通过`Props`配置，学习、维护成本更低
-   支持[辅助工具](https://dawiwt.github.io/react-component-echarts/tools.html)从配置到组件的快速转换，高效开发

## Install

```sh
#安装包
npm install react-component-echarts --save

#自主安装echarts
npm install echarts --save
```

## Quick Start

1. 复制你的 option
2. 点击[辅助工具](https://dawiwt.github.io/react-component-echarts/tools.html)
3. 粘贴 option 到文本框
4. 复制依赖组件与图表代码到你的业务逻辑中
5. 导入图表依赖 echarts 模块
6. 完成

## Usage

当然，也可以手动键入组件及属性，这里是一个简单示例，更多示例看这里 https://dawiwt.github.io/react-component-echarts

```js

//导入图表
import echarts from 'echarts/lib/echarts'

//导入组件
import { Recharts, Components } from 'react-component-echarts'
const { XAxis, YAxis, Series } = Components

//图表代码
<Recharts>
    <YAxis type="value" />
    <XAxis type="category" data={["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]} />
    <Series data={[820,932,901,934,1290,1330,1320]} type="line" smooth={true} />
</Recharts>

```

## Components

-   Recharts 图表根组件
-   others 图表子组件，详见[列表](https://github.com/dawiwt/react-component-echarts/blob/master/tags.js)

除`Recharts`外，其它组件均为`options`中的对象存在; 例如，`options.title`作为图表标题的配置项，其值为对象，可以详细配置文本内容、位置、颜色、背景等复杂的样式结构，所以`title`会以组件的形式存在，即`<Title />`; 而`options.animation`控制图表动画，其值为`boolean`等单一类型，所以`animation`以`Prop`的形式存在，即`<Recharts animation={false}/>`; 另外，`options`配置项中对象的层级关系即对应着组件间的父子关系;

```js
//例如
<XAxis type="category" />

//相当于
option = { xAxis: { type: 'category' } }
```

节点间的父子关系相当于对象间层级关系；

```js
//例如
<Tooltip trigger="axis">
    <AxisPointer type="cross">
        <Label backgroundColor="#6a7985" />
    </AxisPointer>
</Tooltip>

//相当于
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    }
}
```

## Props

以下属性为`Recharts`节点仅有的几个`echarts`之外的属性，其它配置均为透传，无学习成本；

-   `className` (optional, string) 图表容器 `class` 名
-   `style` (optional, object) 图表容器样式
-   `onEvents` (optional, array) 绑定图表事件
-   `onLoad` (optional, function(Instance)) 图表首次加载完毕会执行 `onLoad`，`Instance` 为图表实例，可供调用百度图表 `API`

```js
<Recharts
    onEvents={[['click', params => console.log('click', params)], ['legendselectchanged', params => console.log('legendselectchanged', params)]]}>
    ...
</Recharts>
```

除此以外，图表`init`事件与`setOption`事件的参数可以通过`Recharts`透传，均非必传，不传为`echarts`默认值；

```js
// init
<Recharts
    theme="custom-theme"
    devicePixelRatio={window.devicePixelRatio}
    renderer="canvas"
    width={500}
    height={500}>
    ...
</Recharts>

// setOption
<Recharts notMerge={true} lazyUpdate={false} silent={true}>...</Recharts>
```

**特别说明：** 除`width`与`height`属性，其余的`init`与`setOption`属性会导致图表重绘。

更多属性查看 https://www.echartsjs.com/option.html

## LICENSE

MIT@[dawiwt](https://github.com/dawiwt)