function random() {
    return {
        r: Math.floor(Math.random() * 256),
        g: Math.floor(Math.random() * 256),
        b: Math.floor(Math.random() * 256)
    }
}

export function rgb() {
    let {
        r,
        g,
        b
    } = random();
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}

export function hex() {
    let {
        r,
        g,
        b
    } = random();
    return '#' + r.toString(16) + g.toString(16) + b.toString(16);
}