class SortedList {
  constructor() {
    //Iteration 1
    this.items = [];
    this.length = this.items.length;
  }

  //Iteration 2
  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos > this.items.length - 1) {
      throw new Error('OutOfBounds');
    } else {
      return this.items[pos];
    }
  }

  max() {
    let maxNum = -Infinity;
    if (this.items.length < 1) {
      throw new Error('EmptySortedList');
    }
    for (let el of this.items) {
      if (el > maxNum) {
        maxNum = el;
      }
    }

    return maxNum;
  }

  min() {
    let minNum = Infinity;
    if (this.items.length < 1) {
      throw new Error('EmptySortedList');
    }
    for (let el of this.items) {
      if (el < minNum) {
        minNum = el;
      }
    }

    return minNum;
  }

  sum() {
    let sum;
    if (this.items.length === 0) {
      sum = 0;
    } else {
      sum = this.items.reduce((acc, val) => {
        return acc + val;
      }, 0);
    }
    return sum;
  }

  avg() {
    let avg;
    if (this.items.length < 1) {
      throw new Error('EmptySortedList');
    } else {
      avg =
        this.items.reduce((acc, val) => {
          return acc + val;
        }, 0) / this.items.length;
    }
    return avg;
  }
}

module.exports = SortedList;
