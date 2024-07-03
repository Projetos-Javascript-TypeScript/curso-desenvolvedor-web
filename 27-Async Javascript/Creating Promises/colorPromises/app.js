const delayedColorChange = (color, delay) => {
    return new Promise(
        (resolve, reject) => {
            setTimeout(() => {
                document.body.style.backgroundColor = color;
                resolve();
            }, delay)
        }
    );
}

//you can either return or execute the promise
delayedColorChange("red", 1000)
    .then(() => {
        delayedColorChange("orange", 1000)
    })
    .then(() => {
        return delayedColorChange("yellow", 1000)
    })
    .then(() =>
        delayedColorChange("green", 1000)
    )
    .then(() =>
        delayedColorChange("blue", 1000)
    )
    .then(() =>
        delayedColorChange("indigo", 1000)
    )
    .then(() =>
        delayedColorChange("violet", 1000)
    )