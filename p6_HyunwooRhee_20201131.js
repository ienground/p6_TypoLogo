/**
 * Developed by IENGROUND of ienlab.
 * @ienground_
 * Ericano Rhee on github.com/ienground
 */

let backgroundColor, foregroundColor;
let button, input;
let bgSliderR, bgSliderG, bgSliderB;
let fgSliderR, fgSliderG, fgSliderB;
let content = 'IENGROUND';
let count = 0, countDirection = 1;
let size = 50;

// checkbox
let isSquare, isColorRandom;

function preload() {
    mainFont = loadFont('src/ProductSans-Regular.ttf');
    logoFont = loadFont('src/LOT.otf');
    palette = loadImage('img/palette.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background('#2B2B2B');
    noStroke();
    angleMode(DEGREES);

    input = createInput("IENGROUND");
    button = createButton("SET");
    button.position(width - 25 - button.width, height - 65 - button.height / 2);
    input.position(button.x - input.width, height - 65 - button.height / 2);
    button.mousePressed(setTypoLogo);

    fill(255);
    textAlign(LEFT, TOP);
    // text("Background", 110, height - 100);

    bgSliderR = createSlider(0, 255, 0);
    bgSliderG = createSlider(0, 255, 0);
    bgSliderB = createSlider(0, 255, 0);
    fgSliderR = createSlider(0, 255, 255);
    fgSliderG = createSlider(0, 255, 255);
    fgSliderB = createSlider(0, 255, 255);

    isSquare = createCheckbox("set logo square", true);
    isColorRandom = createCheckbox("set color animated", false);

    text("BG", 110, height - 100);
    text("R", 140, height - 100);
    text("G", 140, height - 70);
    text("B", 140, height - 40);

    bgSliderR.position(155, height - 100);
    bgSliderG.position(155, height - 70);
    bgSliderB.position(155, height - 40);

    text("FG", bgSliderR.x + bgSliderR.width + 20, height - 100);
    text("R", bgSliderR.x + bgSliderR.width + 50, height - 100);
    text("G", bgSliderR.x + bgSliderR.width + 50, height - 70);
    text("B", bgSliderR.x + bgSliderR.width + 50, height - 40);

    fgSliderR.position(bgSliderR.x + bgSliderR.width + 70, height - 100);
    fgSliderG.position(bgSliderR.x + bgSliderR.width + 70, height - 70);
    fgSliderB.position(bgSliderR.x + bgSliderR.width + 70, height - 40);

    isSquare.style('color', '#FFFFFF');
    isColorRandom.style('color', '#FFFFFF');
    isSquare.position(fgSliderR.x + fgSliderR.width + 20, height - 65 - button.height * 1.5);
    isColorRandom.position(fgSliderR.x + fgSliderR.width + 20, height - 65 + button.height * 0.5);

    backgroundColor = color('#000000');
    foregroundColor = color('#FFFFFF');
}

function draw() {
    background('#2B2B2B');
    if (count >= 255) {
        countDirection = -1;
    } else if (count <= 0) {
        countDirection = 1;
    }
    noStroke();
    count += countDirection;

    backgroundColor = color(bgSliderR.value(), bgSliderG.value(), bgSliderB.value());
    foregroundColor = color(fgSliderR.value(), fgSliderG.value(), fgSliderB.value());

    let row = Math.ceil(sqrt(content.length));

    if (isSquare.checked()) {
        colorMode(RGB, row - 1, row - 1, 255);
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < row; j++) {
                if (j + i * row < content.length) {
                    if (isColorRandom.checked()) {
                        let bgColor = color(i, j, count);
                        let fgColor = color((i + 1) % row, (j + 1) % row, count);
                        getLetterPattern(content[j + i * row], size, bgColor, fgColor, width / 2 + (j - (row - 1) / 2) * size, height / 2 - 62.5 + (i - (row - 1) / 2) * size);
                    } else {
                        getLetterPattern(content[j + i * row], size, backgroundColor, foregroundColor, width / 2 + (j - (row - 1) / 2) * size, height / 2 - 62.5 + (i - (row - 1) / 2) * size);
                    }
                } else {
                    if (isColorRandom.checked()) {
                        let bgColor = color(j, i, count);
                        let fgColor = color(i, j, count);
                        getLetterPattern("", size, bgColor, fgColor, width / 2 + (j - (row - 1) / 2) * size, height / 2 - 62.5 + (i - (row - 1) / 2) * size);
                    } else {
                        getLetterPattern("", size, backgroundColor, foregroundColor, width / 2 + (j - (row - 1) / 2) * size, height / 2 - 62.5 + (i - (row - 1) / 2) * size);
                    }

                }
            }
        }
        colorMode(RGB, 255);
    } else {
        colorMode(RGB, content.length, 255, 255);
        for (let i = 0; i < content.length; i++) {
            if (isColorRandom.checked()) {
                let bgColor = color(i, 128, count);
                let fgColor = color((i + content.length / 2) % content.length, 128, count);
                getLetterPattern(content[i], size, bgColor, fgColor, width / 2 + (i - (content.length - 1) / 2) * size, height / 2 - 62.5);
            } else {
                getLetterPattern(content[i], size, backgroundColor, foregroundColor, width / 2 + (i - (content.length - 1) / 2) * size, height / 2 - 62.5);
            }

        }
    }

    fill('#2B2B2B');
    rect(0, height - 125, width, height);
    stroke('#FFFFFF');
    strokeWeight(5);
    line(25, height - 125, width - 25, height - 125);
    noStroke();

    fill(255);
    text("BG", 110, height - 100);
    text("R", 140, height - 100);
    text("G", 140, height - 70);
    text("B", 140, height - 40);

    text("FG", bgSliderR.x + bgSliderR.width + 20, height - 100);
    text("R", bgSliderR.x + bgSliderR.width + 50, height - 100);
    text("G", bgSliderR.x + bgSliderR.width + 50, height - 70);
    text("B", bgSliderR.x + bgSliderR.width + 50, height - 40);

    fill(backgroundColor);
    square(25, height - 100, 75);
    fill(foregroundColor);
    square(40, height - 85, 45);
}

