const MAP = {
  af: {name: 'Afrikaans', native: ''},
  'af-ZA': {name: 'Afrikaans (South Africa)', native: ''},
  ar: {name: 'Arabic', native: ''},
  'ar-AE': {name: 'Arabic (U.A.E.)', native: ''},
  'ar-BH': {name: 'Arabic (Bahrain)', native: ''},
  'ar-DZ': {name: 'Arabic (Algeria)', native: ''},
  'ar-EG': {name: 'Arabic (Egypt)', native: ''},
  'ar-IQ': {name: 'Arabic (Iraq)', native: ''},
  'ar-JO': {name: 'Arabic (Jordan)', native: ''},
  'ar-KW': {name: 'Arabic (Kuwait)', native: ''},
  'ar-LB': {name: 'Arabic (Lebanon)', native: ''},
  'ar-LY': {name: 'Arabic (Libya)', native: ''},
  'ar-MA': {name: 'Arabic (Morocco)', native: ''},
  'ar-OM': {name: 'Arabic (Oman)', native: ''},
  'ar-QA': {name: 'Arabic (Qatar)', native: ''},
  'ar-SA': {name: 'Arabic (Saudi Arabia)', native: ''},
  'ar-SY': {name: 'Arabic (Syria)', native: ''},
  'ar-TN': {name: 'Arabic (Tunisia)', native: ''},
  'ar-YE': {name: 'Arabic (Yemen)', native: ''},
  az: {name: 'Azeri (Latin)', native: ''},
  'az-AZ': {name: 'Azeri (Latin) (Azerbaijan)', native: ''},
  'az-Cyrl-AZ': {name: 'Azeri (Cyrillic) (Azerbaijan)', native: ''},
  be: {name: 'Belarusian', native: ''},
  'be-BY': {name: 'Belarusian (Belarus)', native: ''},
  bg: {name: 'Bulgarian', native: ''},
  'bg-BG': {name: 'Bulgarian (Bulgaria)', native: ''},
  'bs-BA': {name: 'Bosnian (Bosnia and Herzegovina)', native: ''},
  ca: {name: 'Catalan', native: ''},
  'ca-ES': {name: 'Catalan (Spain)', native: ''},
  cs: {name: 'Czech', native: ''},
  'cs-CZ': {name: 'Czech (Czech Republic)', native: ''},
  cy: {name: 'Welsh', native: ''},
  'cy-GB': {name: 'Welsh (United Kingdom)', native: ''},
  da: {name: 'Danish', native: ''},
  'da-DK': {name: 'Danish(Denmark)', native: ''},
  de: {name: 'German', native: ''},
  'de-AT': {name: 'German (Austria)', native: ''},
  'de-CH': {name: 'German (Switzerland)', native: ''},
  'de-DE': {name: 'German (Germany)', native: ''},
  'de-LI': {name: 'German (Liechtenstein)', native: ''},
  'de-LU': {name: 'German (Luxembourg)', native: ''},
  dv: {name: 'Divehi', native: ''},
  'dv-MV': {name: 'Divehi (Maldives)', native: ''},
  el: {name: 'Greek', native: ''},
  'el-GR': {name: 'Greek (Greece)', native: ''},
  en: {name: 'English', native: ''},
  'en-AU': {name: 'English (Australia)', native: ''},
  'en-BZ': {name: 'English (Belize)', native: ''},
  'en-CA': {name: 'English (Canada)', native: ''},
  'en-CB': {name: 'English (Caribbean)', native: ''},
  'en-GB': {name: 'English (United Kingdom)', native: ''},
  'en-IE': {name: 'English (Ireland)', native: ''},
  'en-JM': {name: 'English (Jamaica)', native: ''},
  'en-NZ': {name: 'English (New Zealand)', native: ''},
  'en-PH': {name: 'English (Republic of the Philippines)', native: ''},
  'en-TT': {name: 'English (Trinidad and Tobago)', native: ''},
  'en-US': {name: 'English (United States)', native: ''},
  'en-ZA': {name: 'English (South Africa)', native: ''},
  'en-ZW': {name: 'English (Zimbabwe)', native: ''},
  eo: {name: 'Esperanto', native: ''},
  es: {name: 'Spanish', native: ''},
  'es-AR': {name: 'Spanish (Argentina)', native: ''},
  'es-BO': {name: 'Spanish (Bolivia)', native: ''},
  'es-CL': {name: 'Spanish (Chile)', native: ''},
  'es-CO': {name: 'Spanish (Colombia)', native: ''},
  'es-CR': {name: 'Spanish (Costa Rica)', native: ''},
  'es-DO': {name: 'Spanish (Dominican Republic)', native: ''},
  'es-EC': {name: 'Spanish (Ecuador)', native: ''},
  'es-ES': {name: 'Spanish (Spain)', native: ''},
  'es-GT': {name: 'Spanish (Guatemala)', native: ''},
  'es-HN': {name: 'Spanish (Honduras)', native: ''},
  'es-MX': {name: 'Spanish (Mexico)', native: ''},
  'es-NI': {name: 'Spanish (Nicaragua)', native: ''},
  'es-PA': {name: 'Spanish (Panama)', native: ''},
  'es-PE': {name: 'Spanish (Peru)', native: ''},
  'es-PR': {name: 'Spanish (Puerto Rico)', native: ''},
  'es-PY': {name: 'Spanish (Paraguay)', native: ''},
  'es-SV': {name: 'Spanish (El Salvador)', native: ''},
  'es-UY': {name: 'Spanish (Uruguay)', native: ''},
  'es-VE': {name: 'Spanish (Venezuela)', native: ''},
  et: {name: 'Estonian', native: ''},
  'et-EE': {name: 'Estonian (Estonia)', native: ''},
  eu: {name: 'Basque', native: ''},
  'eu-ES': {name: 'Basque (Spain)', native: ''},
  fa: {name: 'Farsi', native: ''},
  'fa-IR': {name: 'Farsi (Iran)', native: ''},
  fi: {name: 'Finnish', native: ''},
  'fi-FI': {name: 'Finnish (Finland)', native: ''},
  fo: {name: 'Faroese', native: ''},
  'fo-FO': {name: 'Faroese (Faroe Islands)', native: ''},
  fr: {name: 'French', native: ''},
  'fr-BE': {name: 'French (Belgium)', native: ''},
  'fr-CA': {name: 'French (Canada)', native: ''},
  'fr-CH': {name: 'French (Switzerland)', native: ''},
  'fr-FR': {name: 'French (France)', native: ''},
  'fr-LU': {name: 'French (Luxembourg)', native: ''},
  'fr-MC': {name: 'French (Principality of Monaco)', native: ''},
  gl: {name: 'Galician', native: ''},
  'gl-ES': {name: 'Galician (Spain)', native: ''},
  gu: {name: 'Gujarati', native: ''},
  'gu-IN': {name: 'Gujarati (India)', native: ''},
  he: {name: 'Hebrew', native: ''},
  'he-IL': {name: 'Hebrew (Israel)', native: ''},
  hi: {name: 'Hindi', native: ''},
  'hi-IN': {name: 'Hindi (India)', native: ''},
  hr: {name: 'Croatian', native: ''},
  'hr-BA': {name: 'Croatian (Bosnia and Herzegovina)', native: ''},
  'hr-HR': {name: 'Croatian (Croatia)', native: ''},
  hu: {name: 'Hungarian', native: ''},
  'hu-HU': {name: 'Hungarian (Hungary)', native: ''},
  hy: {name: 'Armenian', native: ''},
  'hy-AM': {name: 'Armenian (Armenia)', native: ''},
  id: {name: 'Indonesian', native: ''},
  'id-ID': {name: 'Indonesian (Indonesia)', native: ''},
  is: {name: 'Icelandic', native: ''},
  'is-IS': {name: 'Icelandic (Iceland)', native: ''},
  it: {name: 'Italian', native: ''},
  'it-CH': {name: 'Italian (Switzerland)', native: ''},
  'it-IT': {name: 'Italian (Italy)', native: ''},
  ja: {name: 'Japanese', native: ''},
  'ja-JP': {name: 'Japanese (Japan)', native: ''},
  ka: {name: 'Georgian', native: ''},
  'ka-GE': {name: 'Georgian (Georgia)', native: ''},
  kk: {name: 'Kazakh', native: ''},
  'kk-KZ': {name: 'Kazakh (Kazakhstan)', native: ''},
  kn: {name: 'Kannada', native: ''},
  'kn-IN': {name: 'Kannada (India)', native: ''},
  ko: {name: 'Korean', native: ''},
  'ko-KR': {name: 'Korean (Korea)', native: ''},
  kok: {name: 'Konkani', native: ''},
  'kok-IN': {name: 'Konkani (India)', native: ''},
  ky: {name: 'Kyrgyz', native: ''},
  'ky-KG': {name: 'Kyrgyz (Kyrgyzstan)', native: ''},
  lt: {name: 'Lithuanian', native: ''},
  'lt-LT': {name: 'Lithuanian (Lithuania)', native: ''},
  lv: {name: 'Latvian', native: ''},
  'lv-LV': {name: 'Latvian (Latvia)', native: ''},
  mi: {name: 'Maori', native: ''},
  'mi-NZ': {name: 'Maori (New Zealand)', native: ''},
  mk: {name: 'FYRO Macedonian', native: ''},
  'mk-MK': {
    name: 'FYRO Macedonian (Former Yugoslav Republic of Macedonia)',
    native: ''
  },
  mn: {name: 'Mongolian', native: ''},
  'mn-MN': {name: 'Mongolian (Mongolia)', native: ''},
  mr: {name: 'Marathi', native: ''},
  'mr-IN': {name: 'Marathi (India)', native: ''},
  ms: {name: 'Malay', native: ''},
  'ms-BN': {name: 'Malay (Brunei Darussalam)', native: ''},
  'ms-MY': {name: 'Malay (Malaysia)', native: ''},
  mt: {name: 'Maltese', native: ''},
  'mt-MT': {name: 'Maltese (Malta)', native: ''},
  nb: {name: 'Norwegian (Bokm?l)', native: ''},
  'nb-NO': {name: 'Norwegian (Bokm?l) (Norway)', native: ''},
  nl: {name: 'Dutch', native: ''},
  'nl-BE': {name: 'Dutch (Belgium)', native: ''},
  'nl-NL': {name: 'Dutch (Netherlands)', native: ''},
  'nn-NO': {name: 'Norwegian (Nynorsk) (Norway)', native: ''},
  ns: {name: 'Northern Sotho', native: ''},
  'ns-ZA': {name: 'Northern Sotho (South Africa)', native: ''},
  pa: {name: 'Punjabi', native: ''},
  'pa-IN': {name: 'Punjabi (India)', native: ''},
  pl: {name: 'Polish', native: ''},
  'pl-PL': {name: 'Polish (Poland)', native: ''},
  ps: {name: 'Pashto', native: ''},
  'ps-AR': {name: 'Pashto (Afghanistan)', native: ''},
  pt: {name: 'Portuguese', native: ''},
  'pt-BR': {name: 'Portuguese (Brazil)', native: ''},
  'pt-PT': {name: 'Portuguese (Portugal)', native: ''},
  qu: {name: 'Quechua', native: ''},
  'qu-BO': {name: 'Quechua (Bolivia)', native: ''},
  'qu-EC': {name: 'Quechua (Ecuador)', native: ''},
  'qu-PE': {name: 'Quechua (Peru)', native: ''},
  ro: {name: 'Romanian', native: ''},
  'ro-RO': {name: 'Romanian (Romania)', native: ''},
  ru: {name: 'Russian', native: ''},
  'ru-RU': {name: 'Russian (Russia)', native: ''},
  sa: {name: 'Sanskrit', native: ''},
  'sa-IN': {name: 'Sanskrit (India)', native: ''},
  se: {name: 'Sami', native: ''},
  'se-FI': {name: 'Sami (Finland)', native: ''},
  'se-NO': {name: 'Sami (Norway)', native: ''},
  'se-SE': {name: 'Sami (Sweden)', native: ''},
  sk: {name: 'Slovak', native: ''},
  'sk-SK': {name: 'Slovak (Slovakia)', native: ''},
  sl: {name: 'Slovenian', native: ''},
  'sl-SI': {name: 'Slovenian (Slovenia)', native: ''},
  sq: {name: 'Albanian', native: ''},
  'sq-AL': {name: 'Albanian (Albania)', native: ''},
  'sr-BA': {name: 'Serbian (Latin) (Bosnia and Herzegovina)', native: ''},
  'sr-Cyrl-BA': {
    name: 'Serbian (Cyrillic) (Bosnia and Herzegovina)',
    native: ''
  },
  'sr-SP': {name: 'Serbian (Latin) (Serbia and Montenegro)', native: ''},
  'sr-Cyrl-SP': {
    name: 'Serbian (Cyrillic) (Serbia and Montenegro)',
    native: ''
  },
  sv: {name: 'Swedish', native: ''},
  'sv-FI': {name: 'Swedish (Finland)', native: ''},
  'sv-SE': {name: 'Swedish (Sweden)', native: ''},
  sw: {name: 'Swahili', native: ''},
  'sw-KE': {name: 'Swahili (Kenya)', native: ''},
  syr: {name: 'Syriac', native: ''},
  'syr-SY': {name: 'Syriac (Syria)', native: ''},
  ta: {name: 'Tamil', native: ''},
  'ta-IN': {name: 'Tamil (India)', native: ''},
  te: {name: 'Telugu', native: ''},
  'te-IN': {name: 'Telugu (India)', native: ''},
  th: {name: 'Thai', native: ''},
  'th-TH': {name: 'Thai (Thailand)', native: ''},
  tl: {name: 'Tagalog', native: ''},
  'tl-PH': {name: 'Tagalog (Philippines)', native: ''},
  tn: {name: 'Tswana', native: ''},
  'tn-ZA': {name: 'Tswana (South Africa)', native: ''},
  tr: {name: 'Turkish', native: ''},
  'tr-TR': {name: 'Turkish (Turkey)', native: ''},
  tt: {name: 'Tatar', native: ''},
  'tt-RU': {name: 'Tatar (Russia)', native: ''},
  ts: {name: 'Tsonga', native: ''},
  uk: {name: 'Ukrainian', native: ''},
  'uk-UA': {name: 'Ukrainian (Ukraine)', native: ''},
  ur: {name: 'Urdu', native: ''},
  'ur-PK': {name: 'Urdu (Islamic Republic of Pakistan)', native: ''},
  uz: {name: 'Uzbek (Latin)', native: ''},
  'uz-UZ': {name: 'Uzbek (Latin) (Uzbekistan)', native: ''},
  'uz-Cyrl-UZ': {name: 'Uzbek (Cyrillic) (Uzbekistan)', native: ''},
  vi: {name: 'Vietnamese', native: ''},
  'vi-VN': {name: 'Vietnamese (Viet Nam)', native: ''},
  xh: {name: 'Xhosa', native: ''},
  'xh-ZA': {name: 'Xhosa (South Africa)', native: ''},
  zh: {name: 'Chinese', native: ''},
  'zh-CN': {name: 'Chinese (S)', native: ''},
  'zh-HK': {name: 'Chinese (Hong Kong)', native: ''},
  'zh-MO': {name: 'Chinese (Macau)', native: ''},
  'zh-SG': {name: 'Chinese (Singapore)', native: ''}
};

export default MAP;