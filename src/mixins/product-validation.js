export default {

    data: () => ({
        product_validation_rule: {
            product_name: [{ required: true }],
            description: [{ required: true }],
            unit_price: [
                { required: true, message: 'This Field is Required!' }
            ],
            units_in_stock: [
                { required: true, message: 'This Field is Required!' },
                { type: 'number', message: 'This must be a valid number!' }
            ],
            product_image: [
                {required: true, message: 'Product Must have at least 1 image!'}
            ]
        }
    })

}