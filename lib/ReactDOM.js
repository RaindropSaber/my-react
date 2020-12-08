import { jsx2css } from './css2jsx.js'
function render(element, parentDom) {
	const { type, props } = element;

	// Create DOM element
	const isTextElement = type === "TEXT ELEMENT"; // 文本类型判定
	const dom = isTextElement
		? document.createTextNode("")
		: document.createElement(type);

	// Add event listeners
	const isListener = name => name.startsWith("on");
	Object.keys(props).filter(isListener).forEach(name => {
		const eventType = name.toLowerCase().substring(2);
		dom.addEventListener(eventType, props[name]);
	});

	// Set properties
	const isAttribute = name => !isListener(name) && name != "children";
	Object.keys(props).filter(isAttribute).forEach(name => {
		dom[name] = name === 'style' ? jsx2css(props[name]) : props[name]
	});

	// Render children
	const childElements = props.children || [];
	childElements.forEach(childElement => render(childElement, dom));

	// Append to parent
	if (!parentDom.lastChild) { // 有没有最后孩子阿
		parentDom.appendChild(dom);
	} else {
		// 换了你的孩子, 就是这么～～
		parentDom.replaceChild(dom, parentDom.lastChild);
	}

}
const ReactDOM = {
	render
}
export default ReactDOM