const K6StorageSchema = {
  K6routeType: 'K6routeType',
};

const clear = () => {
  Object.values(K6StorageSchema).forEach((field) => {
    sessionStorage.removeItem(field);
  });
};

const getValue = function (this: any) {
  return sessionStorage.getItem(this.name);
};

const setValue = function (this: any, value: string) {
  sessionStorage.setItem(this.name, value);
};

const removeValue = function (this: any) {
  sessionStorage.removeItem(this.name);
};

const mergeItemFunc = (obj: { name: string }) => ({
  ...obj,
  getValue: getValue.bind(obj),
  setValue: setValue.bind(obj),
  removeValue: removeValue.bind(obj),
});

const B3StorageFields = Object.entries(K6StorageSchema).reduce(
  (result: any, [key, value]) => {
    result[key] = mergeItemFunc({
      name: value,
    });

    return result;
  },
  {}
);

export default {
  clear,
  ...B3StorageFields,
};
