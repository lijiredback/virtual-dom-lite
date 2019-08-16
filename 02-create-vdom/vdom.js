// 是一个 HTML 标签，还是一个 TEXT 文本？
const flagType = {
    HTML: 'HTML',
    TEXT: 'TEXT'
};

// 是空？是文本？依旧有子节点？
const childrenType = {
    EMPTY: 'EMPTY',
    SINGLE: 'SINGLE',
    MULTIPLE: 'MULTIPLE'
}


function createVdom(tag, data, children) {
    let flag;
    if (typeof tag === 'string') {
        // HTML 标签
        flag = flagType.HTML;
    } else {
        flag = flagType.TEXT;
    }

    let childrenFlag;
    if (children === null) {
        childrenFlag = childrenType.EMPTY
    } else if (Array.isArray(children)) {
        let length = children.length;
        if (length === 0) childrenFlag = childrenType.EMPTY
        childrenFlag = childrenType.MULTIPLE;
    } else {
        // 文本
        childrenFlag = childrenType.SINGLE;
        children = createTextNode();
    }




    // 最后需要 return 一个 vnode 对象
    return {
        flag, // 用来标记 tag 的类型，标签？文本？
        tag,
        data,
        children,
        childrenFlag, // 用来标记孩子的类型
    }
}

function createTextNode() {
    return {
        tag: null,
        data: null,
        children: null,
        childrenFlag: childrenType.SINGLE
    };
}