function validaData(valor) {
    var date = valor;
    var ardt = new Array;
    var ExpReg = new RegExp("(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[012])/[12][0-9]{3}");
    ardt = date.split("/");
    erro = false;
    if (date.search(ExpReg) == -1) {
        erro = true;
    } else if (((date[1] == 4) || (date[1] == 6) || (date[1] == 9) || (date[1] == 11)) && (date[0] > 30))
        erro = true;
    else if (date[1] == 2) {
        if ((date[0] > 28) && ((date[2] % 4) != 0))
            erro = true;
        if ((date[0] > 29) && ((date[2] % 4) == 0))
            erro = true;
    }
    if (erro) {
        alert("Data inválida!");
    }
    return erro;
}

function validaDataHora(valor) {
    var matches = valor.match(/^(\d{2})\/(\d{2})\/(\d{4}) (\d{2}):(\d{2})$/);
    var erro = false;
    if (matches === null) {
        erro = true;
    } else {
        var year = parseInt(matches[3], 10);
        var month = parseInt(matches[2], 10) - 1; // months are 0-11
        var day = parseInt(matches[1], 10);
        var hour = parseInt(matches[4], 10);
        var minute = parseInt(matches[5], 10);
        var date = new Date(year, month, day, hour, minute);
        if (date.getFullYear() !== year ||
            date.getMonth() != month ||
            date.getDate() !== day ||
            date.getHours() !== hour ||
            date.getMinutes() !== minute) 
        {
            erro = true;
        }

        if (erro) {
            alert("Data/hora inválida!");
        }
        return erro;
    }
}