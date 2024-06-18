var Employee = /** @class */ (function () {
    //   private _empName: string;
    //   private _age: number;
    //   private _empJob: string;
    function Employee(_empName, _age, _empJob) {
        var _this = this;
        this._empName = _empName;
        this._age = _age;
        this._empJob = _empJob;
        this.printEmp = function () {
            console.log(_this._empName +
                '의 나이는 ' +
                _this._age +
                '이고, 직업은 ' +
                _this._empJob +
                '입니다.');
        };
    }
    Object.defineProperty(Employee.prototype, "empName", {
        // getter
        get: function () {
            return this._empName;
        },
        // setter
        set: function (val) {
            this._empName = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (val) {
            this._age = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "empJob", {
        get: function () {
            return this._empJob;
        },
        set: function (val) {
            this._empJob = val;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
var e1 = new Employee('kim', 20, '개발자');
e1.printEmp();
e1.empName = 'choi';
e1.age = 28;
e1.empJob = '무직';
e1.printEmp();
