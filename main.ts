input.onButtonPressed(Button.A, function () {
    tempsensor_Readings.push(input.temperature())
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(tempsensor_Readings[0])
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(tempsensor_Readings.length)
})
let tempsensor_Readings: number[] = []
tempsensor_Readings = []
