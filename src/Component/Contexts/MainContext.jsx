import { createContext, useState } from "react";

export const MainContext = createContext()

const MainContextProvider = ({ children }) => {
    const allChatUsers = [
        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
          id: 1,
          name: "Tim Hover",
          active: true,
          isOnline: true,
        },
        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU",
          id: 3,
          name: "Hamaad Dejesus",
          active: false,
          isOnline: false,
        },
        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ6tM7Nj72bWjr_8IQ37Apr2lJup_pxX_uZA&usqp=CAU",
          id: 4,
          name: "Eleni Hobbs",
          active: false,
          isOnline: true,
        },
        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJo1MiPQp3IIdp54vvRDXlhbqlhXW9v1v6kw&usqp=CAU",
          id: 5,
          name: "Elsa Black",
          active: false,
          isOnline: false,
        },
        {
          image:
            "https://huber.ghostpool.com/wp-content/uploads/avatars/3/596dfc2058143-bpfull.png",
          id: 6,
          name: "Kayley Mellor",
          active: false,
          isOnline: true,
        },
        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSM6p4C6imkewkCDW-9QrpV-MMAhOC7GnJcIQ&usqp=CAU",
          id: 9,
          name: "Allen Woodley",
          active: false,
          isOnline: true,
        },
        {
          image: "https://pbs.twimg.com/profile_images/770394499/female.png",
          id: 10,
          name: "Manpreet David",
          active: false,
          isOnline: true,
        },
        {
          image: "https://pbs.twimg.com/profile_images/770394499/female.png",
          id: 13,
          name: "Manpreet David",
          active: false,
          isOnline: true,
        },
      ];

    const [showPost, setShowPost] = useState(false)
    const onTargetPost = () => {
        setShowPost(true)
    }

    const [showMessage, setShowMessage] = useState({
      status: false,
      idMess : []
    })
    const onClickFriend = (id) => {
        setShowMessage({status: true, idMess: [...showMessage.idMess,id]})
        console.log(showMessage);
    }

    const handleCloseInboxChat = (idMess) =>{
      const idClose = document.getElementById(idMess)
      idClose.remove()
    }

    const MainContextData = {
        onTargetPost, showPost, setShowPost, onClickFriend, setShowMessage, showMessage, allChatUsers, handleCloseInboxChat
    }
    return (
        <MainContext.Provider value={MainContextData}>
            {children}
        </MainContext.Provider>
    )
}
export default MainContextProvider