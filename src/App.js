// import React, { useState, useEffect } from 'react';
// import './App.css';

// function App() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(data => {
//         setUsers(data);
//       })
//       .catch(error => console.log(error));
//   }, []);

//   const deleteUser = id => {
//     setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
//   };

//   const [likedUsers, setLikedUsers] = useState([]);

//   const toggleLike = id => {
//     if (likedUsers.includes(id)) {
//       setLikedUsers(prevLikedUsers => prevLikedUsers.filter(userId => userId !== id));
//     } else {
//       setLikedUsers(prevLikedUsers => [...prevLikedUsers, id]);
//     }
//   };

//   return (
//     <div>
//       <div className="card-container">
//         {users.map(user => (
//           <div className="card" key={user.id}>
//             <div className="message">You are using an outdated API endpoint.</div>
//             <div className="info">
//               <div className="name">{user.name}</div>
//               <div className="email">{user.email}</div>
//               <div className="phone">{user.phone}</div>
//               <div className="website">{user.website}</div>
//               <div className="action-buttons">
//                 <button onClick={() => deleteUser(user.id)}>Delete</button>
//                 <button onClick={() => toggleLike(user.id)}>
//                   {likedUsers.includes(user.id) ? (
//                     <span className="liked">&#10084;</span>
//                   ) : (
//                     <span>&#10084;</span>
//                   )}
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;



// import React, { useState, useEffect } from 'react';
// import './App.css';
// import ReactDOM from 'react-dom';
// import EditForm from './EditForm';

// function App() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(data => {
//         setUsers(data);
//       })
//       .catch(error => console.log(error));
//   }, []);

//   const deleteUser = id => {
//     setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
//   };

//   const toggleLike = id => {
//     // Implement your toggle like logic here
//   };

//   const openEditPopup = user => {
//     const editPopup = window.open('', 'Edit User', 'width=400,height=400');
//     editPopup.document.body.innerHTML = `
//       <div id="editForm"></div>
//     `;
//     const editForm = (
//       <EditForm
//         user={user}
//         onSave={editedUser => {
//           setUsers(prevUsers =>
//             prevUsers.map(u => (u.id === editedUser.id ? editedUser : u))
//           );
//           editPopup.close();
//         }}
//         onClose={() => editPopup.close()}
//       />
//     );
//     ReactDOM.render(editForm, editPopup.document.getElementById('editForm'));
//   };

//   return (
//     <div>
//       <div className="card-container">
//         {users.map(user => (
//           <div className="card" key={user.id}>
//             <div className="message">You are using an outdated API endpoint.</div>
//             <div className="info">
//               <div className="name">{user.name}</div>
//               <div className="email">{user.email}</div>
//               <div className="phone">{user.phone}</div>
//               <div className="website">{user.website}</div>
//               <div className="action-buttons">
//                 <button onClick={() => deleteUser(user.id)}>Delete</button>
//                 <button onClick={() => toggleLike(user.id)}>
//                   {/* Implement your like button logic here */}
//                 </button>
//                 <button onClick={() => openEditPopup(user)}>Edit</button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;





import React, { useState, useEffect } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import EditForm from './EditForm';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
      })
      .catch(error => console.log(error));
  }, []);

  const deleteUser = id => {
    setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
  };

  const toggleLike = id => {
    setUsers(prevUsers =>
      prevUsers.map(user =>
        user.id === id ? { ...user, liked: !user.liked } : user
      )
    );
  };

  const openEditPopup = user => {
    const editPopup = window.open('', 'Edit User', 'width=400,height=400');
    editPopup.document.body.innerHTML = `
      <div id="editForm"></div>
    `;
    const editForm = (
      <EditForm
        user={user}
        onSave={editedUser => {
          setUsers(prevUsers =>
            prevUsers.map(u => (u.id === editedUser.id ? editedUser : u))
          );
          editPopup.close();
        }}
        onClose={() => editPopup.close()}
      />
    );
    ReactDOM.render(editForm, editPopup.document.getElementById('editForm'));
  };

  return (
    <div>
      <div className="card-container">
        {users.map(user => (
          <div className="card" key={user.id}>
            {/* <div className="message">You are using an outdated API endpoint.</div> */}
            <img src="https://tse4.mm.bing.net/th?id=OIP.TctatNGs7RN-Dfc3NZf91AAAAA&pid=Api&P=0&h=220" alt="Person" class="card__image"></img>
           <hr/>
            <div className="info">
              <div className="name">{user.name}</div>
              <div className="email">{user.email}</div>
              <div className="phone">{user.phone}</div>
              <div className="website">{user.website}</div>
              <div className="action-buttons">
                <hr/>
                <button onClick={() => deleteUser(user.id)}>Delete</button>
                <button onClick={() => openEditPopup(user)}>Edit</button>
                <button onClick={() => toggleLike(user.id)}>
                  {user.liked ? <span className="liked">&#10084;</span> : <span>&#10084;</span>}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
