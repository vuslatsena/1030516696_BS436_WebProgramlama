import { } from "../src/script";

test('Geçersiz kartlar', () => {
    expect(() => { click1() }).toThrow();
    expect(() => { click2() }).toThrow();
    expect(() => { click3() }).toThrow();
});

test("", () => {
    const click1 = click1();
    const click2 = click2();
    const click3 = click3();

    expect(click1).toBeDefined();
    expect(click2).toBeDefined();
    expect(click3).toBeDefined();
});

test("Çoklu kart seçimi testi", () => {

    for (let i = 0; i < 1000; i++) {
        const quizzes = getRandomQuizzes(2);

        expect(quizzes.length).toBe(2);
        expect(quizzes[0].question).not.toBe(quizzes[1].question);
    }
});