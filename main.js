const Node = (value) =>{
  return {
    value,
    next : null
  }
}

const Lil = () => {
  return {
    head : null,
    addToStart: function(value){
    if (this.head){ 
      const prev = this.head
      this.head = Node(value)
      this.head.next = prev
    }
    else{
    this.head = Node(value)
    }
    },
    addToEnd: function(value){
      let next = this.head
      if (this.head){
        if(this.head.next === null){
          this.head.next = Node(value)
        }else{
          while(next.next){
            next = next.next
          }
          next.next = Node(value)
        }
      }
      else {
        this.head = Node(value)
      }
    },
    removeFromStart: function(){
      const prev = this.head
      this.head = this.head.next
      return prev.value
    },
    removeFromEnd: function(){
      let next = this.head
      let next2 =this.head.next
      while(next2.next){

        next = next2
        next2 = next2.next
      }
      console.log(next)
      console.log(next2)
      next.next = null
      return next2.value
    },
    getAt: function(num){
      if (!this.head){
      return this.head
    }else {
      let current = this.head
      for (let i = 0 ; i < num ; i++){
        current = current.next
      }
      return current.value
    }
    },
    removeAt: function(num){

      this.getAt(num)
    }
  }
}




if (typeof Node === 'undefined') {
  Node = undefined;
}

if (typeof Lil === 'undefined') {
  Lil = undefined;
}


module.exports = {
  Lil,
  Node,
}
