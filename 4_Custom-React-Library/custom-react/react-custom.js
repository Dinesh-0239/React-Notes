renderComponent = (element,root) => {
    let ele = document.createElement(element.type);
    ele.innerHTML = element.Children;
    for(let prop in element.props)
        ele.setAttribute(prop,element.props[prop]);
    root.append(ele);
}
const element = {
    type: "a",
    props : {
        href : "https://google.com",
        target: "_blank",
    },
    Children : "Click here to open Google",
};


let root = document.querySelector('#root');

renderComponent(element,root);