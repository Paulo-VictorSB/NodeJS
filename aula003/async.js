const { readFile } = require('fs');

readFile('./dados.csv', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log(data.toString());
});
