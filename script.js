
const convertButton = document.querySelector(".button-convert")
const selectCurrency = document.querySelector(".moeda-convertida")
const selectCurrencyConvert = document.querySelector(".moeda-a-converter")

function convertValues() {

    const inputConvert = document.querySelector(".input-convert").value

    const dolarDay = 4.93
    const euroDay = 5.34
    const bitcoinDay = 253466.95
    const libraDay = 6.24


    const moedaBR = document.querySelector(".conversao")
    const moedaEX = document.querySelector(".conversaoEX")


    // CONVERTENDO OUTRAS MOEDADS EM DOLAR//
    if (selectCurrency.value == "dolar" && selectCurrencyConvert.value == "dolar") {

        moedaEX.innerHTML = new Intl.NumberFormat("en-US", {

            style: "currency",
            currency: "USD"

        }).format(inputConvert)

    }


    if (selectCurrency.value == "dolar" && selectCurrencyConvert.value == "euro") {

        moedaEX.innerHTML = new Intl.NumberFormat("en-US", {

            style: "currency",
            currency: "USD"

        }).format(inputConvert / 0.92)

    }

    if (selectCurrency.value == "dolar" && selectCurrencyConvert.value == "real") {

        moedaEX.innerHTML = new Intl.NumberFormat("en-US", {

            style: "currency",
            currency: "USD"

        }).format(inputConvert / dolarDay)

    }

    if (selectCurrency.value == "dolar" && selectCurrencyConvert.value == "libra") {

        moedaEX.innerHTML = new Intl.NumberFormat("en-US", {

            style: "currency",
            currency: "USD"

        }).format(inputConvert / 0.79)

    }

    if (selectCurrency.value == "dolar" && selectCurrencyConvert.value == "bitcoin") {

        moedaEX.innerHTML = new Intl.NumberFormat("en-US", {

            style: "currency",
            currency: "USD"

        }).format(inputConvert / 0.000019)

    }

    // CONVERTENDO OUTRAS MOEDADS EM EURO//

    if (selectCurrency.value == "euro" && selectCurrencyConvert.value == "euro") {

        moedaEX.innerHTML = new Intl.NumberFormat("de-DE", {

            style: "currency",
            currency: "EUR"
        }).format(inputConvert)

    }

    if (selectCurrency.value == "euro" && selectCurrencyConvert.value == "dolar") {

        moedaEX.innerHTML = new Intl.NumberFormat("en-US", {

            style: "currency",
            currency: "USD"

        }).format(inputConvert / 1.08)

    }

    if (selectCurrency.value == "euro" && selectCurrencyConvert.value == "real") {

        moedaEX.innerHTML = new Intl.NumberFormat("en-US", {

            style: "currency",
            currency: "USD"

        }).format(inputConvert / euroDay)

    }

    if (selectCurrency.value == "euro" && selectCurrencyConvert.value == "libra") {

        moedaEX.innerHTML = new Intl.NumberFormat("en-US", {

            style: "currency",
            currency: "USD"

        }).format(inputConvert / 0.85)

    }

    if (selectCurrency.value == "euro" && selectCurrencyConvert.value == "bitcoin") {

        moedaEX.innerHTML = new Intl.NumberFormat("en-US", {

            style: "currency",
            currency: "USD"

        }).format(inputConvert / 0.000021)

    }

    // CONVERTENDO OUTRAS MOEDADS EM LIBRA//


    if (selectCurrency.value == "libra" && selectCurrencyConvert.value == "libra") {

        moedaEX.innerHTML = new Intl.NumberFormat("en-UK", {

            style: "currency",
            currency: "GBP"
        }).format(inputConvert)

    }

    if (selectCurrency.value == "libra" && selectCurrencyConvert.value == "dolar") {

        moedaEX.innerHTML = new Intl.NumberFormat("en-UK", {

            style: "currency",
            currency: "GBP"
        }).format(inputConvert / 1.26)

    }

    if (selectCurrency.value == "libra" && selectCurrencyConvert.value == "real") {

        moedaEX.innerHTML = new Intl.NumberFormat("en-UK", {

            style: "currency",
            currency: "GBP"
        }).format(inputConvert / libraDay)

    }

    if (selectCurrency.value == "libra" && selectCurrencyConvert.value == "euro") {

        moedaEX.innerHTML = new Intl.NumberFormat("en-UK", {

            style: "currency",
            currency: "GBP"
        }).format(inputConvert / 1.16)

    }

    if (selectCurrency.value == "libra" && selectCurrencyConvert.value == "bitcoin") {

        moedaEX.innerHTML = new Intl.NumberFormat("en-UK", {

            style: "currency",
            currency: "GBP"
        }).format(inputConvert / 0.000025)

    }

    // CONVERTENDO OUTRAS MOEDAS EM BITCOIN//
    if (selectCurrency.value == "bitcoin" && selectCurrencyConvert.value == "bitcoin") {

        moedaEX.innerHTML = new Intl.NumberFormat("de-DE", {

            style: "currency",
            currency: "BTC",
            maximumFractionDigits: 7
        }).format(inputConvert)

    }

    if (selectCurrency.value == "bitcoin" && selectCurrencyConvert.value == "dolar") {

        moedaEX.innerHTML = new Intl.NumberFormat("de-DE", {

            style: "currency",
            currency: "BTC",
            maximumFractionDigits: 7
        }).format(inputConvert / 51413)

    }

    if (selectCurrency.value == "bitcoin" && selectCurrencyConvert.value == "euro") {

        moedaEX.innerHTML = new Intl.NumberFormat("de-DE", {

            style: "currency",
            currency: "BTC",
            maximumFractionDigits: 7
        }).format(inputConvert / 47465)

    }

    if (selectCurrency.value == "bitcoin" && selectCurrencyConvert.value == "real") {

        moedaEX.innerHTML = new Intl.NumberFormat("de-DE", {

            style: "currency",
            currency: "BTC",
            maximumFractionDigits: 7
        }).format(inputConvert / bitcoinDay)

    }

    if (selectCurrency.value == "bitcoin" && selectCurrencyConvert.value == "libra") {

        moedaEX.innerHTML = new Intl.NumberFormat("de-DE", {

            style: "currency",
            currency: "BTC",
            maximumFractionDigits: 7
        }).format(inputConvert / 40619)

    }

    // CONVERTENDO OUTRAS MOEDAS EM REAL//

    if (selectCurrency.value == "real" && selectCurrencyConvert.value == "real") {

        moedaEX.innerHTML = new Intl.NumberFormat("pt-BR", {

            style: "currency",
            currency: "BRL"

        }).format(inputConvert)

    }

    if (selectCurrency.value == "real" && selectCurrencyConvert.value == "dolar") {

        moedaEX.innerHTML = new Intl.NumberFormat("pt-BR", {

            style: "currency",
            currency: "BRL"

        }).format(inputConvert*dolarDay)

    }

    if (selectCurrency.value == "real" && selectCurrencyConvert.value == "euro") {

        moedaEX.innerHTML = new Intl.NumberFormat("pt-BR", {

            style: "currency",
            currency: "BRL"

        }).format(inputConvert*euroDay)

    }

    if (selectCurrency.value == "real" && selectCurrencyConvert.value == "libra") {

        moedaEX.innerHTML = new Intl.NumberFormat("pt-BR", {

            style: "currency",
            currency: "BRL"

        }).format(inputConvert*libraDay)

    }

    if (selectCurrency.value == "real" && selectCurrencyConvert.value == "bitcoin") {

        moedaEX.innerHTML = new Intl.NumberFormat("pt-BR", {

            style: "currency",
            currency: "BRL"

        }).format(inputConvert*bitcoinDay)

    }

    if (selectCurrencyConvert.value == "dolar") {

        moedaBR.innerHTML = new Intl.NumberFormat("en-US", {

            style: "currency",
            currency: "USD"
        }).format(inputConvert)

    }






    if (selectCurrencyConvert.value == "euro") {

        moedaBR.innerHTML = new Intl.NumberFormat("de-DE", {

            style: "currency",
            currency: "EUR"
        }).format(inputConvert)

    }



    if (selectCurrencyConvert.value == "libra") {

        moedaBR.innerHTML = new Intl.NumberFormat("en-UK", {

            style: "currency",
            currency: "GBP"
        }).format(inputConvert)




    }

    if (selectCurrencyConvert.value == "bitcoin") {

        moedaBR.innerHTML = new Intl.NumberFormat("de-DE", {

            style: "currency",
            currency: "BTC",
            minimumFractionDigits: 7
        }).format(inputConvert)



    }

    if (selectCurrencyConvert.value == "real") {
        moedaBR.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputConvert)
    }

}


