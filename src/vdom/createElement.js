export default (tagName, { props = {}, children = [] } = {}) => {
    const vElement = Object.create(null)

    Object.assign(vElement, {
        tagName,
        props,
        children
    });
    
    return vElement;
}