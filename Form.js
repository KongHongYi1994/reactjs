import React, { Component } from 'react';  
class Form extends Component{  
  constructor(props) {
    super(props)
    this.state = {
        file: null
    }
    this.uploadSingleFile = this.uploadSingleFile.bind(this)
    this.upload = this.upload.bind(this)
}

uploadSingleFile(e) {
    this.setState({
        file: URL.createObjectURL(e.target.files[0])
    })
}

upload(e) {
    e.preventDefault()
    console.log(this.state.file)
}

render() {
    let imgPreview;
    if (this.state.file) {
        imgPreview = <img src={this.state.file} alt=''  width="500" height="600"/>;
    }
    return (
      <div id='wrapper'>
        <div id="left" >
        <div>
          {imgPreview}
        </div>
        <h5>You may upload to 5 images (including thumbnail)</h5>
        <h6>Supported file types: jpeg,jpg,png </h6>      
        </div>
        <div id="right" >
          <form style={{textAlign: "left"}}>       
        <label>
          <br></br>
          <h2 >Product Name*</h2>
          <input type="text" name="name" />
          <br></br>
          <div style={{float: "right"}} >
          <h2>Thumbnail*</h2>
          <input type="file" name="image" accept="image/png, image/jpg, image/jpeg" onChange={this.uploadSingleFile}/>      
          </div>
          <h2>Category*</h2>
          <input type="radio" value="Collectibles" name="category" /> Collectibles
          <input type="radio" value="Accessories" name="category" /> Accessories
          <input type="radio" value="T-shirt" name="category" /> T-shirt
          <br></br> 
          <br></br>
          <h2>Description*</h2>
          <textarea name="description" rows="1" cols="50" maxlength="50">
          </textarea>    
          <br></br>
          <h2 >Available Qty*</h2>
          <input type="number" name="qty" />  
          <br></br>
          <h2>Condition*</h2>
          <input type="radio" value="Bad" name="condition" /> Bad
          <input type="radio" value="Fair" name="condition" /> Fair
          <input type="radio" value="Good" name="condition" /> Good
          <input type="radio" value="New" name="condition" /> New
          <br></br>
          <div style={{float: "right"}} >
          <h2>Retail*</h2>
          <input type="number" name="retail" />      
          </div>
          <h2 >Season</h2>
          <input type="number" name="season" />        
          <br></br>
          <h2 >Authenticity</h2>
          <h3>100%</h3>
          <br></br>
          <h2 >Declaration</h2>
          <input name="isGoing" type="checkbox"/> I heredby declare that my item is 100% authentic and in the original packaging. In the event that any information given in this application proves to be false or incorrect,I shall be responsible for the consequences.
        </label>
        <br></br><br></br>
        <div style={{float: "right"}} >
        <input type="reset" value="Cancel" />
        <input type="submit" value="Publish" />
        </div>
      </form>           
        </div>
      </div>
    )
}
}
export default Form; 