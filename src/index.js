import MAP from './data';

export class LangCode {

  static getName(code) {

    return this.validateCode(code) ? MAP[code].name : '';
  }

  static getNativeName(code) {

    return this.validateCode(code) ? MAP[code].native : '';

  }

  static validateCode(code) {

    return MAP.hasOwnProperty(code);
  }
}