function setTitle(title) {
    noStroke();
    fill('#FFFFFF');
    textFont(mainFont);
    textAlign(LEFT, TOP);
    textSize(30);
    text(title, 50, 50);
}

function setTypoLogo() {
    content = input.value();
}

function mouseWheel(event) {
    if (event.delta >= 0 && size < 150) {
        size++;
    } else if (event.delta < 0 && size > 0) {
        size--;
    }
}

function getLetterPattern(l, size, c1, c2, x, y) {
    translate(x, y);
    fill(c1);
    square(-size / 2, -size / 2, size);
    fill(c2);
    switch (l) {
        case 'A':
        case 'a': {
            triangle(0, -size / 2, -size / 2, size / 2, size / 2, size / 2);
            break;
        }
        case 'B':
        case 'b': {
            rect(-size / 2, -size / 2, size / 2, size);
            circle(size / 4, -size / 4, size / 2);
            circle(size / 4, size / 4, size / 2);
            break;
        }
        case 'C':
        case 'c': {
            arc(0, 0, size, size, 90, 270, PIE);
            triangle(0, -size / 2, 0, 0, size / 2, -size / 2);
            triangle(0, size / 2, 0, 0, size / 2, size / 2);
            break;
        }
        case 'D':
        case 'd': {
            rect(-size / 2, -size / 2, size / 2, size);
            arc(0, 0, size, size, 270, 90, PIE);
            break;
        }
        case 'E':
        case 'e': {
            arc(0, 0, size, size, 90, 360, PIE);
            triangle(0, 0, 0, size / 2, size / 2, size / 2);
            break;
        }
        case 'F':
        case 'f': {
            quad(-size / 2, -size / 2, size / 2, -size / 2, 0, 0, -size / 2, 0);
            quad(-size / 2, 0, size / 2, 0, 0, size / 2, -size / 2, size / 2);
            break;
        }
        case 'G':
        case 'g': {
            fill(c1);
            square(-size / 2, -size / 2, size);
            fill(c2);
            arc(0, 0, size, size, 90, 270, PIE);
            triangle(0, -size / 2, 0, 0, size / 2, -size / 2);
            circle(size / 4, size / 4, size / 2);
            break;
        }
        case 'H':
        case 'h': {
            fill(c2);
            square(-size / 2, -size / 2, size);
            fill(c1);
            arc(0, -size / 2, size, size, 0, 180, PIE);
            arc(0, size / 2, size, size, 180, 0, PIE);
            break;
        }
        case 'I':
        case 'i': {
            fill(c2);
            square(-size / 2, -size / 2, size);
            fill(c1);
            arc(size / 2, 0, size, size, 90, 270, PIE);
            arc(-size / 2, 0, size, size, 270, 90, PIE);
            break;
        }
        case 'J':
        case 'j': {
            square(0, -size / 2, size / 2);
            arc(0, 0, size, size, 0, 180, PIE);
            break;
        }
        case 'K':
        case 'k': {
            rect(-size / 2, -size / 2, size / 2, size);
            triangle(0, -size / 2, 0, 0, size / 2, -size / 2);
            triangle(0, size / 2, 0, 0, size / 2, size / 2);
            break;
        }
        case 'L':
        case 'l': {
            rect(-size / 2, -size / 2, size / 2, size);
            rect(-size / 2, 0, size, size / 2);
            break;
        }
        case 'M':
        case 'm': {
            rect(-size / 2, -size / 2, size, size / 2);
            triangle(-size / 2, 0, -size / 2, size / 2, 0, 0);
            triangle(size / 2, 0, size / 2, size / 2, 0, 0);
            break;
        }
        case 'N':
        case 'n': {
            quad(-size / 2, -size / 2, 0, 0, 0, size / 2, -size / 2, size / 2);
            quad(size / 2, size / 2, 0, 0, 0, -size / 2, size / 2, -size / 2);
            break;
        }
        case 'O':
        case 'o': {
            circle(0, 0, size);
            break;
        }
        case 'P':
        case 'p': {
            rect(-size / 2, -size / 2, size / 2, size);
            rect(0, -size / 2, size / 4, size / 2);
            circle(size / 4, -size / 4, size / 2);
            break;
        }
        case 'Q':
        case 'q': {
            circle(0, 0, size);
            triangle(0, 0, size / 2, 0, size / 2, size / 2);
            break;
        }
        case 'R':
        case 'r': {
            rect(-size / 2, -size / 2, size / 2, size);
            circle(size / 4, -size / 4, size / 2);
            break;
        }
        case 'S':
        case 's': {
            arc(-size / 4, -size / 4, size / 2, size / 2, 90, 270, PIE);
            arc(size / 4, size / 4, size / 2, size / 2, 270, 90, PIE);
            rect(-size / 4, -size / 2, size * 3 / 4, size / 2);
            rect(-size / 2, 0, size * 3 / 4, size / 2);
            break;
        }
        case 'T':
        case 't': {
            rect(-size / 2, -size / 2, size, size / 2);
            square(-size / 4, 0, size / 2);
            break;
        }
        case 'U':
        case 'u': {
            rect(-size / 2, -size / 2, size, size / 2);
            arc(0, 0, size, size, 0, 180, PIE);
            break;
        }
        case 'V':
        case 'v': {
            triangle(-size / 2, -size / 2, size / 2, -size / 2, 0, size / 2);
            break;
        }
        case 'W':
        case 'w': {
            triangle(-size / 2, -size / 2, 0, -size / 2, 0, size / 2);
            triangle(0, -size / 2, size / 2, -size / 2, size / 2, size / 2);
            break;
        }
        case 'X':
        case 'x': {
            triangle(-size / 2, -size / 2, 0, 0, -size / 2, size / 2);
            triangle(size / 2, -size / 2, 0, 0, size / 2, size / 2);
            break;
        }
        case 'Y':
        case 'y': {
            triangle(-size / 2, -size / 2, 0, 0, -size / 2, 0);
            triangle(size / 2, -size / 2, 0, 0, size / 2, 0);
            quad(0, 0, size / 2, 0, size / 2, size / 2, -size / 2, size / 2);
            break;
        }
        case 'Z':
        case 'z': {
            quad(-size / 2, -size / 2, size / 2, -size / 2, 0, 0, -size / 2, 0);
            quad(0, 0, size / 2, 0, size / 2, size / 2, -size / 2, size / 2);
            break;
        }
        case '.': {
            square(0, 0, size / 2);
            break;
        }
        case ',': {
            triangle(0, 0, size / 2, 0, size / 2, size / 2);
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