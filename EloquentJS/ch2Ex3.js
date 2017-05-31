// Chess board

/*chessBoard = '# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n # # # #';

console.log(chessBoard);*/

size = 8;
var count = 1;
for (count; count <= size; count++) {
    if (count % 2 === 0) {
        console.log(' # # # #');
    } else {
        console.log('# # # # ');
    }
}