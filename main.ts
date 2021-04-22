let vindauge = 1
basic.forever(function () {
    if (smarthome.ReadNoise(AnalogPin.P10) > 70) {
        vindauge = vindauge * -1
        basic.pause(2000)
    }
})
basic.forever(function () {
    if (vindauge > 0) {
        servos.P1.setAngle(0)
    } else {
        servos.P1.setAngle(90)
    }
})
