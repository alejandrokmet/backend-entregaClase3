class ProductManager {
    constructor() {
        this.products = [];
    }

    getNextId() {
        // Encuentra el ID máximo de los existentes y crea el id próximo
        const maxId = this.products.reduce((max, product) => (product.id > max ? product.id : max), 0);
        return maxId + 1;
    }

    addProduct(productData) {

        const isCodeRepeated = this.products.some(product => product.code === productData.code);

        if (isCodeRepeated) {
            throw new Error('The product code already exists');
        }

        // Verifica si alguno de los campos está vacío.
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            throw new Error('All product fields are mandatory.');
        }

        // Crea un nuevo producto con el id auto incrementado
        const newProduct = {
            id: this.getNextId(),
            title: productData.title,
            description: productData.description,
            price: productData.price,
            thumbnail: productData.thumbnail,
            code: productData.code,
            stock: productData.stock,
        };

        // Agrega el nuevo producto al array de productos
        this.products.push(newProduct);
    }
    getProducts() {
        // Devuelve todos los productos como un array
        return this.products;
    }
    getProductById(productId) {
        // Encuentra y devuelve el producto con el id especificado
        const product = this.products.find((product) => product.id === productId);

        if (!productId) {
            throw new Error('Product not found.');
        }

        return product;
    }


}
