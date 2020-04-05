function sum(a,b) {
    return a+b;
}

test("Sum of 1 + 1 is 2", () => {
    expect(sum(1,1)).toBe(2);
})