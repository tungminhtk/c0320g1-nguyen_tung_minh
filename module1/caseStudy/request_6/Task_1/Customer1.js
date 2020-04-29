class Customer {
    constructor(name, cmnd, birthday, email, address, typeService, typeRoom, typeCustomer, discount, quantityIncluded, rendDays) {
        this.name = name;
        this.cmnd = cmnd;
        this.birthday = birthday;
        this.email = email;
        this.address = address;
        this.typeService = typeService;
        this.typeRoom = typeRoom;
        this.typeCustomer = typeCustomer;
        this.discount = discount;
        this.quantityIncluded = quantityIncluded;
        this.rendDays = rendDays;
    }
    getName() {return this.name}
    getCMND() {return this.cmnd}
    getBirthday() {return this.birthday}
    getEmail() {return this.email}
    getAddress() {return this.address}
    getTypeService() {return this.typeService}
    getTypeRoom() {return this.typeRoom}
    getTypeCustomer() {return this.typeCustomer}
    getDiscount() {return this.discount}
    getQuantityIncluded() {return this.quantityIncluded}
    getRendDays() {return this.rendDays}
    setName(name) {this.name = name}
    setCMND(cmnd) {this.cmnd = cmnd}
    setBirthday(birthday) {this.birthday = birthday}
    setEmail(email) {this.email = email}
    setAddress(address) {this.address = address}
    setTypeService(typeService) {this.typeService = typeService}
    setTypeRoom(typeRoom) {this.typeRoom = typeRoom}
    setTypeCustomer(typeCustomer) {this.typeCustomer = typeCustomer}
    setDiscount(discount) {this.discount = discount}
    setQuantityIncluded(quantityIncluded) {this.quantityIncluded = quantityIncluded}
    setRendDays(rendDays) {this.rendDays = rendDays}
    totalPays = function () {
        let money = 0;
        if (this.typeService === "Villa") {
            money = 500;
        } else if (this.t === "House") {
            money = 300;
        } else if (this.typeService === "Room") {
            money = 200;
        }
        let temp = 0;
        if (this.address === "Đà Nẵng") {
            temp += 20;
        } else if (this.address === "Huế") {
            temp += 10;
        } else if (this.address === "Quảng Nam") {
            temp += 5;
        }
        if (this.rendDays > 7) {
            temp += 30;
        } else if (this.rendDays > 5) {
            temp += 20;
        } else if (this.rendDays > 2) {
            temp += 10;
        }
        if (this.typeCustomer === "Diamond") {
            temp += 15;
        } else if (this.typeCustomer === "Platium") {
            temp += 10;
        } else if (this.typeCustomer === "Gold") {
            temp += 5;
        } else if (this.typeCustomer === "Silver") {
            temp += 2;
        } else if (this.typeCustomer === "Member") {
            temp += 0;
        }
        return this.rendDays * money - temp;
    }
}