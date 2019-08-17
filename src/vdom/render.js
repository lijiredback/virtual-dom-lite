// vnode = {
//     "tagName": "div",
//     "attrs": {
//          "id": "app"
//     },
//     "children": [
//          {
//               "tagName": "img",
//               "attrs": {
//                    "src": "https://media.giphy.com/media/cuPm4p4pClZVC/giphy.gif"
//               },
//               "children": []
//          }
//     ]
// }

// 递归思想！！！

const renderElem = ({tagName, attrs, children}) => {
    // 创建元素
    const $el = document.createElement(tagName);

    // 给元素添加属性
    for(const [key, value] of Object.entries(attrs)) {
        $el.setAttribute(key, value);
    }

    // 处理子元素
    for(const child of children) {
        $el.appendChild(render(child));
    }

    // 返回
    return $el;
}

const render = (vNode) => {
    if (typeof vNode === 'string') {
        return document.createTextNode(vNode);
    }

    return renderElem(vNode);
};

export default render;