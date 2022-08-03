# React面向组件编程

# 一、组件概述

1. 组件**实例的**具有三大核心：state、props、refs
2. 三大核心只有类式组件有[实例]；
3. 函数式组件可以通过hooks具有三大核心；

# 二、创建组件

## 2.1 函数式组件

```javascript
// 组件名字，第一个大写；渲染组件规则：<组件名字 />；标签闭合
<script type="text/babel">
	//1.创建函数式组件
	function MyComponent(){
		console.log(this); //此处的this是undefined，因为babel编译后开启了严格模式
		return <h2>我是用函数定义的组件(适用于【简单组件】的定义)</h2>
	}
	//2.渲染组件到页面
	ReactDOM.render(<MyComponent/>,document.getElementById('test'))
	/* 
		执行了ReactDOM.render(<MyComponent/>.......之后，发生了什么？
				1.React解析组件标签，找到了MyComponent组件。
				2.发现组件是使用函数定义的，随后React调用该函数，将返回的虚拟DOM转为真实DOM，随后呈现在页面中。
	*/
</script>
```

## 2.2 类式组件

1. 类式组件必须继承，React.Component；
2. 必须重写render()，以及返回值；
3. 构造函数后续说明

```javascript
<script type="text/babel">
	//1.创建类式组件
	class MyComponent extends React.Component {
		render(){
			//render是放在哪里的？—— MyComponent的原型对象上，供实例使用。
			//render中的this是谁？—— MyComponent的实例对象 <=> MyComponent组件实例对象。
			console.log('render中的this:',this);
			return <h2>我是用类定义的组件(适用于【复杂组件】的定义)</h2>
		}
	}
	//2.渲染组件到页面
	ReactDOM.render(<MyComponent/>,document.getElementById('test'))
	/* 
		执行了ReactDOM.render(<MyComponent/>.......之后，发生了什么？
				1.React解析组件标签，找到了MyComponent组件。
				2.发现组件是使用类定义的，随后new出来该类的实例，并通过该实例调用到原型上的render方法。
				3.将render返回的虚拟DOM转为真实DOM，随后呈现在页面中。
	*/
</script>
```

# 三、组件实例的核心属性

## 3.1 state

1. 简单组件：无 状态；
2. 复杂组件：有 状态，state；
3. state 是组件对象最重要的属性, 值是对象(可以包含多个 key-value 的组合)；
4. 组件被称为"状态机", 通过更新组件的 state 来更新对应的页面显示(重新渲染组件)

### 3.1.1 注意事项

1. 组件中 render 方法中的 this 为组件实例对象；

2. 组件自定义的方法中 this 为 undefined，如何解决？

   ​	（1）强制绑定 this: 通过函数对象的 bind() ；

   ​	（2）赋值语句的形式+箭头函数

3. 状态数据，不能直接修改或更新，需要使用setState进行更改

### 3.1.2 参考代码

```javascript
<script type="text/babel">
	//1.创建组件
	class Weather extends React.Component{
		
		//构造器调用几次？ ———— 1次
		constructor(props){
			super(props)
			//初始化状态
			this.state = {isHot:true, wind:'微风', rain:'无雨'};
			//解决changeWeather中this指向问题
			this.demo = this.changeWeather.bind(this)
		}
		//render调用几次？ ———— 1+n次 1是初始化的那次 n是状态更新的次数
		render(){
			//读取状态
			const {isHot,wind} = this.state
			return <h1 onClick={this.demo}>今天天气很{this.state.isHot ? '炎热' : '凉爽'}，且{wind},{rain}！</h1>
		}
		//changeWeather调用几次？ ———— 点几次调几次
		changeWeather(){
			//changeWeather放在哪里？ ———— Weather的原型对象上，供实例使用
			//由于changeWeather是作为onClick的回调，所以不是通过实例调用的，是直接调用
			//类中的方法默认开启了局部的严格模式，所以changeWeather中的this为undefined

			//获取原来的isHot值
			const {isHot, wind} = this.state;
			//严重注意：状态必须通过setState进行更新,且更新是一种合并，不是替换。
			// 需要借助内置的API
            this.setState({isHot:!isHot, wind:'大风'})

			//严重注意：状态(state)不可直接更改，下面这行就是直接更改！！！
			//this.state.isHot = !isHot //这是错误的写法
		}
	}
	//2.渲染组件到页面
	ReactDOM.render(<Weather/>,document.getElementById('test'))
			
</script>
```

