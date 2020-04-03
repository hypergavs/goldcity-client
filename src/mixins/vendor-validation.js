export default {
    data: () => ({
        vendor_validation_rule: {
            vendor_name: [
                { required: true, message: 'Vendor Name is Required!' },
                { pattern: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g, message: 'Vendor Name Must Be Valid!'}
            ],
            contact: [
                { required: true }
            ],
            about: [
                { required: true }
            ]
        }
    })
}