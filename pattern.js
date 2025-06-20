n = 5

for (i = 0; i <= n; i++) {
    line = ""
    for (j = 1; j <= n; j++) {
        line += "* "
    }
    console.log(line);
}


for (i = 0; i <= n; i++) {
    line = ""
    for (j = 0; j <= i; j++) {
        line += "* "
    }
    console.log(line);
}

for (i = n; i >= 0; i--) {
    line = ""
    for (j = 1; j <= i; j++) {
        line += "* "
    }
    console.log(line);
}

for (i = 1; i <= n; i++) {
    line = ""
    for (j = 1; j <= n - i; j++) {
        line += " "
    }
    for (k = 1; k <= i; k++) {
        line += " *"
    }
    console.log(line);
}


for (i = 1; i <= n; i++) {
    line = ""
    for (j = 1; j <= n - i; j++) {
        line += " "
    }
    for (k = 1; k <= i; k++) {
        line += " *"
    }
    console.log(line);
}
for (i = n - 1; i >= 1; i--) {
    line = ""
    for (j = 1; j <= n - i; j++) {
        line += " "
    }
    for (k = 1; k <= i; k++) {
        line += " *"
    }
    console.log(line);
}


n = 4
for (i = 1; i <= n; i++) {
    line = ""
    for (j = 1; j <= n - i; j++) {
        line += "  "
    }
    for (k = 1; k <= i; k++) {
        line += i + "   "
    }
    console.log(line);
}

for (i = 1; i <= n; i++) {
    line = ""
    for (j = 1; j <= n - i; j++) {
        line += "  "
    }
    for (k = 1; k <= 2 * i - 1; k++) {
        line += i + " "
    }
    console.log(line);
}

n = 5
for (let i = 0; i < n; i++) {
    let line = "";

    // Print spaces for triangle shape
    line += " ".repeat((n - i) * 2);

    let value = 1;
    for (let k = 0; k <= i; k++) {
        line += value + "   "; // add spacing between numbers
        value = value * (i - k) / (k + 1);
    }
    console.log(line);
}


n = 4
for (i = n; i >= 1; i--) {
    line = ""
    for (j = 1; j <= n - i; j++) {
        line += "  "
    }
    for (k = 1; k <= 2 * i - 1; k++) {
        line += "* "
    }
    console.log(line);
}
for (i = 2; i <= n; i++) {
    line = ""
    for (j = 1; j <= n - i; j++) {
        line += "  "
    }
    for (k = 1; k <= 2 * i - 1; k++) {
        line += "* "
    }
    console.log(line);
}

n = 5;

for (let i = 1; i <= n; i++) {
    let line = "";

    for (let j = 1; j <= n; j++) {
        // Print * on borders only
        if (i === 1 || i === n || j === 1 || j === n) {
            line += "* ";
        } else {
            line += "  ";
        }
    }

    console.log(line);
}

n = 5;

for (let i = 1; i <= n; i++) {
    let line = "";

    // Left triangle
    for (let j = 1; j <= n - i; j++) {
        line += " ";
    }

    for (let j = 1; j <= 2 * i - 1; j++) {
        if (j === 1 || j === 2 * i - 1) {
            line += "*";
        } else {
            line += " ";
        }
    }

    // Right triangle
    for (let j = 1; j <= n - i; j++) {
        line += " ";
    }

    for (let j = 1; j <= 2 * i - 1; j++) {
        if (j === 1 || j === 2 * i - 1) {
            line += "*";
        } else {
            line += " ";
        }
    }
    console.log(line);
}
