const createValidation = require('./create');
const updateValidation = require('./update');
const deleteValidation = require('./delete');
const readValidation = require('./read');

module.exports = {
    createValidation,
    updateValidation,
    deleteValidation,
    readValidation
}