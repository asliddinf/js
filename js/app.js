let number = +prompt("1-999 gacha bolgan sonlarni kiriting")
if (isNaN(number) || number < 0 || number > 999){
 console.log("Xatolik");
}else{
     let yuzlik = number / 100 | 0;
     let onlik = (number % 100) / 10 | 0;
     let birlik = number % 10;
     let result = ""

     switch (yuzlik) {
        case 1: result += "Bir yuz "
            break
        case 2: result += "Ikki yuz "
            break
        case 3: result += "Uch yuz "
            break
        case 4: result += "To'rt yuz "
            break
        case 5: result += "Besh yuz "
            break

        case 6: result += "Olti yuz "
            break

        case 7: result += "Yeti yuz "
            break

        case 8: result += "Sakkz yuz "
            break

        case 9: result += "To'qiz yuz "
            break

    }
    
    switch (onlik) {
        case 1: result += "on "
            break

        case 2: result += "yigirma "
            break

        case 3: result += "o'tiz "
            break

        case 4: result += "qirq "
            break

        case 5: result += "ellik "
            break

        case 6: result += "oltmish "
            break

        case 7: result += "yetmish "
            break

        case 8: result += "sakson "
            break

        case 9: result += "to'qson "
            break


    }
   
    switch (birlik) {
        case 1: result += "Bir  "
            break
        case 2: result += "Ikki  "
            break
        case 3: result += "Uch  "
            break
        case 4: result += "To'rt  "
            break
        case 5: result += "Besh  "
            break
        case 6: result += "Olti  "
            break
        case 7: result += "Yeti  "
            break
        case 8: result += "Sakkz  "
            break
        case 9: result += "To'qiz  "
            break
    }

    console.log(result);
}