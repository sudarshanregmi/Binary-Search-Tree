var insertButton;
var bg=240;
var updated = false;
var highlight = false;
var tempNode;

class Node{
  constructor(key){
    this.key = key;
    this.left = null;
    this.right = null;
		this.x = null;
		this.y = null;
  }
	draw(){
		ellipse(this.x, this.y, 50);
	}
}

class BST{
  constructor(){
    this.root = null;
    console.log("Constructor called");
  }
  insert(key, node=this.root){
    if(this.root == null){
      this.root = new Node(key);
      return this.root;
    }else{
      if(node == null){
         return new Node(key);
      }else if (key > node.key){
        node.right = this.insert(key, node.right);
      }else{
        node.left = this.insert(key, node.left);
      }
      return node;
    }
  }

	findMin(node){
		while (node.left!=null) {
			console.log(node.key);
			node=node.left;
		}
		return node;
	}
	
	deleteNode(key, node=this.root){
		if (node==null) {
			return node;
		}else if(key > node.key){
			node.right = this.deleteNode(key, node.right);
		}else if(key < node.key){
			node.left = this.deleteNode(key, node.left);
		}else{
			if (node.left === null && node.right === null) {
				if (node === this.root) {
					this.root = node = null;
				}
				node = null;
			}else if(node.left === null){
				if (node === this.root) {
					this.root = node = node.right;
				}else{
					node = node.right;
				}
			}else if(node.right === null){
				if (node === this.root) {
					this.root = node = node.left;
				}else{
					node = node.left;
				}
			}else{
				var temp = this.findMin(node.right);
				node.key = temp.key;
				node.right = this.deleteNode(temp.key, node.right);
			}
		}
		return node;
	}
  inorder(node=this.root, x=width/2, y=50, spaceFactor=310){
    if(node!=null){
      stroke(230);
			strokeWeight(4);
      if(node.left!=null){
        line(x, y, x-spaceFactor, y+65);
      }
      if(node.right!=null){
        line(x, y, x+spaceFactor, y+65);
      }
      this.inorder(node.left, x-spaceFactor, y+65, spaceFactor/2);
			stroke(25, 255, 20); 
      ellipse(x, y, 50, 50);
			strokeWeight(1);
      textSize(22);
      text(node.key ,x-12, y+7);
			console.log(node.key);
			strokeWeight(4);
      this.inorder(node.right, x+spaceFactor, y+65, spaceFactor/2);
    }
		console.log("New traversal");
  }
	searchNode(key, node=this.root, x=width/2, y=50, spaceFactor=310){
		if (node==null) {
			alert("Not Found");
		}else if( node.key === key ){
			node.x = x;
			node.y = y;
			tempNode = node;
			// alert("Found", key);
		}else if(key > node.key){
			return this.searchNode(key, node.right, x+spaceFactor, y+65, spaceFactor/2);
		}else{
			return this.searchNode(key, node.left, x-spaceFactor, y+65, spaceFactor/2);
		}
	}
}

var bst = new BST();

function setup() {
  createCanvas(1250, 450);
  
  inputInsert = createInput();
  inputInsert.size(50, 48);
  inputInsert.position(40, 555);

  buttonInsert = createButton('Insert');
  buttonInsert.position(inputInsert.x + inputInsert.width-5, 555);
	buttonInsert.addClass('button');
	buttonInsert.addClass('buttonInsert');
  buttonInsert.mousePressed(insertNode);
  
  inputDel = createInput();
  inputDel.size(50, 48);
  inputDel.position(250, 555);
  
  buttonDel = createButton('Delete');
  buttonDel.position(inputDel.x + inputDel.width, 555);
	buttonDel.addClass('button');
	buttonDel.addClass('buttonDel');
  buttonDel.mousePressed(delNode);
  
  inputSearch= createInput();
  inputSearch.size(50, 48);
	// inputDel.textSize(32);
  inputSearch.position(450, 555);
  
  buttonSearch= createButton('Search');
  buttonSearch.position(inputSearch.x + inputSearch.width, 555);
	buttonSearch.addClass('button');
	buttonSearch.addClass('search');
  buttonSearch.mousePressed(searchNode);

	// background(66, 135, 245);
	background(66, 176, 245);
}

function draw() {
  if(updated){
		background(66, 176, 245);
		// background(66, 135, 245);
		bst.inorder();
		if (highlight) {
			stroke(255, 25, 20); 
			strokeWeight(5);
			ellipse(tempNode.x, tempNode.y, 50);
      textSize(22);
			strokeWeight(1);
      text(tempNode.key ,tempNode.x-12, tempNode.y+7);
			highlight = false;
		}
    updated= false;
  }
}

function insertNode(){
  const val = parseInt(inputInsert.value());
  updated = true;
  bst.insert(val);
}

function delNode(){
	const val = parseInt(inputDel.value());
	updated = true;
	bst.deleteNode(val);
}

function searchNode(){
	const val = parseInt(inputSearch.value());
	updated = true;
	highlight = true;
	bst.searchNode(val);
}
