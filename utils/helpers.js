function formatDate(date) {
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(
        date
      ).getFullYear()}`
};
function formatPlural(string,int) {
    if (int === 1) {
        return string
    }
    return `${string}s`
};
function formatUrl(url) {
    return url
    .replace('http://','')
    .replace('https://', '')
    .replace('www.', '')
    .split('/')[0]
    .split('?')[0]
};

module.exports = {formatDate,formatPlural,formatUrl}