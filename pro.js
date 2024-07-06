export default function Prodolist(){
  const homeaddres= "https://i.imgur.com/4umNOKy.png";
  const descalt="beautiful home";
 return(
  <>
  <h1>Todo list at Home</h1>
  <img src= {homeaddres} alt= {descalt}
  className="photo"/>
  <ul>
    <li>Assign House keeping tasks to servants</li>
    <li>Get groceries from the market</li>
    <li>Prepare dinner for all</li>
   </ul>
   <hr/>
  </>
 );
}