function changeCurrancy() {

    const currencyName = document.getElementById("currency-world")
    const bandeiraImg = document.querySelector(".currency-img")

    if (selectCurrency.value == "dolar") {

        currencyName.innerHTML = "Dólar Americano"
        bandeiraImg.src = "./assets/estados-unidos (1) 1.png"


    }

    if (selectCurrency.value == "euro") {

        currencyName.innerHTML = "Euro"
        bandeiraImg.src = "./assets/Design sem nome 3.png"
    }

    if (selectCurrency.value == "bitcoin") {

        currencyName.innerHTML = "Bitcoin"
        bandeiraImg.src = "./assets/bitcoin 1.png"
    }

    if (selectCurrency.value == "libra") {

        currencyName.innerHTML = "Libra"
        bandeiraImg.src = "./assets/libra 1.png"
    }

    if (selectCurrency.value == "real") {

        currencyName.innerHTML = "Real"
        bandeiraImg.src = "./assets/brasil 2.png"
    }



    convertValues()

}

function changeCurrancyConvert() {

    const currencyNameConvert = document.getElementById("moeda1")
    const bandeiraImgConvert = document.querySelector(".img-a-converter")

    if (selectCurrencyConvert.value == "dolar") {
        currencyNameConvert.innerHTML = "Dólar Americano"
        bandeiraImgConvert.src = "./assets/estados-unidos (1) 1.png"
    }

    if (selectCurrencyConvert.value == "euro") {

        currencyNameConvert.innerHTML = "Euro"
        bandeiraImgConvert.src = "./assets/Design sem nome 3.png"
    }

    if (selectCurrencyConvert.value == "libra") {

        currencyNameConvert.innerHTML = "Libra"
        bandeiraImgConvert.src = "./assets/libra 1.png"
    }

    if (selectCurrencyConvert.value == "bitcoin") {

        currencyNameConvert.innerHTML = "Bitcoin"
        bandeiraImgConvert.src = "./assets/bitcoin 1.png"
    }

    if (selectCurrencyConvert.value == "real") {

        currencyNameConvert.innerHTML = "Real"
        bandeiraImgConvert.src = "./assets/brasil 2.png"

    }


    convertValues()



}




convertButton.addEventListener("click", convertValues)
selectCurrency.addEventListener("change", changeCurrancy)
selectCurrencyConvert.addEventListener("change", changeCurrancyConvert)