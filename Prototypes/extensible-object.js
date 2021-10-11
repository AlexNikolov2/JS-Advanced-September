function solve() {
    let object = {
        extend: function(template) {
            for (const templateKey of Object.keys(template)) {
                if(typeof template[templateKey] == 'function') {
                    Object.getPrototypeOf(object)[templateKey] = template[templateKey];
                }
                else {
                    object[templateKey] = template[templateKey];
                }
            }
        }
    }
    return object;
}