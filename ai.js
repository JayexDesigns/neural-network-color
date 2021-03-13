var network = new brain.NeuralNetwork();

var train = [
    {input: {r1:1, g1:1, b1:1, r2:0, g2:0, b2:0}, output: {show:1}},
    {input: {r1:0, g1:0, b1:0, r2:1, g2:1, b2:1}, output: {show:1}},
    {input: {r1:0.7, g1:0.7, b1:0.7, r2:0.3, g2:0.3, b2:0.3}, output: {show:1}},
    {input: {r1:0.3, g1:0.3, b1:0.3, r2:0.7, g2:0.7, b2:0.7}, output: {show:1}},
    {input: {r1:0.4, g1:0.4, b1:0.4, r2:0.6, g2:0.6, b2:0.6}, output: {show:1}},
    {input: {r1:0.6, g1:0.6, b1:0.6, r2:0.4, g2:0.4, b2:0.4}, output: {show:1}},
];

network.train(train);

var input = {}

function getInputColors() {
    for (let i = 0; i < 20; ++i) {
        colors = randomColors();
        input = {
            r1: colors[0][0]/255,
            g1: colors[0][1]/255,
            b1: colors[0][2]/255,
            r2: colors[1][0]/255,
            g2: colors[1][1]/255,
            b2: colors[1][2]/255,
        }
        var result = network.run(input);
        
        console.log(`Confidence Value: ${result.show}`);

        if (result.show < 0.5) {
            if (i < 19) {
                continue;
            }
            else {
                break;
            }
        }
        else {
            break;
        }
    }
}



var yes = document.getElementById("yes");
var kinda = document.getElementById("kinda");
var no = document.getElementById("no");

yes.addEventListener("click", () => {
    train.push({input: {r1:input.r1, g1:input.g1, b1:input.b1, r2:input.r2, g2:input.g2, b2:input.b2}, output: {show: 1}},);
    network.train(train);
    getInputColors();
});
kinda.addEventListener("click", getInputColors);
no.addEventListener("click", () => {
    train.push({input: {r1:input.r1, g1:input.g1, b1:input.b1, r2:input.r2, g2:input.g2, b2:input.b2}, output: {show: 0}},);
    network.train(train);
    getInputColors();
});