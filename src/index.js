import MAP from './data';

export  class LangCode {

  static getLanguageName(code) {

    return this.validateLanguageCode(code) ? MAP[code].name : '';
  }

  static getLanguageNativeName(code) {

    return this.validateLanguageCode(code) ? MAP[code].native : '';

  }

  static validateLanguageCode(code) {

    return MAP.hasOwnProperty(code);
  }
}