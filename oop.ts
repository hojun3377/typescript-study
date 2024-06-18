class Employee {
  //   private _empName: string;
  //   private _age: number;
  //   private _empJob: string;

  constructor(
    private _empName: string,
    private _age?: number | undefined,
    private _empJob?: string | undefined
  ) {}

  // getter
  get empName(): string {
    return this._empName;
  }
  get age(): number | undefined {
    return this._age;
  }
  get empJob(): string | undefined {
    return this._empJob;
  }

  // setter
  set empName(val: string) {
    this._empName = val;
  }
  set age(val: number) {
    this._age = val;
  }
  set empJob(val: string) {
    this._empJob = val;
  }

  printEmp = (): void => {
    console.log(
      this._empName +
        '의 나이는 ' +
        this._age +
        '이고, 직업은 ' +
        this._empJob +
        '입니다.'
    );
  };
}

const e1 = new Employee('kim', 20, '개발자');

e1.printEmp();

e1.empName = 'choi';
e1.age = 28;
e1.empJob = '무직';

e1.printEmp();
