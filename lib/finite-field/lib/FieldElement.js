/*!
 * FieldElement
 * Copyright(c) 2021 Ibrahim Tayib
 */

'use strict'

/**
 * Module dependencies.
 * @private
 */


/**
 * Module exports.
 * @public
 */

module.exports = FieldElement;

/**
 * Create a FieldElement exception handler
 * @param {string} message 
 */

function FieldElementException(message) {
    this.message = message;
    this.name = 'FieldElementException';

    FieldElementException.prototype.toString = function() {
        return `${this.name}: "${this.message}"`;
    }
}

/**
 * Create a new FieldElement object
 * @param {int} number 
 * @param {int} prime 
 */

function FieldElement(number, prime) {

    // Check for field range error
    if (number >= prime || number < 0) {
        throw new FieldElementException(`Number ${number} not in field range 0 to ${prime - 1}`);
    }
    // Initialise values
    this.number = number;
    this.prime = prime;

    // Represent the class properties
    FieldElement.prototype.Represent = function () {

        // Return the class properties as String
        return `FieldElement ${this.number} ${this.prime}`;
    }

    Object.prototype.propertyExists = function (property) {
        return typeof this[property] !== 'undefined';
    }

    // Check if two properties are equal to each other
    FieldElement.prototype.Equals = function (object) {

        // Check if the param is an object
        if (typeof(object) !== 'object' || object === null) {
            throw new FieldElementException('Invalid object');
        }

        // Check if two properties exist in object
        if (object.propertyExists(`${object.number}`)
                || object.propertyExists(`${object.prime}`))
        {
            throw new FieldElementException('Property does not exist');
        }

        // Check if two properties are undefined
        if (object.number === undefined 
                || object.prime === undefined)
        {
            throw new FieldElementException('Invalid property types');
        }

        // Check if two objects are equal
        return this.number === object.number && this.prime == object.prime;
    }

    // Addition 
    FieldElement.prototype.Add = function (object) {

        // Check if the param is an object
        if (typeof(object) !== 'object' || object === null) {
            throw new FieldElementException('Invalid object');
        }

        // Check if two properties exist in object
        if (object.propertyExists(`${object.number}`)
                || object.propertyExists(`${object.prime}`))
        {
            throw new FieldElementException('Property does not exist');
        }

        // Check if two properties are undefined
        if (object.number === undefined 
                || object.prime === undefined)
        {
            throw new FieldElementException('Invalid property types');
        }

        // Check if the elements are from the same finite field
        if (!object.prime === this.prime)
        {
            throw new FieldElementException('Cannot add two numbers in different fields');
        }

        // Add two numbers frmo each object
        const sum = (this.number + object.number) % this.prime;

        // Return a new field element 
        return new FieldElement(sum, this.prime);
    }
    
    // Subtract 
    FieldElement.prototype.Subtract = function (object) {

        // Check if the param is an object
        if (typeof(object) !== 'object' || object === null) {
            throw new FieldElementException('Invalid object');
        }
    
        // Check if two properties exist in object
        if (object.propertyExists(`${object.number}`)
                || object.propertyExists(`${object.prime}`))
        {
            throw new FieldElementException('Property does not exist');
        }

        // Check if two properties are undefined
        if (object.number === undefined 
                || object.prime === undefined)
        {
            throw new FieldElementException('Invalid property types');
        }

        // Check if the elements are from the same finite field
        if (!object.prime === this.prime)
        {
            throw new FieldElementException('Cannot add two numbers in different fields');
        }

        // Add two numbers frmo each object
        const difference = (this.number - object.number) % this.prime;

        // Return a new field element 
        return new FieldElement(difference, this.prime);
    }
}

