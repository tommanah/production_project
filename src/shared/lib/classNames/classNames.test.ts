import { classNames } from "./classNames";

describe('classNames', () => {
    test('test with only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    })
    test('with additional class', () => {
        const exp = 'someClass class1 class2'
        expect(classNames('someClass',{}, ['class1', 'class2'])).toBe(exp);
    })
    test('with mods', () => {
        const exp = 'someClass class1 class2 hovered scrollable'
        expect(classNames('someClass',{hovered: true, scrollable: true}, ['class1', 'class2'])).toBe(exp);
    })
    test('with mod undefined', () => {
        const exp = 'someClass class1 class2 hovered'
        expect(classNames('someClass',{hovered: true, scrollable: undefined}, ['class1', 'class2'])).toBe(exp);
    })
})