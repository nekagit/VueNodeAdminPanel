const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: String,
    unitPrice: Number, 
    status: String,
    entityKey: String
});

const CustomerSchema = new mongoose.Schema({
    name: String,
    status: String,
    entityKey: String
});

const InvoiceSchema = new mongoose.Schema({
    name: String,
    number: Number,
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer' 
    },
    date: String,
    invoiceTotal: Number,
    status: String,
    entityKey: String
});

const InvoiceLineSchema = new mongoose.Schema({
    name: String,
    unitPrice: Number,
    quantity: Number,
    invoice: {type: mongoose.Schema.Types.ObjectId,ref:'Invoice'},
    product: {type: mongoose.Schema.Types.ObjectId,ref:'Product'},
    lineTotal: Number,
    status: String,
    entityKey: String
});


module.exports = {ProductS: ProductSchema, CustomerS:CustomerSchema,InvoiceS: InvoiceSchema, InvoiceLine: InvoiceLineSchema };