### 3.1.3 简化版本

```javascript
<script type="text/babel">
    class Weather extends React.Component {
        
        state = {isHot:true, wind:'微风', rain:'无雨'};
        
        render() { 
            const {isHot, wind, rain} = this.state;
            return <h1 onClick={this.changeWeather}>今天天气很{this.state.isHot ? '炎热' : '凉爽'}，且{wind},{rain}！</h1>
        }
        
        changeWeather = ()=>{ 
            const {isHot, wind} = this.state;
            this.setState({isHot:!isHot, wind:'大风'})
        }
    }
   
    ReactDOM.render(<Weather />, document.getElementById('text'));
</script>
```

## 3.2 props

1. 每个组件对象都会有 props(properties 的简写)属性；
2. 组件标签的所有属性都保存在 props 中；

### 3.2.1 作用

1. 通过标签属性从组件外向组件内传递变化的数据；
2. 注意: 组件内部不要修改 props 数据

### 3.2.2 操作

1. 内部读取某个属性值
2. 对 props 中的属性值进行类型限制和必要性限制
3. 扩展属性: 将对象的所有属性通过 props 传递
4. 默认属性值
5. 组件类的构造函数

### 3.3.3 参考代码

```javascript
<script type="text/babel">
	class Person extends React.Component{
		render(){
			const {name, sex, age} = this.props;
			//props是只读的
			//this.props.name = 'jack' //此行代码会报错，因为props是只读的
			// age+1 是运算
			return (
				<ul>
					<li>姓名：{name}</li>
					<li>性别：{sex}</li>
					<li>年龄：{age+1}</li>	
				</ul>
			)
		}
	}
	//对标签属性进行类型、必要性的限制
	Person.propTypes = {
		name:PropTypes.string.isRequired, //限制name必传，且为字符串
		sex:PropTypes.string,//限制sex为字符串
		age:PropTypes.number,//限制age为数值
		speak:PropTypes.func,//限制speak为函数
	}
	//指定默认标签属性值
	Person.defaultProps = {
		sex:'男',//sex默认值为男
		age:18 //age默认值为18
	}
	function speak() {
		console.log("我要说话了！");
	}
	ReactDOM.render(<Person name = "tom" sex = "女" age = {18} speak = {speak}/>, document.getElementById('text1'))
	const p = {name:"jerry", sex:"女", age:25}
	ReactDOM.render(<Person name={p.name} sex={p.sex} age={p.age}/>, document.getElementById('text2'))
	
	// 简写方式，只有键名称对应时候可用 
	const p1 = {name:"bob", sex:"男", age:22}
	ReactDOM.render(<Person {...p1}/>, document.getElementById('text3'))
	// 检验默认值,如何键值对定义值为函数？？speak:spaek()
	const p2 = {name:"bob"}
	ReactDOM.render(<Person {...p2}/>, document.getElementById('text4'))
	
</script>
```

