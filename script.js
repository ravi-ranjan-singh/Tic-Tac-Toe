
document.querySelector('.start').addEventListener('click',function () {
    var pname1=prompt('Enter Player 1 Name');
    var pname2=prompt('Enter Player 2 Name');
    document.querySelector('.player1').classList.add('blink');
    document.querySelector('.player1').textContent=pname1 +' (X)';
    document.querySelector('.player2').textContent=pname2 +' (O)';
    var gameArray=[];
    var playerActive='X'
    document.querySelector('.btn-turn').addEventListener('click',function () {
        if (playerActive==='X') {
            playerActive='O'
            document.querySelector('.player2').classList.add('blink')
            document.querySelector('.player1').classList.remove('blink')
        } else {
            playerActive='X'
            document.querySelector('.player1').classList.add('blink')
            document.querySelector('.player2').classList.remove('blink')
        }
    })
    
    for (let i = 0; i < 9; i++) {
             document.querySelector('.b'+(i+1)).addEventListener('click',function () {
                document.querySelector('.b'+(i+1)).textContent=playerActive
                gameArray[i]=playerActive
                if (   (gameArray[0]==='X' && gameArray[1]==='X' && gameArray[2]==='X' )  || (gameArray[3]==='X' && gameArray[4]==='X' && gameArray[5]==='X' )  || (gameArray[6]==='X' && gameArray[7]==='X' && gameArray[8]==='X' )  
                ||(gameArray[0]==='X' && gameArray[3]==='X' && gameArray[6]==='X' )  ||(gameArray[1]==='X' && gameArray[4]==='X' && gameArray[7]==='X' )  ||(gameArray[2]==='X' && gameArray[5]==='X' && gameArray[8]==='X' ) ||
                (gameArray[0]==='X' && gameArray[4]==='X' && gameArray[8]==='X' ) || (gameArray[2]==='X' && gameArray[4]==='X' && gameArray[6]==='X' )
            ) 
            {
                document.querySelector('.main-block').style.display='none'
                document.querySelector('.winner1').textContent=pname1 +' Is Winner';
                document.querySelector('.winner1').style.display='block'
                document.querySelector('.player1').style.display='none'
                document.querySelector('.player2').style.display='none'
                document.querySelector('.btn-turn').style.display='none'
    
               
                 }
                 else if (   (gameArray[0]==='O' && gameArray[1]==='O' && gameArray[2]==='O' )  || (gameArray[3]==='O' && gameArray[4]==='O' && gameArray[5]==='O' )  || (gameArray[6]==='O' && gameArray[7]==='O' && gameArray[8]==='O' )  
                 ||(gameArray[0]==='O' && gameArray[3]==='O' && gameArray[6]==='O' )  ||(gameArray[1]==='O' && gameArray[4]==='O' && gameArray[7]==='O' )  ||(gameArray[2]==='O' && gameArray[5]==='O' && gameArray[8]==='O' ) ||
                 (gameArray[0]==='O' && gameArray[4]==='O' && gameArray[8]==='O' ) || (gameArray[2]==='O' && gameArray[4]==='O' && gameArray[6]==='O' )  ) {
                    document.querySelector('.main-block').style.display='none'
                    document.querySelector('.winner2').textContent=pname2 +' Is Winner';
                    document.querySelector('.winner2').style.display='block'
                    document.querySelector('.btn-turn').style.display='none'
                    document.querySelector('.player1').style.display='none'
                    document.querySelector('.player2').style.display='none'
             
                 }
    
                 else if((gameArray.length===9) && function () {
                     
    for (let k = 0; k < 10; k++) {
        
        if (gameArray[i]==='') {
            return false;
        }
    
        else return true;
        
    }
    
                 }) 
                {
                
                    document.querySelector('.main-block').style.display='none'
                    document.querySelector('.draw').style.display='block'
                    document.querySelector('.player1').style.display='none'
                document.querySelector('.player2').style.display='none'
                document.querySelector('.btn-turn').style.display='none'
                 }
            } )
        
        }
    
    
    document.querySelector('.reset').addEventListener('click',function () {
        gameArray=[];
        document.querySelector('.main-block').style.display='block'
        document.querySelector('.winner1').style.display='none'
        document.querySelector('.winner2').style.display='none'
        document.querySelector('.draw').style.display='none'
        document.querySelector('.player1').style.display='block'
                document.querySelector('.player2').style.display='block'
                document.querySelector('.btn-turn').style.display='block'
    
        for (let i = 0; i < 9; i++) {
               document.querySelector('.b'+(i+1)).textContent=' ';
            }
            document.querySelector('.player1').classList.add('blink');
            document.querySelector('.player2').classList.remove('blink');
            playerActive='X'
    
    })
    






    
})









