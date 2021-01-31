import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const HeadNode=()=>{

    return <><div className="Body">
    <form>
      <input type="text" name="" placeholder="title" /> <br/>
<textarea rows="15" cols="15" placeholder="Body"></textarea>  
<Button className="change" variant="contained"><AddIcon/></Button>    
         </form>
  </div></>
}

export default HeadNode