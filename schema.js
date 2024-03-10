// Here we are using MongoDB database and Mongoose ODM.

import { Schema, model} from "Mongoose";

const SchemaTypes = Schema.Types;

const CategorySchema = new Schema({
    name: { type: String },
    desc: { type: String },
    deleted_at: { type: Date},
},
{ timestamps: true}
);

const InventorySchema = new Schema({
    quantity: { type: Number},
    deleted_at: { type: Date}
},
{ timestamps: true}
);

const DiscountSchema = new Schema({
    name: {type: String},
    desc: { type: String},
    discount_percent: { type: SchemaTypes.Decimal128},
    active: { type: Boolean },
    deleted_at: { type: Date}
},
{ timestamps: true}
);


const ProductSchema = new Schema({
    name: {type: String},
    desc: { type: String},
    SKU: { type: String},
    category_id: { type: String },
    inventory_id: { type: String},
    price: { type: SchemaTypes.Decimal128},
    discount_id: { type: String},
    delete_at: { type: Date}
},
{ timestamps: true}
)

export const CategoryModel = model("product_category", CategorySchema);
export const InventoryModel = model("product_inventory", InventorySchema);
export const DiscountModel = model("discount", DiscountSchema);
export const ProductModel = model("product", ProductSchema);

