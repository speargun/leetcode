/**
 * 深拷贝
 */

const objectProto = Object.prototype
const objectToString = objectProto.toString
const objectCreate = Object.create
const getPrototype = Object.getPrototypeOf
const hasOwnProperty = objectProto.hasOwnProperty

// 可迭代类型
const mapTag = '[object Map]'
const setTag = '[object Set]'
const arrayTag = '[object Array]'
const objectTag = '[object Object]'
const argsTag = '[object Arguments]'

// 不可迭代类型
const boolTag = '[object Boolean]'
const dateTag = '[object Date]'
const errorTag = '[object Error]'
const numberTag = '[object Number]'
const regexpTag = '[object RegExp]'
const stringTag = '[object String]'
const symbolTag = '[object Symbol]'
const funcTag = '[object Function]'
const weakMapTag = '[object WeakMap]'

// 可迭代类型
const iterableTags = {}
iterableTags[mapTag] = iterableTags[setTag] =
    iterableTags[arrayTag] = iterableTags[objectTag] =
    iterableTags[argsTag] = true

// 可拷贝类型
const cloneableTags = {}
cloneableTags[mapTag] = cloneableTags[setTag] =
    cloneableTags[arrayTag] = cloneableTags[objectTag] =
    cloneableTags[argsTag] = cloneableTags[boolTag] =
    cloneableTags[dateTag] = cloneableTags[numberTag] =
    cloneableTags[regexpTag] = cloneableTags[stringTag] =
    cloneableTags[symbolTag] = true

// 不可拷贝类型
cloneableTags[funcTag] = cloneableTags[errorTag] = cloneableTags[weakMapTag] = false

/**
 * 深拷贝入口函数
 * @param target 要进行深拷贝的目标对象
 * @returns 深拷贝完成后的对象
 */
function cloneDeep(target) {
    return baseClone(target)
}

/**
 * 
 * @param target 要进行深拷贝的目标对象
 * @param {WeakMap} map 储存已经拷贝过的对象，
 * @param parentObj `target`的父对象
 * @returns 
 */
function baseClone(target, map = new WeakMap(), parentObj) {
    // 原始类型
    if (!isObject(target)) {
        return target
    }

    // 获取类型
    const tag = getTag(target)

    // 函数、Error和WeakMap
    if (!cloneableTags[tag]) {
        return parentObj ? target : {}
    }

    // 初始化
    let cloneTarget = {}
    if (iterableTags[tag]) {
        cloneTarget = getInit(target, tag)
    } else {
        return cloneNonIterative(target, tag)
    }

    // 防止循环引用引起的栈内存溢出
    if (map.has(target)) {
        return map.get(target)
    }
    map.set(target, cloneTarget)

    // 克隆set
    if (tag === setTag) {
        target.forEach((value) => {
            cloneTarget.add(baseClone(value, map, target))
        })
        return cloneTarget
    }

    // 克隆map
    if (tag === mapTag) {
        target.forEach((value, key) => {
            cloneTarget.set(key, baseClone(value, map, target))
        })
        return cloneTarget
    }

    // 克隆数组
    if (tag === arrayTag) {
        arrayEach(target, (item, index) => {
            cloneTarget[index] = baseClone(item, map, target)
        })
        return cloneTarget
    }

    // 克隆纯对象或者参数数组
    if (tag === objectTag || tag === argsTag) {
        const keys = Object.keys(target)
        arrayEach(keys, key => {
            cloneTarget[key] = baseClone(target[key], map, target)
        })
        return cloneTarget
    }
    return cloneTarget
}

/**
 * 检查是否是对象
 * @param obj 
 * @returns 
 */
function isObject(obj) {
    return obj !== null && (typeof obj === 'object' || typeof obj === 'function')
}

/**
 * 使用`Object.prototype.toString`将一个值转换为string
 * @param target 需要转换的值
 * @returns {string} 返回转换后的值
 */
function getTag(target) {
    return objectToString.call(target)
}

/**
 * 根据被克隆对象的类型初始化克隆对象
 * @param target 被克隆的目标对象
 * @param tag 被克隆的目标对象的类型
 * @returns 初始化后的克隆对象
 */
function getInit(target, tag) {
    const Ctor = target.constructor
    switch (tag) {
        case objectTag:
        case argsTag:
            return objectCreate(getPrototype(Object(target)))
        case arrayTag:
            return initCloneArray(target)
        case mapTag:
        case setTag:
            return new Ctor
    }
}

/**
 * 初始化数组克隆
 * @param array 被克隆的数组
 * @returns 初始化后的克隆数组
 */
function initCloneArray(array) {
    const length = array.length
    const result = new Array(length)

    // Add properties assigned by `RegExp#exec`.
    if (length && typeof array[0] === 'string' && hasOwnProperty.call(array, 'index')) {
        result.index = array.index
        result.input = array.input
    }
    return result
}

/**
 * 遍历数组的工具函数
 * @param {Array} array 遍历的目标数组
 * @param {Function} fn 每次迭代调用的函数
 */
function arrayEach(array, fn) {
    for (let i = 0, len = array.length; i < len; i++) {
        fn(array[i], i)
    }
}

/**
 * 克隆不可迭代类型
 * @param target 
 * @param tag 
 * @returns 
 */
function cloneNonIterative(target, tag) {
    const Ctor = target.constructor
    switch (tag) {
        case numberTag:
        case stringTag:
            return new Ctor(target)
        case boolTag:
        case dateTag:
            return new Ctor(+target)
        case regexpTag:
            return cloneReg(target)
        case symbolTag:
            return cloneSymbol(target)
    }
}

/**
 * 克隆正则表达式
 * @param target 被克隆的正则表达式
 * @returns 克隆后的正则表达式
 */
function cloneReg(target) {
    const reFlags = /\w*$/
    const result = new target.constructor(target.source, reFlags.exec(target))
    result.lastIndex = target.lastIndex
    return result
}

/**
 * 克隆Symbol
 * @param symbol 被克隆的symbol
 * @returns 克隆后的symbol
 */
function cloneSymbol(symbol) {
    return Object(Symbol.prototype.valueOf.call(symbol))
}

const test = {
    name: 'a',
    date: new Date(),
    f: function () { console.log('abcd') }
};

let clone = cloneDeep(test);
console.log(test, clone);
console.log(clone.date.getDay());