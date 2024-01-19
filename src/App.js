import React, { useEffect, useRef, useState } from "react";
import Picture from "./component/Pictures";
import Pictures from "./component/Pictures";


// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {show : false, title: "Coucou les amis"};
//   }

//   componentDidMount () {
//     // this.setState({title : "le composant a bien été monté" });
//   }

//   componentDidUpdate () {
//     console.log('le composant a été mis à jour');
//   }

//   render () {
//     return <div>
//       <h1 className="text-4xl text-purple-700 my-5">{this.state.title}</h1>
//       <button className="bg-purple-900 text-white rounded py-2 px-3" onClick={ } )}>Click</button>

//       {
//         this.state.show ? <Picture />: null
//       }
//     </div>
//   }
// }


export default function App() {

  // hook
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState('Coucou les amis');
  const isShowInitialize = useRef(false);

  useEffect(() => console.log('Composant App monté'), []); 
  useEffect(() => 
    {if (isShowInitialize.current) {
      console.log('Show mis à jour');
    }else{
      isShowInitialize.current = true;
    }},[show]
  ); 

  function handleClick () {
    setShow(!show);
  }


  return (
    <div>
      {console.log('JSX rendered')}
      <h1 className="text-4xl text-purple-700 my-5">{title}</h1>
      <button className="bg-purple-900 text-white rounded py-2 px-3" onClick={handleClick}>Click</button>

      {
        show ? <Pictures />: null
      }
    </div>
  );
}
