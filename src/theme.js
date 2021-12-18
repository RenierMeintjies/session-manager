// scuffed theme file
const numberOfColumns = 3

const theme = {
  cookieList: {
    numberOfColumns: numberOfColumns,
    columnWidth: `${100 / numberOfColumns}vw`,
  },
  fonts: {
    primary: 'Helvetica Neue, Helvetica, Roboto, sans-serif',
    pre: 'Consolas, Liberation Mono, Menlo, Courier, monospace',
    quote: 'Georgia, serif',
  },
  palette: {
    primary: '#3c6e71',
    secondary: '#284b63',
    danger: '#f94144',
    alert: '#f3722c',
    success: '90be6d',
    grayscale: ['#212121', '#616161', '#9e9e9e', '#bdbdbd', '#e0e0e0', '#ffffff'],
    text: 'white',
    bg: '#282c34',
    darkBg: '#1d2126',
    border: 'black',
    input: {
      text: '#cac3bb',
      border: '#454c4e',
      boxShadow: '#adadad14',
    },
  },
  popupWidth: '500px',
}

export default theme
