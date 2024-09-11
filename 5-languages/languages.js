const language = prompt('Выберите язык: RU, EN, JP, KR, NE').toUpperCase();

switch (true) {
    case language === 'RU':
        console.log('Здравствуйте');
        break;
    case language === 'EN':
        console.log('Hello');
        break;
    case language === 'JP':
        console.log('こんにちは');
        break;
    case language === 'KR':
        console.log('안녕하세요');
        break;
    case language === 'NE':
        console.log('नमस्कार');
        break;
    default:
        console.log('Выберите один из доступных языков');
}