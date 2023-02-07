import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  MentorSidebar,
  PagesSection,
  TopRectangle,
  WhiteRectangle,
  Title,
  SubTitle,
  MobileScreen,
  SearchButton,
} from "../styles/texts";
import Sidebar from "../components/Sidebar";
import MobileBar from "../components/MobileBar";
import mentor from "../assets/Profile/ProfileVector.png";
import profile from "../assets/Profile/Group 163.png";

const Chat = () => {
  const peopleChat = [
    { userName: "Dolores Polito", picture: "" },
    { userName: "Franco Jalil", picture: "" },
    { userName: "Agustina Cassi", picture: "" },
  ];

  const conversation = [
    { userName: "Dolores Polito", message: "Hola, como estas?" },
    { userName: "Franco Jalil", message: "Todo bien, vos?" },
    { userName: "Dolores Polito", message: "Muy bien tambien :)" },
    { userName: "Franco Jalil", message: "Todo bien, vos?" },
    { userName: "Dolores Polito", message: "Muy bien tambien :)" },
    { userName: "Franco Jalil", message: "Todo bien, vos?" },
    { userName: "Dolores Polito", message: "Muy bien tambien :)" },
    { userName: "Franco Jalil", message: "Todo bien, vos?" },
    { userName: "Dolores Polito", message: "Muy bien tambien :)" },
    { userName: "Franco Jalil", message: "Todo bien, vos?" },
    { userName: "Dolores Polito", message: "Muy bien tambien :)" },
  ];
  const [width, setWidth] = useState(window.innerWidth);
  const [value, setValue] = useState("");
  const [search, setSearch] = useState("");
  const [view, setView] = useState("");
  const [selectedChat, setSelectedChat] = useState(" ");

  const [messages, setMessages] = useState([])

  useEffect(() => {
    setView(window.location.href.split("/")[3]);
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, [search]);
  const medium = 700;

  function useInput() {
    function onChange({ target }) {
      setValue(target.value);
    }
    return { onChange, value };
  }
  const searcher = useInput();

  const handleSearch = function () {
    setSearch("buscar");
  };

  const handleSelectChat = function (userName) {
    setSelectedChat(userName);
    
  };

  const handleBack = function () {
    setSelectedChat(" ");
  };

  return (
    <>
      <PagesSection>
        {width >= medium ? (
          <>
            <MentorSidebar src={mentor} />

            <Sidebar />
            <WhiteRectangle mode={view}>
              <TopRectangle mode={view}>
                <Title mode={view}>Chat</Title>
                <SubTitle mode={view}>My conversations</SubTitle>
              </TopRectangle>

              <ChatSidebar>
                <ChatSearch>
                  <ChatInput placeholder="Search..." {...searcher}></ChatInput>
                  <SearchButton mode={view} onClick={handleSearch}>
                    Go
                  </SearchButton>
                </ChatSearch>

                <ChatPeopleContainer>
                  {peopleChat.map((person) => {
                    return (
                      <>
                        <Person
                          onClick={() => handleSelectChat(person.userName)}
                        >
                          <img src={profile} alt="profile" />

                          <p>{person.userName}</p>
                        </Person>
                      </>
                    );
                  })}
                </ChatPeopleContainer>
              </ChatSidebar>

              {selectedChat !== " " ? (
                <>
                  {" "}
                  <ChatSection>
                    <ChatHeader mode={width}>
                      <p>{selectedChat}</p>
                    </ChatHeader>

                    <MessagesSection>
                      <Date>
                        <p>Dia de la conversacion</p>
                      </Date>

                      {conversation.map((message) => {
                        return (
                          <>
                            {" "}
                            <p>
                              <b>{message.userName}</b>
                            </p>
                            <Message>{message.message}</Message>
                          </>
                        );
                      })}
                    </MessagesSection>

                    <Write>
                      <input></input>
                      <button>
                        {" "}
                        <img src="send-svgrepo-com.svg" alt="send"></img>
                      </button>
                    </Write>
                  </ChatSection>
                </>
              ) : (
                <></>
              )}
            </WhiteRectangle>
          </>
        ) : (
          <>
            <Header>
              <div>
                <Title mode={view}>Chat</Title>
                <SubTitle mode={view}>My conversations</SubTitle>
              </div>
            </Header>
            <MobileScreen mode="chat">
              {selectedChat !== " " ? (
                <>
                  <MobileChat>
                    <ChatSection>
                      <ChatHeader mode={width}>
                        <button onClick={handleBack}>
                          <img src="back-arrow.svg" />
                        </button>
                        <p>{selectedChat}</p>
                      </ChatHeader>

                      <MessagesSection>
                        <Date>
                          <p>Dia de la conversacion</p>
                        </Date>

                        {conversation.map((message) => {
                          return (
                            <>
                              {" "}
                              <p>
                                <b>{message.userName}</b>
                              </p>
                              <Message>{message.message}</Message>
                            </>
                          );
                        })}
                      </MessagesSection>

                      <Write>
                        <input></input>
                        <button>
                          {" "}
                          <img src="send-svgrepo-com.svg" alt="send"></img>
                        </button>
                      </Write>
                    </ChatSection>
                  </MobileChat>
                </>
              ) : (
                <>
                  <ChatSidebar>
                    <ChatSearch>
                      <ChatInput
                        placeholder="Search..."
                        {...searcher}
                      ></ChatInput>
                      <SearchButton mode={view} onClick={handleSearch}>
                        Go
                      </SearchButton>
                    </ChatSearch>

                    <ChatPeopleContainer>
                      {peopleChat.map((person) => {
                        return (
                          <>
                            <Person
                              onClick={() => handleSelectChat(person.userName)}
                            >
                              <img src={profile} alt="profile" />

                              <p>{person.userName}</p>
                            </Person>
                          </>
                        );
                      })}
                    </ChatPeopleContainer>
                  </ChatSidebar>
                </>
              )}
            </MobileScreen>

            <MobileBar props="chat" />
          </>
        )}
      </PagesSection>
    </>
  );
};

const Header = styled.div`
  width: 100%;
  background-color: #bfd732;
  height: 100px;
  border-bottom-right-radius: 45px;
  display: flex;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;
  }
`;

const ChatSidebar = styled.div`
  background-color: #f5f6f7;
  position: relative;
  width: 30%;
  height: 600px;
  left: 0px;
  top: 100px;
  border-bottom-left-radius: 40px !important;
  @media only screen and (max-width: 700px) {
    width: 100%;
    top: 0px;
  }
`;

const ChatSearch = styled.div`
  background-color: lightgray;
  position: relative;
  width: 313px;
  height: 50px;
  left: 20px;
  top: 20px;
  background: #ffffff;
  mix-blend-mode: normal;
  border-radius: 40px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
  border: none;
  outline: none;
  padding-top: 10px;
  margin-bottom: 50px;
  ::placeholder {
    color: #444444;
    right: 100px;
  }

  @media only screen and (max-width: 1400px) {
    width: 213px;
    height: 45px;
  }

  @media only screen and (max-width: 1080px) {
    width: 170px;
    height: 40px;
    left: 10px;
  }

  @media only screen and (max-width: 700px) {
    width: 330px;
  }
`;

const ChatInput = styled.input`
  position: relative;
  width: 200px;
  height: 21px;
  left: 30px;
  top: 8px;
  font-family: "Heebo";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  outline: none;
  border: 0;
  color: #444444;
  mix-blend-mode: normal;
  font-size: 16px;

  @media only screen and (max-width: 1400px) {
    width: 140px;
    height: 21px;
    left: 30px;
    top: 6px;
  }

  @media only screen and (max-width: 1080px) {
    top: 5px;
    left: 20px;
    width: 100px;
    height: 21px;
  }

  @media only screen and (max-width: 700px) {
    width: 230px;
    top: 1px;
  }
`;

const ChatPeopleContainer = styled.div`
  background-color: #f8f8f8;
  position: relative;
  height: 540px;
  border-bottom-left-radius: 37px !important;
  display: block;
  overflow-y: auto;
`;

const Person = styled.div`
  display: flex;
  height: 60px;
  margin-top: 10px;

  :hover {
    background-color: lightgray;
  }

  p {
    color: grey;
  }
  img {
    height: 20px;
    width: 20px;
    margin-top: 12px;
    padding-left: 20px;
    padding-right: 20px;
  }

  @media only screen and (max-width: 700px) {
    margin-top: 5px;

    p {
      color: grey;
      font-size: 15px;
      font-weight: 400;
      margin-top: 25px;
    }

    img {
      margin-top: 20px;
    }
  }
`;

const ChatSection = styled.div`
  position: absolute;
  width: 70%;
  height: 650px;
  left: 340px;
  top: 100px;
  border-bottom-right-radius: 40px !important;

  @media only screen and (max-width: 1400px) {
    left: 240px;
  }

  @media only screen and (max-width: 1080px) {
    left: 187px;
  }

  @media only screen and (max-width: 700px) {
    width: 100%;
    left: 0px;
    top: 0px;
  }
`;

const ChatHeader = styled.div`
  background-color: white;
  border-bottom: 2px solid #f5f6f7;
  height: 50px;
  width: 99%;
  display: flex;

  button {
    background-color: transparent;
    border: 1.5px solid #f5f6f7;
    border-radius: 30px;
    margin-left: 10px;
  }

  p {
    padding: 0px 120px;
    color: grey;
    font-size: 20px;
  }

  @media only screen and (max-width: 700px) {
    p {
      font-size: 18px;
      padding-left: 20px;
      padding-top: 0px;
    }
  }
`;

const Write = styled.div`
  position: relative;
  top: 0px;
  height: 140px !important;
  width: 99%;
  border-top: 2px solid #f5f6f7;
  border-bottom-right-radius: 40px !important;
  background-color: transparent !important;
  display: flex;

  @media only screen and (max-width: 700px) {
    padding-bottom: 80px;
  }

  button {
    background-color: #f5f6f7;
    border: none;
    height: 40px;
    width: 40px;
    border-radius: 10px;
    margin-top: 40px;

    img {
      height: 20px;
      width: 20px;
    }
  }
  input {
    height: 70px;
    width: 600px;
    border: 2px solid #f5f6f7;
    margin-top: 20px;
    margin-left: 60px;
    margin-right: 30px;
    padding-left: 30px;
    font-size: 15px;
    color: grey;

    @media only screen and (max-width: 1400px) {
      margin-left: 30px;
      margin-right: 10px;
    }

    @media only screen and (max-width: 1080px) {
      margin-left: 15px;
      margin-right: 5px;
    }
  }

  input:focus {
    outline: none;
  }
`;

const MessagesSection = styled.div`
  position: relative;
  top: 0px;
  height: 430px;
  width: 99%;
  display: block;
  overflow-y: auto;
  padding-left: 30px;

  @media only screen and (max-width: 700px) {
    font-size: 12px;
  }
`;

const Message = styled.div`
  margin-left: 10px;
`;

const Date = styled.div`
  height: 30px;
  width: 370px;

  p {
    color: grey;
  }
`;

const MobileChat = styled.div``;

export default Chat;
