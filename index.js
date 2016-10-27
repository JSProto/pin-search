let alphabet = 5; // A,B...E
let numbers = 12; // 0,1,2...12

let pins = Array(alphabet).fill(0).reduce(function(m, v, a){
    a = String.fromCharCode(a + 65);

    Array(numbers + 1).fill(0).forEach(function(v, n){
        try {
            Function('return ' + a + n)();
        } catch (e) {
            return false;
        }
        return m.push(a + n);
    });

    return m;
}, []);

// DEBUG
// console.log(pins + "")
