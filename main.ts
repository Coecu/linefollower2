let Go = 0
let MaxSpeed = 0
let HalfSpeed = 0
let SlowSpeed = 0
function ButtonPressed () {
    if (input.buttonIsPressed(Button.B)) {
        Go = 0
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 0)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 0)
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (input.buttonIsPressed(Button.A)) {
        Go = 1
        basic.showLeds(`
            . # . # .
            . # . # .
            . . # . .
            # . . . #
            . # # # .
            `)
    }
    MaxSpeed = 255
    HalfSpeed = 255
    SlowSpeed = 0
}
// M1 Linkes Rad
// M2 Rechtes Rad
basic.forever(function () {
    ButtonPressed()
    if (Go == 1) {
        // Beide Schwarz
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
            maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, MaxSpeed)
            maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, MaxSpeed)
        } 
        // Linker Sensor Schwarz, rechtes Rad gibt Gas
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
            maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, SlowSpeed)
            maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, MaxSpeed)
        } 
        // Rechter Sensor Schwarz, linkes Rad gibt Gas
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
            maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, MaxSpeed)
            maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, SlowSpeed)
        }        
    }
})
