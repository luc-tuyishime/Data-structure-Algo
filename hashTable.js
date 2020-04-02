function hashTable(size) { // how big it is or how many bucket it has
    this.buckets = Array(size);
    this.numBuckets = this.buckets.length;
}

function hashNode(key, value, next) {
    this.key = key;
    this.value = value;
    this.next = next || null;
}

hashTable.prototype.hash = function (key) {
    var total = 0;
    for (var i = 0; i < key.length; i++) {
        total += key.charCodeAt(i);
    }
    var bucket = total % this.numBuckets;
    return bucket;
}

hashTable.prototype.insert = function (key, value) {

}

var myHT = new hashTable(30);
console.log(myHT.hash('de'));