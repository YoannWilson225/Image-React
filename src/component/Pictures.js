import React, { useEffect, useState } from 'react'
import Picture from './Picture';

// export default class Picture extends Component {

//     constructor (props) {
//         super(props);
//         this.state = {timer : null};
//     }

//     componentDidMount() {
//         this.setState({
//             timer: setInterval(() => {
//                 console.log ("Timer appelé");
//             }, 1000)
//         });
//     }

//     componentWillUnmount () {
//         console.log('Composant picture demonté');
//         clearInterval(this.state.timer); 
//     }

//   render() {
//     return (            
//         <img className="w-40 mx-auto" src="logo192.png" alt="logo"/>
//     )
//   }
// }

export default function Pictures () {

    // hook
    // const [timer, setTimer] = useState(null);

    const [images, setImages] = useState([
        'back.png',
        'electric-power-line-in-extremely-high-rocky-mounta-2023-11-27-05-03-13-utc.jpg',
        'electric-power-station-2023-11-27-05-32-38-utc.jpg',
        'mountains-based-power-plant-2023-11-27-05-13-17-utc.jpg',
        'the-electric-power-2023-11-27-05-36-50-utc.jpg'
    ]);

    const [image,setImage] = useState(null);

    function ImagesComponent() {
        return images.map((image, index) => <Picture imageName={image} index={index} handleRemove= {handleRemoveImage}/>);
    }

    function handleRemoveImage (index) {
        setImages(images.filter((image, i) => i !== index));
    }

    function handleImageName(e) {
        setImage(e.target.value);
    }

    function addImageName () {
        let newImages = [...images, image];
        setImages(newImages);
    }

    useEffect(() => {
        const timer = setInterval(() => {
            console.log('Timer appelé')
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className='container mx-auto'>
            <div className='flex items-center justify-between'>
                <ImagesComponent/>
            </div>
            <div className='mt-5'>
                <input type='text' className='border border-gray-600 shadow rounded p-3 mr-2 outline-none' onChange={handleImageName}/>
                <button type='submit' className='bg-purple-400 text-white rounded p-3' onClick={addImageName}>Valider</button>
            </div>
        </div>
    );
}


