/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
 var ParkingSystem = function(big, medium, small) {
    this.big = big
    this.medium = medium
    this.small = small
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
    switch(carType){
        case 1:{
            if(this.big === 0){
                return false
            }
            this.big--
            return true
        }
        case 2:{
            if(this.medium === 0){
                return false
            }
            this.medium--
            return true
        }
        case 3:{
            if(this.small === 0){
                return false
            }
            this.small--
            return true
        }
        default:{
            return false
        }
    }
};

/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */