const render = (vNode) => {
    // 如果字符串，认为是文本节点，我们创建一个一个文本节点
    if (typeof vNode === 'string') return document.createTextNode(vNode)
    
    // 其他情况默认为元素节点

    // 创建一个元素
    const $el = document.createElement(vNode.tagName)

    // 添加虚拟 DOM 对象上所有的属性
    for (const [key, value] of Object.entries(vNode.props)) {
        $el.setAttribute(key, value)
    }

    // 如果虚拟 DOM 上有子元素，则追加(这里其实有一个递归思想)
    for (const child of vNode.children) {
        $el.appendChild(render(child))
    }

    return $el
}

export default render