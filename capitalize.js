const {log} = console

function capitalize(str){
    if(typeof str !== 'string') return 'This is not a string'
    return str[0].toUpperCase()+str.substring(1)
}

module.exports = capitalize;