let {createCategory,updateCategory,deleteCategory,getCategory,getCategoryCount}=require('./categoryController');
let {createDimension,updateDimenstion,deleteDimension,getDimension,getDimensionCount}=require('./dimensionController');
let {createProduct,updateProduct,deleteProduct,getProduct}=require('./productController');
let {createSubcategory,getSubcategory,updateSubcategory,deleteSubcategory,getSubCategoryCount}=require('./subCategoryController');
let {createType,getType,deleteType,updateType,getTypeCount}=require('./typeController');
let {insertDelivery,insertDeliveryBulk,updateDelivery,deleteDelivery,getDelivery,getDeliveryCount}=require('./deliveryController');
let {getOrder,getOrders,updateOrderStatus,getOrderCount}=require('./orderController');
let {getOrderDetails,getOrderDetailsByOrderId,getOrderDetailsCount}=require('./orderDetailsController');
let {uploadPicture,getPictures}=require('./pictureController');
let {createDeliveryOptions,getDeliveryOptions,updateDeliveryOption,deleteDeliveryOption,getDeliveryOptionsCount}=require('./deliveryoptController');
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
    getOrderDetailsByOrderId,
    uploadPicture,
    getPictures,
    createDeliveryOptions,
    getDeliveryOptions,
    updateDeliveryOption,
    deleteDeliveryOption,
    getCategoryCount,
    getSubCategoryCount,
    getTypeCount,
    getDeliveryOptionsCount,
    getDeliveryCount,
    getDimensionCount,
    getOrderCount,
    getOrderDetailsCount
}