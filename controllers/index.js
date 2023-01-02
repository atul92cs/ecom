let {createCategory,updateCategory,deleteCategory,getCategory}=require('./categoryController');
let {createDimension,updateDimenstion,deleteDimension,getDimension}=require('./dimensionController');
let {createProduct,updateProduct,deleteProduct,getProduct}=require('./productController');
let {createSubcategory,getSubcategory,updateSubcategory,deleteSubcategory}=require('./subCategoryController');
let {createType,getType,deleteType,updateType}=require('./typeController');
let {insertDelivery,insertDeliveryBulk,updateDelivery,deleteDelivery,getDelivery}=require('./deliveryController');
let {getOrder,getOrders,updateOrderStatus}=require('./orderController');
let {getOrderDetails,getOrderDetailsByOrderId}=require('./orderDetailsController');
module.exports={
    createCategory,
    updateCategory,
    deleteCategory,
    getCategory,
    createDimension,
    updateDimenstion,
    deleteDimension,
    getDimension,
    createProduct,
    updateProduct,
    deleteProduct,
    getProduct,
    createSubcategory,
    getSubcategory,
    updateSubcategory,
    deleteSubcategory,
    createType,
    getType,
    deleteType,
    updateType,
    insertDelivery,
    insertDeliveryBulk,
    updateDelivery,
    deleteDelivery,
    getDelivery,
    getOrder,
    getOrders,
    updateOrderStatus,
    getOrderDetails,
    getOrderDetailsByOrderId
}