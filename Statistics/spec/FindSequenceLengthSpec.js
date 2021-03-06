var findSequenceLength = require("../src/FindSequenceLength.js")

describe("findSequenceLength", function () {

	it("see if it works", function () {
		expect(true).toBe(true);
	});

	it ("should return 1 when given 3", function () {
		expect(findSequenceLength([3])).toEqual(1);
	});

	it ("should return 6 when given [4,2,6]", function () {
		expect(findSequenceLength([4,2,6])).toEqual(3);
	});

	it ("should return 18 when given [3,18,-7,9]", function () {
		expect(findSequenceLength([3,18,-7,9])).toEqual(4);
	});
});
