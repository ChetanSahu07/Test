var n = document.querySelectorAll(".box").length;

function fill(){
    for( var i=0 ; i<n ; i++ ){
        document.querySelectorAll(".box")[i].value="-" ;
    }
}

document.querySelector("#b1").addEventListener( "click" , fill ) ;
document.querySelector("#b2").addEventListener( "click" , upload ) ;
document.querySelector("#b3").addEventListener( "click" , solve1 ) ;

let arr = [] ;

function upload(){
    var m = 0 ;
for( var i=0 ; i<9 ; i++ ){
    arr[i] = [] ;
    for( var j=0 ; j<9 ; j++ ){
        var val = document.querySelectorAll(".box")[m].value ;
        m++;
        arr[i][j] = val ;
    }
}
    if( valid() ){
        alert("Valid Sudoku") ;
    }
    else{
        alert("Not Valid") ;
    }
}

function check( r , c){
    var num = arr[r][c] ;
        for( var i=r-1 ; i>=0 ; i-- ){
            if( arr[i][c]===num ){  return false ; }
        }
        for( var i=r+1 ; i<9 ; i++ ){
            if( arr[i][c]===num ){ return false ; }
        }
        for( var j=c-1 ; j>=0 ; j-- ){
            if( arr[r][j]===num ){ return false ; }
        }
        for( var j=c+1 ; j<9 ; j++ ){
            if( arr[r][j]===num ){ return false ; }
        }
        var newr = Math.floor(r/3) ;
        var newc = Math.floor(c/3) ;

        for( var i=newr*3 ; i<=(newr*3 + 2 ) ; i++ ){
            for( var j=newc*3 ; j<=(newc*3 + 2 ) ; j++ ){
                if(i===r && j===c ){ continue  ;} 
                if( arr[i][j]===num ){ return false ; }
            }
        }
        return true ;
}
function valid(){
    for( var i=0 ; i<9; i++ ){
        for( var j=0 ; j<9 ; j++ ){
            if( arr[i][j]=="-" ){ continue ; }
            if( check( i , j)==false ){
                return false ;
            }
        }
    }
    return true ;
}

function solve1(){
    solve() ;
    var m = 0 ;
for( var i=0 ; i<9 ; i++ ){
    for( var j=0 ; j<9 ; j++ ){
        document.querySelectorAll(".box")[m].value = arr[i][j] ;
        m++;
    }
}
}
function solve(){
    var r = -1 ;
    var c = -1 ;

        for( var i=0 ; i<9 ; i++ ){
            for( var j=0 ; j<9 ; j++ ){
                if( arr[i][j]==="-"){
                    r=i ; c=j ;
                    break;
                }
            }
        }
        if( r===-1 && c===-1 ){
            return true ;
        }
        for( var i=1 ; i<=9 ; i++){
            arr[r][c] = i ;
            if( check( r , c ) ){
                if( solve() ){
                    return true ;
                }
            }
        }
        arr[r][c] = "-" ;
        return false ;
}
