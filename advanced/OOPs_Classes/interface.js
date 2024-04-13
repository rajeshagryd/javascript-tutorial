const MyInterface = {
	method1: function () { },
	method2: function (param1, param2) { },
};
class MyClass {
	method1() { console.log("Method 1 called"); }
	method2(param1, param2) {
		console.log(`Method 2 called with ${param1} and ${param2}`);
	}
}

function implementsInterface(obj, interfaceObj) {
	for (const method in interfaceObj) {
		if (!(method in obj) || typeof obj[method] !== "function") {
			return false;
		}
	}
	return true;
}

const myObject = new MyClass();
myObject.method1()

if (implementsInterface(myObject, MyInterface)) {
	console.log("myObject implements MyInterface");
} else {
	console.log("myObject does not implement MyInterface");
}
