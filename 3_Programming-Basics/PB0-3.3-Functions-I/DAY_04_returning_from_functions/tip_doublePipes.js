// let status = 'online';
// let status = '';
// let status = undefined;
// let status = null;
// let status = 55;
// let status = false;
// let status = NaN;
// let status = [23,34,23];
// let status = [];
// let status = { status: 'online', requests: 2343 };
let status = {};

status = status || 'unknown'; // if status is falsy, then status = 'unknown', otherwise it keeps its value

console.log(status);

// MORE INFO: 
// https://stackoverflow.com/questions/2802055/what-does-the-construct-x-x-y-mean
// - in JavaScript, you can use the || operator with values that are not booleans
// - was the old way to define default values for function arguments

function getAccessRights(accessGroup = 'none') {
	// accessGroup = accessGroup || 'none';
	switch (accessGroup) {
		case 'admin':
			return 'hasAccess';
		case 'member':
			return 'minimumAccess';
		case 'nonmember':
			return 'homePageAccess';
		case 'none':
			return 'ERROR: no access group given';
		default:
			return `ERROR: bad group "${accessGroup}"`;
	}
}

// console.log(getAccessRights('admin'));
// console.log(getAccessRights('member'));
// console.log(getAccessRights('nonmember'));
// console.log(getAccessRights('nonExistentGroup'));
console.log(getAccessRights());
