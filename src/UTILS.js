const UTILS_getRandomNum = () => Math.floor(Math.random() * (1000000 - 50)) + 50;

/* emulation deep copy Object or Array */
const UTILS_deepCopy = data => JSON.parse(JSON.stringify(data));

export {
	UTILS_getRandomNum,
	UTILS_deepCopy
};
