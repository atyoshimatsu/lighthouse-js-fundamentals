for (let i = 100; i <= 200; i += 1) {
    if (i % 12 === 0) {
        console.log('LoopyLighthouse');
    } else if (i % 4 === 0) {
        console.log('Lighthouse');
    } else if (i % 3 === 0) {
        console.log('Loopy');
    } else {
        console.log(i);
    }
}