![image-20220730154442755](https://raw.githubusercontent.com/luckilypop/WebFront/main/react/202208032051963.png)

### 3.3.4 简化版本

```javascript
<script type="text/babel">
	class Person extends React.Component{
		render(){
			const {name, sex, age} = this.props;
			return (
				<ul>
					<li>姓名：{name}</li>
					<li>性别：{sex}</li>
					<li>年龄：{age+1}</li>	
				</ul>
			)
		}
		static propTypes = {
			name:PropTypes.string.isRequired, 
			sex:PropTypes.string,
			age:PropTypes.number,
			speak:PropTypes.func,
		}
		
		static defaultProps = {
			sex:'男',
			age:18,
		}
	}
	
	function speak() {
		console.log("我要说话了！");
	}
	ReactDOM.render(<Person name = "tom" sex = "女" age = {18} speak = {speak}/>, document.getElementById('text1'))
	const p = {name:"jerry", sex:"女", age:25}
	ReactDOM.render(<Person name={p.name} sex={p.sex} age={p.age}/>, document.getElementById('text2'))
	
	const p1 = {name:"bob", sex:"男", age:22}
	ReactDOM.render(<Person {...p1}/>, document.getElementById('text3'))
	const p2 = {name:"bob"}
	ReactDOM.render(<Person {...p2}/>, document.getElementById('text4'))
	
</script>
```

### 3.3.5 函数组件使用props

```javascript
<script type="text/babel">
	//创建组件
	function Person (props){
		const {name,age,sex} = props
		return (
				<ul>
					<li>姓名：{name}</li>
					<li>性别：{sex}</li>
					<li>年龄：{age}</li>
				</ul>
			)
	}
	Person.propTypes = {
		name:PropTypes.string.isRequired, //限制name必传，且为字符串
		sex:PropTypes.string,//限制sex为字符串
		age:PropTypes.number,//限制age为数值
	}
	//指定默认标签属性值
	Person.defaultProps = {
		sex:'男',//sex默认值为男
		age:18 //age默认值为18
	}
	//渲染组件到页面
	ReactDOM.render(<Person name="jerry"/>,document.getElementById('test1'))
</script>
```

## 3.3 refs

1.组件内的标签可以定义 ref 属性来标识自己

### 3.3.1 字符串形式的 ref 

```javascript
<script type="text/babel">
	class Demo extends React.Component {
		showDate = ()=> {
			const {input1} = this.refs;
			alert(input1.value)
		}
		loseDate = ()=> {
			const {input2} = this.refs;
			alert(input2.value)
		}
		render(){
			return (
				<div>
					<input ref= "input1" type="text" placeholder="点击按钮提示数据"/>
					<button onClick={this.showDate}>点我提示左侧的数据</button> 
					<input ref= "input2" onBlur={this.loseDate} type="text" placeholder="失去焦点提示数据"/>
				</div>
			)
		}
	}
	ReactDOM.render(<Demo />, document.getElementById('text'))
</script>
```

### 3.3.2 回调形式的 ref  

```javascript
<script type="text/babel">
	class Demo extends React.Component {
		showDate = ()=> {
			const {input1} = this;
			alert(input1.value)
		}
		loseDate = ()=> {
			const {input2} = this;
			alert(input2.value)
		}
		// this添加一个属性input1
		render(){
			console.log(this)
			return (
				<div>
					<input ref={c => this.input1 = c} type="text" placeholder="点击按钮提示数据"/>
					<button onClick={this.showDate}>点我提示左侧的数据</button> 
					<input ref={c => this.input2 = c} onBlur={this.loseDate} type="text" placeholder="失去焦点提示数据"/>
				</div>
			)
		}
	}
	ReactDOM.render(<Demo />, document.getElementById('text'))
</script>
```

#### 回调函数执行次数问题

```javascript
<script type="text/babel">
	//创建组件
	class Demo extends React.Component{
		state = {isHot:true}
		getId = (c)=>{
			this.input1 = c;
			console.log("@",c)
		}
		showDate = ()=>{
			const {input1} = this
			alert(input1.value)
		}
		changeWeather = ()=>{
			const {isHot} = this.state;
			this.setState({isHot:!isHot});
		}
		
		render(){
			const {isHot} = this.state
			return(
				<div>
					<h1>今天天气很{isHot ? '炎热':'凉爽'}</h1>
					{/*<input ref={(c)=>{this.input1 = c;console.log('@',c);}} type="text"/>*/}
					{/*上方为内联形式，每次执行两次，下方为定义为class的绑定*/}
					<input ref={this.getId} type="text" placeholder="点击按钮提示输入的信息"/>
					<button onClick={this.showDate}>点击按钮提示输入的信息</button>
					<button onClick={this.changeWeather}>点击按钮改变天气</button>
				</div>
			)
		}
	}
	//渲染组件到页面
	ReactDOM.render(<Demo/>,document.getElementById('test'))
</script>
```

### 3.3.3 createRef 创建 ref 容器

```javascript
<script type="text/babel">
	//创建组件
	class Demo extends React.Component{
		/* 
			React.createRef调用后可以返回一个容器，该容器可以存储被ref所标识的节点,该容器是“专人专用”的，只有一个
		 */
		myRef = React.createRef()
		myRef2 = React.createRef()
		//展示左侧输入框的数据
		showData = ()=>{
			alert(this.myRef.current.value);
		}
		//展示右侧输入框的数据
		showData2 = ()=>{
			alert(this.myRef2.current.value);
		}
		render(){
			return(
				<div>
					<input ref={this.myRef} type="text" placeholder="点击按钮提示数据"/>&nbsp;
					<button onClick={this.showData}>点我提示左侧的数据</button>&nbsp;
					<input onBlur={this.showData2} ref={this.myRef2} type="text" placeholder="失去焦点提示数据"/>&nbsp;
				</div>
			)
		}
	}
	//渲染组件到页面
	ReactDOM.render(<Demo a="1" b="2"/>,document.getElementById('test'))
</script>
```

## 3.4 react中事件处理

```javascript
<script type="text/babel">
	//创建组件
	class Demo extends React.Component{
		/* 
			(1).通过onXxx属性指定事件处理函数(注意大小写)
					a.React使用的是自定义(合成)事件, 而不是使用的原生DOM事件 —————— 为了更好的兼容性
					b.React中的事件是通过事件委托方式处理的(委托给组件最外层的元素) ————————为了的高效
			(2).通过event.target得到发生事件的DOM元素对象 ——————————不要过度使用ref
		 */
		//创建ref容器
		myRef = React.createRef()
		myRef2 = React.createRef()
		//展示左侧输入框的数据
		showData = ()=>{
			alert(this.myRef.current.value);
		}
		//展示右侧输入框的数据
		showData2 = (event)=>{
			alert(event.target.value);
		}
		render(){
			return(
				<div>
					<input ref={this.myRef} type="text" placeholder="点击按钮提示数据"/>&nbsp;
					<button onClick={this.showData}>点我提示左侧的数据</button>&nbsp;
					<input onBlur={this.showData2} type="text" placeholder="失去焦点提示数据"/>&nbsp;
				</div>
			)
		}
	}
	//渲染组件到页面
	ReactDOM.render(<Demo a="1" b="2"/>,document.getElementById('test'))
</script>
```

# 四、组件生命周期

1. 组件从创建到死亡它会经历一些特定的阶段。
2. React 组件中包含一系列勾子函数(生命周期回调函数), 会在特定的时刻调用。 
3. 我们在定义组件时，会在特定的生命周期回调函数中，做特定的工作

## 4.1 生命周期流程图-旧

![](https://raw.githubusercontent.com/luckilypop/WebFront/main/react/202208032053039.png)

### 4.1.1 初始化阶段

1. 由ReactDOM.render()触发---初次渲染
2. constructor()
3. componentWillMount()
4. render()
5. componentDidMount() =====> 一般在这个钩子中做一些初始化的事，例如：开启定时器、发送网络请求、订阅消息

### 4.1.2  更新阶段

1. 由组件内部this.setSate()或父组件render触发
2. shouldComponentUpdate()
3. componentWillUpdate()
4. render() =====> 必须使用的一个
5. componentDidUpdate()

### 4.1.3 卸载组件

1. 由ReactDOM.unmountComponentAtNode()触发
2. componentWillUnmount()  =====> 一般在这个钩子中做一些收尾的事，例如：关闭定时器、取消订阅消息

### 4.1.4 代码

```
class Demo extends React.Component{
	state = {sum:0}
	death = ()=>{
		ReactDOM.unmountComponentAtNode(document.getElementById('text'))
	}
	add = ()=>{
		let {sum} = this.state;
		sum += 1;
		this.setState({sum:sum});
	}
	force = ()=>{
		this.forceUpdate()
	}
	constructor(props){
		super(props);
		console.log("constructor");
	}
	componentWillMount(){
		console.log("componentWillmount");
	}
	render(){
		console.log("render");
		return (
			<div>
				<h1 >当前求和：{this.state.sum}</h1>
				<button onClick={this.add}>点击+1</button>	
				<button onClick={this.death}>点击卸载组件</button>	
				<button onClick={this.force}>不更改任何状态中的数据，强制更新组件</button>				
			</div>
		)
	}
	componentDidMount(){
		console.log("componentDidMount");
	}
	componentWillUnmount(){
		console.log("componentWillUnmount");
	}
	shouldComponentUpdate(){
		console.log("shouldComponentUpdate");
		return true
	}
	componentWillUpdate(){
		console.log("componentWillUpdate");
	}
	componentDidUpdate(){
		console.log("componentDidUpdate");
	}
}
ReactDOM.render(<Demo/>, document.getElementById('text'))
```

### 4.1.5 组件继承

```
class A extends React.Component{
	changeName = ()=>{
		const {brand} = this.state
		this.setState({brand:'奔驰'})
	}
	constructor(props){
		console.log("A:constructor");
		super(props);
		this.state ={brand:'宝马'}
	}
	render(){
		console.log("A:render");
		return(
			<div>
				<h1>我是A组件</h1>
				<button onClick={this.changeName}>点击换车</button>
				{/* 向B中传入props */}
				<B brand={this.state.brand}/>
			</div>
		)
	}
	componentWillMount(){
		console.log("A:componentWillmount");
	}
	componentDidMount(){
		console.log("A:componentDidMount");
	}
	componentWillUnmount(){
		console.log("A:componentWillUnmount");
	}
	shouldComponentUpdate(){
		console.log("A:shouldComponentUpdate");
		return true
	}
	componentWillUpdate(){
		console.log("A:componentWillUpdate");
	}
	componentDidUpdate(){
		console.log("A:componentDidUpdate");
	}
}
		
class B extends React.Component{
	render(){
		console.log("B:render");
		const {brand} = this.props
		return(
			<div>
				<h1>我是B组件,我可以得到我父组件A的车品牌</h1>
				<h1>我现在是{brand}</h1>
			</div>
		)
	}
	constructor(props){
		console.log("B:constructor");
		super(props);
	}
	componentWillReceiveProps(){
		console.log("B:componentWillReceiveProps");
	}
	componentWillMount(){
		console.log("B:componentWillmount");
	}
	componentDidMount(){
		console.log("B:componentDidMount");
	}
	componentWillUnmount(){
		console.log("B:componentWillUnmount");
	}
	shouldComponentUpdate(){
		console.log("B:shouldComponentUpdate");
		return true
	}
	componentWillUpdate(){
		console.log("B:componentWillUpdate");
	}
	componentDidUpdate(){
		console.log("B:componentDidUpdate");
	}	
}
ReactDOM.render(<A/>, document.getElementById('text'))
```

## 4.2 生命周期流程图-新

![](https://raw.githubusercontent.com/luckilypop/WebFront/main/react/202208032054792.png)

### 4.2.1 初始化阶段

1. 由ReactDOM.render()触发---初次渲染
2. constructor()
3. getDerivedStateFromProps 
4. render()
5. componentDidMount() =====> 一般在这个钩子中做一些初始化的事，例如：开启定时器、发送网络请求、订阅消息

### 4.2.2  更新阶段

1. 由组件内部this.setSate()或父组件render触发
2. getDerivedStateFromProps
3. shouldComponentUpdate()
4. render() =====> 必须使用的一个
5. getSnapshotBeforeUpdate
6. componentDidUpdate()

4.1.3 卸载组件

1. 由ReactDOM.unmountComponentAtNode()触发
2. componentWillUnmount()  =====> 一般在这个钩子中做一些收尾的事，例如：关闭定时器、取消订阅消息

### 4.2.3 代码

# 五、DOM的Diffing算法

1. react/vue中的key有什么作用？（key的内部原理是什么？）
2. 为什么遍历列表时，key最好不要用index?

## 5.1 虚拟DOM中key的作用

1. 简单的说: key是虚拟DOM对象的标识, 在更新显示时key起着极其重要的作用。
2. 详细的说: 当状态中的数据发生变化时，react会根据【新数据】生成【新的虚拟DOM】,随后React进行【新虚拟DOM】与【旧虚拟DOM】的diff比较；
3. 比较规则：
   - 旧虚拟DOM中找到了与新虚拟DOM相同的key：
     - 若虚拟DOM中内容没变, 直接使用之前的真实DOM；
     - 若虚拟DOM中内容变了, 则生成新的真实DOM，随后替换掉页面中之前的真实DOM
   - 旧虚拟DOM中未找到与新虚拟DOM相同的key：
     - 根据数据创建新的真实DOM，随后渲染到到页面

## 5.2 用index作为key可能会引发的问题

1. 若对数据进行：
   - 逆序添加、逆序删除等破坏顺序操作:会产生没有必要的真实DOM更新 ==> 界面效果没问题, 但效率低。
2. 如果结构中还包含输入类的DOM：
   - 会产生错误DOM更新 ==> 界面有问题。

## 5.3 开发中如何选择key

1. 最好使用每条数据的唯一标识作为key, 比如id、手机号、身份证号、学号等唯一值。
2. 如果确定只是简单的展示数据，用index也是可以的。

# 六、补充知识？

## 6.1 受控组件

```
//创建组件
class Login extends React.Component{
	handleSubmit = (event)=>{
		event.preventDefault() //阻止表单提交
		const {username,password} = this
		alert(`你输入的用户名是：${username.value},你输入的密码是：${password.value}`)
	}
	render(){
		return(
			<form onSubmit={this.handleSubmit}>
				用户名：<input ref={c => this.username = c} type="text" name="username"/>
				密码：<input ref={c => this.password = c} type="password" name="password"/>
				<button>登录</button>
			</form>
		)
	}
}
//渲染组件
ReactDOM.render(<Login/>,document.getElementById('test'))
```

## 6.2 非受控组件

```
class Login extends React.Component{
	//初始化状态
	state = {
		username:'', //用户名
		password:'' //密码
	}
	//保存用户名到状态中
	saveUsername = (event)=>{
		this.setState({username:event.target.value})
	}
	//保存密码到状态中
	savePassword = (event)=>{
		this.setState({password:event.target.value})
	}
	//表单提交的回调
	handleSubmit = (event)=>{
		event.preventDefault() //阻止表单提交
		const {username,password} = this.state
		alert(`你输入的用户名是：${username},你输入的密码是：${password}`)
	}
	render(){
		return(
			<form onSubmit={this.handleSubmit}>
				用户名：<input onChange={this.saveUsername} type="text" name="username"/>
				密码：<input onChange={this.savePassword} type="password" name="password"/>
				<button>登录</button>
			</form>
		)
	}
}
//渲染组件
ReactDOM.render(<Login/>,document.getElementById('test'))
```

## 6.3 高阶函数 

1. 高阶函数：如果一个函数符合下面2个规范中的任何一个，那该函数就是高阶函数。
   1. 若A函数，接收的参数是一个函数，那么A就可以称之为高阶函数。
   2. 若A函数，调用的返回值依然是一个函数，那么A就可以称之为高阶函数。
   3. 常见的高阶函数有：Promise、setTimeout、arr.map()等等

## 6.4 函数柯里化

1. 函数的柯里化：通过函数调用继续返回函数的方式，实现多次接收参数最后统一处理的函数编码形式。 

   ```
   	function sum(a){
   		return(b)=>{
   			return (c)=>{
   				return a+b+c
   			}
   		}
   	}
   ```

```
class Login extends React.Component{
	//初始化状态
	state = {
		username:'', //用户名
		password:'' //密码
	}
	//保存表单数据到状态中
	saveFormData = (dataType)=>{
		return (event)=>{
			this.setState({[dataType]:event.target.value})
		}
	}
	//表单提交的回调
	handleSubmit = (event)=>{
		event.preventDefault() //阻止表单提交
		const {username,password} = this.state
		alert(`你输入的用户名是：${username},你输入的密码是：${password}`)
	}
	render(){
		return(
			<form onSubmit={this.handleSubmit}>
				用户名：<input onChange={this.saveFormData('username')} type="text" name="username"/>
				密码：<input onChange={this.saveFormData('password')} type="password" name="password"/>
				<button>登录</button>
			</form>
		)
	}
}
//渲染组件
ReactDOM.render(<Login/>,document.getElementById('test'))
```

## 6.5 不用函数柯里化实现

```
class Login extends React.Component{
	//初始化状态
	state = {
		username:'', //用户名
		password:'' //密码
	}
	//保存表单数据到状态中
	saveFormData = (dataType,event)=>{
		this.setState({[dataType]:event.target.value})
	}
	//表单提交的回调
	handleSubmit = (event)=>{
		event.preventDefault() //阻止表单提交
		const {username,password} = this.state
		alert(`你输入的用户名是：${username},你输入的密码是：${password}`)
	}
	render(){
		return(
			<form onSubmit={this.handleSubmit}>
				用户名：<input onChange={event => this.saveFormData('username',event) } type="text" name="username"/>
				密码：<input onChange={event => this.saveFormData('password',event) } type="password" name="password"/>
				<button>登录</button>
			</form>
		)
	}
}
//渲染组件
ReactDOM.render(<Login/>,document.getElementById('test'))
```

