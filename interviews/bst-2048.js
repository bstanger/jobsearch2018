/*

Node {
Node right, left
int value
}

isValidBst(root) => boolean
	Var isBST = true;
	Var recurseChildren = (node, min, max, leftOrRight) => {
		if(!node){
	return;
}
	Var leftChild = node.left;
	Var rightChild = node.right;
	if(!leftOrRight){
recurseChildren(leftChild, null, node.value, ‘left’)
recurseChildren(rightChild, node.value, null, ‘right’);
return;
}
	if(leftChild > node.value || rightChild < node.value){
		Return isBST = false;
}
if(leftOrRight === ‘left’ || node.value > parentValue){
	Return isBST = false;
if(leftOrRight === right || node.value < parentValue){
	Return isBST = false;

}

	recurseChildren(root);
	Return isBST;

     8
   /   \
  3     10
 / \   / \
1   6 F   G
   /   \
  H     I

========


/////////////////////////////////////////////////////////////////////////////////////


http://2048game.com/


4 x 4

// Class board
	This.board = [[null, null, null, null],
[null, null, null, null],
[null, null, null, null],
[null, null, null, null]]

// fn randomStartBoard() => return 2 locations, 2 random values



Board:
State
Board: 4 x 4 matrix
Score
GameStatus: Playing, Won, Lost
Functions
randomStartBoard
Input null => 2 locations, 2 random values
shiftBoard
Input: direction user (L, R, U, D)
Trigger fun processRightMerges
if(processRightMerges is true) → addNewTile
processRightMerges
Input: null
Board → rows → each (last → first)
processRightMergesForRow(row_index)
Return boolean isChanged
If 0 isChanged, return false
Return boolean of isValid
addNewTile
Input: null
Return random tile
indicateStatus
Input: status
Output: indicate to user game status

2 x 2 x → x x x 4
2 4 2 2 → x 2 4 4
x x x x → x x x x (no change)
2 4 8 4 → 2 4 8 4 (no change)

*/
