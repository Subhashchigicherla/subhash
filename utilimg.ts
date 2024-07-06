utilimg.js

-----------

export default function GetImageUrl(person, size = 's') {

  return (

   'https://i.imgur.com/' +

   person.imageId +

   size +

   '.jpg'

  );

 }



--------------------------------------------------------------------------------------------

avatar.js

---------

import GetImageUrl from "./utilimg";



export default function Avatar({ person, size }) {

  return (

   <img

    className="avatar"

    src={GetImageUrl(person)}

    alt={person.name}

    width={size}

    height={size}

   />

  );

 }

   

-----------------------------------------------------------------------------

avatarpro.js

----------------

import Avatar from './avataar';

import './styles.css';

export default function Profile() {

 return (

  <div>

   <h1>Different Avatars</h1>

   <Avatar

    person={{

     name: 'Katsuko Saruhashi',

     imageId: 'YfeOqp2'

    }}

    size={200}

   />

   <Avatar

    size={150}

    person={{

     name: 'Aklilu Lemma',

     imageId: 'OKS67lh'

    }}

   />

   <Avatar

    size={100}

    person={{

     name: 'Lin Lanying',

     imageId: '1bX5QH6'

    }}

   />

   <hr/>

  </div>

 );

}











