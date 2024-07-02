import test from 'tape';
import {chunkArrayInGroups} from '../src';

// TESTS
test('-------- Test 1', (assert) => {
    const expected = [["a", "b"], ["c", "d"]];
    const message  = `chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]]`;

    const actual = chunkArrayInGroups(["a", "b", "c", "d"], 2)

    assert.deepEquals(actual, expected, message);
    assert.end();
});

test('-------- Test 2', (assert) => {
    const expected = [[0, 1, 2], [3, 4, 5]];
    const message  = `chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]]`;

    const actual = chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);

    assert.deepEquals(actual, expected, message);
    assert.end();
});

test('-------- Test 3', (assert) => {
    const expected = [[0, 1], [2, 3], [4, 5]];
    const message  = `chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]]`;

    const actual = chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);

    assert.deepEquals(actual, expected, message);
    assert.end();
});

test('-------- Test 4', (assert) => {
    const expected = [[0, 1, 2, 3], [4, 5]];
    const message  = `chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]]`;

    const actual = chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);

    assert.deepEquals(actual, expected, message);
    assert.end();
});

test('-------- Test 5', (assert) => {
    const expected = [[0, 1, 2], [3, 4, 5], [6]];
    const message  = `chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]]`;

    const actual = chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);

    assert.deepEquals(actual, expected, message);
    assert.end();
});

test('-------- Test 6', (assert) => {
    const expected = [[0, 1, 2, 3], [4, 5, 6, 7], [8]];
    const message  = `chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]]`;

    const actual = chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);

    assert.deepEquals(actual, expected, message);
    assert.end();
});

test('-------- Test 7', (assert) => {
    const expected = [[0, 1], [2, 3], [4, 5], [6, 7], [8]];
    const message  = `chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]]`;

    const actual = chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);

    assert.deepEquals(actual, expected, message);
    assert.end();
});