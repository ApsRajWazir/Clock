// Some Calculations (Rotaion System === DMS Angle System)
// { Hour Hand }  I. 12hrs = 360deg, 1hr = 30deg, 1min = 0.5deg
// Now, for x hrs, Rotation = 30(x)deg + 0.5(m)mins. ; m Represents minutes

// { Minute Hand } I. 60min = 360deg, 1min= 6deg, 1sec =0.1deg
// Now for y mins, Rotation = 6(y)deg

// { Second Hand } I. 60sec = 360deg, 1sec = 6deg
//  Now, for z seconds, Rotation = 6(z)deg


const hour = document.getElementById('hour')
const minute = document.getElementById('minute')
const second = document.getElementById('second')




const clock = setInterval(() => {
    const dateTime = new Date()  
    const hrtime = dateTime.getHours()
    const mintime = dateTime.getMinutes()
    const sectime = dateTime.getSeconds()

    const hrRotation = 30*hrtime + mintime/2
    const minRotation = 6* mintime
    const secRotation = 6* sectime

    hour.style.transform = `rotate(${hrRotation}deg)`
    minute.style.transform = `rotate(${minRotation}deg)`
    second.style.transform = `rotate(${secRotation}deg)`

}, 1000)