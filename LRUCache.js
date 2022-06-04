// My Solution ************************************************
/**
 * @param {number} capacity
 */
 var LRUCache = function(capacity) {
    this.capacity = capacity
    this.lruMap = new Map()
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    const value = this.lruMap.get(key)
    if(value != null){
        this.lruMap.delete(key)
        this.lruMap.set(key, value)
        return value
    }
    else {
        return -1;
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.lruMap.has(key)){
        this.lruMap.delete(key)
        this.lruMap.set(key, value)
    }
    else {
        if(this.lruMap.size < this.capacity){
            this.lruMap.set(key, value)
        }
        else {
            this.lruMap.delete(Array.from(this.lruMap.keys())[0])
            this.lruMap.set(key, value)
        }
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

// Other Solution ************************************************
var Node = function() {
    this.key = 0;
    this.value = 0;
    this.prev = null;
    this.next = null;
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.size = 0;
    this.cache = {};
    this.head = new Node();
    this.tail = new Node();
    
    this.head.next = this.tail;
    this.tail.prev = this.head.next;
};

LRUCache.prototype.removeNode = function(node) {
    var prev = node.prev;
    var newNode = node.next;
    prev.next = newNode;
    newNode.prev = prev;
}

LRUCache.prototype.addNode = function(node) {
    node.prev = this.head;
    node.next = this.head.next;
    this.head.next.prev = node;
    this.head.next = node;
}

LRUCache.prototype.popTail = function() {
    var res = this.tail.prev;
    this.removeNode(res);
    return res;
}

LRUCache.prototype.moveToHead = function(node) {
    this.removeNode(node);
    this.addNode(node);
}
/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    var node = this.cache[key];
    if (!node) {
        return -1;
    }
    
    this.moveToHead(node);
    return node.value;  
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    var node = this.cache[key];
    if (!node) {
        var newNode = new Node();
        newNode.key = key;
        newNode.value = value;
        this.cache[key] = newNode;
        this.addNode(newNode);
        this.size += 1;
        
        if (this.size > this.capacity) {
            var tail = this.popTail()
            delete this.cache[tail.key];
            this.size -= 1;
        }
    } else {
        node.value = value;
        this.moveToHead(node)
    }
};