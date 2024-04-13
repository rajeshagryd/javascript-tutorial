function* generator(){
    const x = 60;
    yield  `Hello, I'm a ${x} year old.`;
    yield () => "And I have a job.";
    yield 2 + 3;
}

const g = generator();
console.log(g.next()); // Hello, I'm a 60 year old.
console.log(g.next().value); // And I have a JOb.
console.log(g.next().value); // 5
