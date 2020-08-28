// which movement does this chess piece make?

let chessPiece = 'PAWN'

switch (chessPiece.toLowerCase()) {
    case 'king':
        console.log('King: One house to any direction.');
        break;
    
    case 'queen':
        console.log('Queen: Moves in any direction how many houses possible.');
        break;

    case 'bishop': 
        console.log('Bishop: Moves in the diagonals how many houses possible.');
        break;

    case 'horse':
        console.log('Horse: Moves four houses in a L route.');
        break;
        
    case 'tower':
        console.log('Tower: Moves in horizontal and vertical how many houses possible.');
        break;

    case 'pawn':
        console.log('Pawn: Moves two houses to the front in the first movment, after that moves just one house to the front.');
        break;

    default:
        console.log('It dont represent a chess piece.');
};
