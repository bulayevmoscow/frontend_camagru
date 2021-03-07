// https://www.youtube.com/watch?v=eSaF8NXeNsA&ab_channel=%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BB%D0%B5%D0%BD%D0%9C%D0%B8%D0%BD%D0%B8%D0%BD

let data = {
  firstName: 'John',
  lastName: 'Show',
  age: 25
};

function makeReactiveProperty(obj, key) {
  let val = obj[key];
  Object.defineProperty(obj, key, {
    get() {
      console.log('getter');
      return val;
    },
    set(newVal) {
      val = newVal;
      console.log('change to ' + 2);
    }
  });
}

function observeData(obj) {
  Object.keys(obj)
    .forEach((key) => {
      makeReactiveProperty(obj, key);
    });
}

observeData(data);
data.age++;

const objectCopy = {
  firstName: 'John',
  lastName: 'Show',
  age: 25
};

const proxy = new Proxy(objectCopy, {
  set(target, prop, val){
    console.log('change proxy', target, prop, val)
    target[prop] = val;
    return true
  }
})

Proxy.age = 2;

console.log(objectCopy.age)
