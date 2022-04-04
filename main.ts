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
            . # # # .
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
    HalfSpeed = 150
    SlowSpeed = 30
}
// M1 Linkes Rad
// M2 Rechts
basic.forever(function () {
    ButtonPressed()
    if (Go == 1) {
        // Beide weiss
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
            maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, MaxSpeed)
            maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, MaxSpeed)
        } else {
            if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
                maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, SlowSpeed)
                maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, HalfSpeed)
                if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
                    maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, SlowSpeed)
                    maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, MaxSpeed)
                }
            } else {
                if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
                    maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, HalfSpeed)
                    maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, SlowSpeed)
                    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
                        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, MaxSpeed)
                        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, SlowSpeed)
                    }
                    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
                        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, MaxSpeed)
                    } else {
                        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 0)
                    }
                }
            }
        }
    }
})
