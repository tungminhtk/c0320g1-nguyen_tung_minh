let Customer2 = function () {
    this.setName = function (name) {
        this.name = name;
    }
    this.getName = function () {
        return this.name;
    }
    this.setCMND = function (cmnd) {
        this.cmnd = cmnd;
    }
    this.getCMND = function () {
        return this.cmnd;
    }
    this.setBirthday = function (birthday) {
        this.birthday = birthday;
    }
    this.getBirthday = function () {
        return this.birthday;
    }
    this.setEmail = function (email) {
        this.email = email;
    }
    this.getEmail = function () {
        return this.email;
    }
    this.setAddress = function (address) {
        this.address = address;
    }
    this.getAddress = function () {
        return this.address;
    }
    this.setTypeService = function (typeService) {
        this.typeService = typeService;
    }
    this.getTypeService = function () {
        return this.typeService;
    }
    this.setTypeRoom = function (typeRoom) {
        this.typeRoom = typeRoom;
    }
    this.getTypeRoom = function () {
        return this.typeRoom;
    }
    this.setTypeCustomer = function (typeCustomer) {
        this.typeCustomer = typeCustomer;
    }
    this.getTypeCustomer = function () {
        return this.typeCustomer;
    }
    this.setDiscount = function (discount) {
        this.discount = discount;
    }
    this.getDiscount = function () {
        return this.discount;
    }
    this.setQuantityIncluded = function (quantityIncluded) {
        this.quantityIncluded = quantityIncluded;
    }
    this.getQuantityIncluded = function () {
        return this.quantityIncluded;
    }
    this.setRendDays = function (rendDays) {
        this.rendDays = rendDays;
    }
    this.getRendDays = function () {
        return this.rendDays;
    }
    this.totalPays = function () {
        let money = 0;
        if (this.getTypeService() === "Villa") {
            money = 500;
        } else if (this.getTypeService() === "House") {
            money = 300;
        } else if (this.getTypeService() === "Room") {
            money = 200;
        }
        let temp = 0;
        if (this.getAddress() === "Đà Nẵng") {
            temp += 20;
        } else if (this.getAddress() === "Huế") {
            temp += 10;
        } else if (this.getAddress() === "Quảng Nam") {
            temp += 5;
        }
        if (this.getRendDays() > 7) {
            temp += 30;
        } else if (this.getRendDays() > 5) {
            temp += 20;
        } else if (this.getRendDays() > 2) {
            temp += 10;
        }
        if (this.getTypeCustomer() === "Diamond") {
            temp += 15;
        } else if (this.getTypeCustomer() === "Platium") {
            temp += 10;
        } else if (this.getTypeCustomer() === "Gold") {
            temp += 5;
        } else if (this.getTypeCustomer() === "Silver") {
            temp += 2;
        } else if (this.getTypeCustomer() === "Member") {
            temp += 0;
        }
        return this.getRendDays()*money-temp;
    }
}