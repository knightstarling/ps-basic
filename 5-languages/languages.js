const language = prompt('Выберите язык: RU, EN, JP, KR, NE').toUpperCase();

switch (language) {
    case 'RU':
        console.log('Здравствуйте');
        break;
    case 'EN':
        console.log('Hello');
        break;
    case 'JP':
        console.log('こんにちは');
        break;
    case 'KR':
        console.log('안녕하세요');
        break;
    case 'NE':
        console.log('नमस्कार');
        break;
    default:
        console.log('Выберите один из доступных языков');
}