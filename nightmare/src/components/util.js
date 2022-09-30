import { message } from 'antd';

export const DataType = {
  U8: 0,
  U16: 1,
  U32: 2,
  S8: 3,
  S16: 4,
  S32: 5,
  TEXT: 6,
  HEXA: 7,
};

export const DataRange = [
  [0, 255], // U8
  [0, 65535], // U16
  [0, 4294967295], // U32
  [-128, 127], // S8
  [-32768, 32767], // S16
  [-2147483648, 2147483647], // S32
];

export const DataLength = [
  1,
  2,
  4,
  1,
  2,
  4,
];

export function read(view, offset, type, length = 0) {
  if (view === null) {
    return undefined;
  }

  let result = '';
  switch (type) {
    case DataType.U8:
      return view.getUint8(offset);
    case DataType.U16:
      return view.getUint16(offset, true);
    case DataType.U32:
      return view.getUint32(offset, true);
    case DataType.S8:
      return view.getInt8(offset);
    case DataType.S16:
      return view.getInt16(offset, true);
    case DataType.S32:
      return view.getInt32(offset, true);
    case DataType.TEXT:
      for (let i = 0; i < length; i += 1) {
        const code = view.getUint8(offset + i);
        if (code === 0) {
          return result;
        }
        result += String.fromCharCode(code);
      }
      return result;
    case DataType.HEXA:
      for (let i = 0; i < length; i += 1) {
        let code = view.getUint8(offset + i).toString(16);
        if (code.length === 1) {
          code = `0${code}`;
        }
        result += ` ${code}`;
      }
      return result.trim();
    default:
      return undefined;
  }
}

export function write(view, offset, type, value) {
  if (view === null) {
    return;
  }

  switch (type) {
    case DataType.U8:
      view.setUint8(offset, value);
      break;
    case DataType.U16:
      view.setUint16(offset, value, true);
      break;
    case DataType.U32:
      view.setUint32(offset, value, true);
      break;
    case DataType.S8:
      view.setInt8(offset, value);
      break;
    case DataType.S16:
      view.setInt16(offset, value, true);
      break;
    case DataType.S32:
      view.setInt32(offset, value, true);
      break;
    case DataType.TEXT:
      for (let i = 0; i < value.length; i += 1) {
        view.setUint8(offset + i, value.charCodeAt(i));
      }
      view.setUint8(offset + value.length, 0);
      break;
    case DataType.HEXA:
      for (let i = 0; i < value.split(' ').length; i += 1) {
        view.setUint8(offset + i, parseInt(value.split(' ')[i], 16));
      }
      break;
    default:
      message.error(`unknown data type: ${type}`);
      break;
  }

  message.success('data written successfully');
}

export function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
