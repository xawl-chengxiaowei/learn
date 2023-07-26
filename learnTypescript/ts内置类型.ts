// 常见的类型体操
// 1.partial  必选变可选
interface IObj {
  name?: string,
  age?: number
}

type XWObjType = Partial<IObj>
const obj2: XWObjType = {}

// 2.Required 可选变必选
const obj3: Required<IObj> = {
  name: "cxw",
  age: 23
}

// 3.readonly 所有的属性都是只读属性
const readObj: Readonly<IObj> = {
  name: "123"
}
// readObj.name = 123  无法为这个赋值

// 4.Record 将一个类型映射到另一个类型,并为映射结果中的每个属性设置相同的值类型.
type personType = {
  name: string,
  age: number
}
type personRecordType = Record<"persion1" | "person2", personType>

// 5. pick 从指定的类型中选择出需要的类型.
type pickType = Pick<personType, "name">

// 6.Omit 省略某些类型 -----> 这是针对的是对象类型
type omitType = Omit<personType, "name">

// 7. Exclude 排除某些类型 ---> 这是只对联合类型进行排除
type Colors = 'red' | 'green' | 'blue' | 'yellow';
type PrimaryColors = Exclude<Colors, 'green' | 'yellow'>;

// 8. Extract 从联合类型中提取到符合类型的类型成员.
type extractType = Extract<Colors, "red" | "blue">

// 9.Parameters 获取函数的参数类型所组成的元组类型.
type fooType = (a: number, b: string) => string
type parameter = Parameters<fooType>

// 10.ReturnType 获取函数的返回值类型.
type returnType = ReturnType<fooType>

// 11. NonNullable 从指定的类型中排除 null 和 undefined
// type uniteType = string | number | null | undefined;
type uniteType = {
  name: string,
  age: 123,
  habby: null,
  address: undefined
} | null | undefined

type nonNullableType = NonNullable<uniteType>

// 12. InstanceType 获取构造函数的实例类型.
class Person { }

class Dog { }

const p1: Person = new Person()

type instanceType = InstanceType<typeof Person>
const p2: instanceType = new Person()

// 
/**
 * 大多数场景可以直接使用类名作为构造函数的类型, 但是通过InstanceType 
 * 我们能够更准确地处理构造函数的实例类型，并在泛型函数中进行类型操作、推断和约束，
 * 从而提供更大的灵活性和可读性.
 */


class PersonDemo {
  constructor(public name: string) { }
}

/**
 *  new (...args: any[]) => any 是一个构造函数类型的签名，
 * 它表示一个可以接受任意数量和类型参数的构造函数类型，并且返回任意类型的实例。
 */

function createInstance<T extends new (...args: any[]) => any>(Constructor: T): InstanceType<T> {
  return new Constructor();
}

const persondemo = createInstance(PersonDemo);
console.log(persondemo instanceof PersonDemo); // Output: true
console.log(persondemo.name); // Output: undefined

