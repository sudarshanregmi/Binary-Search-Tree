var insertButton;
var bg=240;
var yes = true;

class Node{
  constructor(key){
    this.key = key;
    this.left = null;
    this.right = null;
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
  inorder(node=this.root, x=width/2, y=50, spaceFactor=310){
    if(node!=null){
      stroke(180);
      if(node.left!=null){
        line(x, y, x-spaceFactor, y+65);
      }
      if(node.right!=null){
        line(x, y, x+spaceFactor, y+65);
      }
      this.inorder(node.left, x-spaceFactor, y+65, spaceFactor/2);
      
      ellipse(x, y, 50, 50);
      textSize(22);
      text(node.key ,x-12, y+7);
      this.inorder(node.right, x+spaceFactor, y+65, spaceFactor/2);
    }
  }
}

var bst = new BST();

function setup() {
  createCanvas(1250, 450);
  
  inputInsert = createInput();
  inputInsert.size(50, 48);
	// inputInsert.textSize(32);
  inputInsert.position(40, 555);

  buttonInsert = createButton('Insert');
  buttonInsert.position(inputInsert.x + inputInsert.width-5, 555);
	buttonInsert.addClass('button');
	buttonInsert.addClass('buttonInsert');
  buttonInsert.mousePressed(insertNode);
  
  inputDel = createInput();
  inputDel.size(50, 48);
	// inputDel.textSize(32);
  inputDel.position(250, 555);
  
  buttonDel = createButton('Delete');
  buttonDel.position(inputDel.x + inputDel.width, 555);
	buttonDel.addClass('button');
	buttonDel.addClass('buttonDel');
  // buttonDel.mousePressed(insertDel);
  
  inputSearch= createInput();
  inputSearch.size(50, 48);
	// inputDel.textSize(32);
  inputSearch.position(450, 555);
  
  buttonSearch= createButton('Search');
  buttonSearch.position(inputSearch.x + inputSearch.width, 555);
	buttonSearch.addClass('button');
	buttonSearch.addClass('search');
  // buttonSearch.mousePressed(insertSearch);

  background(245);
}

function draw() {
  if(yes){
    background(bg);
		// bst.insert(50);
		// bst.insert(80);
		// bst.insert(20);
		// bst.insert(90);
		// bst.insert(10);
		// bst.insert(5);
		// bst.insert(3);
		// bst.insert(1);
		// bst.insert(4);
		// bst.insert(35);
		// bst.insert(15);
		// bst.insert(8);
		// bst.insert(13);
		// bst.insert(6);
		// bst.insert(9);
		// bst.insert(12);
		// bst.insert(14);
		// bst.insert(18);
		// bst.insert(17);
		// bst.insert(19);
		// bst.insert(43);
    // bst.insert(27); 
		// bst.insert(31);
		// bst.insert(22);
		// bst.insert(25);
		// bst.insert(29);
		// bst.insert(33);
		// bst.insert(39);
		// bst.insert(47);
		// bst.insert(37);
		// bst.insert(42);
		// bst.insert(46);
		// bst.insert(48);
		// bst.insert(70);
		// bst.insert(60);
		// bst.insert(57);
		// bst.insert(55);
		// bst.insert(21);
		// bst.insert(95);
		// bst.insert(97);
		// bst.insert(99);
		// bst.insert(96);
		// bst.insert(93);
		// bst.insert(94);
		// bst.insert(92);
		// bst.insert(85);
		// bst.insert(88);
		// bst.insert(89);
		// bst.insert(87);
		// bst.insert(83);
		// bst.insert(84);
		// bst.insert(82);
		// bst.insert(74);
		// bst.insert(77);
		// bst.insert(79);
		// bst.insert(72);
		// bst.insert(73);
		// bst.insert(71);
		// bst.insert(76);
		// bst.insert(64);
		// bst.insert(68);
		// bst.insert(62);
		// bst.insert(59);
		bst.inorder();
    yes = false;
  }
}

function insertNode(){
  const val = parseInt(inputInsert.value());
  yes = true;
  bst.insert(val);
}
