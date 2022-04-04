let Go = 0
input.onButtonPressed(Button.A, function () {
    Go = 1
    basic.showLeds(`
        . # . # .
        . # . # .
        . . # . .
        # . . . #
        . # # # .
        `)
})
input.onButtonPressed(Button.B, function () {
    Go = 0
    basic.showLeds(`
        . . . . .
        # # . # #
        . . . . .
        . # # # .
        . . . . .
        `)
})
basic.forever(function () {
    if (Go == 1) {
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
            maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 255)
maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 255)
        } else {
            if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
                maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 0)
maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 255)
if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
                    maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 0)
maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 255)
                }
            } else {
                if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
                    maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 255)
maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 0)
if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
                        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 255)
maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 0)
                    }
                    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
                        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 255)
                    } else {
                        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 0)
                    }
                }
            }
        }
    }
})
