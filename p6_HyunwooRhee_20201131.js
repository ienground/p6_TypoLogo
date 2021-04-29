/**
 * Developed by IENGROUND of ienlab.
 * @ienground_
 * Ericano Rhee on github.com/ienground
 */

let stage = 0;
let currentColor;
let button, input;

function preload() {
    mainFont = loadFont('src/ProductSans-Regular.ttf');
    logoFont = loadFont('src/LOT.otf');
    palette = loadImage('img/palette.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background('#2B2B2B');
    currentColor = color('#000000');
    noStroke();
    angleMode(DEGREES);

    input = createInput();
    button = createButton("SET");
    input.position(50, height - 75);
    button.position(input.x + input.width, input.y);


}

function draw() {

    stroke('#FFFFFF');
    strokeWeight(5);
    line(50, height - 100, width - 50, height - 100);

    noStroke();
    fill(currentColor);

    let size = 100;
    let c1 = color('#FF0000');
    let c2 = color('#c17d7d');

    let t = ".";
    // let text = "f";
    let row = Math.ceil(sqrt(t.length));
    let column = Math.ceil(t.length / row);

    fill(255);
    text(row, 20, 20);
    text(column, 20, 60);
    // for (let i = 0; i < t.length; i++) {
    //     getLetterPattern(t[i], size, c1, c2, width / 2 + (i - (t.length - 1) / 2) * size, height / 2);
    // }

    for (let i = 0; i < column; i++) {
        for (let j = 0; j < row; j++) {
            if (j + i * row < t.length) {
                getLetterPattern(t[j + i * row], size, c1, c2, width / 2 + (j - (row - 1) / 2) * size, height / 2 + (i - (column - 1) / 2) * size);
            }
        }
    }

}

function setTitle(title) {
    noStroke();
    fill('#FFFFFF');
    textFont(mainFont);
    textAlign(LEFT, TOP);
    textSize(30);
    text(title, 50, 50);
}

function mouseClicked() {
    currentColor = get(mouseX, mouseY)
}

function getLetterPattern(l, size, c1, c2, x, y) {
    translate(x, y);
    fill(c1);
    square(-size / 2, -size / 2, size);
    fill(c2);
    switch (l) {
        case 'a': {
            triangle(0, -size / 2, -size / 2, size / 2, size / 2, size / 2);
            break;
        }

        case 'b': {
            rect(-size / 2, -size / 2, size / 2, size);
            circle(size / 4, -size / 4, size / 2);
            circle(size / 4, size / 4, size / 2);
            break;
        }

        case 'c': {
            arc(0, 0, size, size, 90, 270, PIE);
            triangle(0, -size / 2, 0, 0, size / 2, -size / 2);
            triangle(0, size / 2, 0, 0, size / 2, size / 2);
            break;
        }

        case 'd': {
            rect(-size / 2, -size / 2, size / 2, size);
            arc(0, 0, size, size, 270, 90, PIE);
            break;
        }

        case 'e': {
            arc(0, 0, size, size, 90, 360, PIE);
            triangle(0, 0, 0, size / 2, size / 2, size / 2);
            break;
        }
        case 'f': {
            quad(-size / 2, -size / 2, size / 2, -size / 2, 0, 0, -size / 2, 0);
            quad(-size / 2, 0, size / 2, 0, 0, size / 2, -size / 2, size / 2);
            break;
        }
        case 'g': {
            fill(c1);
            square(-size / 2, -size / 2, size);
            fill(c2);
            arc(0, 0, size, size, 90, 270, PIE);
            triangle(0, -size / 2, 0, 0, size / 2, -size / 2);
            circle(size / 4, size / 4, size / 2);
            break;
        }
        case 'h': {
            fill(c2);
            square(-size / 2, -size / 2, size);
            fill(c1);
            arc(0, -size / 2, size, size, 0, 180, PIE);
            arc(0, size / 2, size, size, 180, 0, PIE);
            break;
        }
        case 'i': {
            fill(c2);
            square(-size / 2, -size / 2, size);
            fill(c1);
            arc(size / 2, 0, size, size, 90, 270, PIE);
            arc(-size / 2, 0, size, size, 270, 90, PIE);
            break;
        }
        case 'j': {
            square(0, -size / 2, size / 2);
            arc(0, 0, size, size, 0, 180, PIE);
            break;
        }
        case 'k': {
            rect(-size / 2, -size / 2, size / 2, size);
            triangle(0, -size / 2, 0, 0, size / 2, -size / 2);
            triangle(0, size / 2, 0, 0, size / 2, size / 2);
            break;
        }
        case 'l': {
            rect(-size / 2, -size / 2, size / 2, size);
            rect(-size / 2, 0, size, size / 2);
            break;
        }
        case 'm': {
            rect(-size / 2, -size / 2, size, size / 2);
            triangle(-size / 2, 0, -size / 2, size / 2, 0, 0);
            triangle(size / 2, 0, size / 2, size / 2, 0, 0);
            break;
        }
        case 'n': {
            quad(-size / 2, -size / 2, 0, 0, 0, size / 2, -size / 2, size / 2);
            quad(size / 2, size / 2, 0, 0, 0, -size / 2, size / 2, -size / 2);
            break;
        }
        case 'o': {
            circle(0, 0, size);
            break;
        }
        case 'p': {
            rect(-size / 2, -size / 2, size / 2, size);
            rect(0, -size / 2, size / 4, size / 2);
            circle(size / 4, -size / 4, size / 2);
            break;
        }
        case 'q': {
            circle(0, 0, size);
            triangle(0, 0, size / 2, 0, size / 2, size / 2);
            break;
        }
        case 'r': {
            rect(-size / 2, -size / 2, size / 2, size);
            circle(size / 4, -size / 4, size / 2);
            break;
        }
        case 's': {
            arc(-size / 4, -size / 4, size / 2, size / 2, 90, 270, PIE);
            arc(size / 4, size / 4, size / 2, size / 2, 270, 90, PIE);
            rect(-size / 4, -size / 2, size * 3 / 4, size / 2);
            rect(-size / 2, 0, size * 3 / 4, size / 2);
            break;
        }
        case 't': {
            rect(-size / 2, -size / 2, size, size / 2);
            square(-size / 4, 0, size / 2);
            break;
        }
        case 'u': {
            rect(-size / 2, -size / 2, size, size / 2);
            arc(0, 0, size, size, 0, 180, PIE);
            break;
        }
        case 'v': {
            triangle(-size / 2, -size / 2, size / 2, -size / 2, 0, size / 2);
            break;
        }
        case 'w': {
            triangle(-size / 2, -size / 2, 0, -size / 2, 0, size / 2);
            triangle(0, -size / 2, size / 2, -size / 2, size / 2, size / 2);
            break;
        }
        case 'x': {
            triangle(-size / 2, -size / 2, 0, 0, -size / 2, size / 2);
            triangle(size / 2, -size / 2, 0, 0, size / 2, size / 2);
            break;
        }
        case 'y': {
            triangle(-size / 2, -size / 2, 0, 0, -size / 2, 0);
            triangle(size / 2, -size / 2, 0, 0, size / 2, 0);
            quad(0, 0, size / 2, 0, size / 2, size / 2, -size / 2, size / 2);
            break;
        }
        case 'z': {
            quad(-size / 2, -size / 2, size / 2, -size / 2, 0, 0, -size / 2, 0);
            quad(0, 0, size / 2, 0, size / 2, size / 2, -size / 2, size / 2);
            break;
        }
    }
    translate(-x, -y);
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max) + 1;
    return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}