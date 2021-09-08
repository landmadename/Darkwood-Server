export function getMousePos(event) {
    let x = event.pageX;
    let y = event.pageY;
    let parent = event.target.getBoundingClientRect()
    return { 'x': x-parent.x, 'y': y-parent.y };
}

export function tryToAppendNewPoint(points, point) {
    points = Object.assign([], points)
    for (const i in points) {
        if (points[i][0]===-10000&&points[i][1]===-10000){
            points[i][0] = point.x
            points[i][1] = point.y
            break;
        }
    }
    return points
}

export function deleteOnePoint(points, index) {
    points = Object.assign([], points)
    points[index][0] = -10000
    points[index][1] = -10000
    return points
}

export function checkPoints(points) {
    for (const i in points) {
        if (points[i][0]===-10000&&points[i][1]===-10000){
            console.log("alert")
            return false
        }
    }
    return true
}