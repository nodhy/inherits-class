'use strict';

const _excludeKeys = [
  'constructor',
];

const _editDesc = (desc) => {
  // editable descriptor here.
  return desc;
};

const _implement = (Base, Cls) => {
  const ep = typeof Cls === 'function' ? Cls.prototype: Cls;
  for (const k of Reflect.ownKeys(ep)) {
    if (_excludeKeys.indexOf(k) > -1) continue;
    Object.defineProperty(
      Base.prototype,
      k,
      _editDesc(Object.getOwnPropertyDescriptor(ep, k))
    );
  }
};

/**
 * inherits multipule "class's function"
 * @param  {...Object} clss class or Object
 * @return {Object} inherited class
 */
const inherits = (...clss) => {
  let bCls = class{};
  clss.map((cls)=>{
    _implement(bCls, cls);
  });
  return bCls;
};

export default inherits;
