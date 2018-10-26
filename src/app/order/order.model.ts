class Order {
    constructor(
        public adress: string,
        public number: number,
        public optionalAdress: string,
        public paymentOption: string,
        public orderItems: OrderItem[] = [],
        public id?: string
    ) {

    }
}

class OrderItem {
    constructor(public quantity: number, public menuId: string) {

    }
}

export { Order, OrderItem }
