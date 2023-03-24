import { createContext,  useState } from "react";

export const MainContext = createContext()

const MainContextProvider = ({ children }) => {
    const allChatUsers = [
        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
          id: '1',
          name: "Tim Hover",
          active: true,
          isOnline: true,
        },
        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU",
          id: '2',
          name: "Hamaad Dejesus",
          active: false,
          isOnline: false,
        },
        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ6tM7Nj72bWjr_8IQ37Apr2lJup_pxX_uZA&usqp=CAU",
          id: '3',
          name: "Eleni Hobbs",
          active: false,
          isOnline: true,
        },
        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJo1MiPQp3IIdp54vvRDXlhbqlhXW9v1v6kw&usqp=CAU",
          id: '4',
          name: "Elsa Black",
          active: false,
          isOnline: false,
        },
        {
          image:
            "https://huber.ghostpool.com/wp-content/uploads/avatars/3/596dfc2058143-bpfull.png",
          id: '5',
          name: "Kayley Mellor",
          active: false,
          isOnline: true,
        },
        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSM6p4C6imkewkCDW-9QrpV-MMAhOC7GnJcIQ&usqp=CAU",
          id: '6',
          name: "Allen Woodley",
          active: false,
          isOnline: true,
        },
        {
          image: "https://pbs.twimg.com/profile_images/770394499/female.png",
          id: '7',
          name: "Manpreet David",
          active: false,
          isOnline: true,
        },
        {
          image: "https://pbs.twimg.com/profile_images/770394499/female.png",
          id: '8',
          name: "Manpreet David",
          active: false,
          isOnline: true,
        },
      ];

    const [showPost, setShowPost] = useState(false)
    const onTargetPost = () => {
        setShowPost(true)
    }

    function unique(arr) {
      var newArr = []
      for (var i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) === -1) {
          newArr.push(arr[i])
        }
      }
      return newArr
    }
    const [showMessage, setShowMessage] = useState({
      idMess : []
    })

    const onClickFriend = (id) => {
        setShowMessage({idMess: unique([...showMessage.idMess,id])})
      }
    const handleCloseInboxChat = (id) =>{
      setShowMessage({
        ...showMessage, status: false
      })
      const index = showMessage.idMess.indexOf(id)
      showMessage.idMess.splice(index, 1)
      setShowMessage({
        ...showMessage, status: true
      })
      }

    const MainContextData = {
        onTargetPost, 
        showPost, 
        setShowPost, 
        onClickFriend, 
        setShowMessage, 
        showMessage, 
        allChatUsers, 
        handleCloseInboxChat,
    }
    return (
        <MainContext.Provider value={MainContextData}>
            {children}
        </MainContext.Provider>
    )
}
export default MainContextProvider