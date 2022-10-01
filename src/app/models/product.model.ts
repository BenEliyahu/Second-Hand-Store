class Product {
    id: number;
    name: string;
    description: string;
    imageSource: string;
    price: number;
    city: string;
    phoneNumber: string;
    date: Date;

    constructor(id: number=0, name: string="", description: string="", imageSource: string="", price: number=0, city: string="", phoneNumber: string="", date: Date = new Date()) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.imageSource = imageSource;
        this.price = price;
        this.city = city;
        this.phoneNumber = phoneNumber;
        this.date = date;
    }
}
export default Product;

