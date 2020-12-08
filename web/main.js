import '../lib/index.js'
import { COM, Time } from './components.js'
let prop = {
	btnOK: ['主描述', '次描述', '次描述'],
	title: '标题建议单行不超过两行标题建议单行不超过',
	content: '告知当前状态、信息以及解决方案，两行时文字居中显示。',
	tips: '备注描述',
	mainBtnIndex: 1,
	imgUrl: 'https://www.baidu.com/img/flexible/logo/pc/result@2.png',
	btnCallBack: [() => { this.onShowAlert() }, () => { }, () => { }],
	onClose: () => { },
}
let C = COM(prop)



const rootDom = document.getElementById("root");

function tick() {
	ReactDOM.render(Time(), rootDom);
	// render(Time, rootDom);
}

setInterval(() => tick(), 1000);


