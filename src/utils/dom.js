export function createElement(tag, className) {
    let domOfTag = document.createElement(tag);
    domOfTag.className = className ? className : '';
    return domOfTag;
}

export function appendChild(son) {
    return document.body.appendChild(son);
}