import styles from '../styles/Home.module.css';
import Image from 'next/image';


function Gallery(){
  filterSelection("all")
  function filterSelection(c) {
    if(process.browser){
      var x, i;
      x = document.getElementsByClassName("column");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
      w3RemoveClass(x[i], "show");
      if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
  }
  }
  
  function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
    }
  }
  
  function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);     
      }
    }
    element.className = arr1.join(" ");
  }
  
  
  // Add active class to the current button (highlight it)
  if(process.browser){
    var btnContainer = document.getElementById("myBtnContainer");
  if (btnContainer !== null){
    var btns = btnContainer.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
  }
  }
    return(
      <div className={styles.container}>
      <header>
          <h1 className={styles.title}>
            My Gallery
          </h1>
          <hr className={styles.hr}/>
          <p className={styles.description}>
            Hello there,
            <br/>
           Just showcasing my skills
          </p>
      </header>
      <div id="myBtnContainer">
        <button className={styles.btnactive} onclick="filterSelection('all')"> Show all</button>
        <button className={styles.btn} onclick="filterSelection('nature')"> Nature</button>
        <button className={styles.btn} onclick="filterSelection('cars')"> Cars</button>
        <button className={styles.btn} onclick="filterSelection('people')"> People</button>
      </div>
      <div className={styles.row}>
        <div className={styles.column}>
          <div className={styles.nature}>
          <div className={styles.content}>
            <Image src="/1.jpg" alt="Mountains" width={50} height={40}/>
            <h4>Mountains</h4>
            <p>Lorem ipsum dolor..</p>
          </div>
        </div>
        </div>
        <div className={styles.column}>
          <div className={styles.nature}>
          <div className={styles.content}>
            <Image src="/1.jpeg" alt="Mountains" width={50} height={40}/>
            <h4>Mountains</h4>
            <p>Lorem ipsum dolor..</p>
          </div>
        </div>
        </div>
        <div className={styles.column}>
          <div className={styles.nature}>
          <div className={styles.content}>
            <Image src="/1.jpeg" alt="Mountains" width={50} height={40}/>
            <h4>Mountains</h4>
            <p>Lorem ipsum dolor..</p>
          </div>
        </div>
        </div>
        
        <div className={styles.column}>
          <div className={styles.cars}>
          <div className={styles.content}>
            <Image src="/2.jpg" alt="Mountains" width={50} height={40}/>
            <h4>Mountains</h4>
            <p>Lorem ipsum dolor..</p>
          </div>
        </div>
        </div>
        <div className={styles.column}>
          <div className={styles.cars}>
          <div className={styles.content}>
            <Image src="/2.jpg" alt="Mountains" width={50} height={40}/>
            <h4>Mountains</h4>
            <p>Lorem ipsum dolor..</p>
          </div>
        </div>
        </div>
        <div className={styles.column}>
          <div className={styles.cars}>
          <div className={styles.content}>
            <Image src="/2.jpg" alt="Mountains" width={50} height={40}/>
            <h4>Mountains</h4>
            <p>Lorem ipsum dolor..</p>
          </div>
        </div>
        </div>

        <div className={styles.column}>
          <div className={styles.people}>
          <div className={styles.content}>
            <Image src="/3.jpg" alt="Mountains" width={50} height={40}/>
            <h4>Mountains</h4>
            <p>Lorem ipsum dolor..</p>
          </div>
        </div>
        </div>
        <div className={styles.column}>
          <div className={styles.people}>
          <div className={styles.content}>
            <Image src="/3.jpg" alt="Mountains" width={50} height={40}/>
            <h4>Mountains</h4>
            <p>Lorem ipsum dolor..</p>
          </div>
        </div>
        </div>
        <div className={styles.column}>
          <div className={styles.people}>
          <div className={styles.content}>
            <Image src="/3.jpg" alt="Mountains" width={50} height={40}/>
            <h4>Mountains</h4>
            <p>Lorem ipsum dolor..</p>
          </div>
        </div>
        </div>   
      </div>
    </div>
    )
   }
   export default Gallery