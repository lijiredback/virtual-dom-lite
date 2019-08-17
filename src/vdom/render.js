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

const render = (vNode) => {
    // 创建元素
    const $el = document.createElement(vNode.tagName);

    // 给元素添加属性
    for(const [key, value] of Object.entries(vNode.attrs)) {
        $el.setAtribute(key, value);
    }

    // 处理子元素
    for(const child of vNode.children) {
        $el.appendChild(render(child));
    }

    // 返回
    return $el;
}