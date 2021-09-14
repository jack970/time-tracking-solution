const renderData = (option) => {
    fetch("../data.json")
    .then(response => response.json())
    .then(data => {
        const html = data.map((data, i) => {
            return `
                <div>
                    <div class="card-bg ${data.title}"></div>
                    <div tabindex=${i} class="card-wrap normal overlay sized">
                        <h4 class="title negrit-500 ellipse">${data.title}</h4>
                        <div class="timeframes">
                            <h1 class="title high-size">${data.timeframes[option].current}hrs</h1>
                            <p class="description text-right">Previous -  ${data.timeframes[option].previous}hrs</p>
                        </div>
                    </div>
                </div>`
        }).join("")
        document.querySelector(".row-gap").innerHTML = html
    })
}

const getOption = (option) => {
    renderData(option)
}

document.addEventListener("DOMContentLoaded", () => {
    renderData('weekly')
})