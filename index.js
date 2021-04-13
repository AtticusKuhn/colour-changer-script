
const generateColor = () => `#${[...Array(6)].map(() => Math.floor(Math.random() * 16).toString(16)).join('')}`
const genRBG = () => Math.floor(Math.random() * (257));
// const incr = () => Math.floor(Math.random() * ()) - 1;
function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

const step = (num) => randomNumber(
    Math.max(0, num - 5),
    Math.min(256, num + 5))
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function handleTransititon(node) {
    let r = genRBG()
    let g = genRBG()
    let b = genRBG()
    let r2 = genRBG()
    let g2 = genRBG()
    let b2 = genRBG()
    for (let i = 0; i < 10000; i++) {
        await sleep(10)
        node.style.backgroundColor = `rgb(${r}, ${b}, ${g})`
        node.style.color = `rbg(${r2},${b2},${g2})`
        r =step(r)
        b =step(b)
        g =step(g)
        r2=step(r2)
        b2=step(b2)
        g2=step(g2)
    }
}
function main() {
    document.querySelectorAll('*').forEach(handleTransititon);
}
main()
